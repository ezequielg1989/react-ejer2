import LastMoviesInDb from "./LastMovieInDb";
import PropTypes from 'prop-types';


function ContentRowMovies(props) {
  const datos= props.datos;
  return (
    <div >
      {datos.map((item,i)=>
       <div key={i}>
        <div className="col-md-4 mb-4">
        <div className={item.color}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{item.titulo}</div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{item.cifra}</div>
              </div>
              <div className="col-auto">
                <i className={item.icono}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div> 
     )}
        
        
        

  
      
      
      <LastMoviesInDb />
    </div>
  );
}
ContentRowMovies.propTypes = {
  titulo:PropTypes.array.isRequired,
  icono:PropTypes.array.isRequired,
  color: PropTypes.array.isRequired,
  cifra:PropTypes.array.isRequired,
  };
  ContentRowMovies.defaultProps = {
  titulo:"ingresar titulo",
  icono:"ingresar icono",
  color: "",
  cifra: 0,
  };

export default ContentRowMovies;
