import React from 'react';
import './App.css';

// Импортируем каждый кусочек нашего конструктора
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Calculator from './components/Calculator';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Calculator />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}