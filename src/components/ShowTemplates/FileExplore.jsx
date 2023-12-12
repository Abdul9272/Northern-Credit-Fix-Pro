// FileExplorer.js
import React, { useState } from "react";

function FileExplorer({ files, onFileClick }) {
  return (
    <div>
      <h3>File Explorer</h3>
      <ul>
        {files.map((file) => (
          <li key={file.name} onClick={() => onFileClick(file)}>
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FileExplorer;
