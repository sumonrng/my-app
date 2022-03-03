import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu = () =>{
    const navigation = useNavigation();
    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={()=> navigation.navigate('Course')}
                >
                <Image 
                    style={styles.iconStyle}
                    source={{
                        uri:"https://img.icons8.com/stickers/90/000000/training.png"
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={()=> navigation.navigate('Contact')}
                >
                <Image 
                style={styles.iconStyle}
                source={{
                    uri:"https://img.icons8.com/stickers/90/000000/training.png"
                }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}
            onPress={()=> navigation.navigate('About')}
            >
            <Image 
                style={styles.iconStyle}
                source={{
                    uri:"https://img.icons8.com/stickers/90/000000/about.png"
                }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}
            onPress={()=> navigation.navigate('User')}
            >
            <Image 
                style={styles.iconStyle}
                source={{
                    uri:"https://img.icons8.com/stickers/90/000000/phone-office.png"
                }}
                />
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
    },
    iconStyle:{
        width:"100%",
        height:50,
        aspectRatio:1,
    },
});
export default Menu;