import React, { Component } from 'react';
import AOS from 'aos';
AOS.init();

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            showPopup: false
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Validasi input
        if (this.state.name && this.state.email && this.state.message) {
            // Tampilkan pop up jika input valid
            this.setState({ showPopup: true });
            // Kirim data formulir ke server
            // ...
            setTimeout(() => {
                this.setState({ showPopup: false });
            }, 3000);
        } else {
            // Tampilkan pesan kesalahan jika input belum valid
            alert('Mohon lengkapi semua input.');
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <section className="contact_container" id="contact">
                <p className="contact_header" data-aos="fade-up" data-aos-duration="1000">
                    <span class="material-symbols-outlined icon">
                        contact_page
                    </span>
                    Contact Jeky
                </p>
                <div className="get_box">
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <p className="info_header">GET IN TOUCH</p>
                        <p className="info_desc">By contacting us, you have stepped forward for the development of the website that you have.</p>
                        <p className="info_desc contact_person">
                            <span class="material-symbols-outlined contact_icon">
                                near_me
                            </span>
                            Daerah Istimewa Yogayakarta, Indonesia
                        </p>
                        <p className="info_desc contact_person">
                            <span class="material-symbols-outlined contact_icon">
                                call
                            </span>
                            0812-4193-3754
                        </p>
                        <p className="info_desc contact_person">
                            <span class="material-symbols-outlined contact_icon">
                                alternate_email
                            </span>
                            zkyxentertain@gmail.com
                        </p>
                    </div>
                    <form onSubmit={this.handleSubmit} data-aos="fade-left" data-aos-duration="1000">
                        <input type="text" name="name" id="name" placeholder="Name" required value={this.state.name} onChange={this.handleInputChange} />
                        <input type="email" name="email" id="email" placeholder="E-Mail" required value={this.state.email} onChange={this.handleInputChange} />
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Messages" required value={this.state.message} onChange={this.handleInputChange}></textarea>
                        <button type="submit" className="button_contact">Send Messages</button>
                    </form>
                    {this.state.showPopup &&
                        <div className="popup">
                            <p>Maaf untuk sementara anda tidak dapat mengirim pesan disini, silahkan mengirim pesan melalui website email anda.</p>
                        </div>
                    }
                </div>
            </section>
        );
    }
}
