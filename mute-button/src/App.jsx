import { useState } from 'react'
import onIcon from './assets/icons/on.svg'
import offIcon from  './assets/icons/off.svg'
import './App.css'

function App() {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () =>  setIsMuted((prev) => !prev);

  return (
  <img src={isMuted ? offIcon : onIcon} onClick={toggleMute} className="logo" alt="Dumb Mute Button" />
)
}

export default App
