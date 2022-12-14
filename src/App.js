import NoteMenu from "./components/Sidebar/NoteMenu";
import "./App.css";
import Header from "./components/Main/Header";
import Note from "./components/Main/Note";
import NotesProvider from "./store/NotesProvider";

function App() {
  return (
    <NotesProvider>
      <section className="layout">
        <NoteMenu />
        <main>
          <Header />
          <Note />
        </main>
      </section>
    </NotesProvider>
  );
}

export default App;
