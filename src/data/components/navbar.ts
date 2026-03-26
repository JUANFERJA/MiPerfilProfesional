

interface NavLink {
    descripcion: string;
    url: string;
}


interface NavbarData {
    links: NavLink[];   
}

export const navbar = (): NavbarData => {
  
    let links: NavLink[] = [
        {
            descripcion: "Sobre mí",
            url: "/presentacion"
        }
        , {
            descripcion: "Experiencia",
            url: "/experiencia"
        },
        {
            descripcion: "Certificaciones",
            url: "/certificaciones"
        },
        {
            descripcion: "Proyectos",
            url: "/proyectos"
        },
       
    ]

    

    return { 
        links        
     }
}
