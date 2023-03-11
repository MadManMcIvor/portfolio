import React, {useState} from 'react'
import Alex from '../assets/alex_avatar.png'
import {BsFillChatRightTextFill} from "react-icons/bs"

const { Configuration, OpenAIApi } = require("openai");

const callChatGPT = async (text, messageLog) => { 
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
      });
    const openai = new OpenAIApi(configuration);
      
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {role: "system", content: "You are a helpful assistant answering questions about this person from this resume: https://docs.google.com/document/d/1MlQVs8xzh7FFM4Kday8sr6_OQRpxsI606l2-9DKNnmw/edit?usp=sharing"}, ...messageLog,
            {role: "user", content: text}
        ],
      });
    console.log(completion.data.choices[0].message);
    return(completion.data.choices[0].message);
}

const AskAlex = () => {
    const [message, setMessage] = useState('')
    const [messageLog, setMessageLog] = useState([])
    const [counter, setCounter] = useState(0)

    const AlexReply = ({text}) => {
        return (
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                    <img alt="alex_avatar" src={Alex} />
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
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(message)
        setMessageLog([...messageLog, {role: "user", content: message}])
        const chatResponse = await callChatGPT(message, messageLog)
        console.log(chatResponse, "THIS IS FINALLY FIRING!")
        if (chatResponse) {
            setCounter(counter+1)
            console.log("Message Log Before", messageLog)
            setMessageLog([...messageLog, {role: "user", content: message}, {role: "assistant", content: chatResponse.content}])
            console.log("Message Log After", messageLog)
            setMessage('')
        }
    }
    
    return (
        <>
            {/* The button to open modal */}
            <div className='fixed right-5 bottom-6'>
                <label htmlFor="my-modal-6" className="btn"><BsFillChatRightTextFill size={20}/> Ask Alex</label>
            </div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Introducing AlexBot-1.0</h3>
                <AlexReply text="Ask me anything :)" />
                {messageLog.map(item => {
                    return (
                        item.role == "user" ? <UserReply key={`user ${counter}`} text={item.content} /> : 
                        <AlexReply key={`Alex ${counter}`} text={item.content} />
                    )
                }) }
                <div className='float-right my-4'>
                    <form onSubmit={handleSubmit}> 
                    <input type="text" placeholder="Ask Alex something" value={message} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
                    </form>
                <div className="modal-action">
                     <label htmlFor="my-modal-6" className="btn float-right">X</label>
                </div>
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