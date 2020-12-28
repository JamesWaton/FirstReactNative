import React from 'react';
import { ImageBackground, StyleSheet} from 'react-native';

function HomeScreen(props) {
    return (
     <ImageBackground
     style={styles.background}
     source={require("../assets/road.jpg")}
     >



  {/* <View style={styles. loginButton} ></View>  */}
 
     </ImageBackground>   
     
    );
}
const styles = StyleSheet.create({
     background: {
        flex:1,
     },
    //  loginButton:{
    //      width:'100%',
    //      height:70,
    //      backgroundColor: 'blue'
    //  },
})

export default HomeScreen;