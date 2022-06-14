import AboutUS from "./AboutUS";
import BussinessFocus from "./BusinessFocus";
import Navbar from "./Navbar";
import Events from "./Events";
import Stars from "./particles";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BussinessFocus />
      <Events />
      <AboutUS />
      <Stars />
    </div>
  );
}

export default App;
