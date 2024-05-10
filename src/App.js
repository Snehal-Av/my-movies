import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Movies from "./components/Movies";
import Banner from "./components/Banner";
import WatchList from "./components/WatchList";
import { useEffect, useState } from "react";

function App() {
  let [watchList,setWatchList]=useState([])

  let handleWatchList=(movieObj)=>{
    let newWatchList=[...watchList , movieObj]
    localStorage.setItem('moviesApp',JSON.stringify(newWatchList))
    setWatchList(newWatchList)
   
    console.log(newWatchList)
  }
  let handleRemoveFromWatchList=(movieObj)=>{
    let filteredWatchList=watchList.filter((element,i)=>{
      return element.id != movieObj.id
    })
    setWatchList(filteredWatchList)
    localStorage.setItem('moviesApp',JSON.stringify(filteredWatchList))
    console.log(filteredWatchList);
  }

  useEffect(()=>{
    let movieFromLocalStorage=localStorage.getItem('moviesApp')
    if(!movieFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(movieFromLocalStorage))
  },[])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movies handleWatchList={handleWatchList} 
              handleRemoveFromWatchList={handleRemoveFromWatchList} watchList={WatchList}/>
            </>
          }
        />
        <Route path="/watch" element={<WatchList watchList={watchList}
         setWatchList={setWatchList}
         handleRemoveFromWatchList={handleRemoveFromWatchList}
          />} />
      </Routes>
    </div>
  );
}

export default App;
