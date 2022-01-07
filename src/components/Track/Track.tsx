import React, { ReactElement } from 'react'
import { AddTrackType, ITrack } from '../interfaces'
import './Track.css'

interface IProps {
	track: ITrack;
	addTrack: AddTrackType;
	isRemoval: boolean;
	removeTrack: AddTrackType;
}

export default function Track({ track, addTrack, removeTrack, isRemoval }: IProps): ReactElement {

	const renderActions = (track: ITrack, isRemoval: boolean) => {
		if (isRemoval) {
			return <button onClick={() => removeTrack(track)} className="Track-action">-</button>
		}
		return <button onClick={() => addTrack(track)} className="Track-action">+</button>
	}

	return (
		<div className="Track">
			<div className="Track-information">
				<h3>{track.name}</h3>
				<p> {track.artist} | {track.album}</p>
			</div>
			{renderActions(track, isRemoval)}
		</div>
	)
}
