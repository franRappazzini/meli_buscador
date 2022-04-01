import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Provider } from "react-redux";
import RootReducer from "./redux/storage/RootReducer";

function App() {
  return (
    <Provider store={RootReducer}>
      <Header />

      <Home />

      <Footer />
    </Provider>
  );
}

export default App;
