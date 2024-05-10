import { Clear } from '@mui/icons-material'
import React from 'react'

const MovieCard = ({ img, name, movieObj, handleWatchList, handleRemoveFromWatchList, watchList }) => {

  // function doesCertain(movieObj) {
  //   for (let i = 0; i < watchList.length; i++) {
  //     if (watchList[i]== movieObj.i) {
  //       return true
  //     }
  //   }
  //   return false
  // }

  return (
    <div className='card-img' style={{ backgroundImage: `url(${img})` }}>
      {/* {doesCertain(movieObj) ? <div onClick={() => handleRemoveFromWatchList(movieObj)} className='emoji'>
        &#10060;
      </div> :
     
      } */}
         <div onClick={() => handleWatchList(movieObj)} className='emoji' >
          &#128525;
        </div>

      <div className='title' >

        <div className='bg-name'>
          {name}
        </div>
      </div>
    </div>
  )
}

export default MovieCard