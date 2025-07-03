import { experienciaProfesional } from "../data/pages/experienciaProfesional";
import '../styles/pages/experienciaProfesional.scss';

export const ExperienciaProfesionalPage = () => {
  
  const {experiencias} = experienciaProfesional();

  return (
    <div className="experiencia-container">
      <h1 className="experiencia-titulo">Mi Experiencia Profesional</h1>
      <div className="experiencias-grid">
        {
          experiencias.map((experiencia, index) =>(
            <div key={index} className="card card-experiencia">
              <h3>{experiencia.empresa}</h3>
              <h4 className="cargo">{experiencia.cargo}</h4>
              <p className="descripcion">{experiencia.descripcion}</p>
              <p><strong>📅 Período: </strong>{experiencia.fechaInicio} - {experiencia.fechaFin}</p>
              {experiencia.tecnologias && (
                <p><strong>🚀 Tecnologías: </strong>
                  {experiencia.tecnologias.map((tecnologia, index) => (
                    <span key={index} className="badge bg-secondary">{tecnologia}</span>
                  ))}
                </p>
              )}
            </div>
          ))
        }
      </div>
    </div>
  )
}
