import React from 'react';
import Tile from './Tile';

interface AlphabetGridProps {
  onTileClick: (letter: string) => void;
}

const AlphabetGrid: React.FC<AlphabetGridProps> = ({ onTileClick }) => {
  const alphabetTiles = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode(index + 65)
  );

  return (
    <div className="grid grid-cols-5 gap-4 mb-4">
      {alphabetTiles.map((letter) => (
        <Tile key={letter} letter={letter} onClick={onTileClick} />
      ))}
    </div>
  );
};

export default AlphabetGrid;
