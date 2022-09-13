import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import styles from '../Styles/StylesInicio';

const Inicio = ({navigation}) => {

    const irNosotros = ()=>{
        navigation.navigate('Nosotros')
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
