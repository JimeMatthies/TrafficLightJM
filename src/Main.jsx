import React from 'react';
import Footer from './components/Footer';
import TrafficLight from './components/TrafficLight';
import './App.css';

export function Main({ footer }) {
    return (
        <>
            <TrafficLight />
            <Footer footer={footer} />
        </>
    )
}