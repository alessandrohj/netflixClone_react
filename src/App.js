import React, { useEffect, useState} from 'react';
import './components/MovieRow.css'
import Tmdb from './tmdb.js';
import MovieRow from './components/MovieRow.js'

export default () => {

  const [movieList, setMovieList] = useState([]);
  useEffect(()=>{
    const loadAll = async () => {
// loading movies/tv shows list
let list = await Tmdb.getList();
setMovieList(list);
    }
    loadAll();
  }, []);

  return (
    <div className="page">
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