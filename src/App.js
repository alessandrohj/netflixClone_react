import React, { useEffect, useState} from 'react';
import './components/MovieRow.css'
import './App.css'
import Tmdb from './tmdb.js';
import MovieRow from './components/MovieRow.js'
import FeaturedMovie from './components/FeaturedMovie.js'
import Header from './components/Header.js'

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeatureData] = useState(null) //initial state is null since there's no movie to be shown
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=>{
    const loadAll = async () => {
// loading movies/tv shows list
let list = await Tmdb.getList();
setMovieList(list);

//getting featured movie/data (Netflix Originals)
      let originals = list.filter(i=>i.slug === 'originals');
      const randomSelection = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let selected = originals[0].items.results[randomSelection];
      let selectedInfo = await Tmdb.getMovieInfo(selected.id, 'tv');
      setFeatureData(selectedInfo); //add data to page

    }
    loadAll();
  }, []);

useEffect(()=>{
  const scrollListener = () =>{
    if(window.scrollY > 10) {
      setBlackHeader(true);
    } else {
      setBlackHeader(false);
    }
  }
  window.addEventListener('scroll', scrollListener);

  return ()=>{
    window.removeEventListener('scroll', scrollListener);
  }
}, []);


  return (
    <div className="page">
 
 <Header black={blackHeader}/>

 {featuredData &&
     <FeaturedMovie item={featuredData} />
 }


     <section className="lists">
    {movieList.map((item, key)=>(
      <div>
       <MovieRow key={key} title={item.title} items={item.items} />
      </div>
    ))}
     </section>

     <footer>
       Created using TheMovieDB.org API. <br/>
       Image rights belongs to Netflix.
     </footer>
    </div>
  );
}