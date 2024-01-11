import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Message = ({ time, message, isLeft }) => {


    console.log('/////', message)

    return (
        <>
            <View style={styles.container}>
                <View style={styles.messageContainer}>
                    <View style={styles.messageView}>
                        <Text style={styles.message_here}>{message}</Text>
                        <Text>{message}</Text>
                        <Text>{time}</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Message

const styles = StyleSheet.create({})