import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import { useStore } from '@nanostores/react';
import { isPlaying, currentSong, togglePlay } from '../store/playerStore';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Volume1, VolumeX } from 'lucide-react';

const Player = () => {
    const $isPlaying = useStore(isPlaying);
    const $currentSong = useStore(currentSong);
    const playerRef = useRef(null);

    // Local state for UI updates (progress, volume)
    const [progress, setProgress] = useState(0); // 0 to 1
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.8);
    const [isSeeking, setIsSeeking] = useState(false);

    useEffect(() => {
        const handlePlayEvent = (e) => {
            // Reset player state when new song starts
            setProgress(0);
        };
        window.addEventListener('play-song', handlePlayEvent);
        return () => window.removeEventListener('play-song', handlePlayEvent);
    }, []);

    if (!$currentSong) return null;

    const handleProgress = (state) => {
        if (!isSeeking) {
            setProgress(state.played);
        }
    };

    const handleSeekChange = (e) => {
        setIsSeeking(true);
        setProgress(parseFloat(e.target.value));
    };

    const handleSeekMouseUp = (e) => {
        setIsSeeking(false);
        playerRef.current.seekTo(parseFloat(e.target.value));
    };

    const handleVolumeChange = (e) => {
        setVolume(parseFloat(e.target.value));
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 h-[72px] bg-[#212121] border-t border-white/5 flex items-center px-4 z-50 select-none">
            {/* Hidden Player logic */}
            <div className="hidden">
                <ReactPlayer
                    ref={playerRef}
                    url={`https://www.youtube.com/watch?v=${$currentSong.id}`}
                    playing={$isPlaying}
                    volume={volume}
                    width="0"
                    height="0"
                    onProgress={handleProgress}
                    onDuration={setDuration}
                    onEnded={() => isPlaying.set(false)}
                />
            </div>

            {/* Interactive Progress Bar */}
            <div className="absolute top-[-4px] left-0 right-0 h-1 bg-white/10 group cursor-pointer hover:h-2 transition-all z-50">
                <div
                    className="h-full bg-red-600 relative"
                    style={{ width: `${progress * 100}%` }}
                >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 shadow-md"></div>
                </div>
                {/* Invisible input overlay for seeking */}
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.001"
                    value={progress}
                    onChange={handleSeekChange}
                    onMouseUp={handleSeekMouseUp}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
            </div>

            {/* Song Info */}
            <div className="flex items-center gap-4 w-[30%] min-w-0">
                <div className="flex gap-4 items-center">
                    <SkipBack size={20} className="text-white md:hidden active:scale-90" />
                    <img src={$currentSong.image} className="w-10 h-10 object-cover rounded-[2px]" />
                </div>
                <div className="min-w-0">
                    <h4 className="text-white text-sm font-medium truncate">{$currentSong.title}</h4>
                    <pre className="text-zinc-400 text-xs truncate font-sans">{$currentSong.artist} • Video</pre>
                </div>
                <div className="hidden md:flex items-center gap-3 ml-2">
                    <span className="text-zinc-400 hover:text-white cursor-pointer"><i className="fa-regular fa-thumbs-down"></i></span>
                    <span className="text-zinc-400 hover:text-white cursor-pointer"><i className="fa-regular fa-thumbs-up"></i></span>
                </div>
            </div>

            {/* Controls (Center) */}
            <div className="flex-1 flex justify-center items-center">
                <div className="flex items-center gap-6">
                    <Shuffle size={18} className="text-zinc-400 hover:text-white cursor-pointer hidden md:block" />
                    <SkipBack size={26} className="text-white cursor-pointer hidden md:block hover:bg-white/10 p-1 rounded-full active:scale-95 transition" />

                    <button
                        onClick={togglePlay}
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-105 active:scale-95 transition shadow-lg"
                    >
                        {$isPlaying ? (
                            <Pause size={20} className="text-black fill-current" />
                        ) : (
                            <Play size={20} className="text-black fill-current ml-1" />
                        )}
                    </button>

                    <SkipForward size={26} className="text-white cursor-pointer hover:bg-white/10 p-1 rounded-full active:scale-95 transition" />
                    <Repeat size={18} className="text-zinc-400 hover:text-white cursor-pointer hidden md:block" />
                </div>
            </div>

            {/* Volume/Extras (Right) */}
            <div className="w-[30%] hidden md:flex justify-end items-center gap-4 text-zinc-400">
                <div className="flex items-center gap-2 group relative w-32">
                    <Volume2 size={20} className="hover:text-white cursor-pointer" />
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="h-1 bg-white/30 rounded-lg appearance-none cursor-pointer w-full accent-white"
                    />
                </div>
            </div>
        </div>
    );
};

export default Player;
