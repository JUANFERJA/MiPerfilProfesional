import { Certificacion } from "../data/components/CertificacionesPage/Certificacion";
import { certificacionesData } from "../data/pages/certificacionesData"
import '../styles/pages/certificaciones.scss';

export const CursosCertificacionesPage = () => {

  const { certificaciones } = certificacionesData();
  
  let estudios = certificaciones.filter(c => c.categoria.toLowerCase() === 'educación');
  let principales = certificaciones.filter(c => c.categoria.toLowerCase() === 'principales');
  let todas = certificaciones.filter(c => c.categoria.toLowerCase() !== 'educación' && c.categoria.toLowerCase() !== 'principales');
  console.log('Certificaciones cargadas:', certificaciones);
  
  return (

      <div className="container mx-auto px-4 py-8 certificaciones-page">
        <Certificacion certificaciones={estudios} titulo="Estudios"/>
        <Certificacion certificaciones={principales} titulo="Varios"/>
        <Certificacion certificaciones={todas} titulo="Todas las Certificaciones"/>
      </div>

  )
}
