
import perfilImg from '../../assets/perfil.jpg';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { 
    faReact, 
    faJs, 
    faHtml5, 
    faCss3Alt, 
    faAngular, 
    faNodeJs, 
    faGitAlt 
} from '@fortawesome/free-brands-svg-icons';
import { 
    faDatabase, 
    faCog, 
    faLayerGroup,
    faCode 
} from '@fortawesome/free-solid-svg-icons';

export const presentacionPersonal = () => {
  
    interface Contacto {
            telefono: string;
            email: string;           
            linkedin: string;
            github: string;
    }

    interface Habilidades {
        nombre: string;
        nivel: string; 
        porcentaje: number;
        icon: IconDefinition;
    }
    
    interface Profesion {
        titulo: string;
        posicion: string;
        registro: string;
    }

    interface PresentacionPersonalData {
        nombre: string;
        apellido: string;
        edad: number;
        profesion: Profesion;
        habilidades: Habilidades[];
        contacto: Contacto;
        descripcion: string;
        foto: string;
    }

    const profesion: Profesion = {
            titulo: 'Analista de Sistemas',
            posicion: 'Senior Developer Full Stack',
            registro: '2250-2021-2283382'
    }


    const contacto: Contacto ={
        telefono: '+593 991323946',
        email: 'jufer_tar_lch@hotmail.com',
        linkedin: 'https://www.linkedin.com/in/jufer-tar-lch/',
        github: 'https://github.com/jufer-tar-lch'
    }

    const habilidades: Habilidades[] = [
        { nombre: 'C#', nivel: 'Avanzado', porcentaje: 90, icon: faCode },
        { nombre: '.NET', nivel: 'Avanzado', porcentaje: 80, icon: faCog },
        { nombre: 'JavaScript', nivel: 'Avanzado', porcentaje: 90, icon: faJs },
        { nombre: 'TypeScript', nivel: 'Intermedio', porcentaje: 70, icon: faCode },
        { nombre: 'HTML', nivel: 'Avanzado', porcentaje: 95, icon: faHtml5 },
        { nombre: 'CSS', nivel: 'Avanzado', porcentaje: 85, icon: faCss3Alt },
        { nombre: 'React', nivel: 'Avanzado', porcentaje: 75, icon: faReact },
        { nombre: 'SqlServer', nivel: 'Intermedio', porcentaje: 70, icon: faDatabase },
        { nombre: 'Git', nivel: 'Avanzado', porcentaje: 80, icon: faGitAlt },
        { nombre: 'Angular', nivel: 'Intermedio', porcentaje: 60, icon: faAngular },     
        { nombre: 'Node.js', nivel: 'Intermedio', porcentaje: 70, icon: faNodeJs },
        { nombre: 'Arquitectura de Software', nivel: 'Avanzado', porcentaje: 85, icon: faLayerGroup },
      ];

    const dataPersonal: PresentacionPersonalData = {
        nombre: 'Juan Fernando',
        apellido: 'Jácome Castro',
        edad: 35,
        profesion: profesion,
        habilidades: habilidades,
        contacto: contacto,
        descripcion: 'Soy un apasionado desarrollador de software con más de 8 años de experiencia en el desarrollo de aplicaciones web, móviles, escritorio y backend.',
        foto: perfilImg
    }

    return {
        dataPersonal: dataPersonal
  }
}
