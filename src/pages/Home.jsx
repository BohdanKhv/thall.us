import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';
import tracks from '../data/tracks.json';


const Home = () => {
    const [item, setItem] = useState(tracks[Math.floor(Math.random() * tracks.length)]);
    const [isMuted, setIsMuted] = useState(false);

    const handleSwitch = () => {
        document.querySelector('.track-image-container').classList.remove('image-animation');
        document.querySelector('.track-name').classList.remove('opacity-animation');
        document.querySelector('.track-artist').classList.remove('opacity-animation');
        setItem(tracks[Math.floor(Math.random() * tracks.length)]);
    }

    const volumeUp = () => {
        const audio = document.querySelector('audio');

        if(audio.currentTime < 3) { 
            audio.volume += 0.01
        } else if(audio.currentTime > 7 && audio.volume > 0) {
            audio.volume -= 0.01
        }
    }

    const createAudio = () => {
        document.querySelector('audio') && document.querySelector('audio').remove();

        const audio = document.createElement('audio');
        audio.src = item.preview;
        audio.autoplay = true;
        audio.loop = true;
        audio.volume = 0;
        audio.muted = isMuted;

        setTimeout(() => {
            document.querySelector('.track-image-container').classList.add('image-animation');
        }, 100);
        setTimeout(() => {
            document.querySelector('.track-name').classList.add('opacity-animation');
            document.querySelector('.track-artist').classList.add('opacity-animation');
        }, 1000);
        document.body.append(audio);
    }

    useEffect(() => {
        createAudio();
        const interval = setInterval(volumeUp, 100);

        return () => {
            console.log('cleaning up');
            clearInterval(interval);
        }
    }, [item])

    useEffect(() => {
        createAudio();
        const interval = setInterval(handleSwitch, 10000);

        return () => {
            clearInterval(interval);
            document.querySelector('audio') && document.querySelector('audio').remove();
        }
    }, []);

    return (
        <div 
            className="home-page" 
            onClick={() => {
                document.querySelector('audio')?.play()
            }}>
            <div className="link-wrapper">
                <Link
                    to="/playlist"
                    className="playlist-link"
                >
                    Playlist
                </Link>
            </div>
            <div 
                className="mute" 
                title="Mute" 
                onClick={() => {
                    setIsMuted(!isMuted); 
                    document.querySelector('audio').muted = !isMuted;
                }}>
                {isMuted ? 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
                    <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
                    <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
                </svg>
                }
            </div>
            <div className="track-image-wrapper">
                <div className="track-image-container">
                    <img className="track-image" src={item.image} alt={item.name} />
                </div>
            </div>
            <div className="track-thall-wrapper">
                <div className="track-thall">
                    <p>
                        THALL
                    </p>
                </div>
            </div>
            <div className="track-artist-wrapper">
                <div className="track-artist">
                    <p>
                    {item.artist}
                    </p>
                </div>
            </div>
            <div className="track-name-wrapper">
                <div className="track-name">
                    <p>
                    {item.name}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home