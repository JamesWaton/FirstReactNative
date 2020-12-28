

import React from 'react';
import { StyleSheet, Text, TouchableHighlight, Image, View, Alert, SafeAreaView, Platform, Button, StatusBar,  } from 'react-native';
// not working use this to get dimentions as it works better than the react native way. 
//import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'; 



// const orientation = useDeviceOrientation()
// const dimensions = useDimensions()



// This maps to either android or the ios interface
 export default function App() {

//   console.log(dimensions);
//   console.log(orientation);


  return (
    <SafeAreaView style={ styles.container  } >
      <View
         style= {{
           backgroundColor:"red",
           flex: 1,
           width:"100%",
           height: "30%",
           
           left:70,

         }}

         >



     </View>
  <View style= {{
   backgroundColor:"gold",
   
   width:100,
   height: 30,
   
   position:"relative",

  }}
   />
  <View style= {{
   backgroundColor:"greenyellow",
   flex:1,
   width:"100%",
   height: "30%",
   alignItems:"center",

          }}
   />
  <View style= {{
   backgroundColor:"",
   flex:1}}
   />
 
      <Text>hehe What's up dogg I'm here g.</Text>

{/* Only for IOS (cancelled out as using android) used for getting information*/}
      {/* <Button 
      color="green"
      title="input "
      onPress={() =>
         Alert.prompt("My input", "My message", text => console.log(text))
  }
       /> */}
     

         <Button 
      color="brown"
      title="click Me "
      onPress={() => Alert.alert("My title", "My message", [    
      {text:"Yes", onPress:() => console.log("Pressed Yes")},
      {text:"NO", onPress:() => console.log("Pressed NO")},
    ])
  }
       />

      <TouchableHighlight onPress={() => console.log("Image tapped")}>
        <Image 
      fadeDuration={10000}
      blurRadious={10} 
      
      source={{
        
        width:200, 
        height:300,
        uri: 'https://picsum.photos/200/300'} }/>
      </TouchableHighlight>
      
      <StatusBar translucent backgroundColor="transparent" />
    </SafeAreaView>
  );

}

const containerStyle = { backgroundColor: "orange"};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: 0,
    
    
    alignItems:"center",

    
  },
 
 

});
