import { useEffect, useState } from 'react';
import './styles/Home.css';
import tracks from '../data/tracks.json';


const Home = () => {
    const [item, setItem] = useState(tracks[0]);
    const [itemCount, setItemCount] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [play, setPlay] = useState(false);

    const handleSwitch = () => {
        document.querySelector('.track-image-container').classList.remove('image-animation');
        document.querySelector('.track-name').classList.remove('opacity-animation');
        document.querySelector('.track-artist').classList.remove('opacity-animation');
        const audio = document.querySelector('audio');
        audio.volume = 0;

        audio.src = item.preview;
        audio.muted = isMuted;

        setTimeout(() => {
            document.querySelector('.track-image-container').classList.add('image-animation');
            document.querySelector('.track-name').classList.add('opacity-animation');
            document.querySelector('.track-artist').classList.add('opacity-animation');
        }, 100);

        setItem(tracks[itemCount + 1 >= tracks.length ? 0 : itemCount + 1]);
        setItemCount(itemCount + 1 >= tracks.length ? 0 : itemCount + 1);
    }

    const volumeUp = () => {
        const audio = document.querySelector('audio');

        setCurrentTime(audio.currentTime);

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
        handleSwitch();
        document.title = 'THALL';
        const intervalVolume = setInterval(volumeUp, 100);

        return () => {
            clearInterval(intervalVolume);
        }
    }, [])

    return (
        <>
            <div className="track-current-wrapper">
                <div className="track-current-container">
                    {currentTime.toFixed(2)}
                </div>
            </div>
            <div className="flex buttons">
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
                <div 
                    className="skip" 
                    title="Skip" 
                    onClick={() => {
                        handleSwitch();
                    }}>
                    <svg viewBox="0 0 16 16">
                        <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.713 3.31 4 3.655 4 4.308v7.384c0 .653.713.998 1.233.696L11.5 8.752V12a.5.5 0 0 0 1 0V4zM5 4.633 10.804 8 5 11.367V4.633z"/>
                    </svg>
                </div>
                <div 
                    className="play" 
                    title="Play\Pause" 
                    onClick={() => {
                        setPlay(!play); 
                        if(document.querySelector('audio').paused){
                            document.querySelector('audio').play()
                        } else {
                            document.querySelector('audio').pause()
                        }
                    }}>
                    {play ? 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                    </svg>
                    }
                </div>
            </div>
            <div className="track-image-wrapper">
                <div className="track-image-container">
                    <img className="track-image" src={item.image} alt={item.name} />
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
            {item &&
            <audio src={item.preview} muted={isMuted} autoPlay={play} onEnded={handleSwitch}/>
            }
        </>
    )
}

export default Home