import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Estilo from './estilo'

export default props => (
    <SafeAreaView>
        <Text style={Estilo.fontG}>{props.principal}</Text>
        <Text style={Estilo.fontG}>{props.secundario}</Text>
    </SafeAreaView>

)
