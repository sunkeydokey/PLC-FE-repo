import { useEffect, useState } from 'react';
import { connect } from 'mqtt';

import type { MqttClient } from 'mqtt';

export const MQTTConnector = ({
  isOnMove,
  setIsOnMove,
  setPlatePusher,
  setDicePusher,
  setPeekAngle,
  setPeekHeight,
}: {
  isOnMove: boolean;
  setIsOnMove: React.Dispatch<React.SetStateAction<boolean>>;
  setPlatePusher: React.Dispatch<React.SetStateAction<number>>;
  setDicePusher: React.Dispatch<React.SetStateAction<number>>;
  setPeekAngle: React.Dispatch<React.SetStateAction<number>>;
  setPeekHeight: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [isConnected, setIsConnected] = useState(false);
  const [client, setClient] = useState<MqttClient>();

  const handleMachineMove = () => {
    client?.publish(
      'edukit/control',
      JSON.stringify({ tagId: '1', value: '1' }),
      { qos: 2, retain: false },
      (error) => {
        setIsOnMove(true);
        if (error) console.log(error);
      },
    );
    client?.subscribe(
      'edukit/robotarm',
      {
        qos: 0,
        rap: false,
        rh: 0,
      },
      (error) => {
        if (error) {
          console.log('MQTT Subscribe to topics error', error);
          return;
        }
      },
    );
  };

  const handleMachineStop = () => {
    client?.publish(
      'edukit/control',
      JSON.stringify({ tagId: '1', value: '0' }),
      { qos: 2, retain: false },
      (error) => {
        setIsOnMove(false);
        if (error) console.log(error);
      },
    );
    client?.unsubscribe('edukit/robotarm');
  };

  useEffect(() => {
    const client = connect('mqtt://192.168.0.128', {
      port: 8888,
      protocol: 'ws',
    });

    client.on('connect', () => {
      setIsConnected(true);
    });

    client.on('error', (err) => {
      console.error('Connection error: ', err);
      client.end();
    });
    client.on('reconnect', () => {
      console.log('Reconnecting');
    });

    client.on('message', (_topic, message) => {
      const { Wrapper } = JSON.parse(message.toString());

      const [isFirstPushing, isDiceReady, height, angle] = [
        Wrapper[2].value,
        Wrapper[18].value,
        Wrapper[34].value,
        Wrapper[35].value,
      ];

      const scaledAngle = (Number(angle) / 18000000) * 65 + 20;
      const scaledHeight = (Number(height) / 1150000) * 15;

      setPlatePusher(isFirstPushing ? 10 : 0);
      setDicePusher(isDiceReady ? 10 : 0);

      if (scaledAngle >= 20 && scaledAngle <= 85) setPeekAngle(scaledAngle);
      if (scaledHeight >= 0 && scaledHeight <= 15) setPeekHeight(scaledHeight);
    });
    setClient(client);
    return () => {
      client.end();
    };
  }, [setPlatePusher, setDicePusher, setPeekAngle, setPeekHeight]);

  return (
    <div className='mb-4'>
      <h2 className='text-center text-white font-bold text-lg mb-4'>
        {isConnected ? '기기 연결 완료' : '기기 연결 요청 중'}
      </h2>
      <section className='flex justify-around'>
        <button
          onClick={handleMachineMove}
          disabled={!isConnected || isOnMove}
          className='rounded-md px-4 py-2 bg-white disabled:bg-slate-600 disabled:text-white'>
          작동
        </button>
        <button
          onClick={handleMachineStop}
          disabled={!isConnected || !isOnMove}
          className='rounded-md px-4 py-2 bg-white disabled:bg-slate-600 disabled:text-white'>
          정지
        </button>
      </section>
    </div>
  );
};
