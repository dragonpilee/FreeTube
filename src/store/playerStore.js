import { atom } from 'nanostores';

export const isPlaying = atom(false);
export const currentSong = atom(null); // { id, title, artist, image }

export function playSong(song) {
    currentSong.set(song);
    isPlaying.set(true);
}

export function togglePlay() {
    isPlaying.set(!isPlaying.get());
}
