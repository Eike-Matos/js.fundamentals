import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Estilo from './estilo'

export default props => {
    return (
        <>
        <Text sytle={Estilo.txtG}>{props.a}</Text>
        <Text sytle={Estilo.txtG}>{props.b}</Text>
        </>

     )
}