import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Estilo from './estilo'

export default ({num = 0}) => {
    return(
        <SafeAreaView>
            <Text style={Estilo.fontG}>O resultado é: </Text>
            {num % 2 === 0
                ? <Text style={Estilo.fontG}>Par</Text>
                : <Text style={Estilo.fontG}>Ímpar</Text>
            }
        </SafeAreaView>
    )
}