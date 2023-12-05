import React, { useState } from 'react';

const FileUploadForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append('zipfile', file);

      try {
        const response = await fetch('http://your-server-upload-endpoint', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('File uploaded successfully!');
          // Handle any further actions upon successful upload
        } else {
          console.error('Failed to upload file');
        }
      } catch (error) {
        console.error('Error during file upload:', error);
      }
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default FileUploadForm;
