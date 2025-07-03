import { NavBar } from './components/NavBar'
import { AplicationRoutes } from './routes/AplicationRoutes'
import './styles/app.scss'

function App() {

  return (
      <div className='pagina-personal d-flex flex-column'>
        <NavBar />
       
        <div className='contenido'>
          <AplicationRoutes />
        </div>
      </div>    
  )
}

export default App
