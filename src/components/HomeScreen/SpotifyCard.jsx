import React, { useState, useEffect } from "react";
import BelieverImage from "../../assets/Believer.png";

export default function SpotifyCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const song = {
    title: "Believer",
    artist: "Imagine Dragons",
    album: "Evolve",
    image: BelieverImage,
    duration: 224,
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="spotify-card">
      <div className="bg-animation"></div>
      <div className="bg-wave"></div>
      <div className="bg-particles"></div>
      
      <div className="header">
        <div className="spotify-icon">♫</div>
        <span className="spotify-text">Spotify</span>
      </div>
      
      <div className="content">
        <div className="album-art">
          <img src={BelieverImage} alt="Believer" className="album-image" />
        </div>
        
        <div className="song-info">
          <h3 className="title">{song.title}</h3>
          <p className="artist">{song.artist}</p>
          <p className="album">{song.album}</p>
        </div>
      </div>
      
      <div className="controls">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        
        <div className="buttons">
          <button className="control-btn">⏮</button>
          <button className="control-btn play-btn" onClick={togglePlay}>
            {isPlaying ? "⏸" : "▶"}
          </button>
          <button className="control-btn">⏭</button>
        </div>
      </div>
    </div>
  );
}



const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  .spotify-card {
    width: 100%;
    height: 256px;
    background: linear-gradient(145deg, rgba(26, 22, 18, 0.9), rgba(186, 167, 148, 0.9)), url(${BelieverImage});
    background-size: cover;
    background-position: center;
    border-radius: 16px;
    padding: 20px;
    color: #fff;
    font-family: Inter, sans-serif;
    box-shadow: 0 4px 20px rgba(0,0,0,.3);
    animation: cardFloat 0.8s ease-in;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(8px);
  }

  .spotify-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(186, 167, 148, 0.4);
  }

  .bg-animation, .bg-wave, .bg-particles {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }

  .bg-animation {
    background: linear-gradient(45deg, transparent, rgba(186, 167, 148, 0.15), transparent);
    animation: backgroundMove 3s ease-in-out infinite;
  }

  .bg-wave {
    background: radial-gradient(circle at 50% 50%, rgba(186, 167, 148, 0.1), transparent 70%);
    animation: waveMove 5s ease-in-out infinite reverse;
  }

  .bg-particles {
    background: repeating-linear-gradient(90deg, transparent, rgba(186, 167, 148, 0.05) 1px, transparent 2px);
    animation: particleMove 6s linear infinite;
  }

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    position: relative;
    z-index: 1;
  }

  .spotify-icon {
    font-size: 20px;
    margin-right: 8px;
  }

  .spotify-text {
    font-size: 14px;
    font-weight: 600;
    opacity: 0.9;
  }

  .content {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
  }

  .album-art {
    width: 80px;
    height: 80px;
    border-radius: 12px;
    background: linear-gradient(45deg, #5c4a3a, #7a6450);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    flex-shrink: 0;
    animation: albumSpin 4s linear infinite;
    border: 2px solid #baa794;
  }

  .album-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  .song-info {
    flex: 1;
    min-width: 0;
  }

  .title {
    margin: 0 0 4px 0;
    font-size: 18px;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .artist {
    margin: 0 0 2px 0;
    font-size: 14px;
    opacity: 0.8;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .album {
    margin: 0;
    font-size: 12px;
    opacity: 0.6;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .controls {
    margin-top: 16px;
    position: relative;
    z-index: 1;
  }

  .progress-bar {
    width: 100%;
    height: 4px;
    background: rgba(255,255,255,0.2);
    border-radius: 2px;
    margin-bottom: 16px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #baa794, #9c8266);
    border-radius: 2px;
    transition: width 0.1s linear;
    box-shadow: 0 0 10px rgba(186, 167, 148, 0.5);
    animation: progressGlow 2s ease-in-out infinite alternate;
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  .control-btn {
    background: rgba(186, 167, 148, 0.2);
    border: 1px solid #baa794;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    color: #baa794;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    animation: buttonGlow 2s ease-in-out infinite alternate;
  }

  .control-btn:hover {
    transform: scale(1.1);
    background: rgba(186, 167, 148, 0.4);
  }

  .play-btn {
    width: 48px;
    height: 48px;
    background: linear-gradient(45deg, #baa794, #9c8266);
    color: #1a1612;
    font-size: 18px;
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(186, 167, 148, 0.4);
    animation: playPulse 1.5s ease-in-out infinite;
  }

  .play-btn:hover {
    box-shadow: 0 6px 20px rgba(186, 167, 148, 0.6);
  }

  /* Mobile Styles */
  @media (max-width: 480px) {
    .spotify-card {
      max-width: 100%;
      min-width: 260px;
      padding: 16px;
      border-radius: 16px;
    }

    .album-art {
      width: 60px;
      height: 60px;
      margin-right: 12px;
    }

    .title {
      font-size: 16px;
    }

    .artist {
      font-size: 13px;
    }

    .album {
      font-size: 11px;
    }

    .control-btn {
      width: 36px;
      height: 36px;
      font-size: 14px;
    }

    .play-btn {
      width: 42px;
      height: 42px;
      font-size: 16px;
    }

    .buttons {
      gap: 12px;
    }

    .spotify-card:hover {
      transform: translateY(-5px) scale(1.01);
    }
  }

  /* Tablet Styles */
  @media (min-width: 481px) and (max-width: 768px) {
    .spotify-card {
      max-width: 300px;
      padding: 18px;
    }

    .album-art {
      width: 70px;
      height: 70px;
      margin-right: 14px;
    }

    .title {
      font-size: 17px;
    }

    .control-btn {
      width: 38px;
      height: 38px;
      font-size: 15px;
    }

    .play-btn {
      width: 45px;
      height: 45px;
      font-size: 17px;
    }

    .buttons {
      gap: 14px;
    }
  }

  /* Desktop Styles */
  @media (min-width: 769px) {
    .spotify-card {
      max-width: 320px;
    }
  }

  /* Large Desktop */
  @media (min-width: 1200px) {
    .spotify-card {
      max-width: 340px;
      padding: 22px;
    }

    .album-art {
      width: 85px;
      height: 85px;
    }

    .title {
      font-size: 19px;
    }

    .artist {
      font-size: 15px;
    }

    .control-btn {
      width: 42px;
      height: 42px;
      font-size: 17px;
    }

    .play-btn {
      width: 50px;
      height: 50px;
      font-size: 19px;
    }
  }

  @keyframes cardFloat {
    from { opacity: 0; transform: translateY(30px) scale(0.95); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
  
  @keyframes cardPulse {
    0%, 100% { box-shadow: 0 8px 25px rgba(0,0,0,.6); }
    50% { box-shadow: 0 12px 35px rgba(186, 167, 148, 0.3); }
  }
  
  @keyframes albumSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes buttonGlow {
    from { box-shadow: 0 0 5px rgba(186, 167, 148, 0.3); }
    to { box-shadow: 0 0 15px rgba(186, 167, 148, 0.6); }
  }
  
  @keyframes playPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  
  @keyframes progressGlow {
    from { box-shadow: 0 0 10px rgba(186, 167, 148, 0.5); }
    to { box-shadow: 0 0 20px rgba(186, 167, 148, 0.8); }
  }
  
  @keyframes backgroundMove {
    0% { transform: translateX(-100%) rotate(45deg) scale(1); }
    25% { transform: translateX(-50%) rotate(45deg) scale(1.1); }
    50% { transform: translateX(100%) rotate(45deg) scale(1); }
    75% { transform: translateX(50%) rotate(45deg) scale(0.9); }
    100% { transform: translateX(-100%) rotate(45deg) scale(1); }
  }
  
  @keyframes waveMove {
    0% { transform: scale(0.8) rotate(0deg); opacity: 0.3; }
    50% { transform: scale(1.2) rotate(180deg); opacity: 0.1; }
    100% { transform: scale(0.8) rotate(360deg); opacity: 0.3; }
  }
  
  @keyframes particleMove {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;
if (!document.head.querySelector('style[data-spotify-responsive]')) {
  styleSheet.setAttribute('data-spotify-responsive', 'true');
  document.head.appendChild(styleSheet);
}