import "../assets/css/app.css";
import ContentRowMovies from "./ContentRowMovies";

function ContentRowTop() {
  const datos = [
    {
      titulo: "Movies in Data Base",
      cifra: "21",
      color: "card border-left-primary shadow h-100 py-2",
      icono: "fas fa-film fa-2x text-gray-300",
    },
    {
      titulo: "Total awards",
      cifra: "79",
      color: "card border-left-success shadow h-100 py-2",
      icono: "fas fa-award fa-2x text-gray-300",
    },
    {
      titulo: "Actors quantity",
      cifra: "49",
      color: "card border-left-warning shadow h-100 py-2",
      icono: "fas fa-user fa-2x text-gray-300",
    },
  ];
  return (
    <div>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>
        <div >
          <ContentRowMovies datos={datos} />
        </div>
      </div>
    </div>
  );
}

export default ContentRowTop;
