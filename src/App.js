import "./App.css";
import Async from "./components/AsynComponent/Async";
import Greeting from "./components/Greeting";
import SayHello from "./components/SayHello/SayHello";

function App() {
  return (
    <div className="App">
      <Greeting />
      <SayHello />
      <Async />
    </div>
  );
}

export default App;
