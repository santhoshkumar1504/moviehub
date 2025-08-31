import { Routes ,Route} from "react-router-dom"
import { MovieDetails, MovieList, PageNotFound, Search } from "../pages/index1"

const AllRoutes = () => {
  return (
<>
<Routes>
    <Route path='/' element={<MovieList title="MovieHub" apiPath="movie/now_playing"/>}/>
    <Route path='/movies/popular' element={<MovieList title="Popular Movies" apiPath="movie/popular"/>}/>
    <Route path='/movies/top' element={<MovieList title="Top Rated Movies" apiPath="movie/top_rated"/>}/>
    <Route path='/movies/upcoming' element={<MovieList title="Upcoming Movies" apiPath="movie/upcoming"/>}/>
    <Route path='/movie/:id' element={<MovieDetails/>}/>
    <Route path='/search' element={<Search apiPath="search/movie"/>}/>
    <Route path="*" element={<PageNotFound/>}/>

</Routes>
</>  )
}

export default AllRoutes