import './index.scss'

import AnimatedLetters from '../AnimatedLetters'

import { /*useEffect,*/ useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faJsSquare,
    faAngular,
    faHtml5,
    faReact,
    faGitAlt,
} from '@fortawesome/free-brands-svg-icons'
import { Loader } from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I have been programming ever since my senior year of
                        high school. I am now profficient in a few different
                        languages including Python, Java, JavaScript, C/C++, and
                        eager to learn more!
                    </p>
                    <p>
                        Because of my college education in computer science, I
                        feel very confident about learning new languages and
                        technologies with ease. With each new challenge, I can
                        always fall back to what I learned in my education to
                        understand what's ahead of me.
                    </p>
                    <p>
                        If I were to define myself in one scentence, it would go
                        something like this: Adventurous and ambitious learner
                        who always looks for exciting and new opportunities to
                        connect with others.
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon
                                icon={faJsSquare}
                                color="#EFD81D"
                            />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                        <div className="face6"></div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About
