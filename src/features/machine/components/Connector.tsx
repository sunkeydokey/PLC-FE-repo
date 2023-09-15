import { useEffect, useState } from 'react';
import { connect } from 'mqtt';

import { ConditionalButton } from '@ui/buttons/ConditionalButton';

import type { MqttClient } from 'mqtt';

export const Connector = ({
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
  const mqttURL = import.meta.env.PROD
    ? import.meta.env.VITE_MQTT_URL
    : 'mqtt://192.168.0.128';
  const mqttPort = import.meta.env.PROD ? import.meta.env.VITE_MQTT_PORT : 8888;

  const [isConnected, setIsConnected] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [client, setClient] = useState<MqttClient>();

  const handleMachineMove = () => {
    client?.publish(
      'edukit/control',
      JSON.stringify({ tagId: '1', value: '1' }),
      { qos: 2, retain: false },
      (error) => {
        if (error) console.log(error);
      },
    );
  };

  const handleSubscribe = () => {
    client?.subscribe(
      'edukit/robotarm',
      {
        qos: 0,
        rap: false,
        rh: 0,
      },
      (error) => {
        setIsSubscribing(true);
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
  };
  const handleUnsubscribe = () => {
    client?.unsubscribe('edukit/robotarm');
    setIsSubscribing(false);
  };

  useEffect(() => {
    const client = connect(mqttURL, {
      port: mqttPort,
      protocol: 'ws',
    });

    client.on('connect', () => {
      setIsConnected(true);
    });

    client.on('error', () => {
      setIsConnected(false);
      client.end();
    });

    client.on('message', (_topic, message) => {
      const { Wrapper } = JSON.parse(message.toString());

      const [isFirstPushing, isDiceReady, height, angle] = [
        Wrapper[7].value,
        Wrapper[18].value,
        Wrapper[34].value,
        Wrapper[35].value,
      ];

      setIsOnMove(Wrapper[0].value);

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
  }, [setIsOnMove, setPlatePusher, setDicePusher, setPeekAngle, setPeekHeight]);

  return (
    <div className='mb-4'>
      <h2 className='text-center text-white font-bold text-lg mb-4'>
        {isConnected ? '기기 연결 완료' : '기기 연결 요청 중'}
      </h2>
      <section className='flex justify-around text-sm font-bold'>
        <ConditionalButton
          onClick={handleMachineMove}
          condition={!isConnected || isOnMove}
          text='동작'
          type='button'
        />
        <ConditionalButton
          onClick={handleMachineStop}
          condition={!isConnected || !isOnMove}
          text='정지'
          type='button'
        />
        <ConditionalButton
          onClick={handleSubscribe}
          condition={!isConnected || isSubscribing}
          text='동기화'
          type='button'
        />
        <ConditionalButton
          onClick={handleUnsubscribe}
          condition={!isConnected || !isSubscribing}
          text='해제'
          type='button'
        />
      </section>
      <section></section>
    </div>
  );
};
