
import type { ICertificacion, ICertificaciones } from '../../interfaces/pages/certificaciones/certificacionesInterfaces';

import administradorDeServidores from '../../assets/certificados/IMAGENES/administrador_de_servidores.png';
import cyberSecurity from '../../assets/certificados/IMAGENES/cyber seguridad.jpg';
import devTallesReactNative from '../../assets/certificados/IMAGENES/REACT NATIVE.jpg';
import ciscoIoT from '../../assets/certificados/IMAGENES/CISCO INTERNET DE LAS COSAS.png';
import itooMasterJavascript from '../../assets/certificados/IMAGENES/ITOO MASTER EN JAVASCRIPT ECMA SCRIPT ANGULAR REACT Y NODE JS.png';
import udemyDesarrolladorBackend from '../../assets/certificados/IMAGENES/desarrollador backend.jpg';
import scrumFundamentals from '../../assets/certificados/IMAGENES/scrum fundamentals.png';
import telefonicaMachineLearning from '../../assets/certificados/IMAGENES/MIRIADAX MACHINE LEARNING.png';
import ciscoFundamentosCyberSeguridad from '../../assets/certificados/IMAGENES/NETACAD FUNDAMENTOS DE CYBER SEGURIDAD.png';
import carlosSlimBaseDatos from '../../assets/certificados/IMAGENES/CARLOS SLIM administrador de bases de datos.png';


/* certificados de estudios */
import bachillerCiencias from '../../assets/certificados/IMAGENES/bachiller en ciencias fisicas y matematicas.jpg';
import diplomadoInformatica from '../../assets/certificados/IMAGENES/DIPLOMADO EN INFORMATICA.png';
import tecnologoSistemas from '../../assets/certificados/IMAGENES/tecnologo en analisis en sistemas.jpg';

import udemyDdd from '../../assets/certificados/IMAGENES/ddd.jpg';
import udemyMasterNext from '../../assets/certificados/IMAGENES/master en next.jpg';
import udemySpringSecurity from '../../assets/certificados/IMAGENES/spring security.jpg';
import udemyReactHooks from '../../assets/certificados/IMAGENES/react hooks de cero a experto.jpg';
import udemyAplicacionesEmpresariales from '../../assets/certificados/IMAGENES/Aplicaciones empresariales.png';

import itooMasterDiseno from '../../assets/certificados/IMAGENES/ITOO MASTER EN DISEÑO WEB Y EXPERIENCIA DE USUARIO.png';
import itooMasterFrontend from '../../assets/certificados/IMAGENES/ITOO MASTER EN FRONT END WORDPRESS, PHP, ANGULAR.png';
import itooReactHooks from '../../assets/certificados/IMAGENES/REACT HOOKS.png';

import telefonicaAplicacionesMoviles from '../../assets/certificados/IMAGENES/MIRIADAX APLICACIONES MOVILES.png';
import telefonicaFundamentosProgramacion from '../../assets/certificados/IMAGENES/MIRIADAX FUNDAMENTOS DE PROGRAMACION.png';
import telefonicaJavascript from '../../assets/certificados/IMAGENES/MIRIADAX programacion con javascript.png';

import devTallesReactPro from '../../assets/certificados/IMAGENES/react pro.jpg';
import ciscoEmprendimiento from '../../assets/certificados/IMAGENES/NETACAD EMPRENDIMIENTO CISCO.png';

import fastStartSetup from '../../assets/certificados/IMAGENES/CONECT WISE FAST START SETUP DEGREE.png';
import dispatcher from '../../assets/certificados/IMAGENES/CONECT WISEDISPATCHER DEGREE.png';
import aptaraVisionOperator from '../../assets/certificados/IMAGENES/APTARA VISION OPERATOR.png';

import conduccionEquiposAltoRendimiento from '../../assets/certificados/IMAGENES/conduccion de equipos de alto rendimiento.jpg';
import carlosSlimcuradorDeDatos from '../../assets/certificados/IMAGENES/CARLOS SLIM CURADOR DE DATOS.png';
import carlosSlimfinder from '../../assets/certificados/IMAGENES/CARLOS SLIM finder.png';
import carlosSliminstaladorFibraOptica from '../../assets/certificados/IMAGENES/CARLOS SLIM INSTALADOR DE FIBRA OPTICA.png';
import carlosSlimrepresentanteTelefonico from '../../assets/certificados/IMAGENES/CARLOS SLIM REPRESENTANTE TELEFONICO.png';
import carlosSlimortografiaRedaccion from '../../assets/certificados/IMAGENES/CARLOS SLIM ortografia y redaccion.png';
import carlosSlimofimatica from '../../assets/certificados/IMAGENES/CARLOS SLIM tecnico en informatica ofimatica.png';
import carlosSliminstalcionEquipos from '../../assets/certificados/IMAGENES/CARLOS SLIM tecnico en instalacion y equipos de computo.png';
import carlosSlimreparadorCelulares from '../../assets/certificados/IMAGENES/CARLOS SLIM tecnico en reparador de celulares y tabletas.png';
import carlosSlimProgramador from '../../assets/certificados/IMAGENES/CATLOS SLIM PROGRAMADOR ORIENTADO A OBJETOS.png';
import carlosSlimSeguridad from '../../assets/certificados/IMAGENES/CARLOS SLIM SEGURIDAD INFORMATICA.png';


