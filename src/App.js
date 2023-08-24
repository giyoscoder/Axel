import React, {useState} from 'react';
import {motion} from 'framer-motion'
import './App.css';

const App = () => {

  return (
    <div className='example-container relative'>
      <motion.h1 animate={{fontSize: 50, x: [-200, 0], y:[100, 0] }} transition={{duration: 2,}}>Welcome this page!</motion.h1>
    </div>
  )
}

export default App