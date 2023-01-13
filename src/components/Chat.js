import { addDoc, collection, serverTimestamp, query, onSnapshot, where, orderBy } from "firebase/firestore"
import { useEffect, useState } from "react"
import { auth, db } from "../firebase-config"

export const Chat = ({room}) => {

    const [newMessage, setNewMessage] = useState("")

    const messagesRef = collection(db, "messages")

    const [messages, setMessages] = useState([])

    useEffect(() => {
        const queryMessages = query(messagesRef, where("room", "==", room ), orderBy("createdAd"))
        const unscribe = onSnapshot(queryMessages, (snapShot) => {
            let messages = []
            snapShot.forEach((doc) => messages.push({...doc.data(), id: doc.id}))
            setMessages(messages)
        })
        
        return () => unscribe()

    },[])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(newMessage === "") return 
        await addDoc(messagesRef, {
            txt: newMessage,
            createdAd: serverTimestamp(),
            user: auth.currentUser.displayName,
            room
        })
        setNewMessage('') 
    }

    return (
        <div className="chat-app">
            <form 
                className="new-message-form"
                onSubmit={handleSubmit}
                >
                <input
                onChange={(e) => setNewMessage(e.target.value)} 
                type="text"
                className="new-message-input"
                placeholder="Type your message here..."
                value={newMessage}
                />
                <button type="submit" className="sent-btn">Sent</button>
            </form>
            <div className="mess">
                <div className="room"><h2>welcome to: {room.toUpperCase()}</h2></div>
                {messages.map((message) => (
                    <div key={message.id}>
                        <h3>{message.user}</h3>
                        <h1>{message.txt}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}