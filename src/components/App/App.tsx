import React, { ReactElement, useState } from 'react'
import './App.css'
import Spotify from '../../utils/Spotify'

import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import { ITrack } from '../interfaces'


export default function App(): ReactElement {
  const [searchResults, setsearchResults] = useState<ITrack[]>([]);
  const [playlistTracks, setplaylistTracks] = useState<ITrack[]>([]);
  const [playlistName, setplaylistName] = useState('My Playlist');

  const addTrack = (addedTrack: ITrack) => {
    if (playlistTracks.find(savedTrack => savedTrack.id === addedTrack.id)) {
      return;
    }
    setplaylistTracks([...playlistTracks, addedTrack])
  }

  const removeTrack = (addedTrack: ITrack) => {
    setplaylistTracks(playlistTracks.filter(savedTrack => savedTrack.id !== addedTrack.id))
  }

  const updatePlaylistName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setplaylistName(e.target.value)
  }

  const savePlaylist = () => {
    const trackURIs: string[] = []
    playlistTracks.forEach(playlistTrack => {
      trackURIs.push(playlistTrack.uri);
    });
    console.log(trackURIs)
    Spotify.savePlaylist(playlistName, trackURIs);
    setplaylistName('My Playlist')
    setplaylistTracks([])
  }

  const search = (term: string) => {
    Spotify.search(term).then(tracks => setsearchResults(tracks));
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar search={search} />
        <div className="App-playlist">
          <SearchResults addTrack={addTrack} removeTrack={removeTrack} searchResults={searchResults} />
          <Playlist savePlaylist={savePlaylist} addTrack={addTrack} removeTrack={removeTrack} playlistName={playlistName} updatePlaylistName={updatePlaylistName} playlistTracks={playlistTracks} />
        </div>
      </div>
    </div>
  )
}
