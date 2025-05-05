import "./App.css";
import MainSection from "./components/MainSection";
import Navbar2 from "./components/Navbar";
function App() {
  return (
    <>
      <div className="min-h-screen w-screen flex flex-col items-start justify-center gap-10 relative">
        <Navbar2 />
        <MainSection />
      </div>
    </>
  );
}
export default App;
