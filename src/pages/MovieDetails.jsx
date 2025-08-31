import { useEffect, useState } from "react"
import { data, useParams } from "react-router-dom";
import backup from '../assets/dummy.jpg'
import { convertMinutes } from "../utils/utils";
export const MovieDetails = () => {
  const params=useParams();
  const key=import.meta.env.VITE_API_KEY;
  const [movie,setMovie]=useState([]);
    const url=`https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;
    const image=movie.poster_path?`https://image.tmdb.org/t/p/original${movie.poster_path}`:backup;
    useEffect(()=>{
        async function fetchMovie() {
         fetch(url).then((res)=>res.json()).then((jsonData)=>setMovie(jsonData))
        }
        
        fetchMovie();
    },[]);
 
useEffect(()=>{
  document.title=`${movie.title}`;
})
  return (
    <div className="container">
      <h5 className="text-danger py-2 border-bottom mb-3">{movie.title}</h5>
      <div className="row">
        <div className="col-md-4">
          <img src={image} className="img-fluid img-thumnail"/>
        </div>
        <div className="col-md-8">
          <h3 className="text-primary">{movie.title}</h3>
          <p className="mt-3">{movie.overview}</p>

          {movie.genres?(<p className="d-flex gap-3">
            {
              movie.genres.map((genre)=>(
                <span key={genre.id} className="badge bg-danger p-2">{genre.name}</span>
              ))
            }
          </p>):""}

          <p className="mt-2">
                <i className="bi bi-star-fill text-warning me-1"></i>{movie.vote_average} | 
                <i className="bi bi-people-fill text-sucess mx-1"></i>{movie.vote_count}
          </p>

            <table className="table table-bordered w-50 mt-2">
              <tbody>
                <tr>
                  <th>Runtime</th>
                <td>{convertMinutes(movie.runtime)}</td>
                </tr>
                 <tr>
                  <th>Budget</th>
                <td>{movie.budget}</td>
                </tr> <tr>
                  <th>Revenue</th>
                <td>{movie.revenue}</td>
                </tr> <tr>
                  <th>Release Date</th>
                <td>{movie.release_date}</td>
                </tr>
              </tbody>
            </table>

            <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" className="btn btn-warning">View in IMDB</a>

        </div>
      </div>
     
    </div>
  )
}

