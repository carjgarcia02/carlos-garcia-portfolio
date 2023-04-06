import Sidenav from "./components/Sidenav";
import Presentation from "./components/Presentation";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Sidenav />
      <Presentation />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
