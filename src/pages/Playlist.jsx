import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import tracks from '../data/tracks.json';
import './styles/Playlist.css';

const Playlist = () => {
    const [plaing, setPlaying] = useState(null);
    const [time, setTime] = useState(0);

    const volumeUp = () => {
        const audio = document.querySelector('audio');

        setTime(audio.currentTime);

        if(audio) {
            if(audio.currentTime < 3 && audio.volume < 0.3){ 
                audio.volume += 0.01
            } else if(audio.currentTime > 27 && audio.volume > 0) {
                if(audio.volume > 0.01) {
                    audio.volume -= 0.01
                } else {
                    audio.volume = 0
                }
            }
        }
    }

    useEffect(() => {
        document.title = 'THALL | Playlist';
        
        const volumeTimer = setInterval(volumeUp, 100);

        const thallInterval = setInterval(() => {
            const thall = document.querySelectorAll('.track-thall span');
            const random = Math.floor(Math.random() * thall.length);
            document.querySelector('.thall-animation')?.classList?.remove('thall-animation');
            thall[random]?.classList?.add('thall-animation');
        }, 1000);

        return () => {
            clearInterval(thallInterval);
            clearInterval(volumeTimer);
        }
    }, [])

    return (
        <>
        <div className="playlist-page">
            <div className="link-wrapper">
                <Link to="/" className="playlist-link">
                    Home
                </Link>
            </div>
            <div 
                className="playlist-wrapper"
            >
                <div className="track-thall-wrapper">
                    <div className="track-thall">
                        <p>
                            <span>T</span><span>H</span><span>A</span><span>L</span><span>L</span>
                        </p>
                    </div>
                </div>
                <div className="playlist-container">
                    <div className="tracks">
                        {tracks.map((track, index) => (
                            <div
                                className={`playlist-track-wrapper${plaing?.id === track.id ? ' playlist-track-plaing': ''}`} 
                                key={index}
                                onClick={() => {
                                    if(document.querySelector('audio').src === track.preview && document.querySelector('audio').paused === false) {
                                        document.querySelector('audio').pause();
                                    } else if(document.querySelector('audio').src === track.preview && document.querySelector('audio').paused === true) {
                                        document.querySelector('audio').play();
                                    } else {
                                        document.querySelector('audio').currentTime = 0;
                                        document.querySelector('audio').pause();
                                        document.querySelector('audio').src = track.preview;
                                        setPlaying(track);
                                        setTime(0);
                                        document.querySelector('audio').volume = 0;
                                        document.querySelector('audio')?.play();
                                    }
                                }}
                            >
                                <img 
                                    src={track.image}
                                    alt={track.name}
                                />
                                <div className="playlist-track-info">
                                    <div className="playlist-track-timer" style={{
                                        width: `${plaing?.id === track.id ? time / 0.3 : "0"}%`
                                    }}/>
                                    <p className="playlist-track-name">{track.name}</p>
                                    <p className="playlist-track-artist">{track.artist}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <audio 
                    src={plaing?.audio}
                    loop
                />
            </div>
            <div className="track-artist-wrapper"
                style={{
                    position: 'absolute', 
                    pointerEvents: "none"
                }}>
                <div 
                className="track-artist" 
                style={{
                    opacity: '1',
                    animation: 'none!important',
                }}>
                    <p>
                    {plaing?.artist}
                    </p>
                </div>
            </div>
            <div className="track-name-wrapper"
                style={{
                    position: 'absolute', 
                    pointerEvents: "none"
                }}>
                <div className="track-name" 
                style={{
                    opacity: '1',
                    animation: 'none!important',
                }}>
                    <p>
                    {plaing?.name}
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Playlist