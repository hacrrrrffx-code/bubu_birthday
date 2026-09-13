import React, { useState } from 'react';
import '../LoveLetter.css';

export default function LoveLetter() {
    const [openEnvelope, setOpenEnvelope] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0); 
    const [hoveredLetter, setHoveredLetter] = useState(null); 

    const lettersData = [
        {
            id: 1,
            name: "",
            msg: "Since our first conversation, you’ve been the quiet spark that changed my world, turning ordinary days into moments that feel beautifully meant to be. Looking back at how seamlessly you walked into my life, I realize that the best things really do happen when you least expect them.",
        },
        {
            id: 2,
            name: "",
            msg: "You turned ordinary days into a memory my heart refuses to forget. Since then, every moment with you has felt softer, brighter, and filled with peace. It’s hard to put into words how effortless everything becomes when you’re around. You brought a gentle kind of magic into my life—the kind that doesn't make a loud entrance, but slowly fills every corner with warmth.",
        },
        {
            id: 3,
            name: "",
            msg: "Ever since we met, my heart knew where it wanted to stay—with you, in every soft moment, every smile, every quiet piece of forever. Before you came along, I never realized how much beauty lives in the simple, quiet corners of life. But with you, even the smallest moments feel deeply meaningful. The way your eyes light up when you laugh, the gentle warmth in your voice, and the unspoken understanding we share have created a space where I feel completely seen, safe, and truly at home.",
        },
        {
            id: 4,
            name: "",
            msg: "Our messages might travel through wires, but every word you send lands straight in my heart. Distance and screens lose all their power the moment a notification from you lights up my display, turning ordinary pixels into something deeply personal and comforting. <span><strong>Your messages aren't just words on a screen; they are gentle reminders of the comfort, understanding, and peace we share.</strong></span> <span><strong>No matter how busy life gets or how many miles lie between us, knowing you are just a message away makes everything feel lighter and infinitely better.</strong></span>",
        },
        {
            id: 5,
            name: "",
            msg: "Every notification from you feels like a heartbeat whispering, 'I’m here, and I love you.' In a world that is always loud and constantly moving, that single light on my screen is the one thing that instantly brings me back to a place of pure comfort and calm. You don't even have to say much to make your presence felt; just knowing you are on the other end of that message fills my space with a soft, steady warmth.",
        },
        {
            id: 6,
            name: "",
            msg: "Even through screens and pixels, your laugh reaches me like sunlight through a window—warm, real, and impossible to forget. No matter how far apart we might be or how quiet my day feels, that sound has a way of cutting through everything, filling my space with an instant, genuine warmth. Long after the screen turns off and the call ends, that warmth stays behind—a quiet, comforting memory that keeps me smiling.",
        },
        {
            id: 7,
            name: "My Love 🤗",
            msg: "One picture from you can change my whole day, my whole mood, my whole heartbeat. In a world full of noise and endless scrolling, a single glimpse of your face instantly stops time and brings everything into focus. You don't even have to try—just seeing your eyes and that familiar smile bridges every mile between us, making you feel right here beside me.",
        },
        {
            id: 8,
            name: "My Baby💗",
            msg: "Wish you the happiest birthday! 🎉 May this new year of your life bring you endless reasons to smile, big breakthroughs in everything you're working toward, and the kind of quiet peace that stays with you through every season. You deserve every bit of happiness, success, and love that comes your way—and so much more.",
        },
    ];

    const handleLetterClick = (e, index, isActive, isRead, id) => {
        e.stopPropagation();
        if (isActive) {
            if (currentIndex < lettersData.length) {
                setCurrentIndex((prev) => prev + 1);
            }
        } else if (isRead) {
            setHoveredLetter(hoveredLetter === id ? null : id);
        }
    };

    return (
        <main className='munna bg-[#8b0000] h-screen w-full overflow-hidden relative select-none flex items-center justify-center'>
            
            {/* Background Hearts */}
            <div className="munna heart-container absolute top-[8%] left-4 md:left-12 pointer-events-none z-0 opacity-40">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="munna heartBeating w-[80px] md:w-[120px] h-[140px]">
                    <path d="M471.7 73.6c-54.5-46.4-136-38.3-186.4 15.8L256 120.6l-29.3-31.2C176.3 35.3 94.8 27.2 40.3 73.6-18 125.4-13.3 221 43 273.7l187.3 177.6a24 24 0 0032.4 0L469 273.7c56.3-52.8 61-148.3 2.7-200.1z" fill="#b10505" />
                </svg>
            </div>
            <div className="munna heart-container absolute bottom-[8%] right-4 md:right-12 rotate-180 pointer-events-none z-0 opacity-40">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="munna heartBeating w-[80px] md:w-[120px] h-[140px]">
                    <path d="M471.7 73.6c-54.5-46.4-136-38.3-186.4 15.8L256 120.6l-29.3-31.2C176.3 35.3 94.8 27.2 40.3 73.6-18 125.4-13.3 221 43 273.7l187.3 177.6a24 24 0 0032.4 0L469 273.7c56.3-52.8 61-148.3 2.7-200.1z" fill="#b10505" />
                </svg>
            </div>

            {/* Falling Hearts (Snowflakes) */}
            <div className="munna snowflakes z-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="munna snowflake">
                        <img src="https://i.pinimg.com/originals/96/c7/8b/96c78bc8ab873498b763798793d64f62.png" width="25" alt="heart" />
                    </div>
                ))}
            </div>

            {/* Envelope Section */}
            <section className="munna cssletter z-10 flex items-center justify-center">
                <div className={`envelope ${openEnvelope ? "active" : ""}`}>
                    <button
                        className="munna heart"
                        id="openEnvelope"
                        aria-label="Open Envelope"
                        onClick={() => setOpenEnvelope(true)}
                    >
                        <span className="munna heart-text">Open</span>
                    </button>
                    <div className="munna envelope-flap text-black relative">
                        <div className='munna absolute left-1/2 top-[20%] -translate-x-1/2 flex items-center justify-center flex-col md:gap-y-2'>
                            <span className='munna font-sriracha md:text-2xl text-lg'>Envelope Of Love</span>
                            <span className='munna font-dancingScript md:text-3xl text-xl'>Dear Wifey🎀</span>
                        </div>
                    </div>
                    <div className="munna envelope-folds">
                        <div className="munna envelope-left"></div>
                        <div className="munna envelope-right"></div>
                        <div className="munna envelope-bottom"></div>
                    </div>
                </div>
            </section>

            {/* Letters Container */}
            <div className="munna letters fixed inset-0 pointer-events-none z-30">
                {lettersData.map((letter, index) => {
                    const isRead = index < currentIndex;
                    const isActive = index === currentIndex;
                    const isHovered = hoveredLetter === letter.id;

                    let styleObj = {};

                    if (!openEnvelope) {
                        styleObj = {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            transform: 'translate(-50%, -50%) scale(0.1)',
                            opacity: 0,
                            zIndex: 0,
                            pointerEvents: 'none'
                        };
                    } else if (isHovered || isActive) {
                        styleObj = {
                            top: '50%',
                            left: '50%',
                            right: 'auto', // Fix applied here to clear right positioning on hover/active
                            transform: 'translate(-50%, -50%) scale(1)',
                            transformOrigin: 'center center',
                            opacity: 1,
                            zIndex: isHovered ? 100 : 50,
                            pointerEvents: 'auto'
                        };
                    } else if (isRead) {
                        if (index < 4) {
                            const topOffset = 5 + index * 24; 
                            styleObj = {
                                top: `${topOffset}%`,
                                left: '12px',
                                right: 'auto',
                                transform: 'translate(0, 0) scale(0.33) rotate(-6deg)',
                                transformOrigin: 'top left',
                                opacity: 0.9,
                                zIndex: 10 + index,
                                pointerEvents: 'auto'
                            };
                        } else {
                            const rightIndex = index - 4;
                            const topOffset = 5 + rightIndex * 24; 
                            styleObj = {
                                top: `${topOffset}%`,
                                right: '12px',
                                left: 'auto',
                                transform: 'translate(0, 0) scale(0.33) rotate(6deg)',
                                transformOrigin: 'top right',
                                opacity: 0.9,
                                zIndex: 10 + index,
                                pointerEvents: 'auto'
                            };
                        }
                    } else {
                        styleObj = {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            transform: 'translate(-50%, -50%) scale(0.95)',
                            opacity: 0,
                            zIndex: 30 - index,
                            pointerEvents: 'none'
                        };
                    }

                    return (
                        <blockquote
                            key={letter.id}
                            className={`munna letter fixed bg-gradient-to-br from-white via-rose-50 to-pink-100 p-6 shadow-2xl rounded-2xl border-2 border-pink-300 transition-all duration-500 ease-in-out cursor-pointer flex flex-col justify-between ${
                                isActive ? 'ring-4 ring-pink-400/50 shadow-pink-300/60' : ''
                            }`}
                            style={{
                                ...styleObj,
                                width: '90vw',
                                maxWidth: '440px',
                                minHeight: '320px',
                            }}
                            onMouseEnter={() => isRead && setHoveredLetter(letter.id)}
                            onMouseLeave={() => isRead && setHoveredLetter(null)}
                            onClick={(e) => handleLetterClick(e, index, isActive, isRead, letter.id)}
                        >
                            {/* Card Header */}
                            <div className="flex items-center justify-between border-b border-pink-200 pb-2">
                                <span className="text-xs font-bold text-pink-600 tracking-wider uppercase">
                                    💌 Letter {index + 1} of {lettersData.length}
                                </span>
                                {isActive && (
                                    <span className="text-[11px] bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full font-semibold animate-pulse">
                                        Click to Next ➔
                                    </span>
                                )}
                            </div>

                            {/* Message Body */}
                            <div className="my-auto py-4 overflow-y-auto">
                                <p 
                                    className="text-gray-800 text-[15px] md:text-lg leading-relaxed font-sans text-center font-medium"
                                    dangerouslySetInnerHTML={{ __html: `"${letter.msg}"` }}
                                />
                            </div>

                            {/* Card Footer */}
                            {letter.name && (
                                <div className="border-t border-pink-200 pt-2 text-right">
                                    <cite className="block text-xl md:text-2xl font-bold text-rose-600 font-serif not-italic">
                                        - {letter.name}
                                    </cite>
                                </div>
                            )}
                        </blockquote>
                    );
                })}
            </div>
        </main>
    );
}