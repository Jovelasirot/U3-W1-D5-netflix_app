import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import FilmGallery from "./components/FilmGallery";
import MyFooter from "./components/MyFooter";
import Search from "./components/Search";
import Setting from "./components/Settings";
import TVShows from "./components/TVShows";
import UserProfileEdit from "./components/UserProfileEdit";

function App() {
  return (
    <div className="App">
      <header>
        <CustomNavbar />
      </header>
      <section>
        <Search />
        <TVShows />
      </section>
      <main>
        {/* se vuoi cambiare la saga cambia la prop tittlePart */}
        <FilmGallery titlePart="The Godfather" />
        <FilmGallery titlePart="Harry Potter" />
        <FilmGallery titlePart="The Indiana Jones" />
      </main>
      {/* <UserProfileEdit />  ---- scommenta per vedere userProfile*/}
      {/* <Setting />  ---- scommenta per vedere settings*/}
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
