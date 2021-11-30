import "../assets/css/app.css"
import "../assets/css/Tabla.css"
function Tabla (props){
    return(
        <div>
			<div className="row">
				<div className="titulares2">
				    {props.titulo}
				</div>
				<div className="titulares2">
				    {props.rating}
				</div>
				<div className="titulares2">
				    {props.generos.map((genero,i)=><li key={i}>{genero}</li>)}
				</div>
				
				
			</div>
            
        </div>
    )
}

export default Tabla;
