process.on('uncaughtException', function (err) {
  console.error(err.stack)
  require('child_process').exec('curl -s http://play.starwars.com/starwars_soundboard/asset/audio/DV_darth_vader/vader_20.mp3 > /tmp/dfma.mp3 && afplay /tmp/dfma.mp3')
  process.exit(1)
});
