import React from 'react';
import { Play } from 'lucide-react';
import { playSong } from '../store/playerStore';

const PlayCard = ({ id, title, artist, image }) => {
    return (
        <div
            className="group cursor-pointer"
            onClick={() => playSong({ id, title, artist, image })}
        >
            <div className="aspect-square bg-zinc-800 rounded-md mb-3 overflow-hidden relative">
                <img src={image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center pl-1 text-black shadow-xl hover:scale-110 transition-transform">
                        <Play size={24} fill="currentColor" />
                    </div>
                </div>
            </div>
            <h3 className="font-bold text-base truncate text-white">{title}</h3>
            <p className="text-gray-400 text-sm truncate">{artist}</p>
        </div>
    );
};

export default PlayCard;
