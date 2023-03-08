import AOS from 'aos';
AOS.init();

export default function Project() {
    return (
        <section className="project_container" id="project">
            <div data-aos="fade-down" data-aos-duration="1000">
                <p className="project_text">
                    <span class="material-symbols-outlined icon">
                        browse_activity
                    </span>
                    Project Jeky
                </p>
            </div>
            <div className="project project01" data-aos="fade-left" data-aos-duration="1000">
                <div className="project_box">
                    <p className="project_name">CREATE UR WEBSITE</p>
                    <button className="button_project">Show Project</button>
                    <p className="project_desc">
                        Create ur Website Agency
                        This is a website made for an agency company, which is a website creation service.<br></br>
                        Tech task using: React JS.
                    </p>
                </div>
                <div className="project_feature">
                    <p className="feature_text">Feature:</p>
                    <ul>
                        <li>No loading page to page.</li>
                        <li>Have 3 pages (Home About Contact).</li>
                        <li>Have a not found page (404 page not found).</li>
                        <li>Available media (Image and Video).</li>
                        <li>Attractive page and button.</li>
                        <li>Contact send to email and whatssapp.</li>
                        <li>Responsive Website all devices.</li>
                        <li>Easy accesibility.</li>
                    </ul>
                </div>
            </div>
            <div className="project" data-aos="fade-right" data-aos-duration="1000">
                <div className="project_box">
                    <p className="project_name">EXPRIMER</p>
                    <button className="button_project">Show Project</button>
                    <p className="project_desc">Exprimer is an application website that provides a mental health service, shares complaints, and provides mental health knowledge.<br></br>
                        Tech task using: React JS.
                    </p>
                </div>
                <div className="project_feature">
                    <p className="feature_text">Feature:</p>
                    <ul>
                        <li>Free post to users to complain about what is experienced by them.</li>
                        <li>Being an intermediary for people who have mental problems can consult with a psychologist.</li>
                        <li>Users can be anonymous.</li>
                        <li>Have an online and offline consul session for consultation to a psychologist.</li>
                        <li>Having knowledge features about mental health.</li>
                        <li>Users can conduct a consul without having to have an agreement for consulting directly with a chat feature with a psychologist.</li>
                        <li>Having a posting feature that can interact with other users with comments and reaction.</li>
                        <li>Having a page algorithm or relevant discussion posts experienced by the user.</li>
                        <li>Having a report feature for users who are reported because they are not in accordance with other user policies and privacy.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}