import administradorDeServidores from '../assets/certificados/IMAGENES/administrador_de_servidores.png';
import aptaraVisionOperator from '../assets/certificados/IMAGENES/APTARA VISION OPERATOR.png';

export const TestImagenes = () => {
  console.log('Ruta de imagen administrador:', administradorDeServidores);
  console.log('Ruta de imagen aptara:', aptaraVisionOperator);
  
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Test de Imágenes</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Administrador de Servidores</h3>
          <p className="text-sm text-gray-600 mb-2">Ruta: {administradorDeServidores}</p>
          <img 
            src={administradorDeServidores} 
            alt="Administrador de Servidores"
            className="w-full h-48 object-cover rounded"
            onError={(e) => {
              console.error('Error cargando imagen administrador:', administradorDeServidores);
              e.currentTarget.style.backgroundColor = '#f87171';
              e.currentTarget.style.color = 'white';
              e.currentTarget.innerHTML = 'ERROR: No se pudo cargar la imagen';
            }}
            onLoad={() => {
              console.log('✅ Imagen administrador cargada exitosamente');
            }}
          />
        </div>
        
        <div className="border p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Aptara Vision Operator</h3>
          <p className="text-sm text-gray-600 mb-2">Ruta: {aptaraVisionOperator}</p>
          <img 
            src={aptaraVisionOperator} 
            alt="Aptara Vision Operator"
            className="w-full h-48 object-cover rounded"
            onError={(e) => {
              console.error('Error cargando imagen aptara:', aptaraVisionOperator);
              e.currentTarget.style.backgroundColor = '#f87171';
              e.currentTarget.style.color = 'white';
              e.currentTarget.innerHTML = 'ERROR: No se pudo cargar la imagen';
            }}
            onLoad={() => {
              console.log('✅ Imagen aptara cargada exitosamente');
            }}
          />
        </div>
      </div>
    </div>
  );
};
