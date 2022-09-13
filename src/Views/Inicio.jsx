import React from 'react';
import {View, Button} from 'react-native';
import styles from '../Styles/StylesInicio';

const Inicio = ({navigation}) => {

    const info = {
        clienteID:30,
        totalPagar: 500
    }

    const irNosotros = ()=>{
        navigation.navigate('Nosotros', info)
    }

    return (
        <View style={styles.container}>
            <Text>Inicio</Text>
            <Button
                title='Ir a nosotros'
                onPress={()=> irNosotros()}
            />
        </View>
    );
}

export default Inicio;
