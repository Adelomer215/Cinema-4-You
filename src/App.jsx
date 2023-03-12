import { Header, MoviesList, Pagination, MovieElement } from "./components";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <MoviesList />
              <Pagination />
            </>
          }
        />
        <Route path="/movie/:id" element={<MovieElement />} />
      </Routes>
    </div>
  );
}

export default App;
