import { useEffect, useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import profileImage from '@/assets/DSC_2171@1584600290.jpg'

const whatsappUrl = 'https://wa.me/254790102460?text=Hello%20Hezron%2C%20I%20would%20like%20to%20talk%20with%20you.'

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isTyping, setIsTyping] = useState(true)
  const [messageTime, setMessageTime] = useState('')

  const openChat = () => {
    setIsTyping(true)
    setMessageTime('')
    setIsOpen(true)
  }

  useEffect(() => {
    if (!isOpen) return

    const timeout = window.setTimeout(() => {
      setIsTyping(false)
      setMessageTime(
        new Intl.DateTimeFormat(undefined, {
          hour: 'numeric',
          minute: '2-digit',
          hour12: false,
        }).format(new Date()),
      )
    }, 2600)

    return () => window.clearTimeout(timeout)
  }, [isOpen])

  return (
    <div className="chat-widget fixed bottom-6 left-5 z-[60] sm:bottom-8 sm:left-8">
      {isOpen && (
        <div className="mb-3 max-h-[calc(100svh-2rem)] w-[min(360px,calc(100vw-2rem))] overflow-y-auto overflow-x-hidden rounded-2xl bg-white text-slate-700 shadow-[0_22px_60px_rgba(15,23,42,0.3)] ring-1 ring-black/10">
          <div className="flex items-center justify-between bg-[#159487] px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white/70 bg-slate-200">
                <img src={profileImage} alt="Hezron Njenga" className="h-full w-full object-cover" />
                <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#159487] bg-[#20c76a]" />
              </div>
              <div>
                <p className="text-base font-bold text-white">Hezron Njenga</p>
                <p className="text-sm text-white/90">Online</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 text-white transition-colors hover:bg-white/15"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="chat-pattern min-h-[220px] bg-[#f7f7f7] px-3 py-5 sm:px-4">
            {isTyping ? (
              <div className="flex items-end gap-2">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                  <img src={profileImage} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="rounded-2xl rounded-bl-md bg-white px-5 py-4 text-base text-slate-600 shadow-sm">
                  Hezron Njenga is typing...
                  <span className="ml-1 inline-block animate-pulse">|</span>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-2">
                <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-slate-200">
                  <img src={profileImage} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="rounded-2xl rounded-tl-md bg-white px-5 py-4 text-base leading-7 text-slate-600 shadow-sm">
                  <p className="mb-1 font-medium text-slate-500">Hezron Njenga</p>
                  <p>Hi there 👋</p>
                  <p className="mt-3">Thank you for visiting my portfolio. How can I help you?</p>
                  <p className="mt-2 text-right text-xs text-slate-400">{messageTime}</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white p-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#20c76a] px-5 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-[#18b85e] hover:shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              Start Chat
            </a>
          </div>
        </div>
      )}

      {!isOpen && (
        <button
          type="button"
          onClick={openChat}
          className="group flex items-center gap-2 rounded-full bg-white px-5 py-3 text-base font-semibold text-[#16b85d] shadow-[0_10px_30px_rgba(15,23,42,0.25)] ring-1 ring-slate-200 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_14px_35px_rgba(15,23,42,0.3)]"
          aria-label="Open chat with Hezron Njenga"
        >
          <MessageCircle className="h-5 w-5" />
          Lets Talk
          <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-red-400 ring-2 ring-[#161F2E]" aria-hidden="true" />
        </button>
      )}
    </div>
  )
}
