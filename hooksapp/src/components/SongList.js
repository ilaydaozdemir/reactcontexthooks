import React, { useState } from 'react';
const { v1: uuidv1 } = require('uuid');

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this is darkness', id: 3 },
  ]);

  const addSong = () => {
    setSongs([...songs, { title: 'new song', id: uuidv1() }]);
  };
  return (
    <div className='song-list'>
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <button onClick={addSong}> Add a song </button>
    </div>
  );
};
export default SongList;
