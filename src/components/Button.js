import React from 'react';
import { View,TextInput ,StyleSheet,Text,TouchableOpacity,ActivityIndicator} from 'react-native';
const Button=({onPress})=>{
    return(
<TouchableOpacity style={style.buttoncontainer} onPress={onPress}
    >

    <Text style={{color:'white',fontSize:18}}>Submit</Text>
</TouchableOpacity>
    );};
const style=StyleSheet.create({
    buttoncontainer:{
        width:'90%',
        height:70  ,
       marginVertical:10, 
       alignItems:'center',
       justifyContent:'center',
       backgroundColor:'black',
       borderRadius:10,
    },})
export default Button;