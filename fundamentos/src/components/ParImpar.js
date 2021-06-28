import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Estilo from './estilo'

// Com renderização condicional!!!
export default ({num = 0}) => {
    return (
        <SafeAreaView>
            <Text>O resultado é:</Text>
            {num % 2 === 0
                ? <Text style={Estilo.txtG}>Par</Text>
                : <Text style={Estilo.txtG}>Impar</Text>
            }                
        </SafeAreaView>
        )
}

// Sem renderização condicional!
/*export default ({num = 0}) => {
    if(num % 2 === 0){
    return (
        <SafeAreaView>
            <Text>O resultado é:</Text>
            <Text style={Estilo.txtG}>Par</Text>
        </SafeAreaView>
     )
    } else {
        return (
            <SafeAreaView>
                <Text>O resultado é:</Text>
                <Text style={Estilo.txtG}>Impar</Text>
            </SafeAreaView>
        )
    }
}*/