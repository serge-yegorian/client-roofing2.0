import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Future = () => {

    const navigate =  useNavigate()

    return (
        <>
        <Header/>
        <main className='home'>
            <section className='home__section home__section--flex home__section--financing'>
                <div className='home__container home__container--black'>
                    <div>
                    <h1 className='home__heading'>OPTiMUM METAL ROOFS ARE THE FUTURE</h1>
                    <p className='home__slogan'>100% FINANCING IS AVAILABLE</p>
                    </div>
                </div>
                <div className='home__container'>
                    <img alt='hero' className='home__image' src={require('../../assets/images/hero.png')}/>
                </div>
            </section>
            <section className='home__section home__section--accent home__section--landing'>
                <div className='home__container'>
                    <div className='home__testimonial home__testimonial--landing' onClick={()=>navigate('/contact')}>
                        <h3 className={`home__customer home__customer--landing`}>Shorter lead times</h3>
                        <h3 className={`home__customer  home__customer--sub`}>A new roof in 4 weeks VS months of waiting</h3>
                    </div>
                    <div className='home__testimonial home__testimonial--landing' onClick={()=>navigate('/contact')}>
                        <h3 className='home__customer home__customer--landing'>Most energy efficient roof</h3>
                        <h3 className={`home__customer  home__customer--sub`}>Save up to 40% in A/C costs</h3>
                    </div>
                    <div className='home__testimonial home__testimonial--landing' onClick={()=>navigate('/contact')}>
                        <h3 className='home__customer home__customer--landing'>Longer Lifespan</h3>
                        <h3 className={`home__customer  home__customer--sub`}>50 year rated metal roof VS 12 to 20 years on other roofs</h3>
                    </div>
                    <div className='home__testimonial home__testimonial--landing' onClick={()=>navigate('/contact')}>
                        <h3 className='home__customer home__customer--landing'>Green</h3>
                        <h3 className={`home__customer  home__customer--sub`}>At least 25% recycled content and becomes 100% at the end of its life</h3>
                    </div>
                    <div className='home__testimonial home__testimonial--landing' onClick={()=>navigate('/contact')}>
                        <h3 className='home__customer home__customer--landing'>Easy Insurance</h3>
                        <h3 className={`home__customer  home__customer--sub`}>Better approval ratings by insurance companies</h3>
                    </div>
                    <div className='home__testimonial home__testimonial--landing' onClick={()=>navigate('/contact')}>
                        <h3 className='home__customer home__customer--landing'>Financing</h3>
                        <h3 className={`home__customer  home__customer--sub`}>100% financing is available</h3>
                    </div>
                    <div className='home__testimonial home__testimonial--landing' onClick={()=>navigate('/contact')}>
                        <h3 className='home__customer home__customer--landing'>Estimate today</h3>
                        <h3 className={`home__customer  home__customer--sub`}>Contact us for an estimate today</h3>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </>
    );
}

export default Future;