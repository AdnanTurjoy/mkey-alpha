import React from 'react';

interface TileProps {
  letter: string;
  onClick: (letter: string) => void;
}

const Tile: React.FC<TileProps> = ({ letter, onClick }) => {
  return (
    <button
      className="border border-gray-300 rounded-md p-3 text-center font-bold"
      onClick={() => onClick(letter)}
    >
      {letter}
    </button>
  );
};

export default Tile;