// Datos de ejemplo de certificaciones basados en las imágenes de tu carpeta
export const certificacionesData = (): ICertificaciones => {
    const certificaciones: ICertificacion[] = [
        {
            id: 1,
            nombre: "React Native desarrollo mobile",
            institucion: "DevTalles Fernando Herrera",
            imagen: devTallesReactNative,
            categoria: "Principales",
            fechaObtencion: "2023-12-14"
        },
         {
            id: 2,
            nombre: "Desarrollador Backend",
            institucion: "Udemy H de Leon",
            imagen: udemyDesarrolladorBackend,
            categoria: "Principales",
            fechaObtencion: "2024-12-13"
        },
         {
            id: 3,
            nombre: "Master en JavaScript, Angular, React y Node.js",
            institucion: "Itoo Fernando Urrego",
            imagen: itooMasterJavascript,
            categoria: "Principales",
            fechaObtencion: "2021-05-27"
        },
        {
            id: 4,
            nombre: "Administrador de Servidores Linux",
            institucion: "Linux Professional Institute",
            imagen: administradorDeServidores,
            categoria: "Principales",
            fechaObtencion: "2019-09-10"
        },
        {
            id: 5,
            nombre: "Cyber Security",
            institucion: "Asamblea Nacional del Ecuador",
            imagen: cyberSecurity,
            categoria: "Principales",
            fechaObtencion: "2017-06-28"
        },
        
        {
            id: 6,
            nombre: "Internet de las Cosas (IoT)",
            institucion: "Cisco",
            imagen: ciscoIoT,
            categoria: "Principales",
            fechaObtencion: "2017-08-24"
        },
       
       
        {
            id: 7,
            nombre: "Scrum Fundamentals",
            institucion: "CertiPro",
            imagen: scrumFundamentals,
            categoria: "Principales",
            fechaObtencion: "2021-05-18"
        },
        {
            id: 8,
            nombre: "Inducción al Machine Learning",
            institucion: "Telefonica Movistar",
            imagen: telefonicaMachineLearning,
            categoria: "Principales",
            fechaObtencion: "2019-09-23"
        },
        {
            id: 9,
            nombre: "Fundamentos de Ciberseguridad",
            institucion: "Cisco",
            imagen: ciscoFundamentosCyberSeguridad,
            categoria: "Principales",
            fechaObtencion: "2020-02-14"
        },
        {
            id: 10,
            nombre: "Administrador de Bases de Datos",
            institucion: "Carlos Slim",
            imagen: carlosSlimBaseDatos,
            categoria: "Principales",
            fechaObtencion: "2021-11-30"
        },
        {
            id: 11,
            nombre: "Bachiller en Ciencias Físicas y Matemáticas",
            institucion: "Colegio Nacional Técnico Ligdano Chávez",
            imagen: bachillerCiencias,
            categoria: "Educación",
            fechaObtencion: "2010-07-13"
        },
        {
            id: 12,
            nombre: "Diplomado Técnico en Informática",
            institucion: "Fundacion Carlos Slim",
            imagen: diplomadoInformatica,
            categoria: "Educación",
            fechaObtencion: "2021-09-11"
        },
        {
            id: 13,
            nombre: "Tecnólogo en Análisis de Sistemas",
            institucion: "Instituto Tecnológico Superior Cordillera",
            imagen: tecnologoSistemas,
            categoria: "Educación",
            fechaObtencion: "2021-03-27"
        },
        {
            id: 14,
            nombre: "Clean Architecture y Driver Domain Design (DDD)",
            institucion: "Udemy",
            imagen: udemyDdd,
            categoria: "Desarrollo Backend",
            fechaObtencion: "2024-12-13"
        },
        {
            id: 15,
            nombre: "Master en Next.js",
            institucion: "Udemy",
            imagen: udemyMasterNext,
            categoria: "Desarrollo Web",
            fechaObtencion: "2024-02-17"
        },
        {
            id: 16,
            nombre: "Spring Security 6 desde Cero",
            institucion: "Udemy",
            imagen: udemySpringSecurity,
            categoria: "Desarrollo Backend",
            fechaObtencion: "2024-06-21"
        },
        {
            id: 17,
            nombre: "React Hooks de Cero a Experto",
            institucion: "Udemy",
            imagen: udemyReactHooks,
            categoria: "Desarrollo Web",
            fechaObtencion: "2022-08-16"
        },
        {
            id: 18,
            nombre: "Master en Diseño Web y Experiencia de Usuario",
            institucion: "Itoo",
            imagen: itooMasterDiseno,
            categoria: "Diseño Web",
            fechaObtencion: "2021-05-27"
        },
        {
            id: 19,
            nombre: "Master en Front End WordPress, PHP, Angular",
            institucion: "Itoo",
            imagen: itooMasterFrontend,
            categoria: "Desarrollo Web",
            fechaObtencion: "2021-10-19"
        },
        {
            id: 20,
            nombre: "React Hooks",
            institucion: "Itoo",
            imagen: itooReactHooks,
            categoria: "Desarrollo Web",
            fechaObtencion: "2022-03-31"
        },
        {
            id: 21,
            nombre: "Creando Aplicaciones en Android",
            institucion: "Telefonica Movistar",
            imagen: telefonicaAplicacionesMoviles,
            categoria: "Desarrollo Mobile",
            fechaObtencion: "2019-11-19"
        },
        {
            id: 22,
            nombre: "Fundamentos de Programación",
            institucion: "telefonica Movistar",
            imagen: telefonicaFundamentosProgramacion,
            categoria: "Desarrollo Web",
            fechaObtencion: "2019-10-24"
        },
         {
            id: 23,
            nombre: "Desarrollo con JavaScript",
            institucion: "telefonica Movistar",
            imagen: telefonicaJavascript,
            categoria: "Desarrollo Web",
            fechaObtencion: "2019-02-19"
        },
         {
            id: 24,
            nombre: "Entrepreneurship",
            institucion: "Cisco Networking Academy",
            imagen: ciscoEmprendimiento,
            categoria: "Cisco",
            fechaObtencion: "2019-09-10"
        },
         {
            id: 25,
            nombre: "React Pro",
            institucion: "DevTalles Fernando Herrera",
            imagen: devTallesReactPro,
            categoria: "Desarrollo Web",
            fechaObtencion: "2023-04-26"
        },
         {
            id: 26,
            nombre: "Aptra Vision Operator",
            institucion: "Aptra Vision",
            imagen: aptaraVisionOperator,
            categoria: "Principales",
            fechaObtencion: "2019-11-09"
        },
        {
            id: 27,
            nombre: "Dispatcher Degree",
            institucion: "ConnectWise University",
            imagen: dispatcher,
            categoria: "Otros",
            fechaObtencion: "2019-02-22"
        },
        {
            id: 28,
            nombre: "Fast Start Setup Degree",
            institucion: "ConnectWise University",
            imagen: fastStartSetup,
            categoria: "Principales",
            fechaObtencion: "2019-02-21"
        },
        {
            id: 29,
            nombre: "Conduccion de Equipos de Alto Rendimiento",
            institucion: "Pro y Proasyn",
            imagen: conduccionEquiposAltoRendimiento,
            categoria: "Otros",
            fechaObtencion: "2012-12-04"
        },
        {
            id: 30,
            nombre: "Curador de Datos",
            institucion: "Carlos Slim",
            imagen: carlosSlimcuradorDeDatos,
            categoria: "Otros",
            fechaObtencion: "2010-07-13"
        },
        {
            id: 31,
            nombre: "Finder",
            institucion: "Carlos Slim",
            imagen: carlosSlimfinder,
            categoria: "Otros",
            fechaObtencion: "2010-07-13"
        },
        {
            id: 32,
            nombre: "Instalador de Fibra Optica",
            institucion: "Carlos Slim",
            imagen: carlosSliminstaladorFibraOptica,
            categoria: "Otros",
            fechaObtencion: "2010-07-13"
        },
        {
            id: 33,
            nombre: "Representante Telefonico",
            institucion: "Carlos Slim",
            imagen: carlosSlimrepresentanteTelefonico,
            categoria: "Otros",
            fechaObtencion: "2010-07-13"
        },
        {
            id: 34,
            nombre: "Ortografía y Redacción",
            institucion: "Carlos Slim",
            imagen: carlosSlimortografiaRedaccion,
            categoria: "Otros",
            fechaObtencion: "2010-07-13"
        },
        {
            id: 35,
            nombre: "Curso de Informática Ofimática",
            institucion: "Carlos Slim",
            imagen: carlosSlimofimatica,
            categoria: "Otros",
            fechaObtencion: "2010-07-13"
        },
        {
            id: 36,
            nombre: "Instalación de Equipos de Cómputo",
            institucion: "Carlos Slim",
            imagen: carlosSliminstalcionEquipos,
            categoria: "Otros",
            fechaObtencion: "2010-07-13"
        },
        {
            id: 37,
            nombre: "Reparador de Celulares y Tabletas",
            institucion: "Carlos Slim",
            imagen: carlosSlimreparadorCelulares,
            categoria: "Otros",
            fechaObtencion: "2010-07-13"
        },
        {
            id: 38,
            nombre: "Programador Orientado a Objetos",
            institucion: "Carlos Slim",
            imagen: carlosSlimProgramador,
            categoria: "Programación",
            fechaObtencion: "2010-07-13"
        },
        {
            id: 39,
            nombre: "Cyber Seguridad",
            institucion: "Carlos Slim",
            imagen: carlosSlimSeguridad,
            categoria: "Cyber Seguridad",
            fechaObtencion: "2010-07-13"
        },
{
            id: 40,
            nombre: "Arquitectura de Aplicaciones Empresariales con .Net 9",
            institucion: "Udemy Alex Espejo",
            imagen: udemyAplicacionesEmpresariales,
            categoria: "Principales",
            fechaObtencion: "2025-10-30"
        },


    ];

    return {
        certificaciones
    };
};
