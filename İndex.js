const { createClient } = require('bedrock-protocol');

const client = createClient({
  host: process.env.HOST,
  port: parseInt(process.env.PORT),
  username: process.env.USERNAME,
  offline: true
});

client.on('join', () => {
  console.log('Bot sunucuya bağlandı!');
});

client.on('disconnect', (reason) => {
  console.log('Bot sunucudan ayrıldı:', reason);
});
