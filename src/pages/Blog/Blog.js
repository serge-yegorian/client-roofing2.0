import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Blog.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Blog = () => {

    const navigate = useNavigate()

    const [blogposts, setBlogposts] = useState([]);

    useEffect(()=> {
        window.scrollTo({
            top: 0
        });
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
        <main className='blog'>
        <section className='home__section home__section--flex home__section--flex-blog'>
                    <div className='home__container home__container--black'>
                        <div>
                        <h1 className='home__heading'>Blog</h1>
                        <p className='home__slogan'>Explore Our Articles</p>
                        </div>
                    </div>
                    <div className='home__container'>
                        <img alt='hero' className='home__image' src={require('../../assets/images/hero.png')}/>
                    </div>
                </section>
            <section className='blog__section'>
                <h1 className='blog__heading'>Blog</h1>
                <p className='blog__slogan'>Dive into a world of design ideas, renovation tips, and customer success stories. Our blog is your go-to resource for expert advice, inspiration, and the latest trends in kitchen and cabinet design. Explore, learn, and discover how we can transform your kitchen into the heart of your dream home.</p>
            </section>
            <section className='blog__section'>
                {blogposts.map((blogpost) => (
                            <div onClick={()=>{navigate(`/blog/${blogpost._id}`)}} className='blog__blogpost' key={blogpost._id}>
                                <div className='blog__blog-image' style={{ backgroundImage: `url(${blogpost.image.url})` }}>
                                </div>
                                <div className='blog__inner'>
                                    <h3 className='blog__blog-name'>{blogpost.title}</h3>
                                    <h4 className='blog__testimonial-date'>
                                        {new Date(blogpost.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                                    </h4>
                                    <p className='home__description'>{blogpost.summary}</p>
                                </div>
                            </div>
                        ))}
            </section>
        </main>
        <Footer/>
        </>
    );
}

export default Blog;