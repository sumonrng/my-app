import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import Home from './src/screens/Home';

export default function App() {
  const description = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={require("./assets/header.jpg")}
        />
        <Text style={styles.mainHeader}>Welcome to </Text>
        <Text style={[styles.mainHeader,{
          fontSize: 33,
          color:"#4c5dab"
        }]}> Samiul Islam</Text>
        <Text style={styles.paraStyle}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height:"100%",
    display:"flex",
    justifyContent:"space-between",
    paddingHorizontal:20,
    backgroundColor:"#fff",
    textAlign:"center",

  },
  homeTop:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:10,
    
  },
  headerImage:{
    height:undefined,
    width:"100%",
    aspectRatio:1,
    marginTop:20,
    borderRadius:20,
  },
  mainHeader:{
    fontSize:30,
    color:"#344055",
    textTransform:"uppercase",
  },
  paraStyle:{
    textAlign:"left",
    fontSize:19,
    color:"#7d7d7d",
    marginTop:30,
    paddingBottom:50,
    lineHeight:26,
  }
});
