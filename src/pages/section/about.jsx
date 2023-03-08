import AOS from 'aos';
AOS.init();

export default function About() {
    return (
        <section className="about_container" id="about" >
            <div data-aos="fade-left" data-aos-duration="1000">
                <p className="about_header">
                    <span class="material-symbols-outlined icon">
                        person
                    </span>
                    About Jeky
                </p>
                <p className="desc_about">
                    <span className="empty"></span>S1 student at the Islamic University of Indonesia majoring in informatics with a specialization in Frontend Developer.
                    Eager to gain new experiences to improve skills while contributing more to the company and community with good communication skills. Have a strong desire to learn, adaptable, organized, and able to work under pressure as a team or individually.
                    Mastering knowledge as a Frontend Developer namely HTML, CSS, Javascript and React JS.<br></br>
                    <span>_</span><br></br>
                    Looking for professional experience to improve my skills and knowledge also to prepare myself to be a reliable and skilled engineer in the future.
                </p>
            </div>
            <div className="about_link" data-aos="fade-right" data-aos-duration="1000">
                <a href="https://www.linkedin.com/in/zaky-irsyad-rais-047b83170/">Linked-in</a>
                <a href="https://github.com/zakyirsyaad">Github</a>
                <a href="https://www.instagram.com/zakyirsyaad/">Instagram</a>
            </div>
        </section>
    );
}