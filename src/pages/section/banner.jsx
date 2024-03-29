import image from '../../component/banner.JPG'
import imageHTML from '../../component/logo tech stack/HTML5_logo_and_wordmark.svg'
import imageCSS from '../../component/logo tech stack/css-logo.png'
import imageJS from '../../component/logo tech stack/JavaScript-logo.png'
import imageREACT from '../../component/logo tech stack/react-1-logo-png-transparent.png'
import imageSCSS from '../../component/logo tech stack/Sass_Logo_Color.svg'

import resumePdf from '../../component/CVJeky.pdf'

export default function Banner() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePdf;
        link.download = 'Curriculum Vitae - Zaky Irsyad Rais.pdf';
        link.click();
    };
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="banner_container">
            <div className="text_banner">
                <p className='me_banner'>Hello, im Zaky Irsyad Rais</p>
                <p className='header_banner'>Frontend Developer</p>
                <p className='desc_banner'>People used to call me <b>Jeky</b>. Undergraduate informatics engineering students mastering frontend developers, can help you in developing websites with an attractive appearance.</p>
                <a href="/" onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}>
                    <button className="button_banner get">
                        Get in Touch
                    </button>
                </a>
                <button className='button_banner' onClick={handleDownload}>
                    My Resume
                </button>
            </div>
            <div className="image_banner">
                <img src={image} alt="" srcset="" className='image_content' />
            </div>
            <div className='scroll_down'>
                Scroll Down
                <span class="material-symbols-outlined">
                    arrow_downward
                </span>
            </div>
        </section>
    );
} 