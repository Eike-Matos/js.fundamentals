import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Estilo from '../estilo'

export default props => {
    return (

        <SafeAreaView style={style.Display}>

           <Text style={Estilo.txtG}>
                {props.num}
            </Text>

        </SafeAreaView>

     )
}

const style = StyleSheet.creat({
    Display: {
        backgroundColor: '#000'
    },
    DisplayText: {
        color: '#FFF'
    }
})