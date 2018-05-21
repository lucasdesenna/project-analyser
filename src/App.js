import React, { Component } from 'react';
import './App.sass';

import FolderStructureViewer from 'features/FolderStructureViewer/FolderStructureViewer';
import currentProjectData from 'data/tree_current.json';
import proposedProjectData from 'data/tree_proposed.json';

class App extends Component {
  render() {
    const [currentFolderStructureData, currentMetadata] = currentProjectData;

    const [proposedFolderStructureData, proposedMetadata] = proposedProjectData;

    return (
      <div className="App">
        <header className="App__header">
          <h1 className="App__title display-1">Project Analyser</h1>
        </header>
        <div className="App__body">
          <FolderStructureViewer
            folderStructureData={currentFolderStructureData}
            metadata={currentMetadata}
          />
          <FolderStructureViewer
            folderStructureData={proposedFolderStructureData}
            metadata={proposedMetadata}
          />
        </div>
        <footer className="App__footer">by Lucas de Senna Correia</footer>
      </div>
    );
  }
}

export default App;
