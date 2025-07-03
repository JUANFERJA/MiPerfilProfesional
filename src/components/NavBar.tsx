import '../styles/components/navBar.scss'
import { navbar } from '../data/components/navbar'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const NavBar = () => {
     const {links, socialLinks} = navbar();
  return (
    <div className='navbar d-flex flex-row'>
        <div className='vinculos'>
            <ul className='d-flex flex-row vinculos-lista'>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link className='vinculo' to={link.url}>{link.descripcion}</Link>
                    </li>
                ))}
            </ul>
        </div>
        
        <div className='redes-sociales'>
            <ul className='d-flex flex-row redes-sociales-lista'>
                {socialLinks.map((socialLink, index) => (
                    <li key={index}>
                        <Link className='social-vinculo' to={socialLink.url}>
                            <FontAwesomeIcon icon={socialLink.icon} /> {socialLink.descripcion}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
