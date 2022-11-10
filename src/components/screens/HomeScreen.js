import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
function HomeScreen() {
  return (
    <View>
        <Text  style={styles.container}>Home Screen</Text>
        <TouchableOpacity  style={styles.button}>Press Here</TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      },
  });

export default HomeScreen