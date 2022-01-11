import React from "react";
import './FeaturedMovie.css';

export default ({item}) => {
    console.log(item);

    let primeiraData = new Date(item.first_air_date);

    let generos = []
    for(let i in item.genres){
        generos.push(item.genres[i].name);
    }

    let descricao = item.overview;
    if(descricao.length > 200){
        descricao = descricao.substring(0, 200) + '...';
    }

    return (
        <section className="imagemCapa" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="imagemCapa--vertical">
                <div className="imagemCapa--horizontal">
                    <div className="imagemCapa--nome">{item.original_name}</div>
                    <div className="imagemCapa--info">
                        <div className="imagemCapa--pontos">{item.vote_average} pontos</div>
                        <div className="imagemCapa--ano">{primeiraData.getFullYear()}</div>
                        <div className="imagemCapa--sessao">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="imagemCapa--descricao">{descricao}</div>
                    <div className="imagemCapa--botao">
                        <a href={`/watch/${item.id}`} className="botao--assistir">► Assistir</a>
                        <a href={`/list/add/${item.id}`} className="botao--minhalista">+ Minha Lista</a>
                    </div>
                    <div className="imagemCapa--generos"><strong>Generos:</strong> {generos.join(', ')}</div>
                </div>
            </div>
        </section>
    );
}