import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Header from "./components/Main/Header";
import Note from "./components/Main/Note";
import NotesProvider from "./store/NotesProvider";

function App() {
  return (
    <NotesProvider>
      <section className="layout">
        <Sidebar />
        <main>
          <Header />
          <Note />
        </main>
      </section>
    </NotesProvider>
  );
}

export default App;
