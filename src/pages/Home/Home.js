import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'
import './Home.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [blogposts, setBlogposts] = useState([]);

    useEffect(()=> {
        axios.get('https://clownfish-app-f6era.ondigitalocean.app/project/projects')
        .then((response) => {
            setProjects(response.data);
            console.log(projects)
        })
        .catch((err) => {
            console.log(err)
        })
    }, []) 

    useEffect(() => {
        axios.get('https://clownfish-app-f6era.ondigitalocean.app/blog/blogposts')
        .then((response) => {
            setBlogposts(response.data);
            console.log(blogposts)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    

    return (
        <>
            <Header/>
            <main className='home'>
                <section className='home__section home__section--flex'>
                    <div className='home__container home__container--black'>
                        <div>
                        <h1 className='home__heading'>Palm Beach<br/> Kitchens and Baths</h1>
                        <p className='home__slogan'>ENHANCING LIVES THROUGH DESIGN</p>
                        </div>
                    </div>
                    <div className='home__container'>
                        <img alt='hero' className='home__image' src={require('../../assets/images/hero.png')}/>
                    </div>
                </section>
                <section className='home__section'>
                    <div className='home__container home__container--projects'>
                        {projects.map((project) => (
                            <img onClick={()=>{navigate(`project/${project._id}`)}} className='home__work-div' key={project._id} src={project.image.url} /*style={{ backgroundImage: `url(${project.image.url})` }}*//>
                        ))}
                        
                    </div>
                </section>
                <section className='home__section home__section--accent'>
                    <div className='home__container'>
                        <div className='home__testimonial'>
                            <h3 className='home__customer'>Anna Oscar</h3>
                            <p className='home__description'>Collaborating with Palm Beach Kitchens and Baths has been life-changing.<br/><br/> Their design prowess and attentive service truly stand out.<br/><br/> For extraordinary home transformations, Palm Beach Kitchens and Baths is the ultimate choice!</p>
                            <h4 className='home__testimonial-date'>July 2022</h4>
                        </div>
                        <div className='home__testimonial'>
                            <h3 className='home__customer'>Rich Cleveland</h3>
                            <p className='home__description'>Palm Beach Kitchens and Baths has left a lasting impression on me.<br/><br/> Their dedication to precision and their innovative approach to cabinetry is truly impressive.<br/><br/> I've had the opportunity to collaborate with various companies, but unique blend of creativity and craftsmanship sets them apart. </p>
                            <h4 className='home__testimonial-date'>December 2021</h4>
                        </div>
                        <div className='home__testimonial'>
                            <h3 className='home__customer'>Dan Hassan</h3>
                            <p className='home__description'>Partnering with Palm Beach Kitchens and Baths has transformed my home.<br/><br/> Their expertise in kitchen and bath design, along with their superb customer service, made the entire process a pleasure.<br/><br/> For exceptional home upgrades, Palm Beach Kitchens and Baths is the name to trust!</p>
                            <h4 className='home__testimonial-date'>June 2022</h4>
                        </div>
                        <div className='home__testimonial'>
                            <h3 className='home__customer'>Rodrigo Ferrierra De Castro</h3>
                            <p className='home__description'>Teaming up with Palm Beach Kitchens and Baths is a game-changer.
                                Their kitchen and bath design know-how, plus top-tier service, made it a delightful journey.<br/><br/>For unmatched home enhancements, trust Palm Beach Kitchens and Baths!</p>
                            <h4 className='home__testimonial-date'>October 2022</h4>
                        </div>
                    </div>
                </section>
                {/* <section className='home__section'>
                    <div className='home__container'>
                        <div className='home__section-container'>
                            <h2 className='home__subheading'>Why Optimum Cabinets</h2>
                            <p className='home__description home__description--section'>At our cabinet company, we take immense pride in our craft. With over two decades of experience, we've mastered the art of creating exquisite, custom cabinetry. Our team's dedication to quality, innovation, and customer satisfaction is unmatched. </p>
                        </div>
                        <div className='home__reason-div'>

                            <h3 className='home__reason'>Energy Efficiency</h3>
                            <p className='home__description'>Our state-of-the-art manufacturing facility is powered by 100% renewable energy sources. This means that for every cabinet we produce, we save 50% more energy compared to traditional manufacturing processes.</p>
                        </div>
                        <div className='home__reason-div'>

                            <h3 className='home__reason'>Water Conservation</h3>
                            <p className='home__description'>We've implemented advanced water recycling systems, allowing us to reuse 90% of the water used in the cabinet-making process. By choosing us, you're conserving thousands of gallons of water annually compared to other cabinet providers.</p>
                        </div>
                    </div>
                </section> */}
                <section className='home__section home__section--blog'>
                    <div className='home__container home__container--blog'>
                        {blogposts.map((blogpost) => (
                            <div onClick={()=>{navigate(`blog/${blogpost._id}`)}} className='home__blogpost' key={blogpost._id}>
                                <div className='home__blog-image' style={{ backgroundImage: `url(${blogpost.image.url})` }}>
                                </div>
                                <div className='home__inner'>
                                <h3 className='home__blog-name'>{blogpost.title}</h3>
                                <h4 className='home__testimonial-date'>
                                    {new Date(blogpost.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                                </h4>
                                <p className='home__description'>{blogpost.summary}</p>
                            </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default Home;