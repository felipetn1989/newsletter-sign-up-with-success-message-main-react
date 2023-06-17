import { useState } from "react";
import Header from "./components/pages/Header";
import Main from "./components/pages/Main";
import Success from "./components/pages/Success.";

function App() {
  const [success, setSuccess] = useState(null);

  return (
    <div className="App">
      {!success && (
        <>
          <Header />
          <Main setShowSuccess={setSuccess} />
        </>
      )}

      {success && <Success />}
    </div>
  );
}

export default App;
