import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import you_got_this_img from './images/u_got_this2.png';




const CountdownTimer = () => {
  const calculateTimeLeft = () => {
      const difference = +new Date('2024-01-05T18:00:00-08:00') - +new Date();
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
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
      const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
      if (!timeLeft[interval]) {
          return;
      }

      timerComponents.push(
          <span key={interval}>
              {timeLeft[interval]} {interval}{' '}
          </span>
      );
  });

  return (
      <div>
          <h1>Countdown to HOLDING HANDS WITH CHULA! 🥹🥹🥹 </h1>
          <h1>❤️☺️🤝☺️❤️</h1>
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          <p> P.S. Yeah, I am hard simping for Chula... </p>
          <h1></h1>
      </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CountdownTimer />
        <img src={you_got_this_img}></img>
      </header>
    </div>
  );
}

export default App;
