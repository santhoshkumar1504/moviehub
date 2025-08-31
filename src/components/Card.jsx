import { Link } from 'react-router-dom'
import backup from '../assets/react.svg'
export const Card = () => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="card-body">
          <img src={backup} alt="movie" className='card-img-top'/>

          <div className='card-title text-center text-primary my-2 fw-bold'>Movie Name</div>
          <div className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores dolor animi quos eligendi consequatur molestiae vero tempore eius incidunt repellat quod distinctio possimus officiis, quibusdam sit ut deserunt assumenda.
          </div>
          <div className='d-flex justify-content-between align-items-center mt-2'>
            <Link to='/' className='btn btn-sm btn-outline-primary'>Read More</Link>

            <small><i className='bi bi-star-fill text-warning'></i> 7.25 | 100 Reviews</small>
          </div>
        </div>
      </div>
    </div>
  )
}

