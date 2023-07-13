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
      <div className="text-center">
        <h1 className="text-center font-semibold text-4xl">
          Browser Fingerprint Data Collection Research
        </h1>

        <p className="mt-4 text-lg">
          Hello, i am roland, an MSc Computer Science student and i will like to
          collect some browser fingerprint data
        </p>
        <p>
          The purpose of the research is to experiment on the efficiency of the
          counter measures against browser fingerprint tracking
        </p>
      </div>
      <header className="header mt-20">
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
