import { useState, ChangeEvent } from "react";
import { ModalProvider } from "@/context/modalContext";
import { JsonData, renderComponents } from "@/utils/componentBuilder";

import "./App.css";

function App() {
  const [fileData, setFileData] = useState<JsonData | null>(null);
  const [error, setError] = useState("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    setError("");
    setFileData(null);

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (event: ProgressEvent<FileReader>) => {
        try {
          if (event.target?.result) {
            const jsonData = JSON.parse(String(event.target.result));
            setFileData(jsonData);
          }
        } catch (error) {
          setError("Error parsing JSON file");
        }
      };
      reader.readAsText(selectedFile);
    }
  };

  return (
    <ModalProvider>
      <div>
        <h1>React Component Builder - Simple version</h1>

        <div className="file-input-container">
          <label className="custom-file-input">
            <input type="file" onChange={handleFileChange} />
            <span>Select Config File</span>
          </label>
        </div>

        <div className="components-canvas">
          {error && <p className="error-box">{error}</p>}
          {fileData && renderComponents(fileData)}
        </div>
      </div>
    </ModalProvider>
  );
}

export default App;
