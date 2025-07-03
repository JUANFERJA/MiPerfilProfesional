import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { presentacionPersonal } from "../data/pages/presentacionPersonal";
import '../styles/pages/presentacionPersonal.scss'
import { Link } from "react-router-dom";
export const PresentacionPersonalPage = () => {

  const { dataPersonal } = presentacionPersonal();
  const { nombre, apellido, edad, profesion, descripcion, contacto, habilidades } = dataPersonal;
  const { titulo, posicion, registro } = profesion ;
  const { email, telefono, linkedin, github } = contacto ;
  console.log(dataPersonal);
  return (
    <div className='d-flex flex-row'>
      <div className='datos-personales d-flex flex-column'>
        <h1 className="titulo">¡Hola! Mi nombre es  {nombre} {apellido}</h1>
        <p className="descripcion mt-3">{descripcion}</p>

        <div className="card card-datos-personales m-3 mt-5 d-flex flex-row">
          
           <div>
             <h4 className="subtitulo m-2">Presentación Personal:</h4>
             <h5 className="m-3">Edad: {edad}</h5>
              <div>
                <h5 className="m-3">Profesión</h5>
                  <div className="m-5 mt-0">
                      <p><strong>Titulo:</strong> {titulo}</p>
                      <p><strong>Posición:</strong> {posicion}</p>
                      <p><strong>Registro:</strong> {registro}</p>
                  </div>
              <h5 className="m-3">Contacto</h5>
                  <div className="m-5 mt-0">
                      <p><strong>Teléfono:</strong> {telefono}</p>
                      <p><strong>Email:</strong> <Link to={`mailto:${email}`} className="link">{email}</Link></p>
                      <p><strong>LinkedIn:</strong> <Link to={linkedin} className="link">{linkedin}</Link></p>
                      <p><strong>GitHub:</strong> <Link to={github} className="link">{github}</Link></p>
                  </div>
              </div>  
           </div>
           <div className="habilidades">
              <h4 className="subtitulo m-2">Habilidades:</h4>
              <div className="habilidades-container m-3">
                <div className="columna-habilidades">
                  <ul className="lista-habilidades">
                    {habilidades?.slice(0, Math.ceil(habilidades.length / 2)).map((habilidad, index) => (
                      <li key={index} className="habilidad-item">
                        <FontAwesomeIcon icon={habilidad.icon} className="icono-habilidad" />
                        <span className="nombre-habilidad">{habilidad.nombre}</span>
                        <span className="nivel-habilidad">{habilidad.nivel}</span>
                        <div className="barra-progreso">
                          <div className="progreso" style={{ width: `${habilidad.porcentaje}%` }}></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="columna-habilidades">
                  <ul className="lista-habilidades">
                    {habilidades?.slice(Math.ceil(habilidades.length / 2)).map((habilidad, index) => (
                      <li key={index + Math.ceil(habilidades.length / 2)} className="habilidad-item">
                        <FontAwesomeIcon icon={habilidad.icon} className="icono-habilidad" />
                        <span className="nombre-habilidad">{habilidad.nombre}</span>
                        <span className="nivel-habilidad">{habilidad.nivel}</span>
                        <div className="barra-progreso">
                          <div className="progreso" style={{ width: `${habilidad.porcentaje}%` }}></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
           </div>
        </div>
       
      </div>
      <div className="foto-perfil">
        <img className='imagen-perfil' src={dataPersonal.foto} alt='Mi perfil' />
      </div>
    </div>
  )
}
