import { useContext } from "react";
import { Header } from "./components";
import { MovieContext } from "./context/MovieContext";

function App() {
  const { Movies } = useContext(MovieContext);
  return (
    <div className="App">
      <Header />
      {Movies.results.map((ele, idx) => {
        return <h1>{ele.title}</h1>;
      })}
      {console.log(Movies.results)}
    </div>
  );
}

export default App;
