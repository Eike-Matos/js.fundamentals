import React from 'react'
import Filho from './Filho'
import { Text } from 'react-native'
import Estilo from '../estilo'

export default props => {

    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0)

    function exibirValor(Numero, texto) {
        setNum(numero)
        setTexto(texto)
    }
    return (
        <>
            <Text style={Estilo.txtG}>{num}
                {texto}{num}
            </Text>
            <Filho 
                min={1}
                max={60}   
                funcao={exibirValor}
            />
        </>

     )
}