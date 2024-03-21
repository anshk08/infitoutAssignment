import Navbar from "./components/navbar";
import "./App.css";
import Graphs from "./components/graphs";
import Nifty from "./components/nifty";

function App() {
  return (
    <div>
      <Navbar />
      <Nifty />
      <Graphs />
    </div>
  );
}

export default App;
