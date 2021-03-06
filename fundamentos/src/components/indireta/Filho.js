import { functionsIn } from 'lodash'
import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { Button } from 'react-native'
import Estilo from '../estilo'

export default props => {

    function gerarNumero(min, max) {
        const fator = max - min + 1
        return parseInt(Math.random() * fator) + min
    }
    return (
        <Button
            title="Executar"
            onPress={function() {
                const n = gerarNumero(props.min, prop.max)
                props.funcao(n, 'O valor é: ')

            }}
        />

     )
}