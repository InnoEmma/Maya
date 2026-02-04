import About from "./Components/About";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="bg-[#f2f5fa]">
      <div className="max-w-[900px] m-auto ">
        <NavBar />
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
