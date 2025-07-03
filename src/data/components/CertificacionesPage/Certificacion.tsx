import { useState } from "react";
import type { ICertificacion } from "../../../interfaces/pages/certificaciones/certificacionesInterfaces";


export const Certificacion = ({certificaciones, titulo}: {certificaciones: ICertificacion[], titulo: string}) => {

 const [flag, setFlag] = useState<boolean>(true);
 const [certificacion , setCertificacion ] = useState<ICertificacion | null>(null);
  return (
    <div className="mb-4">
        {
            flag ? (
                <>
                    <h1 className="text-4xl font-bold text-center mb-8 mt-2 titulo">{titulo}</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 card-certificaciones">
                    {certificaciones.map(certificacion => (
                        <div key={certificacion.id} className="certificacion-card">
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Imagen de la certificación */}
                            <div className="md:w-40 md:h-32 w-full h-48 flex-shrink-0">
                            <img 
                                src={certificacion.imagen} 
                                alt={certificacion.nombre}
                                className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                                onClick={() =>{ setCertificacion(certificacion); setFlag(false); }}
                                
                            />
                            </div>
                    
                            {/* Información de la certificación */}
                            <div className="flex-1">
                            <h3 className="nombre-certificacion">{certificacion.nombre}</h3>
                            <p className="institucion mb-2">{certificacion.institucion}</p>
                            <p className="text-sm mb-3 fecha">
                                {new Date(certificacion.fechaObtencion).toLocaleDateString('es-ES', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                                })}
                            </p>                            
                           
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </>
            ):(
                <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
                    {/* Botón flotante circular superpuesto */}
                    <button 
                        onClick={() => { setFlag(true); setCertificacion(null); }}
                        className="absolute top-6 left-6 z-10 w-14 h-14 bg-white bg-opacity-10 hover:bg-opacity-20 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-md flex items-center justify-center group border border-white border-opacity-20"
                        title="Regresar"
                    >
                        <svg 
                            className="w-7 h-7 transform group-hover:scale-110 transition-transform duration-200" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2.5} 
                                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                            />
                        </svg>
                    </button>
                    
                    {/* Imagen centrada que ocupa toda la altura disponible */}
                    <img 
                        src={certificacion?.imagen} 
                        alt={certificacion?.nombre} 
                        className="max-h-full max-w-full object-contain rounded-xl shadow-2xl"
                    />
                    
                    {/* Click fuera de la imagen para cerrar */}
                    <div 
                        className="absolute inset-0 -z-10"
                        onClick={() => { setFlag(true); setCertificacion(null); }}
                    />
                </div>
            )
        }
       
    </div>
  )
}
