import './Footer.scss';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();

    return (
        <footer className='footer'>
            <div className='footer__flex-container'>
            <div className='footer__container'>
                <h3 className='footer__subheading'>Navigation:</h3>
                <ul className='footer__list'>
                    <li onClick={()=>navigate('/')} className='footer__li'>Home</li>
                    <li onClick={()=>navigate('/projects')} className='footer__li'>Projects</li>
                    <li onClick={()=>navigate('/blog')} className='footer__li'>Blog</li>
                    <li onClick={()=>navigate('/team')} className='footer__li'>Team</li>
                    <li onClick={()=>navigate('/contact')} className='footer__li footer__li--cta'>Contact</li>
                </ul>
            </div>
            <div className='footer__container'>
                <h3 className='footer__subheading'>Contact Us:</h3>
                <p className='footer__description'>(866) 869-6166</p>
                <p className='footer__description'>optimumfloridakitchencabinets@gmail.com</p>
            </div>
            <div className='footer__container'>
                <h3 className='footer__subheading'>Social Media:</h3>
                <p className='footer__description'>instagram</p>
                <p className='footer__description'>facebook</p>
                <p className='footer__description'>linkedin</p>
            </div>
            <div className='footer__container'>
                <h3 className='footer__subheading'>Palm Beach Kitchens and Baths:</h3>
                <p className='footer__description'>Palm Beach Kitchens and Baths is your trusted partner in creating the perfect cabinetry solutions for your space.</p>
            </div>
            </div>
        </footer>
    );
}

export default Footer;