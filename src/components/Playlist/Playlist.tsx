import React, { ReactElement } from 'react'
import { AddTrackType, ITrack } from '../interfaces';
import TrackList from '../TrackList/TrackList'
import './Playlist.css'

interface Props {
	playlistName?: string;
	playlistTracks: ITrack[];
	addTrack: AddTrackType;
	removeTrack: AddTrackType;
	updatePlaylistName: (e: React.ChangeEvent<HTMLInputElement>) => void;
	savePlaylist: () => void;
}

export default function Playlist({ addTrack, removeTrack, playlistName, updatePlaylistName, playlistTracks, savePlaylist }: Props): ReactElement {
	return (
		<div className={"Playlist"}>
			<input defaultValue={playlistName} onChange={(e) => updatePlaylistName(e)} />
			<TrackList isRemoval={true} removeTrack={removeTrack} addTrack={addTrack} tracks={playlistTracks} />
			<button onClick={() => savePlaylist()} className="Playlist-save">SAVE TO SPOTIFY</button>
		</div>
	)
}
