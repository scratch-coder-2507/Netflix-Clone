import axios from 'axios';
import movieTrailer from 'movie-trailer';
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import "./Details.css"
import requests from './Requests';

function Details() {
    const [movie, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);

    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
        }
    };

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };


    return (
        <div className="all">
                <div className="details">
                <div className="details__background">
                    <div className="details__background__shadow"></div>
                    <div  className="details__background__image" 
                    style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                    backgroundPosition: "center center",
                }} />
                </div>
                <div className="details__area">
                    <div className="details__area__container">
                        <div className="details__title">
                            <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
                        </div>
                        <div className="details__description">
                            <h1>{movie?.overview}</h1>
                        </div>
                        <button className="trailer__button"
                        onClick={() => handleClick(movie)}>Trailer</button>
                    </div>
                </div>  
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
        
    )
}

export default Details
