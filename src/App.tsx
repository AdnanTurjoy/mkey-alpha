import React, { useState } from 'react';
import AlphabetGrid from './components/AlphabetGrid';
import OutputString from './components/OutputString';
import { processString } from './utils/processString';

const App: React.FC = () => {
  const [outputString, setOutputString] = useState('');

  const handleTileClick = (letter: string) => {
    setOutputString(processString(outputString, letter));
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Alphabet Tile Interaction</h1>

      <AlphabetGrid onTileClick={handleTileClick} />

      <OutputString value={outputString} />
    </div>
  );
};

export default App;
