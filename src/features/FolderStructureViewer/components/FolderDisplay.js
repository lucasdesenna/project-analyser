import React from 'react';
import './FolderDisplay.sass';

import FileDisplay from './FileDisplay';
import hexToRGB from 'helpers/hexToRGB';

class FolderDisplay extends React.Component {
  color = this.props.colorTheme[0];
  parentColor = this.props.parentColor ||
  this.props.colorTheme[this.props.colorTheme.length - 1];
  reorderedColorTheme = [
    ...this.props.colorTheme.slice(1),
    this.props.colorTheme[0],
  ];

  getBiggestFileSize = children =>
    children
      .filter(child => child.type === 'file')
      .reduce((accumulator, file) => Math.max(file.size, accumulator), 0);

  renderChild = (childData, index, list) => {
    const { name: folderName } = this.props.folderData;
    const biggestFileSize = this.getBiggestFileSize(list);
    let itemContent;

    switch (childData.type) {
      case 'directory':
        itemContent = (
          <FolderDisplay
            folderData={childData}
            colorTheme={this.reorderedColorTheme}
          />
        );
        break;

      case 'file':
        itemContent = (
          <FileDisplay
            fileData={childData}
            biggestFileSize={biggestFileSize}
            color={this.color}
          />
        );
        break;

      default:
        console.warn('Invalid item: ', childData);
        itemContent = null;
    }

    return (
      <li key={`${folderName}_${index}`} className="FolderDisplay__item">
        <div
          className={[
            'FolderDisplay__tail',
            index === list.length - 1 ? 'FolderDisplay__tail--last' : undefined,
          ]
            .filter(i => !!i)
            .join(' ')}
          style={{
            borderTopColor: this.color,
            borderLeftColor: this.parentColor,
          }}
        />
        {itemContent}
      </li>
    );
  };

  render() {
    const { folderData } = this.props;

    return (
      <div
        className="FolderDisplay"
        style={{
          backgroundColor: hexToRGB(this.color, 0.5),
        }}
      >
        <ul className="FolderDisplay__content">
          {folderData.contents.map(this.renderChild)}
        </ul>
      </div>
    );
  }
}

export default FolderDisplay;
