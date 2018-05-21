import React from 'react';
import './FolderStructureViewer.sass';

import colorThemes from './folderColorsThemes.json';
import FolderDisplay from './components/FolderDisplay';
import MetadataDisplay from './components/MetadataDisplay';

class FolderStructureViewer extends React.Component {
  colorTheme = colorThemes[
    Math.round(Math.random() * (colorThemes.length - 1))
  ];

  render() {
    const { folderStructureData, metadata } = this.props;

    return (
      <div className="FolderStructureViewer">
        <MetadataDisplay color={this.colorTheme[0]} metadata={metadata} />
        <FolderDisplay
          folderData={folderStructureData}
          parentColor={this.colorTheme[0]}
          colorTheme={this.colorTheme}
        />
      </div>
    );
  }
}

export default FolderStructureViewer;
