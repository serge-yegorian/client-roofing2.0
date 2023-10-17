import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateBlog.scss'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import Footer from '../../components/Footer/Footer';

const CreateBlog = () => {

    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [projectContent, setProjectContent] = useState('')
    const [image, setImage] = useState('')
    const [dateFinished, setDateFinished] = useState('')

    const navigate = useNavigate();
    
    useEffect(()=> {
        const password = localStorage.getItem('floridakitchencabinetsPW');
        console.log(password)
        axios.post('https://clownfish-app-f6era.ondigitalocean.app/project/check', {password})
        .then((response) => {
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
            navigate('/admin')
        })
    }, [])

    const sendProject = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append("image", image)
        data.append("title", title)
        data.append("summary", summary)
        data.append("projectContent", projectContent)
        data.append("dateFinished", dateFinished)
        axios.post('https://clownfish-app-f6era.ondigitalocean.app/blog/blogpost', data)
        .then((response)=>{
            console.log(response.data)
            navigate(`/blog/${response.data._id}`)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      }

      const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ]
    
    

    return (
        <>
        <form className='cb' onSubmit={sendProject}>
            <h1 className='cb__heading'>Write New Blog Post</h1>
            <input className='cb__input' type={'title'} placeholder='Title' defaultValue={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <input className='cb__input cp__input--summary' type={'summary'} placeholder="Summary" defaultValue={summary} onChange={(e)=>{setSummary(e.target.value)}}/>
            <input className='cb__input' type={'text'} placeholder='Month and Year when project was Finished' defaultValue={dateFinished} onChange={(e)=>{setDateFinished(e.target.value)}}/>
            <input className='cb__file-input' accept="image/jpeg, image/jpg, image/png, image/gif" type={'file'} onChange={(e)=>{setImage(e.target.files[0]); console.log(image)}}/>
            <ReactQuill className='cb__quill' defaultValue={projectContent} formats={formats} modules={modules} onChange={(newValue)=>{setProjectContent(newValue)}}/>
            <button className='cb__cta'>Submit</button>
        </form>
        <Footer/>
        </>
    );
}

export default CreateBlog;