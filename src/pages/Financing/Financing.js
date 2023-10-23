import './Financing.scss'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Financing = () => {

    const navigate =  useNavigate()

    return (
        <>
        <Header/>
        <main className='home'>
            <section className='home__section home__section--flex home__section--financing'>
                <div className='home__container home__container--black'>
                    <div>
                    <h1 className='home__heading'>100% Financing</h1>
                    <p className='home__slogan'>Financing a new roof has never been easier!</p>
                    </div>
                </div>
                <div className='home__container'>
                    <img alt='hero' className='home__image' src={require('../../assets/images/hero.png')}/>
                </div>
            </section>
            <section className='home__section home__section--accent'>
                <div className='home__container'>
                    <div className='home__testimonial home__testimonial--landing' onClick={()=>navigate('/contact')}>
                        <h3 className={`home__customer home__customer--landing `}>$0 down</h3>
                        <h3 className={`home__customer home__customer--hidden  home__customer--landing`}>Contact</h3>
                    </div>
                    <div className='home__testimonial home__testimonial--landing' onClick={()=>navigate('/contact')}>
                        <h3 className='home__customer home__customer--landing'>Most properties qualify</h3>
                        <h3 className='home__customer home__customer--landing home__customer--hidden'>Contact</h3>
                    </div>
                    <div className='home__testimonial home__testimonial--landing' onClick={()=>navigate('/contact')}>
                        <h3 className='home__customer home__customer--landing'>Approval not based on credit score</h3>
                        <h3 className='home__customer home__customer--landing home__customer--hidden'>Contact</h3>
                    </div>
                    <div className='home__testimonial home__testimonial--landing' onClick={()=>navigate('/contact')}>
                        <h3 className='home__customer home__customer--landing'>Affordable payments</h3>
                        <h3 className='home__customer home__customer--landing home__customer--hidden'>Contact</h3>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </>
    );
}

export default Financing;