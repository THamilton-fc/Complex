import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className='flex'>
      <div className='w-[20px] h-[2000px] bg-cover bg-[url(https://images.complex.com/complex/image/upload/f_auto,q_auto/complex_edge-v3_lqcs5n.png)]'>
      </div>
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
