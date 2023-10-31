import './Financing.scss'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Financing = () => {

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
                    <h1 className='home__heading'>100% Financing</h1>
                    <p className='home__slogan'>Financing a new roof has never been easier!</p>
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
            <section className='home__section '>
                <div className='home__container'>
                    <div className='home__testimonial home__testimonial--landing' onClick={()=>navigate('/contact')}>
                        <h3 className={`home__customer home__customer--landing `}>$0 down</h3>
                        <p className='home__description'>No downpayment required</p>
                    </div>
                    <div className='home__testimonial home__testimonial--landing' onClick={()=>navigate('/contact')}>
                        <h3 className='home__customer home__customer--landing'>Most properties qualify</h3>
                        <p className='home__description'>Small and old roofs qualify for our work</p>
                    </div>
                    <div className='home__testimonial home__testimonial--landing' onClick={()=>navigate('/contact')}>
                        <h3 className='home__customer home__customer--landing'>Approval not based on credit score</h3>
                        <p className='home__description'>We help people with all kinds of financial situations</p>
                    </div>
                    <div className='home__testimonial home__testimonial--landing' onClick={()=>navigate('/contact')}>
                        <h3 className='home__customer home__customer--landing'>Affordable payments</h3>
                        <p className='home__description'>We allow you to make more smaller payments </p>
                    </div>
                </div>
            </section>
            
                <section className='home__section'>
                    <h1 className='home__heading'>recent projects:</h1>
                    <div className='home__container home__container--projects'>
                        {projects.map((project) => (
                            <img onClick={()=>{navigate(`project/${project._id}`)}} className='home__work-div' key={project._id} src={project.image.url} /*style={{ backgroundImage: `url(${project.image.url})` }}*//>
                        ))}
                        
                    </div>
                </section>
                <section className='contact__section contact__section--form'>
            <form className='contact__form' onSubmit={sendEmail} ref={formRef}>
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
        </section>
        </main>
        <Footer/>
    </>
    );
}

export default Financing;