import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useEffect } from 'react';
import './Contact.scss';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const Contact = () => {

    useEffect(()=> {
        window.scrollTo({
            top: 0
        });
    
    })

    const formRef = useRef();

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
        <section className='home__section home__section--flex home__section--flex-contact'>
                    <div className='home__container home__container--black'>
                        <div>
                        <h1 className='home__heading'>Contact</h1>
                        <p className='home__slogan'>Let's work together</p>
                        </div>
                    </div>
                </section>
        <main className='contact'>
        <section className='contact__section contact__section--form'>
            <form className='contact__form' onSubmit={sendEmail} ref={formRef}>
                <h1 className='contact__heading'>Get a Quote Today</h1>
                <p className='contact__description'>We answer in less than 24 hours</p>
                <a className='contact__description contact__description--phone' href='tel:561-336-0523' >(561) 336-0523</a>

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

export default Contact;