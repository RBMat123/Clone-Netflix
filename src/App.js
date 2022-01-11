import React, { useEffect, useState } from "react";
import './App.css';
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

export default () => {  
  
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackEheader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await  Tmdb.getHomeList();
      setMovieList(list);

      //Pegar Filme em Destaque
      let originais = list.filter(i => i.slug === 'originais');
      let aleatorio = Math.floor(Math.random() * (originais[0].items.results.length - 1));
      let filme = originais[0].items.results[aleatorio];
      let filmeInfo = await Tmdb.getMovieInfo(filme.id, 'tv');

      setFeatureData(filmeInfo);
    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page">

      <Header black={blackEheader}></Header>

      {featureData && <FeaturedMovie item={featureData}></FeaturedMovie>}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}></MovieRow>
        ))}
      </section>

      <footer>
        Feito explicitamente para treinamento de desenvolvimento.
        Modelo de pagina usado Netflix e API TMDB
      </footer>
      
      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando"></img>
        </div>
      }
    </div>
  );
}
