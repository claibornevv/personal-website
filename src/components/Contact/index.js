import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

import { Loader } from 'react-loaders'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={[
                                'C',
                                'o',
                                'n',
                                't',
                                'a',
                                'c',
                                't',
                                ' ',
                                'M',
                                'e',
                            ]}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am currently searching for a career in Software
                        Engineering! I would love to discuss any potential
                        opportunities so feel free to get in touch with me!
                    </p>
                    <div className="contact-form">
                        <form>
                            <ul>
                                <li className="half">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required
                                    />
                                </li>
                                <li className="half">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input
                                        type="submit"
                                        className="flat-button"
                                        value="SEND"
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="social-links">
                    <ul>
                        <li>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.linkedin.com/in/claiborne-van-voorhis/"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    color="#ddedf4"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/claibornevv"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    color="#ddedf4"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact
