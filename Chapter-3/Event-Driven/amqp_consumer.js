const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (error0, connection) => {
  if (error0) throw error0;
  connection.createChannel((error1, channel) => {
    if (error1) throw error1;
    const queue = 'hello';
    channel.assertQueue(queue, { durable: false });

    // Ensure channel closure on completion
    process.on('SIGINT', () => {
      channel.close();
      connection.close();
    });

    channel.consume(queue, (msg) => {
      console.log(`Received: ${msg.content.toString()}`);
    }, { noAck: true });
  });
});
