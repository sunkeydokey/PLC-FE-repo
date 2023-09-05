import { useEffect } from 'react';
import { connect } from 'mqtt';

export const MQTTConnector = () => {
  useEffect(() => {
    const client = connect('mqtt://192.168.0.128:1883', {
      protocol: 'ws',
      clientId: 'mqttjs_' + Math.random().toString(16),
    });
    client.on('connect', () => {
      console.log('connect');

      client.subscribe('presence', (err) => {
        if (!err) {
          client.publish('presence', 'Hello mqtt');
        }
      });
    });

    client.on('message', (_, message) => {
      // message is Buffer
      console.log(message.toString());
      client.end();
    });
  }, []);

  return <div>MQTTConnector</div>;
};
