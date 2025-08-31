import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import  {Card } from "../components/index2";
import { UseFetch } from "../hooks/UseFetch";
export const MovieList = ({title,apiPath}) => {

  const {data:movies}=UseFetch(apiPath);

  const navigateexplore=useNavigate();
  useEffect(()=>{
    document.title=title;
  })
  return (
    <div>
      {title=="MovieHub"?(<div className="container bg-body-tertiary p-2 border">
        <h4 className="text-center">Welcome to Movie<span className="text-primary">Hub</span></h4>
        <p className="fs-5 px-4 py-2">
          Discover movies you&apos;ll love with personlaized suggestions, curated collections, and quick searches - Your guide to finding great films.
        </p>
        <button className="btn btn-primary text-center mx-4 mb-3" type="button" onClick={()=>navigateexplore('/movies/upcoming')}>Explore Now</button>
      </div>):""}


      <div className="container mt-4">
        <h5 className="text-danger fw-bold border-bottom">{title}</h5>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">

          {movies.map((movie)=>{
            return <Card key={movie.id}/>;
          })}

        </div>
      </div>
    </div>
  )
}

