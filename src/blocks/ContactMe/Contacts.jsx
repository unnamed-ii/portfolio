import React from 'react';
import './contacts.scss';
import Container from "../../components/container/container";
import {ReactComponent as GmailIcon} from "../../images/icons/gmail.svg";
import {ReactComponent as TelegramIcon} from "../../images/icons/telegram.svg";
import {ReactComponent as LinkedInIcon} from "../../images/icons/linkedin.svg";

const Contacts = () => {
    return (
        <section className="contacts" id="contacts-section">
            <Container>
                <div className="contacts__inner">
                    <div className="contacts__inner-headline">Contacts</div>
                    <div className="contacts__inner-title">Contact me any time</div>
                    <ul className="contacts__inner-list">
                        <li className="contacts__inner-list__contact">
                            <a href="https://t.me/unnamedii" className="link">
                                <TelegramIcon />
                            </a>
                            <div className="text">https://t.me/unnamedii</div>
                        </li>
                        <li className="contacts__inner-list__contact">
                            <a href="mailto:isaingashev@gmail.com" className="link">
                                <GmailIcon />
                            </a>
                            <div className="text">isaingashev@gmail.com</div>
                        </li>
                        <li className="contacts__inner-list__contact">
                            <a href="https://www.linkedin.com/in/isa-ingashev/" className="link">
                                <LinkedInIcon />
                            </a>
                            <div className="text">https://www.linkedin.com/in/isa-ingashev/</div>
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default Contacts;