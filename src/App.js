import './App.css';
import { Auth } from './components/Auth';
import Cookies from "universal-cookie"
import { useRef, useState } from 'react';
import { Chat } from './components/Chat';
const cookies = new Cookies()

function App() {
  const [isAuth, setIsAuth] = useState( cookies.get("auth-token"))
  const [room, setRoom] = useState(null)
  const roomInputRef = useRef(null)

  if (!isAuth) {
    return (
      <div className="App">
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }
  return (
    <div>{room ? 
      <Chat />
      : 
      <div>
        <label>Enter Room name:</label>
        <input type="text" ref={roomInputRef} />
        <button onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button>
      </div>
        }
    </div>
  )
}

export default App;
