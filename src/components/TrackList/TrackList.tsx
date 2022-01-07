import React, { ReactElement } from 'react'
import { AddTrackType, ITrack } from '../interfaces';
import Track from '../Track/Track';
import './TrackList.css'

interface Props {
	tracks: ITrack[];
	addTrack: AddTrackType;
	isRemoval: boolean;
	removeTrack: AddTrackType;
}

export default function TrackList({ isRemoval, addTrack, removeTrack, tracks }: Props): ReactElement {
	return (
		<div className="TrackList">
			{tracks?.map(track => <Track isRemoval={isRemoval} addTrack={addTrack} removeTrack={removeTrack} track={track} key={track.id} />)}
		</div>
	)
}
