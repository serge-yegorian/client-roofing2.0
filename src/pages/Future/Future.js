import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Future = () => {

    const navigate =  useNavigate()
    const formRef = useRef();
    const [projects, setProjects] = useState([]);

    useEffect(()=> {
        axios.get('https://clownfish-app-f6era.ondigitalocean.app/roofingProject/projects')
        .then((response) => {
            setProjects(response.data);
            console.log(projects)
        })
        .catch((err) => {
            console.log(err)
        })
    }, []) 

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_2ipz9no', 'template_r30ilxn', formRef.current, 'iI2rumN26wASjnobc')
        .then((result) => { 
            console.log(result.text);
            window.alert( "Sent succesfully! We will contact you within 24 hours!")
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

    return (
        <>
        <Header/>
        <main className='home'>
            <section className='home__section home__section--flex home__section--financing'>
                <div className='home__container home__container--black'>
                    <div>
                    <h1 className='home__heading'>Metal roof is the future</h1>
                    <p className='home__slogan'>Have all benefits of a metal roof!</p>
                    </div>
                    <div className='home__form'>
                    <form className='contact__form contact__form--landing' onSubmit={sendEmail} ref={formRef}>
                <h1 className='contact__heading'>Get a Quote Today</h1>
                <p className='contact__description'>We answer in less than 24 hours</p>
                <a className='contact__description contact__description--phone' href='tel:866-869-6166' >(866) 869-6166</a>

                <div className='contact__input-div'>
                    <input required className='contact__input' name='name' id='name' />
                    <label className='contact__label' htmlFor='name'>Name:</label>
                </div>
                <div className='contact__input-div'>
                    <input required className='contact__input' name='phone' id='phone' />
                    <label className='contact__label' htmlFor='phone'>Phone:</label>
                </div>
                <div className='contact__input-div'>
                    <input required className='contact__input' name='email' id='email' />
                    <label className='contact__label' htmlFor='email'>Email:</label>
                </div>
                <div className='contact__input-div'>
                    <textarea required className='contact__input contact__input--textarea' rows={5} name='message' id='message' />
                    <label className='contact__label' htmlFor='message'>How can we help:</label>
                </div>
                <button className='contact__cta'>Submit</button>
            </form>
                    </div>  
                </div>
            </section>
            <section className='home__section home__section--accent home__section--landing'>
                <div className='home__container'>
                    <div className='home__testimonial home__testimonial--landing'>
                        <h3 className={`home__customer home__customer--landing`}>Shorter lead times</h3>
                        <h3 className={`home__customer  home__customer--sub`}>A new roof in 4 weeks VS months of waiting</h3>
                    </div>
                    <div className='home__testimonial home__testimonial--landing'>
                        <h3 className='home__customer home__customer--landing'>Most energy efficient roof</h3>
                        <h3 className={`home__customer  home__customer--sub`}>Save up to 40% in A/C costs</h3>
                    </div>
                    <div className='home__testimonial home__testimonial--landing'>
                        <h3 className='home__customer home__customer--landing'>Longer Lifespan</h3>
                        <h3 className={`home__customer  home__customer--sub`}>50 year rated metal roof VS 12 to 20 years on other roofs</h3>
                    </div>
                    <div className='home__testimonial home__testimonial--landing'>
                        <h3 className='home__customer home__customer--landing'>Green</h3>
                        <h3 className={`home__customer  home__customer--sub`}>At least 25% recycled content and becomes 100% at the end of its life</h3>
                    </div>
                    <div className='home__testimonial home__testimonial--landing'>
                        <h3 className='home__customer home__customer--landing'>Easy Insurance</h3>
                        <h3 className={`home__customer  home__customer--sub`}>Better approval ratings by insurance companies</h3>
                    </div>
                    <div className='home__testimonial home__testimonial--landing'>
                        <h3 className='home__customer home__customer--landing'>Financing</h3>
                        <h3 className={`home__customer  home__customer--sub`}>100% financing is available</h3>
                    </div>
                    <div className='home__testimonial home__testimonial--landing'>
                        <h3 className='home__customer home__customer--landing'>Estimate today</h3>
                        <h3 className={`home__customer  home__customer--sub`}>Contact us for an estimate today</h3>
                    </div>
                </div>
            </section>
            
                <section className='home__section'>
                    <h1 className='home__heading'>recent projects:</h1>
                    <div className='home__container home__container--projects'>
                        {projects.map((project) => (
                            <img onClick={()=>{navigate(`/project/${project._id}`)}} className='home__work-div' key={project._id} src={project.image.url} /*style={{ backgroundImage: `url(${project.image.url})` }}*//>
                        ))}
                        
                    </div>
                </section>
                <section className='contact__section contact__section--form'>
            <form className='contact__form' onSubmit={sendEmail} ref={formRef}>
                <h1 className='contact__heading'>Get a Quote Today</h1>
                <p className='contact__description'>We answer in less than 24 hours</p>
                <a className='contact__description contact__description--phone' href='tel:866-869-6166' >(866) 869-6166</a>
                <div className='contact__input-div'>
                    <input required className='contact__input' name='name' id='name2' />
                    <label className='contact__label' htmlFor='name2'>Name:</label>
                </div>
                <div className='contact__input-div'>
                    <input required className='contact__input' name='phone' id='phone2' />
                    <label className='contact__label' htmlFor='phone2'>Phone:</label>
                </div>
                <div className='contact__input-div'>
                    <input required className='contact__input' name='email' id='email2' />
                    <label className='contact__label' htmlFor='email2'>Email:</label>
                </div>
                <div className='contact__input-div'>
                    <textarea required className='contact__input contact__input--textarea' rows={5} name='message' id='message2' />
                    <label className='contact__label' htmlFor='message2'>How can we help:</label>
                </div>
                <button className='contact__cta'>Submit</button>
            </form>
        </section>
        </main>
        <Footer/>
    </>
    )
}

export default Future;


