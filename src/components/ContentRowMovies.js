import LastMoviesInDb from "./LastMovieInDb";
import PropTypes from 'prop-types';


function ContentRowMovies(props) {
  const datos= props.datos;
  return (
    <div >
      {datos.map((item,i)=>
       <div key={i}>
        <div class="col-md-4 mb-4">
        <div class={item.color}>
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">{item.titulo}</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">{item.cifra}</div>
              </div>
              <div class="col-auto">
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
  cifra:PropTypes.array.isRequired,
  color: PropTypes.array.isRequired,
  };
  ContentRowMovies.defaultProps = {
  titulo:"No se encuentra titulo",
  icono:"Icono inaccesible",
  cifra: 0,
  color: "null",
  };

export default ContentRowMovies;
