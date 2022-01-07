import './SearchBar.css'

import React, { ReactElement, useState } from 'react'

interface Props {
	search: (term: string) => void;
}

export default function SearchBar({ search }: Props): ReactElement {
	const [handleTermChange, setHandleTermChange] = useState('')
	return (
		<div className="SearchBar">
			<input value={handleTermChange} onChange={(e) => setHandleTermChange(e.target.value)} placeholder="Enter A Song, Album, or Artist" />
			<button onClick={() => search(handleTermChange)} className="SearchButton">SEARCH</button>
		</div>
	)
}
