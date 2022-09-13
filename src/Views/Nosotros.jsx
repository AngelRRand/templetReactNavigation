import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import styles from '../Styles/StylesInicio';

const Nosotros = ({navigation}) => {
    const volver = ()=>{
        navigation.navigate('Inicio');
        //navigation.goBack();

    }

    return (
        <View style={styles.container}>
            <Text>Notros</Text>
            <Button
                title='Volver'
                onPress={()=> volver()}
            />
        </View>
    );
}

export default Nosotros;
