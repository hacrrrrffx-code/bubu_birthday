import React, { useEffect, useState } from 'react'
import './App.css'
import './LoveLetter.css'
import './BookCanvas.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './layout/Layout'
import Home from './pages/Home'
import LoveLetter from './pages/LoveLetter'
import Test from './pages/Test'
import OpeningAnimation from './components/OpeningAnimation'

const App = () => {

  // ------------------ 30-Minute Real-time Countdown State
  const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '30', seconds: '00' });
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    // Current time se exact 30 minutes aage ka target date
    const targetDate = new Date().getTime() + 30 * 60 * 1000;

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setIsTimeUp(true);
      } else {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0')
        });
      }
    };

    updateTimer(); // Initial call
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);


  // ------------------ Router Setup
  const MyRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path='love-Letter' element={<LoveLetter />}></Route>
        <Route path='test' element={<Test />}></Route>
      </Route>
    </Route>
  ))


  // ------------------ Cake loader 
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    if (!isTimeUp) return;

    setTimeout(() => setAnimateOut(true), 8400);
    setTimeout(() => setLoading(false), 9000);
    setTimeout(() => setShowContent(true), 8600);

  }, [isTimeUp]);


  // 1. 30 Minutes poore hone tak live timer screen dikhegi
  if (!isTimeUp) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fce4ec',
        fontFamily: "'Segoe UI', Roboto, sans-serif",
        textAlign: 'center',
        padding: '20px'
      }}>
        <h1 style={{ color: '#d81b60', marginBottom: '25px', fontSize: '2rem' }}>
          Surprise Unlocks In... 🎂✨
        </h1>
        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={timerBoxStyle}>
            <span style={timerNumStyle}>{timeLeft.hours}</span>
            <span style={timerLabelStyle}>Hours</span>
          </div>
          <span style={colonStyle}>:</span>
          <div style={timerBoxStyle}>
            <span style={timerNumStyle}>{timeLeft.minutes}</span>
            <span style={timerLabelStyle}>Mins</span>
          </div>
          <span style={colonStyle}>:</span>
          <div style={timerBoxStyle}>
            <span style={timerNumStyle}>{timeLeft.seconds}</span>
            <span style={timerLabelStyle}>Secs</span>
          </div>
        </div>
      </div>
    );
  }


  // 2. Timer 0 hote hi Opening Animation start ho jayega
  return (
    <>
      {
        loading && <OpeningAnimation animateOut={animateOut}/>
      }
      {
        showContent && <RouterProvider router={MyRoute} />
      }
    </>
  )
}

// Visual Design for Timer Cards
const timerBoxStyle = {
  background: '#fff',
  padding: '15px 18px',
  borderRadius: '12px',
  boxShadow: '0 4px 15px rgba(216, 27, 96, 0.15)',
  display: 'flex',
  flexDirection: 'column',
  minWidth: '65px'
};

const timerNumStyle = {
  fontSize: '2.4rem',
  fontWeight: 'bold',
  color: '#ad1457'
};

const timerLabelStyle = {
  fontSize: '0.75rem',
  color: '#888',
  marginTop: '4px',
  textTransform: 'uppercase',
  fontWeight: '600'
};

const colonStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#ad1457',
  marginTop: '-15px'
};

export default App
