import React, {useState} from 'react'
import Alex from '../assets/alex_avatar.png'

const AskAlex = () => {
    const [message, setMessage] = useState('')
    const [messageLog, setMessageLog] = useState([])

    const AlexReply = ({text}) => {
        return (
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                    <img src={Alex} />
                    </div>
                </div>
                <div className="chat-header">
                    Alex Bot 
                    <time className="text-xs opacity-50"> 12:45</time>
                </div>
                <div className="chat-bubble">{text}</div>
            </div>
        )
    }

    const UserReply = ({text}) => {
        return(
            <> 
                <div className="chat chat-end">
                    <div className="chat-header">
                        <time className="text-xs opacity-50">12:46</time>
                    </div>
                <div className="chat-bubble">{text}</div>
                </div>

                <div className="form-control w-full max-w-xs">
                </div>
            </>
        )
    }

    const handleChange = (e) => {
        setMessage(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(message)
        setMessageLog([...messageLog, {role: "user", message: message}])
        setMessage('')
    }
    
    return (
        <>
        <section className='fixed bottom-10 right-8 w-3.5'> 
            <div className='flex justify-center'> 
                <div className="p-10 bg-white">
                    <AlexReply text="Ask me anything :)" />
                    {messageLog.map(item => {
                        return (
                            item.role == "user" ? <UserReply text={item.message} /> : <AlexReply text={item.message} />
                        )
                    }) }
                    
                    <div className='float-right'>
                        <form onSubmit={handleSubmit}> 
                        <input type="text" placeholder="Ask Alex something" value={message} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
                        </form>
                    </div>
                </div>
            </div>
            </section>

            {/* The button to open modal */}
            <label htmlFor="my-modal" className="btn">open modal</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                <div className="modal-action">
                <label htmlFor="my-modal" className="btn">Yay!</label>
                </div>
            </div>
            </div>
            </>
  )
}

export default AskAlex





// This is before trying to use the DaisyUI Modal
{/* <section className='fixed bottom-10 right-8 w-3.5'> 
<div className='flex justify-center'> 
    <div className="p-10 bg-white">
        <AlexReply text="Ask me anything :)" />
        {messageLog.map(item => {
            return (
                item.role == "user" ? <UserReply text={item.message} /> : <AlexReply text={item.message} />
            )
        }) }
        
        <div className='float-right'>
            <form onSubmit={handleSubmit}> 
            <input type="text" placeholder="Ask Alex something" value={message} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
            </form>
        </div>
    </div>
</div>
</section> */}