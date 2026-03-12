'use client';

import { useState, useRef, useEffect } from 'react';

export default function ChatConcierge() {
    const [chatOpen, setChatOpen] = useState(false);
    const [greeted, setGreeted] = useState(false);
    const [messages, setMessages] = useState([]);
    const [typing, setTyping] = useState(false);
    const [input, setInput] = useState('');
    const [currentMode, setCurrentMode] = useState('normal');
    const [franchiseData, setFranchiseData] = useState({});
    const messagesRef = useRef(null);

    useEffect(() => {
        if (messagesRef.current) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    }, [messages, typing]);

    const toggleChat = () => {
        const newOpen = !chatOpen;
        setChatOpen(newOpen);
        if (newOpen && !greeted) {
            setMessages([
                {
                    type: 'bot',
                    text: 'Welcome to La Caféine ☕<br/><br/>How may I assist you today — with our curated menu or our franchise opportunity?',
                },
            ]);
            setGreeted(true);
        }
    };

    const sendMessage = async (msg) => {
        const updatedFranchiseData = { ...franchiseData };
        if (currentMode === 'franchise_city') updatedFranchiseData.city = msg;
        if (currentMode === 'franchise_investment') updatedFranchiseData.investment = msg;
        if (currentMode === 'franchise_name') updatedFranchiseData.name = msg;
        if (currentMode === 'franchise_phone') updatedFranchiseData.phone = msg;
        setFranchiseData(updatedFranchiseData);

        setMessages((prev) => [...prev, { type: 'user', text: msg }]);
        setTyping(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: msg,
                    mode: currentMode,
                    city: updatedFranchiseData.city || '',
                    investment: updatedFranchiseData.investment || '',
                    name: updatedFranchiseData.name || '',
                    phone: updatedFranchiseData.phone || '',
                }),
            });
            const data = await res.json();

            setTimeout(() => {
                setTyping(false);
                setMessages((prev) => [...prev, { type: 'bot', text: data.reply }]);
                setCurrentMode(data.next_mode || 'normal');
                if (data.next_mode === 'normal') {
                    setFranchiseData({});
                }
            }, 600 + Math.random() * 300);
        } catch {
            setTyping(false);
            setMessages((prev) => [...prev, { type: 'bot', text: 'Something went wrong. Please try again.' }]);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && input.trim()) {
            sendMessage(input.trim());
            setInput('');
        }
    };

    return (
        <div id="coffee-assistant">
            <div id="chat-box" style={{ display: chatOpen ? 'flex' : 'none' }}>
                <div id="chat-header">☕ La Caféine Concierge</div>
                <div id="chat-messages" ref={messagesRef}>
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={msg.type === 'user' ? 'user-message' : 'bot-message'}
                            dangerouslySetInnerHTML={{ __html: msg.text }}
                        />
                    ))}
                </div>
                {typing && (
                    <div id="typing-indicator" style={{ display: 'block' }}>
                        Brewing your response<span className="dots"></span>
                    </div>
                )}
                <input
                    type="text"
                    id="chat-input"
                    placeholder="Ask about menu or franchise..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
            </div>

            <div id="coffee-character" onClick={toggleChat}>
                <img src="/images/coffee-body.png" className="layer body" alt="" />
                <img src="/images/coffee-eyes-open.png" className="layer eyes" id="eyes-open" alt="" />
                <img src="/images/coffee-eyes-closed.png" className="layer eyes" id="eyes-closed" alt="" />
                <img src="/images/coffee-smile.png" className="layer smile" id="smile" alt="" />
                <img src="/images/coffee-steam.png" className="layer steam" alt="" />
            </div>
        </div>
    );
}
