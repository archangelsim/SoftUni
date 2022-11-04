function songs(array) {
  let length = array.shift();
  let playlist = array.pop();
  let finalPlaylist = [];

  for (element of array) {
    let line = element.split("_");
    let list = line[0];
    let songName = line[1];

    if (list === playlist || playlist === "all") {
      finalPlaylist.push(songName);
    }
  }

  console.log(finalPlaylist.join(`\n`));
}

songs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
