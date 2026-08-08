import React, { useEffect, useRef } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
import logoImage from './images/rikin-name.png';

const NetflixTitle = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const audio = new Audio(netflixSound);
    audio.preload = 'auto';
    audio.load();
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const handleTap = () => {
    if (startedRef.current) return;
    startedRef.current = true;

    const logo = logoRef.current;
    const audio = audioRef.current;

    // Apply animation class in the same turn as play() so they start together
    // (avoids React setState → re-render lag after audio begins)
    logo?.classList.add('animate');

    if (audio) {
      audio.currentTime = 0;
      void audio.play().catch((error) => console.error('Audio play error:', error));
    }

    window.setTimeout(() => {
      navigate('/browse');
    }, 3800);
  };

  return (
    <div className="netflix-container" onClick={handleTap} role="button" tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleTap();
      }}
    >
      <img
        ref={logoRef}
        src={logoImage}
        alt="Rikin Patel"
        className="netflix-logo"
      />
    </div>
  );
};

export default NetflixTitle;
