import { Route, Routes } from "react-router-dom"
import { PresentacionPersonalPage } from "../pages/PresentacionPersonalPage"
import { ProyectosPersonalesPage } from "../pages/ProyectosPersonalesPage"
import { ExperienciaProfesionalPage } from "../pages/ExperienciaProfesionalPage"
import { CursosCertificacionesPage } from "../pages/CursosCertificacionesPage"

export const AplicationRoutes = () => {
  return (
    <Routes>
        <Route path="*" element= {<PresentacionPersonalPage />} />
        <Route path="/" element= {<PresentacionPersonalPage />} />
        <Route path="/presentacion" element= {<PresentacionPersonalPage />} />
        <Route path='/proyectos' element={<ProyectosPersonalesPage />} />
        <Route path='experiencia' element={<ExperienciaProfesionalPage />} />
        <Route path='/certificaciones' element={<CursosCertificacionesPage />} />
    </Routes>
  )
}
