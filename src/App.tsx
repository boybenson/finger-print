import { useState } from "react";

const App = () => {
  const [fingerPrint, setFingerPrint] = useState(null);

  const handleGetFingerPrint = () => {};

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

      <div></div>
    </>
  );
};

export default App;
