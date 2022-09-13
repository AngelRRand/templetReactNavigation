import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import styles from '../Styles/StylesInicio';

const Nosotros = ({navigation, route}) => {

    const {clienteID} = route.params;
    const volver = ()=>{
        navigation.navigate('Inicio');
        //navigation.goBack();

    }

    return (
        <View style={styles.container}>
            <Text>{clienteID}</Text>
            <Button
                title='Volver'
                onPress={()=> volver()}
            />
        </View>
    );
}

export default Nosotros;
