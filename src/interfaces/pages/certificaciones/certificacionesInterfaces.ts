
export type ICertificacion = {
    id: number;
    nombre: string;
    institucion: string;
    imagen: string;
    categoria: string;
    fechaObtencion: string;
};

export type ICertificaciones = { certificaciones: ICertificacion[] };