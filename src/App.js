import { useState } from "react";
import "./App.css";
import PopupWizard from "./component/popupwizard/PopupWizard";
import Button from "./component/ButtonComponent/Button";
import ContextMain from "./component/context/ContextMain";

import PopupModal from "./component/modal/PopupModal";
function App() {
  const [showform, setShowform] = useState(false);
  const [modal, setModal] = useState(false);

  const closeForm = () => {
    setShowform(false);
    setModal(false);
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
          <Button
            onClick={() => {
              setModal(true);
            }}
            name="Popupmodal"
          />
        </div>
        <ContextMain />
      </div>
      {modal && <PopupModal closeForm={closeForm} />}

      {showform && <PopupWizard closeForm={closeForm} />}
    </>
  );
}

export default App;
