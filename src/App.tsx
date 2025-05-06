import "./App.css";
import MainSection from "./components/MainSection";
import Navbar2 from "./components/Navbar";
function App() {
  return (
    <>
      <div className="h-screen w-screen flex flex-col items-start bg-white dark:bg-black/97 justify-start overflow-hidden">
        <Navbar2 />
        <MainSection />
      </div>
    </>
  );
}
export default App;
