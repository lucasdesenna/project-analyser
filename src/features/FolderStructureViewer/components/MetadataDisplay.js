import React from 'react';
import './MetadataDisplay.sass';

const MetadataDisplay = props => {
  const { variantName, directories, files } = props.metadata;
  return (
    <div className="MetadataDisplay" style={{ backgroundColor: props.color }}>
      <h4 className="MetadataDisplay__title title">{variantName}</h4>
      <p className="MetadataDisplay__description caption">{`${files} files in ${directories} directories.`}</p>
    </div>
  );
};

export default MetadataDisplay;
