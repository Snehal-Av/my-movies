import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = ({ handleWatchList, handleRemoveFromWatchList, watchList, i }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false)
  const [pageNo, setPageNo] = useState(1)

  const postPerPage = 16

  const lastIndex = pageNo * postPerPage
  const firstIndex = lastIndex - postPerPage
  const pages = movies.slice(firstIndex, lastIndex)

  const prevPage = () => {
    if (pageNo === 1) {
      setPageNo(pageNo)
    }
    else {
      setPageNo(pageNo - 1)

    }
  }
  const nextPage = () => {
    let page = pageNo + 1
    setPageNo(page)
    if (page >= 15) {
      page = 15
      setPageNo(page)
    }
  }


  useEffect(() => {
    setLoading(true)
    axios.get(`https://api.tvmaze.com/shows?page=${pageNo}`).then((response) => {
      console.log(response.data)
      setMovies(response.data);
      setLoading(false)
    }, [pageNo]);
  }, []);
  return (
    <div className="movies">
      <div className="t-movies">Treanding Movies</div>
      <div className="movie-card">

        {
          loading ? <h5>Loading...</h5> :
            pages.map((movieObj) => {
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
