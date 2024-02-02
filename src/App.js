import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import FilmGallery from "./components/FilmGallery";
import MyFooter from "./components/MyFooter";
import TVShows from "./components/TVShows";

function App() {
  return (
    <div className="App">
      <header>
        <CustomNavbar />
      </header>
      <section>
        <TVShows />
      </section>
      <main>
        <FilmGallery titlePart="The Godfather" />
        <FilmGallery titlePart="Harry Potter" />
        <FilmGallery titlePart="The Indiana Jones" />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
