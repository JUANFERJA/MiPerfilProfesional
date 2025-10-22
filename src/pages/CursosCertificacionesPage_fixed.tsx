import { certificacionesData } from "../data/pages/certificacionesData"

export const CursosCertificacionesPage = () => {

  const { certificaciones } = certificacionesData();
  
  console.log('Certificaciones cargadas:', certificaciones);
  
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Certificaciones</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certificaciones.map(certificacion => (
            <div key={certificacion.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Imagen de la certificación */}
                <div className="md:w-40 md:h-32 w-full h-48 flex-shrink-0">
                  <img 
                    src={certificacion.imagen} 
                    alt={certificacion.nombre}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                    onError={(e) => {
                      console.error('Error cargando imagen:', certificacion.imagen);
                      e.currentTarget.style.display = 'none';
                    }}
                    onLoad={() => {
                      console.log('Imagen cargada exitosamente:', certificacion.imagen);
                    }}
                  />
                </div>
          
                {/* Información de la certificación */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{certificacion.nombre}</h3>
                  <p className="text-gray-600 mb-2">{certificacion.institucion}</p>
                  <p className="text-sm text-gray-500 mb-3">
                    {new Date(certificacion.fechaObtencion).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  
                  {/* Categoría */}
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {certificacion.categoria}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
