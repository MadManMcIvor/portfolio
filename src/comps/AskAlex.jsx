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
        temperature: 0.2,
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

    // const getTimeStamp = () => {
    //     const date = new Date()
    //     return(date.toLocaleTimeString())
    // }

    const AlexReply = ({text}) => {
        return (
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full bg-slate-300">
                    <img alt="alex_avatar" src={Alex} />
                    </div>
                </div>
                <div className="chat-header text-gray-800">
                    Alex Bot
                    {/* <time className="text-xs opacity-50 p-2">{getTimeStamp()}</time> */}
                </div>
                <div className="chat-bubble bg-slate-500 text-white">{text}</div>
            </div>
        )
    }

    const UserReply = ({text}) => {
        return(
            <> 
                <div className="chat chat-end">
                    <div className="chat-header text-gray-800">
                        {/* <time className="text-xs opacity-50">{getTimeStamp()}</time> */}
                    </div>
                <div className="chat-bubble bg-blue-500 text-white">{text}</div>
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
            console.log("Message Log Before", messageLog)
            setMessageLog([...messageLog, {role: "user", content: message}, {role: "assistant", content: chatResponse.content}])
            console.log("Message Log After", messageLog)
            setMessage('')
        }
    }
    
    return (
        <>
            {/* The button to open modal */}
            <div className='fixed right-5 bottom-6 bg-transparent'>
                <label htmlFor="my-modal-6" className="btn text-white bg-slate-500"><BsFillChatRightTextFill size={20}/> 
                <div className='p-2'>Ask Alex</div>
                </label>
            </div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box bg-slate-200">
                <h3 className="font-bold text-lg text-gray-800">Introducing AlexBot-1.0</h3>
                <AlexReply text="Ask me anything :)" />
                {messageLog.map(item => {
                    return (
                        item.role == "user" ? <UserReply text={item.content} /> : 
                        <AlexReply text={item.content} />
                    )
                }) }
                <div className='float-right my-4'>
                    <form onSubmit={handleSubmit}> 
                    <input type="text" placeholder="Ask Alex something" value={message} onChange={handleChange} className="input input-bordered w-full max-w-xs bg-white text-gray-800" />
                    </form>
                <div className="modal-action">
                     <label htmlFor="my-modal-6" className="btn float-right bg-gray-600 text-white">X</label>
                </div>
                </div>
            </div>
            </div>
        </>
  )
}

export default AskAlex
