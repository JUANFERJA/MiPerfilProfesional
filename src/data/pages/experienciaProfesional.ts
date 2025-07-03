
    interface Experiencia {
        empresa: string;
        cargo: string;
        fechaInicio: string;
        fechaFin: string;
        descripcion: string;
        tecnologias: string[];
        motivoSalida?: string; // Opcional, si no se especifica, se asume que sigue trabajando allí
    }

    interface Experiencias{
        experiencias: Experiencia[];
    }


export const experienciaProfesional = (): Experiencias => {
  

    const experienciaProfesionalData: Experiencia[] = [
       
                {
                    empresa: 'Sistran Andina',
                    cargo: 'Desarrollador Backend',
                    fechaInicio: 'Agosto 2020',
                    fechaFin: 'Agosto 2021',
                    descripcion: 'Desarrollo funcionalidades backend de integración.',
                    tecnologias: ['C#', '.Net Framework', 'SQL Server', 'Azure DevOps'],
                    motivoSalida: 'Proyecto finalizado-Promosión a Analista de Sistemas'
                },
                {
                    empresa: 'Sistran Consultores',
                    cargo: 'Analista de Sistemas',
                    fechaInicio: 'Agosto 2021',
                    fechaFin: 'Actualidad',
                    descripcion: 'Análisis y diseño de sistemas, implementación de soluciones tecnológicas.',
                    tecnologias: ['C#', 'ASP.NET', 'React', 'Javascript', 'TypeScript', 'SQL Server', 'Azure DevOps']
                },
                {
                    empresa: 'NetBy Produbanco',
                    cargo: 'Desarrollador Full Stack',
                    fechaInicio: 'Julio 2024',
                    fechaFin: 'Diciembre 2024',
                    descripcion: 'Desarrollo de aplicaciones web y microservicios en el area de cartera.',
                    tecnologias: ['C#', '.NET', 'SQL Server', 'Azure DevOps'],
                    motivoSalida: 'Renuncia voluntaria por incumplimiento de contrato por parte del empleador.'
                },
                {
                    empresa: 'Freelance',
                    cargo: 'Desarrollador Senior Full Stack',
                    fechaInicio: 'Enero 2017',
                    fechaFin: 'Actualidad',
                    descripcion: 'Desarrollo de aplicaciones web, escritorio y microservicios.',
                    tecnologias: ['C#', '.NET', 'SQL Server', 'Azure DevOps', 'React', 'Angular', 'Node.js', 'JavaScript', 'TypeScript'],
                },
                {
                    empresa: 'Tecnasa',
                    cargo: 'Coordinador de Servicios',
                    fechaInicio: 'Abril 2019',
                    fechaFin: 'Mayo 2020',
                    descripcion: 'Coordinar servicios de mantenimiento preventivo y correctivo para ATMs de la marca NCR.',
                    tecnologias: ['ConectWise', '.AptraVision', 'NCR', 'SQL Server'],
                    motivoSalida: 'Crecimiento profesional.'
                },
                {
                    empresa: 'Ceiaf',
                    cargo: 'Coordinador de Servicios',
                    fechaInicio: 'Abril 2019',
                    fechaFin: 'Mayo 2020',
                    descripcion: 'Coordinar servicios de mantenimiento preventivo y correctivo para ATMs de la marca NCR.',
                    tecnologias: ['ConectWise', '.AptraVision', 'NCR', 'SQL Server'],
                    motivoSalida: 'Crecimiento profesional.'
                }

            ]
        
  return {
    experiencias: experienciaProfesionalData
  }
}
