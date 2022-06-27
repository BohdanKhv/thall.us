import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({children}) => {

    useEffect(() => {
        const thallInterval = setInterval(() => {
            const thall = document.querySelectorAll('.track-thall span');
            // get random number between 0 and thall.length
            const random = Math.floor(Math.random() * thall.length);
            document.querySelector('.thall-animation')?.classList?.remove('thall-animation');
            thall[random]?.classList?.add('thall-animation');
        }, 1000);

        return () => {
            clearInterval(thallInterval);
        }
    }, [])

    return (
        <div className="page">
            <div className="link-wrapper">
                <NavLink to="/" className="playlist-link">
                    Home
                </NavLink>
                <NavLink to="/playlist" className="playlist-link">
                    Playlist
                </NavLink>
                <NavLink
                    to="/what-is-thall"
                    className="playlist-link"
                >
                    What Is Thall?
                </NavLink>
            </div>
            {children}
            <div className="track-thall-wrapper">
                <div className="track-thall">
                    <p>
                        <span>T</span><span>H</span><span>A</span><span>L</span><span>L</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Nav