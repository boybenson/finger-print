import { useState } from "react";
import Table from "./Table";
import Canvas from "./Canvas";

const App = () => {
  const [fingerPrint, setFingerPrint] = useState(null);

  const handleGetFingerPrint = () => {
    const data: any = {};
    data.userAgent = navigator.userAgent;
    data.appVersion = navigator.appVersion;
    data.langugae = navigator.language;

    console.log(navigator);
    setFingerPrint(data);
  };

  return (
    <>
      <header className="header">
        <div className="buttons">
          <button
            className="btn show-btn"
            onClick={() => handleGetFingerPrint()}
          >
            Show FingerPrint
          </button>
          <button
            className="btn clear-btn"
            onClick={() => setFingerPrint(null)}
          >
            Clear FingerPrint
          </button>
        </div>
      </header>

      <div className="finger_print">
        {fingerPrint && (
          <div className="data">
            <div className="flex items-center justify-center">
              <Canvas />
            </div>
            <Table />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
