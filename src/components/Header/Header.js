import './Header.scss';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react';

const Header = () => {

    useEffect(()=> {
        window.scrollTo({
            top: 0
        });
    }, [])

    const navigate = useNavigate();

    const toggleMenu = (e) => {
        e.preventDefault();
        const menu = document.querySelector('.header__options');

        document.body.classList.toggle('disable-scroll')
        menu.classList.toggle('header__options--open')
        }

        // Apply a CSS class based on the isScrolled state

    return (
        <header className={`header`}>
            <div className='header__section'>
            <img onClick={()=>{navigate('/')}} className='header__logo' alt='logo' src={require('../../assets/images/logo.png')}/>
            <ul className='header__list'>
                <li className='header__li' onClick={()=>{navigate('/projects')}}>Projects</li>
                <li className='header__li' onClick={()=>{navigate('/blog')}}>Blog</li>
                <li className='header__li' onClick={()=>{navigate('/team')}}>Team</li>
                <li className='header__li header__li--cta' onClick={()=>{navigate('/contact')}}>Contact</li>
            </ul>
            <button type='button' className='header__cta'>Contact</button>
            <AiOutlineMenu className='header__icon header__icon--mobile' onClick={toggleMenu}/>
            <div className='header__options'>
                <ul className='header__list header__list--mobile'>
                <li className='header__li header__li--mobile' onClick={(e)=>{navigate('/'); toggleMenu(e)}}>Home</li>
                    <li className='header__li header__li--mobile' onClick={(e)=>{navigate('/projects'); toggleMenu(e)}}>Projects</li>
                    <li className='header__li header__li--mobile' onClick={(e)=>{navigate('/blog'); toggleMenu(e)}}>Blog</li>
                    <li className='header__li header__li--mobile' onClick={(e)=>{navigate('/team'); toggleMenu(e)}}>Team</li>
                    <li className='header__li header__li--cta' onClick={(e)=>{navigate('/contact'); toggleMenu(e)}}>Contact</li>
                </ul>
                <AiOutlineClose className='header__icon' onClick={toggleMenu} />
            </div>
            </div>
        </header>
    );
}

export default Header;