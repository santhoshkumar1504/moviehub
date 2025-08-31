import { Link } from 'react-router-dom'
import page from '../assets/error.jpg'
export const PageNotFound = () => {
  return (
    <div className='container'>
      <Link to={'/'} className='btn btn-danger text-center'>Go to Home</Link>
      <img src={page} className='img-fluid err'/>
      
    </div>
  )
}

