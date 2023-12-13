import React, { useState, useEffect } from "react";
import "./edit.css";
import FileExplorer from "./FileExplore";
import JSZip from "jszip";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { VscRunAll } from "react-icons/vsc";

const Editor = () => {
  const [files, setFiles] = useState([
    { name: "index.html", content: "" },
    { name: "styles.css", content: "" },
    { name: "script.js", content: "" },
  ]);

  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  useEffect(() => {
    // Trigger the run function whenever code is changed
    run();
  }, [htmlCode, cssCode, jsCode]);

  const onFileClick = (file) => {
    // Handle file click and set code accordingly
    const fileType = file.name.split(".").pop().toLowerCase();
    switch (fileType) {
      case "html":
        setHtmlCode(file.content);
        break;
      case "css":
        setCssCode(file.content);
        break;
      case "js":
        setJsCode(file.content);
        break;
      default:
        console.log("Unsupported file type");
    }

    // If the clicked file is 'index.html', update the htmlCode state
    if (file.name.toLowerCase() === "index.html") {
      setHtmlCode(file.content);
    }
  };

  const run = () => {
    try {
      const output = document.getElementById("output");

      const template = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!-- Bootstrap CSS -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet">
            <!-- Your Custom CSS -->
            <style>${cssCode}</style>
          </head>
          <body>
            <base href="${window.location.origin}">
            ${htmlCode}
            <!-- jQuery -->
            <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
            <!-- Bootstrap JS -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
            <!-- Additional Custom JavaScript in the body section if needed -->
            <script>${jsCode}</script>
          </body>
        </html>
      `;

      // Set the content using srcDoc
      output.srcdoc = template;
    } catch (error) {
      console.error("Error in run function:", error.message);
      console.error("Stack trace:", error.stack);
    }
  };

  const handleFileChange = (event) => {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const zipContent = e.target.result;
        handleZipFile(zipContent);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleZipFile = async (zipContent) => {
    const zip = await JSZip.loadAsync(zipContent);
    const newFiles = [];

    await Promise.all(
      Object.keys(zip.files).map(async (relativePath) => {
        const zipEntry = zip.files[relativePath];
        if (zipEntry.dir) return; // Ignore directories

        const content = await zipEntry.async("string");
        newFiles.push({ name: zipEntry.name, content, path: relativePath });
      })
    );

    setFiles(newFiles);

    // Find and set the content of the main HTML, CSS, and JS files
    const htmlFile = newFiles.find((file) => file.name.endsWith(".html"));
    const cssFile = newFiles.find((file) => file.name.endsWith(".css"));
    const jsFile = newFiles.find((file) => file.name.endsWith(".js"));

    if (htmlFile) setHtmlCode(htmlFile.content);
    if (cssFile) setCssCode(cssFile.content);
    if (jsFile) setJsCode(jsFile.content);
  };

  // const onFileClick = (file) => {
  //   // Handle file click and set code accordingly
  //   const fileType = file.name.split(".").pop().toLowerCase();
  //   switch (fileType) {
  //     case "html":
  //       setHtmlCode(file.content);
  //       break;
  //     case "css":
  //       setCssCode(file.content);
  //       break;
  //     case "js":
  //       setJsCode(file.content);
  //       break;
  //     default:
  //       console.log("Unsupported file type");
  //   }
  // };
  const downloadFiles = () => {
    const modifiedFiles = files.map((file) => {
      switch (file.name.split(".").pop().toLowerCase()) {
        case "html":
          return { ...file, content: htmlCode };
        case "css":
          return { ...file, content: cssCode };
        case "js":
          return { ...file, content: jsCode };
        default:
          return file;
      }
    });

    const zip = new JSZip();

    modifiedFiles.forEach((file) => {
      zip.file(file.name, file.content);
    });

    zip.generateAsync({ type: "blob" }).then((content) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(content);
      link.download = "modified_project_files.zip";
      link.click();
    });
  };

  return (
    <div className="container-f">
      <div className="left">
        <label className="edit_label">
          <FaHtml5 className="i" />
          HTML
        </label>
        <textarea
          id="html-code"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        ></textarea>
        <label className="edit_label">
          <IoLogoCss3 className="i" />
          CSS
        </label>
        <textarea
          id="css-code"
          value={cssCode}
          onChange={(e) => setCssCode(e.target.value)}
        ></textarea>
        <label className="edit_label">
          <TbBrandJavascript className="i" />
          JS
        </label>
        <textarea
          id="js-code"
          value={jsCode}
          onChange={(e) => setJsCode(e.target.value)}
        ></textarea>
        <FileExplorer files={files} onFileClick={onFileClick} />
        {/* Add a button and file input for loading zip files */}
        <input
          className="input-load"
          type="file"
          accept=".zip"
          onChange={handleFileChange}
        />
        {/* Add a "Run" button for live editing */}
        {/* Add a button for downloading the updated code */}
      </div>
      <div className="right">
        <button className="download btn-get-started" onClick={downloadFiles}>
          Download
        </button>
        <button className="run btn-get-started" onClick={run}>
          Run
        </button>
        <label className="edit_label" onClick={run}>
          <VscRunAll className="i" /> Output
        </label>

        <iframe title="output" id="output"></iframe>
      </div>
    </div>
  );
};

export default Editor;
