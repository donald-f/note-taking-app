import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Main from "./components/Main/Main";

function App() {
  return (
    <section className="layout">
      <Sidebar />
      <Main />
    </section>
  );
}

export default App;
