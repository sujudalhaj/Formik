import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
function Details() {
  return (
    <View>
        <Text  style={styles.container}>Details</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
  });

export default Details