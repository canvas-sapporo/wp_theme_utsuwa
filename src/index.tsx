import React from 'react';
import { createRoot } from 'react-dom/client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import App from './App';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}
