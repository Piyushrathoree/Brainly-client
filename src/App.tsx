import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-black/94 flex items-center justify-center gap-10">
        <Card title="yt link" date="26/2/25" description="This is a YouTube video about programming fundamentals. Learn the basics of coding with this comprehensive tutorial for beginners."/>
        <Card title="yt link" date="26/2/25" description="This is a YouTube video about programming fundamentals. Learn the basics of coding with this comprehensive tutorial for beginners."/>
        <Card title="yt link" date="26/2/25" description="This is a YouTube video about programming fundamentals. Learn the basics of coding with this comprehensive tutorial for beginners."/>
      </div>
    </>
  );
}

export default App;
