import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import InitialWarning from "./components/Dialogs/InitialWarning";
import MobileHeader from "./components/Header/MobileHeader";
import { Provider } from "react-redux";
import RootReducer from "./redux/storage/RootReducer";
import { useState } from "react";

function App() {
  const [initialWarning, setInitialWarning] = useState(true);

  const innerWidth = window.innerWidth;

  function handleClose() {
    setInitialWarning(!initialWarning);
  }

  return (
    <Provider store={RootReducer}>
      {initialWarning && <InitialWarning onClick={handleClose} />}

      {innerWidth > 820 ? <Header /> : <MobileHeader />}

      <Home />

      <Footer />
    </Provider>
  );
}

export default App;
