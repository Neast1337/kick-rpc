const clientId = '1097617305292259368';
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transport: 'ipc' });

DiscordRPC.register(clientId);

async function setActivity() {
  if (!RPC) return;
  RPC.setActivity({
    details: 'Rejoins-moi sur Kick !',
    startTimestamp: new Date(),
    largeImageKey: 'kicklogo',
    smallImageKey: 'kicklogo',
    instance: false,
    buttons: [
      {
        label: 'Rejoins-moi sur Kick !',
        url: 'https://kick.com/Neast'
      },
      {
        label: 'Rejoins le Discord !',
        url: 'https://discord.gg/neast'
      }
    ]
  });
}

RPC.on('ready', async () => {
  console.log('Le script est en cours d\'exécution...');
  setActivity();
});

RPC.login({ clientId })
  .catch(err => console.error(err));
