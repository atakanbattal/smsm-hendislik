import { useState, useRef, useEffect } from 'react'
import { sendMessage, clearChatHistory } from '../lib/gemini'

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Merhaba! SMS İnovasyon Mühendislik\'e hoş geldiniz. 👋 Size nasıl yardımcı olabilirim?' }
    ])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!input.trim() || isLoading) return

        const userMessage = input.trim()
        setInput('')
        setMessages(prev => [...prev, { role: 'user', content: userMessage }])
        setIsLoading(true)

        try {
            const response = await sendMessage(userMessage)
            setMessages(prev => [...prev, { role: 'assistant', content: response }])
        } catch (error) {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin veya iletişim sayfamızdan bize ulaşın.'
            }])
        } finally {
            setIsLoading(false)
        }
    }

    const handleClear = () => {
        clearChatHistory()
        setMessages([
            { role: 'assistant', content: 'Merhaba! SMS İnovasyon Mühendislik\'e hoş geldiniz. 👋 Size nasıl yardımcı olabilirim?' }
        ])
    }

    const quickQuestions = [
        'Hizmetleriniz nelerdir?',
        '13094 nedir?',
        'İletişim bilgileri'
    ]

    return (
        <>
            {/* Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${isOpen
                        ? 'bg-gray-700 hover:bg-gray-600'
                        : 'bg-primary hover:bg-primary-hover shadow-primary/30 hover:shadow-primary/50 hover:scale-110'
                    }`}
            >
                <span className="material-symbols-outlined text-2xl text-background-dark">
                    {isOpen ? 'close' : 'chat'}
                </span>
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-surface-dark border border-[#333] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-up">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary to-primary-hover p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <span className="material-symbols-outlined text-background-dark">smart_toy</span>
                            </div>
                            <div>
                                <h3 className="text-background-dark font-bold">SMS Asistan</h3>
                                <p className="text-background-dark/70 text-xs">Çevrimiçi</p>
                            </div>
                        </div>
                        <button
                            onClick={handleClear}
                            className="text-background-dark/70 hover:text-background-dark p-1"
                            title="Sohbeti Temizle"
                        >
                            <span className="material-symbols-outlined text-xl">refresh</span>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[400px] min-h-[300px] bg-background-dark">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${msg.role === 'user'
                                        ? 'bg-primary text-background-dark rounded-br-md'
                                        : 'bg-surface-dark border border-[#333] text-white rounded-bl-md'
                                    }`}>
                                    <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-surface-dark border border-[#333] rounded-2xl rounded-bl-md px-4 py-3">
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Questions */}
                    {messages.length <= 2 && (
                        <div className="px-4 pb-2 flex gap-2 flex-wrap bg-background-dark">
                            {quickQuestions.map((q, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setInput(q)
                                        handleSubmit({ preventDefault: () => { } })
                                    }}
                                    className="text-xs px-3 py-1.5 rounded-full bg-surface-dark border border-[#333] text-gray-400 hover:text-primary hover:border-primary/50 transition-colors"
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input */}
                    <form onSubmit={handleSubmit} className="p-4 border-t border-[#333] bg-surface-dark">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Mesajınızı yazın..."
                                className="flex-1 bg-background-dark border border-[#333] rounded-full px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary/50"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="w-10 h-10 rounded-full bg-primary hover:bg-primary-hover disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                            >
                                <span className="material-symbols-outlined text-background-dark text-lg">send</span>
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}
