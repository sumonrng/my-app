import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu = () =>{
    const navigation = useNavigation();
    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.buttonStyle}
            onPress={()=> navigation.navigate('Course')}
            >
                <Text style={styles.textStyle}>Course</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}
            onPress={()=> navigation.navigate('Contact')}
            >
                <Text style={styles.textStyle}>Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}
            onPress={()=> navigation.navigate('About')}
            >
                <Text style={styles.textStyle}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}
            onPress={()=> navigation.navigate('User')}
            >
                <Text style={styles.textStyle}>User</Text>
            </TouchableOpacity>
            
        </View>
    )
}
const styles = StyleSheet.create({
    menuContainer:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
    },
    textStyle:{
        textTransform:"uppercase",
        marginBottom:50
    }
});
export default Menu;