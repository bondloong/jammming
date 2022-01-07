import React, { ReactElement } from 'react'
import { AddTrackType, ITrack } from '../interfaces'

import TrackList from '../TrackList/TrackList'
import './SearchResults.css'

interface Props {
	searchResults: ITrack[];
	addTrack: AddTrackType;
	removeTrack: AddTrackType;
}

export default function SearchResults({ addTrack, removeTrack, searchResults }: Props): ReactElement {
	return (
		<div className="SearchResults">
			<h2>Results</h2>
			<TrackList isRemoval={false} removeTrack={removeTrack} tracks={searchResults} addTrack={addTrack} />
		</div>
	)
}
