import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Main from "./components/Main/Main";
import NotesProvider from "./store/NotesProvider";

function App() {
  return (
    <NotesProvider>
      <section className="layout">
        <Sidebar />
        <Main />
      </section>
    </NotesProvider>
  );
}

export default App;
