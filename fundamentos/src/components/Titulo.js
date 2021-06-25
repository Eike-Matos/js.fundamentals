import React, {Fragment} from 'react'
import { SafeAreaView, Text} from 'react-native'
import Estilo from './estilo'

export default props => {
        <Fragment> {/* sem importar o Fragmment, poderia abrir e fechar por <> e </>*/}
            <Text style={Estilo.txtG}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </Fragment>
}
