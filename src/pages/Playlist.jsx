import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Playlist.css';

const Playlist = () => {

    return (
        <>
        <div className="playlist-page">
            <div className="link-wrapper">
                <Link to="/" className="playlist-link">
                    Home
                </Link>
            </div>
            <div className="playlist-wrapper">
                <div className="track-thall-wrapper">
                    <div className="track-thall">
                        <p>
                            THALL
                        </p>
                    </div>
                </div>
                <div className="playlist-container">
                    <iframe src="https://open.spotify.com/embed/playlist/7IwsTX2xGq3Qcg8BSUaURY?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </div>
            </div>
        </div>
        </>
    )
}

export default Playlist