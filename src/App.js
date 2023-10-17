import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Admin from "./pages/Admin/Admin";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/BlogPost/BlogPost";
import Contact from "./pages/Contact/Contact";
import CreateBlog from "./pages/CreateBlog/CreateBlog";
import CreateProject from "./pages/CreateProject/CreateProject";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import Projects from "./pages/Projects/Projects";
import Team from "./pages/Team/Team";

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/createproject" element={<CreateProject/>}/>
        <Route path="/project/:id" element={<Project/>}/>
        <Route path='/createblog' element={<CreateBlog/>}/>
        <Route path='/blog/:id' element={<BlogPost/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
