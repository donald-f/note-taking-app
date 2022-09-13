import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Button from "./components/UI/Button";

function App() {
  return (
    <section className="layout">
      <Sidebar />
      <main>
        <header>
          <p className="body-text no-margin muted">
            Last Updated: 1:37PM 7/26/19
          </p>
          <div className="button-group">
            <Button className="primary header-text">Edit Note</Button>
            <Button className="secondary header-text">Delete Note</Button>
          </div>
        </header>
        <article>
          <h1 className="header-text">My Special Note</h1>
          <p className="body-text">
            You might remember the Dell computer commercials in which a youth
            reports this exciting news to his friends that they are about to get
            their new computer by telling them, “Dude, you’re getting a Dell!”
            It was a cute series but it reflects the excitement young people get
            about anything new, particularly if it’s a new machine.
          </p>
          <p className="body-text">
            So when its time to finally get your children that very first
            telescope, you want to make sure it’s just the right thing. There
            are a number of reasons you should put some serious thought into
            just what this beginner telescope should look like. Perhaps this
            will be your children’s first experience with a real telescope. They
            may have a healthy and thriving love of astronomy from your family
            trips to the country to watch a meteor shower or just to gaze at the
            stars. And you may have piqued their interest showing them how to
            enhance the experience with binoculars or even letting them play
            with your telescope.
          </p>
        </article>
      </main>
    </section>
  );
}

export default App;
