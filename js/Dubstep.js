function songDecoder(song){
  const search = 'WUB';
  const replaceWith = ' ';

  return song.split(search).join(replaceWith).replace(/\s{2,}/g, replaceWith).replace(/^\s+|\s+$/g, "");
}