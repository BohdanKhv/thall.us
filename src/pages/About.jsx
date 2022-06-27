import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {

    useEffect(() => {
        document.title = 'THALL | What Is Thall?';
    }, [])

    return (
        <div className="about-container">
            <div className="about">
                <h1>
                    What Is Thall?
                </h1>
                <div>
                    'Thall' is a term coined by Swedish metal band Vildhjarta. Though the meaning of the term is widely debated, it is accepted to be a positive statement about something that is very metal. The word is also commonly used to describe Vildhjarta's signature style of low-tuned, abrasive, discordant death metal, with which they branched out from the djent scene in 2011. The style has since been replicated and built upon by many bands within the scene.
                    <br />
                    <br />
                    <div>
                        <a href="https://www.instagram.com/vildhjartaofficial" target="_blank">Vildhjarta</a>
                        <a href="https://www.instagram.com/humanityslastbreathofficial" target="_blank">Humanity's Last Breath</a>
                        <a href="https://www.instagram.com/aaruband" target="_blank">Aaru</a>
                        <a href="https://www.instagram.com/alltband" target="_blank">Allt</a>
                        <a href="https://www.instagram.com/path_of_giants" target="_blank">Path of Giants</a>
                    </div>
                    <h4>T h a l l</h4>
                </div>
            </div>
        </div>
    )
}

export default About