import { useState } from "react";
import "./App.css";
import ContextMain from "./components/context/ContextMain";
import PopupWizard from "./component/popupwizard/PopupWizard";
import Button from "./component/ButtonComponent/Button";
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
