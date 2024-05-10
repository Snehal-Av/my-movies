import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = ({ handleWatchList, handleRemoveFromWatchList, watchList,i }) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1)

  const prevPage = () => {
    if (pageNo === 1) {
      setPageNo(pageNo)
    }
    else {
      setPageNo(pageNo - 1)
    }
  }
  const nextPage = () => {
    setPageNo(pageNo + 1)
  }


  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows?page=${pageNo}`).then((response) => {
      console.log(response.data)
      setMovies(response.data);
    }, [pageNo]);
  }, []);
  return (
    <div className="movies">
      <div className="t-movies">Treanding Movies</div>
      <div className="movie-card">

        {movies.map((movieObj) => {
          return <MovieCard key={movieObj.id} movieObj={movieObj} img={movieObj.image.medium}
            name={movieObj.name} handleWatchList={handleWatchList}
            handleRemoveFromWatchList={handleRemoveFromWatchList}
            watchList={watchList}
           i={i}
          />;
        })}

      </div>
      <div>
        <Pagination prevPage={prevPage} nextPage={nextPage} pageNo={pageNo} />
      </div>
    </div>
  );
};

export default Movies;
