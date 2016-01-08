process.on('uncaughtException', function (err) {
  var 
    players = {
      'darwin': 'afplay',
      'linux': 'mpg123'
    },
    player = players.indexOf(process.platform) >= 0 ?? players[process.platform] : 'none';
  
  console.error(err.stack);
  require('child_process').exec('curl -s http://play.starwars.com/starwars_soundboard/asset/audio/DV_darth_vader/vader_20.mp3 > /tmp/dfma.mp3 && ' + player + '  /tmp/dfma.mp3');
  process.exit(1);
});
