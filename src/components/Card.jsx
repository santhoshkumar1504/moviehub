import { Link } from 'react-router-dom'
import backup from '../assets/dummy.jpg'
export const Card = ({movie}) => {
  const {poster_path,id,overview,title,vote_average,vote_count}=movie;
  const image=poster_path?`https://image.tmdb.org/t/p/original${poster_path}`:backup;
  return (
    <div className="col">
      <div className="card shadow-sm" title={title}>
        <div className="card-body">
          <img src={image} alt="movie" className='card-img-top'/>

          <div className='card-title text-center text-primary my-2 fw-bold text-overflow-1'>{title}</div>
          <div className="card-text text-overflow">
            {overview}
          </div>
          <div className='d-flex justify-content-between align-items-center mt-2'>
            <Link to={`/movie/${id}`} className='btn btn-sm btn-outline-primary stretched-link'>Read More</Link>

            <small><i className='bi bi-star-fill text-warning'></i> {vote_average} | {vote_count} Reviews</small>
          </div>
        </div>
      </div>
    </div>
  )
}

