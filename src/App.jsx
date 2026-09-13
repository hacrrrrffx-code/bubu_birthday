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

  // ------------------ 10-Second Countdown Timer State
  const [timeLeft, setTimeLeft] = useState(10);
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsTimeUp(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);


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
    // Timer complete hone ke baad hi Cake Loader ki animation start hogi
    if (!isTimeUp) return;

    setTimeout(() => setAnimateOut(true), 8400);
    setTimeout(() => setLoading(false), 9000);
    setTimeout(() => setShowContent(true), 8600);

  }, [isTimeUp]);


  // 1. Jab tak 10 seconds pure nahi hote, tab tak sirf Countdown Screen dikhegi
  if (!isTimeUp) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fce4ec',
        fontFamily: 'sans-serif'
      }}>
        <h1 style={{ color: '#d81b60', marginBottom: '10px' }}>Surprise unlocks in...</h1>
        <div style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          color: '#ad1457',
          background: '#fff',
          padding: '15px 35px',
          borderRadius: '15px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
        }}>
          {timeLeft}s
        </div>
      </div>
    );
  }


  // 2. Timer 0 hote hi aapka Opening Animation aur Router natural flow mein start ho jayenge
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

export default App