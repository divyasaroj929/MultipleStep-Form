import { useState } from "react";
import "./App.css";
import PopupWizard from "./components/popupwizard/PopupWizard";
import Button from "./components/ButtonComponent/Button";
import ContextMain from "./components/context/ContextMain";

function App() {
  const [showform, setShowform] = useState(false);

  const closeForm = () => {
    setShowform(false);
  };
  return (
    <>
      <div>
        <div className="home-container">
          <Button
            onClick={() => {
              setShowform(true);
            }}
            name="PopupWizard"
          />
          <ContextMain />
        </div>
      </div>
      {showform && <PopupWizard closeForm={closeForm} />}
    </>
  );
}

export default App;
