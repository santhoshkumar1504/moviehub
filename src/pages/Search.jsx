import { useSearchParams } from "react-router-dom"
import { Card } from "../components/Card";
import { UseFetch } from "../hooks/UseFetch";
import { useEffect } from "react";

export const Search = ({apiPath}) => {
  const [searchParams]=useSearchParams();
  const queryterm=searchParams.get("q");
  const {data:movies}=UseFetch(apiPath,queryterm);

  useEffect(()=>{
    document.title=`Search result for ${queryterm}`
  })

  return (
    <div className="container">
        <h4 className="text-danger py-2 border-bottom">
          {movies.length==0?`No result found for ${queryterm}`:`Result for: ${queryterm}`}
        </h4>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
          {
            movies.map((movie)=>{
              return <Card key={movie.id} movie={movie}/>
             })
          }
        </div>
    </div>
  )
}

