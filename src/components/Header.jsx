import { NavLink, useNavigate } from "react-router-dom"

export const Header = () => {
const navigate=useNavigate();
  const handleSearch=(e)=>{
    e.preventDefault();
    const queryterm=e.target.search.value;
    e.target.reset();
    return navigate(`/search?q=${queryterm}`);
  }

  return (
    <nav className="navbar navbar-expand-md fixed-top bg-primary navbar-dark">
      <div className="container-fluid">
        <a href="#" className="navbar-brand ms-2 me-2"><i className="bi bi-camera-reels-fill"></i>Movie<span className="fw-semibold">Hub</span></a>

    {/* button */}
    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
      <span className="navbar-toggler-icon"></span>
    </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-2 me-auto">
            <li className="nav-item"><NavLink to='/' className="nav-link">Home</NavLink></li>
            <li className="nav-item"><NavLink to='/movies/top' className="nav-link">Top Rated</NavLink></li>
            <li className="nav-item"><NavLink to='/movies/popular' className="nav-link">Popular</NavLink></li>
            <li className="nav-item"><NavLink to='/movies/upcoming' className="nav-link">Upcoming</NavLink></li>
          </ul>
          <form onSubmit={handleSearch}>
            <input type="search" className="form-control form-control-sm" placeholder="Search" name="search"/>
          </form>
        </div>
      </div>

    </nav>
  )
}

