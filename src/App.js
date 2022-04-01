import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MobileHeader from "./components/Header/MobileHeader";
import { Provider } from "react-redux";
import RootReducer from "./redux/storage/RootReducer";

function App() {
  const innerWidth = window.innerWidth;

  console.log("WIDTH", innerWidth);

  return (
    <Provider store={RootReducer}>
      {innerWidth > 820 ? <Header /> : <MobileHeader />}

      <Home />

      <Footer />
    </Provider>
  );
}

export default App;
