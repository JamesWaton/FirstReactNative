# FirstReactNative
Notes

npm i -g expo-cli to install expo cli globally the easier way to use react native with lots of built in libraries and files.


extensions

React-Native/React/Redux snippets for es6/es7
Prettier - Code formatter
Material Icon Theme

In settings turn on format on safe  to use prettier every time I save.

expo init DoneWithItu  to create the app then choose the blank the first option of the managed workflow, not typescript. 

Learn how to set up a virtual device on mac and windows for android and ios


For debugging 30 mins in 

Change React-native port to the one I am using 19001

When restarting the android emulator server you need to delete the last emulator and restart a new one.



Publishing: (expo publish)  in terminal  → Make a new Expo account

Flex 1 is so it will fit the screen horizontally and vertically.




Getting the status bar to fit it was recommended to use safe area view although this didn’t work for my device so I had to figure out how to make it work or another way around for it to work on my android device so I used paddingTop: Platform.OS === 'android' ? 25 : 0,  To suit my samsung galaxy note 20.
Later realised why StatusBar.currentHeight wouldn’t work as this was another previous option from stackoverflow, as it suggested importing it from 'expo-status-bar';rather than the usual React-native  that later worked when I change where StatusBar was imported from. 




For local photos  <Image source={require("./assets/icon.png") }/>
For online photos 

  
Learning about buttons and the different functions they have and how not all functions work on android.

If I can’t connect to the published app I found If I connect to it through the web then scan the terminal QR code in the terminal. 


Visual display 
Let’s let’s get started 

Hooks: https://github.com/react-native-community/hooks couldn’t get to work but used to make landscape to take up the whole page and portrait to take up a different area. Easier to use in functions. 

 

