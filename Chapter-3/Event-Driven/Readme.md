# The code connects to a local AMQP broker (RabbitMQ by default)
# It creates a channel and declares the hello queue.
# It starts consuming messages from the queue, logging their content to the console.
# The `noAck: true` option tells RabbitMQ to automatically acknowledge messages.

# Install the required dependency
`npm install amqplib`

# Execute the code
`node amqp_consumer.js`

# deploy RabbitMQ, access the interface at http://localhost:15672/ with default credential guest/guest. 
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.12-management

# The queue is visible in RabbitMQ's, Queues and Stream, tab