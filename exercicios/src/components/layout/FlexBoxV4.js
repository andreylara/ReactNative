import React from 'react'
import { SafeAreaView, StyleSheet, View} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return(
        <SafeAreaView style={style.FlexV4}>
            <View style={style.V0} />   
            <View style={style.V1} />   
            <View style={style.V2} />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: '#000'
    },    
    V0: {
        backgroundColor: '#36c9a7',
        height: 300
    },
    V1: {
        backgroundColor: '#ff801a',
        flexGrow: 1
    },
    V2: {
        backgroundColor: '#dd22c1',
        flexGrow: 1
    }
})