import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  useEffect(() => {
    document.title = 'Page not found - Gympak';
  }, []);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <h1 className="display-1">404</h1>
          <p className="lead">Oops! Page not found.</p>
          <Link to="/" className="btn btn-primary">
            Go back
          </Link>
        </div>
      </div>
    </div>
    //   <div className="container mt-5">
    //   <h1 className="text-center">React Bootstrap App</h1>
    //   <div className="row">
    //     <div className="col-md-6 offset-md-3">
    //       <div className="card">
    //         <div className="card-body">
    //           <h5 className="card-title">Card Title</h5>
    //           <p className="card-text">This is a React Bootstrap card.</p>
    //           <Link
    //           to="/"
    //           className="btn btn-primary"
    //           >
    //           Go back
    //         </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default PageNotFound;
