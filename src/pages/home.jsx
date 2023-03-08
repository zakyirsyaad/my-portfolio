import './home.css'
import '../component/button.css'
import Banner from './section/banner';
import About from './section/about';
import Project from './section/project';
import React from 'react';
import Contact from './section/contact';
import Footer from './section/footer';
import { useState } from 'react';

export default function Home() {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };
    const [toggleMenu, setToggleMenu] = useState(false)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
    return (
        <section className="home_container">
            <div className='top_container'>
                <nav className='navbar_container'>
                    <p className='name_navbar'>Jeky</p>
                    <div className='navbar_link'>
                        <a href="">Home</a>
                        <a href="/" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>About</a>
                        <a href="/" onClick={(e) => { e.preventDefault(); handleScroll('project'); }}>Project</a>
                        <a href="/" onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}>Contact</a>
                    </div>
                </nav>
                <nav className='navbar_container_phone'>
                    <div className='toggle_container'>
                        <span class="material-symbols-outlined nav_button_phone" onClick={toggleNav}>
                            menu
                        </span>
                        {toggleMenu && (
                            <div className='navbar_link_phone'>
                                <a href="" className='home'>Home</a>
                                <a href="/" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>About</a>
                                <a href="/" onClick={(e) => { e.preventDefault(); handleScroll('project'); }}>Project</a>
                                <a href="/" onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}>Contact</a>
                            </div>
                        )}
                    </div>
                </nav>
                <Banner />
            </div>
            <About />
            <Project />
            <Contact />
            <Footer />
        </section >
    );
}