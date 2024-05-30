import React, { useState, useEffect } from 'react';
import backgroundImage from './assets/abstract-background.jpg';

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeLeft() {
    const targetDate = new Date('2024-06-15T00:00:00');
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const { days, hours, minutes, seconds } = countdown;

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Countdown to Launch June 15th 🎊</h1>
        <div className="flex flex-col md:flex-row justify-center mb-4">
          <div className="mx-4 mb-4 md:mb-0">
            <div className="text-4xl md:text-6xl font-bold">{days}</div>
            <div className="text-xl">Days</div>
          </div>
          <div className="mx-4 mb-4 md:mb-0">
            <div className="text-4xl md:text-6xl font-bold">{hours}</div>
            <div className="text-xl">Hours</div>
          </div>
          <div className="mx-4 mb-4 md:mb-0">
            <div className="text-4xl md:text-6xl font-bold">{minutes}</div>
            <div className="text-xl">Minutes</div>
          </div>
          <div className="mx-4">
            <div className="text-4xl md:text-6xl font-bold">{seconds}</div>
            <div className="text-xl">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;