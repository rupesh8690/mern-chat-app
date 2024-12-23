import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeleton/MessageSkeleton'
import useListenMessages from '../../hooks/useListenMessages'
const Messages = () => {
  const {messages,loading} = useGetMessages();
  // console.log(messages);
  useListenMessages();
  const lastMessageRef=useRef();
  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behaviour:"smooth"});
    },100)
    

  },[messages])

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length>0 && messages.map((message) =>(
        <div key={message._id}
        ref={lastMessageRef}>
          <Message  message={message}/>
          </div>
      ))}
      {loading && [...Array(3)].map((_,idx) => <MessageSkeleton key={idx}/>)}
      {!loading && messages.length ===0 && (
        <p className="text-center text-white">Send a message to start the conversation</p>
      )}



      
    </div>
  )
}

export default Messages

// started <code></code>
// import React from 'react'
// import Message from './Message'
// import useGetMessages from '../../hooks/useGetMessages'
// const Messages = () => {
//   const {messages,loading} = useGetMessages();
//   console.log("messages",messages);
//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>

      
//     </div>
//   )
// }

// export default Messages
