import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Projects.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Projects = () => {

    const navigate = useNavigate()

    const [projects, setProjects] = useState([])

    useEffect(()=> {
        window.scrollTo({
            top: 0
        });
    })

    useEffect(()=> {
        axios.get('https://clownfish-app-f6era.ondigitalocean.app/project/projects')
        .then((response) => {
            setProjects(response.data);
            console.log(projects)
        })
        .catch((err) => {
            console.log(err)
        })
        window.scrollTo({
            top: 0
        });
    }, [])

    return (
        <>
            <Header/>
            <main className='projects'>
            <section className='home__section home__section--flex home__section--flex-projects'>
                    <div className='home__container home__container--black'>
                        <div>
                        <h1 className='home__heading'>Recent Projects</h1>
                        <p className='home__slogan'>Discover Our Latest Creations</p>
                        </div>
                    </div>
                </section>
                <section className='projects__section'>
                    <h1 className='projects__heading'>Recent Projects</h1>
                    <p className='projects__slogan'>We take immense pride in presenting our latest creations. Explore our Recent Work and discover the artistry and craftsmanship that defines us.</p>
                </section>
                <section className='projects__section'>
                    <div className='projects__container'>
                    {projects.map((project) => (
                            <div className='projects__project' key={project._id} onClick={()=>navigate(`/project/${project._id}`)}>
                            <div className='projects__image' style={{ backgroundImage: `url(${project.image.url})` }}>

                            </div>
                            <div className='projects__data'>
                                <h2 className='projects__city'>{project.title}</h2>
                                <h3 className='projects__date'>{project.dateFinished}</h3>
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

export default Projects;