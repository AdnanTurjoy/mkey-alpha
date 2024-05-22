import React from 'react';

interface OutputStringProps {
  value: string;
}

const OutputString: React.FC<OutputStringProps> = ({ value }) => {
  return (
    <div>
      <p className="font-bold">Output String:</p>
      <div id="outputString" className="border border-gray-300 rounded-md p-3">
        {value}
      </div>
    </div>
  );
};

export default OutputString;
