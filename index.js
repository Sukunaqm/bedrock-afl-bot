const { createClient } = require('bedrock-protocol');

const config = {
  host: process.env.HOST,
  port: parseInt(process.env.PORT, 10),
  username: process.env.USERNAME,
  offline: true
};

let client;
function startBot() {
  client = createClient(config);
  client.on('join', () => console.log('Bot sunucuya bağlandı!'));
  client.on('disconnect', () => {
    console.log('Koptu, yeniden bağlanıyor...');
    setTimeout(startBot, 5000);
  });
  client.on('error', err => console.error('Hata:', err.message));
}
startBot();
