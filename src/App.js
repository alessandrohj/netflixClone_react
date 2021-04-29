import React, { useEffect, useState} from 'react';
import './components/MovieRow.css'
import Tmdb from './tmdb.js';
import MovieRow from './components/MovieRow.js'
import featuredMovie from './components/featuredMovie.js'

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeatureData] = useState(null) //initial state is null since there's no movie to be shown
  useEffect(()=>{
    const loadAll = async () => {
// loading movies/tv shows list
let list = await Tmdb.getList();
setMovieList(list);

//getting featured movie/data (Netflix Originals)
      let originals = list.filter(i=>i.slug === 'originals');
      const randomSelection = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let selected = originals[0].items.results[randomSelection];


    }
    loadAll();
  }, []);

  return (
    <div className="page">
 
 {featuredData &&
     <featuredMovie item={featuredData} />
 }


     <section className="lists">
    {movieList.map((item, key)=>(
      <div>
       <MovieRow key={key} title={item.title} items={item.items} />
      </div>
    ))}
     </section>
    </div>
  );
}