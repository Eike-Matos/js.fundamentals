import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import CompPadrao, { Comp1, Comp2} from './components/Multi'
import Primeiro from './components/Primeiro'

export default () => ( 
        <SafeAreaView>
            <CompPadrao/>
            <Comp1 />
            <Comp2 />
            <Primeiro/ >
        </SafeAreaView>
)
