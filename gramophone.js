function gramophone(band, album, song) {
    /**
     * You have to find out how many times the plate will rotate the given song from the album.
The plate makes a full rotation every 2.5 seconds.

The song duration in seconds is calculate by the given formula: 
 	(albumName.length * bandName.length) * song-name.length / 2
    
    As output, you should print the following message:
      `The plate was rotated {rotations} times.`
Rotations should be rounded up.*/

    let fullRotation = 2.5;
    let songDuration = (album.length * band.length) * song.length / 2;
    let rotations = songDuration / fullRotation
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`)

}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')