import React from 'react';
import './FileDisplay.sass';

const FileDisplay = props => {
  const {
    fileData: { size: width },
    biggestFileSize,
  } = props;

  return (
    <div className="FileDisplay">
      <div
        className="FileDisplay__fileSize"
        style={{
          backgroundColor: props.color,
          width: width / biggestFileSize * 100 + '%',
        }}
      />
      {width / biggestFileSize === 1 && (
        <div
          className="FileDisplay__fileSizeOverflow"
          style={{
            backgroundImage: `linear-gradient(to right, ${
              props.color
            } 50%, rgba(255,255,255,0) 0%)`,
          }}
        />
      )}
    </div>
  );
};

export default FileDisplay;
