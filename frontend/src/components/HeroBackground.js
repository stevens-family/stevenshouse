import { useState, useEffect } from 'react';

const heroImages = [
  'https://images.pexels.com/photos/4259136/pexels-photo-4259136.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.unsplash.com/photo-1647616907232-c47755e74ed1?w=1200&q=80',
  'https://images.unsplash.com/photo-1577896849786-738ed6c78bd3?w=1200&q=80',
  'https://images.pexels.com/photos/4933700/pexels-photo-4933700.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/4259134/pexels-photo-4259134.jpeg?auto=compress&cs=tinysrgb&w=1200',
];

export const HeroBackground = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex((nextIndex + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 2500); // Crossfade duration
      
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [nextIndex]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Current Image */}
      <div
        className="absolute inset-0 transition-opacity duration-[2500ms] ease-in-out"
        style={{
          opacity: isTransitioning ? 0 : 1,
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImages[currentIndex]})`,
            filter: 'blur(1.5px)',
            transform: 'scale(1.05)',
          }}
        />
      </div>

      {/* Next Image (fading in) */}
      <div
        className="absolute inset-0 transition-opacity duration-[2500ms] ease-in-out"
        style={{
          opacity: isTransitioning ? 1 : 0,
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImages[nextIndex]})`,
            filter: 'blur(1.5px)',
            transform: 'scale(1.05)',
          }}
        />
      </div>

      {/* Top gradient fade - darker at top for header readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(11, 12, 15, 0.85) 0%, rgba(11, 12, 15, 0.5) 25%, rgba(11, 12, 15, 0.35) 50%, rgba(11, 12, 15, 0.5) 75%, rgba(11, 12, 15, 0.9) 100%)',
        }}
      />

      {/* Subtle warm tint overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(198, 168, 90, 0.03) 50%, transparent 100%)',
        }}
      />

      {/* Edge vignette for focus */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(11, 12, 15, 0.4) 100%)',
        }}
      />
    </div>
  );
};
