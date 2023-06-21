import React from 'react';
import './contacts.scss';
import Container from "../../components/container/container";

const Contacts = () => {
    return (
        <section className="contacts">
            <Container>
                <div className="contacts__headline">Contacts</div>
                <div className="contacts__title">You can contact me any time</div>
                <div className="contacts__list">
                    <div className="contacts__list-contact">
                        <img src="#" alt="icon" className="contacts__list-contact__image"/>
                        <div className="contacts__list-contact__box">
                            <div className="title">
                                Telegram
                            </div>
                            <a href="#" className="link">
                                https://t.me/unnamedii
                            </a>
                        </div>
                    </div>
                    <div className="contacts__list-contact">
                        <img src="#" alt="icon" className="contacts__list-contact__image"/>
                        <div className="contacts__list-contact__box">
                            <div className="title">
                                Mail
                            </div>
                            <a href="#" className="link">
                                isaingashev@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contacts;