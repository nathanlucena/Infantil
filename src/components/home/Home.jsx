import React from 'react';
import './Home.css';
import Header from '../header/Header';
import Body from '../Body/Body'

export default function Home() {
  return (
    <div className="HomePage">
      <Header></Header>
      <Body></Body>
    </div>
  );
}

