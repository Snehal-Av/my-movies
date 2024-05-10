import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

const WatchList = ({ watchList ,setWatchList ,handleRemoveFromWatchList}) => {
  const [search, setSearch] = useState("");
  const [generList,setGenerList]=useState(['All geners'])
  const [currGeners,setCurrGeners]=useState('All geners')

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleCurr=(genr)=>{
    setCurrGeners(genr)
  }

  const sortInc=()=>{
   const sortedInc=watchList.sort((movieA,movieB)=>{
    return movieA.rating.average-movieB.rating.average
   })
   setWatchList([...sortedInc])
  }

  const sortDec=()=>{
    const sortedDec=watchList.sort((movieA,movieB)=>{
      return movieB.rating.average-movieA.rating.average
     })
     setWatchList([...sortedDec])
  }

  useEffect(()=>{
    let temp=watchList.map((gener)=>{
     return gener.genres[0]
    })
    temp=new Set(temp)
    setGenerList(['All geners',...temp])
    console.log(temp);
  },[watchList])


  return (
    <div className="watch-list">
      <div className="btns">
        {
          generList.map((genrs)=>{
            return <div onClick={()=>handleCurr(genrs)} className="action">
            {genrs}
            </div>
          })
        }
       
      </div>

      <div className="input-search">
        <input
          onChange={handleSearch}
          type="text"
          className="search-input"
          placeholder="Search Movies"
        />
      </div>

      <div className="t-data">
        <table>
          <thead className="heading">
            <tr>
              <th>Name</th>
              <th>
                <div className="sorting">
                  <div onClick={sortInc} className="sort">
                    <ArrowUpward />
                  </div>
                    Rating
                  <div onClick={sortDec} className="sort">
                    <ArrowDownward />
                  </div>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchList.filter((obj)=>{
               if(currGeners=='All geners'){
                return true
               }else{
                return obj.genres[0]==currGeners
               }
            })
              .filter((obj) => {
                return obj.name
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((obj) => {
                return (
                  <tr className="t-row">
                    <td className="t-img">
                      <img src={obj.image.medium} />
                      <div className="w-title">{obj.name}</div>
                    </td>
                    <td>{obj.rating.average}</td>
                    <td>{obj.externals.tvrage}</td>
                    <td>{obj.genres[0]}</td>
                    <td onClick={()=>handleRemoveFromWatchList(obj)} style={{ color: "red",cursor:'pointer' }}>Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WatchList;
