import { useState } from 'react'
import Lenis from 'lenis'
import * as StarWalk from "./components"
import './App.css'

const App = () => {
  const lenis = new Lenis({
  autoRaf: true,
});
lenis.on('scroll', (e) => {
  console.log(e);
});
  return (
    <>
      <StarWalk.Navbar />
      <StarWalk.Hero />
    </>
  )
}

export default App
