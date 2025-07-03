import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';

interface NavLink {
    descripcion: string;
    url: string;
}

interface SocialLink {
    descripcion: string;
    url: string;
    icon: IconDefinition;
}

interface NavbarData {
    links: NavLink[];
    socialLinks: SocialLink[];
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
            descripcion: "Proyectos",
            url: "/proyectos"
        },
        {
            descripcion: "Certificaciones",
            url: "/certificaciones"
        }
    ]

    let socialLinks: SocialLink[] = [
        {
            descripcion: "Youtube",
            url: "https://www.youtube.com/",
            icon: faYoutube
        },
        {
            descripcion: "Github",
            url: "https://www.github.com/",
            icon: faGithub
        },
        {
            descripcion: "Linkedin",
            url: "https://www.linkedin.com/",
            icon: faLinkedin
        },
        {
            descripcion:'TikTok',
            url: "https://www.tiktok.com/",
            icon: faTiktok
        }
    ]

    return { 
        links,
        socialLinks
     }
}
