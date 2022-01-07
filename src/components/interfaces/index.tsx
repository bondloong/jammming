export interface ITrack {
	name: string;
	artist: string;
	album: string;
	id: string;
	uri: string;
}

export type AddTrackType = (savedTrack: ITrack) => void;