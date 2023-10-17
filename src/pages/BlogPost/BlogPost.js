import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import {format} from 'date-fns'
import './BlogPost.scss'

const BlogPost = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [blogContent, setBlogContent] = useState('')
    const [image, setImage] = useState('')
    const [dateFinished, setDateFinished] = useState('')
    const [date, setDate] = useState('')

    const projectId = useParams().id
    console.log(projectId)

    useEffect(()=> {
            window.scrollTo({
                top: 0
            });
        
        axios.get(`https://clownfish-app-f6era.ondigitalocean.app/blog/blogpost/${projectId}`)
        .then((response) => {
            console.log(response.data)
            setTitle(response.data.title)
            setSummary(response.data.summary)
            setBlogContent(response.data.content)
            setImage(response.data.image.url)
            const foramtDate = new Date(response.data.createdAt);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            setDateFinished(foramtDate.toLocaleDateString('en-US', options))

        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const [isCopied, setIsCopied] = useState(false);

    const copyURL = () => {
        const urlInput = document.createElement('input');
        urlInput.value = window.location.href;
        document.body.appendChild(urlInput);
        urlInput.select();
        document.execCommand('copy');
        document.body.removeChild(urlInput);
        setIsCopied(true);
    
        // Reset the "Copied" status after 2 seconds
        setTimeout(() => {
          setIsCopied(false);
        }, 10000);
      };
      
    
    return (
        <>
        <Header/>
        <main className='blogpost'>
            <div className='blogpost__image' style={{ backgroundImage: `url(${image})` }}>
                <h1 className='blogpost__title'>{title}</h1>
                <h2 className='blogpost__date'>{dateFinished}</h2>
            </div>
            <div className='blogpost__article'>
                <section className='blogpost__content' dangerouslySetInnerHTML={{__html:blogContent}}/>
                <div className='blogpost__container'>
                    <button onClick={copyURL} className="blogpost__cta project__cta--secondary">{isCopied ? 'URL Copied' : 'Share'}</button>
                    <button onClick={()=>{navigate('/contact')}} className='blogpost__cta'>Contact</button>
                </div>
            </div>
        </main>
        <Footer/>
        </>
    );
}

export default BlogPost;