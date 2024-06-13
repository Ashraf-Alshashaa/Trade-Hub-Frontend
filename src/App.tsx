import React from 'react';
import './App.css';
import Image from './components/image/image'

function App() {
  return (
    <div>
    <h1>Trade Hub</h1>
    <Image
      src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
      alt = ""
      width={400}
      height={400}
      className="responsive-image"
    />
  </div>
);
}

export default App;
