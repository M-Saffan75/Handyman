import Message from './Message';
import React, { useRef, useState } from 'react';
import { StyleSheet, SrcollView } from 'react-native';


const MessagesListHere = () => {

    const [messages, setMessages] = useState([
        {
            user: 0,
            time: '12:00 PM',
            content: 'Hey',
        },
        {
            user: 1,
            time: '10:00 PM',
            content: "hey wahts'up",
        },
        {
            user: 1,
            time: '9:00 PM',
            content: 'how its going',
        },
        {
            user: 0,
            time: '8:00 PM',
            content: 'things are going greate',
        },
    ])

    const user = useRef(0);
    const scrollView = useRef();

    return (
        
            <SrcollView /* style={{ backgrounColor: 'grey' }} */
                ref={ref => scrollView.current = ref}
                onContentChange={() => {
                    scrollView.current.scrollToEnd({ animated: true })
                }}
            >
                {messages.map((message, index) => (
                    <Message
                        key={index}
                        time={message.time}
                        message={message.content}
                        isLeft={message.user !== user.current}
                    />
                ))}
            </SrcollView>
        
    )
}

export default MessagesListHere

const styles = StyleSheet.create({})