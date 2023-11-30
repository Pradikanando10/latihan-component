import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/Button";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Halo</p>
        <MyButton />
        <Footer></Footer>
      </header>
    </div>
  );
};

export default App;
