import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

export default props => {
    const lado = props.lado || 50
    return(
        <SafeAreaView style={{
            height: lado,
            width: lado,
            backgroundColor: props.cor || '#000'
        }}/>
    )
}
