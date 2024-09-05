import { useState } from "react";
import "./App.scss";
import Header from "./components/header/header";
import Home from "./pages/home/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
