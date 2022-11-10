import React from 'react';
import { View,TextInput ,StyleSheet,Text} from 'react-native';
const Input=({ placeholder,value,onChangeText,error,secureTextEntry})=>{
    return(
        <View style={style.inputcontainer}>
            <TextInput 
            onChangeText={onChangeText}
            value={value}
            placeholder={ placeholder}
           style={style.input}
           secureTextEntry={secureTextEntry}
           />
                
           < Text style={style.error}>{error}</Text>
        </View>
    )
};
const style=StyleSheet.create({
    inputcontainer:{
        width:'90%',
        height:70  ,
       marginVertical:10, 
    },
    input:{
        flex:1,
        height:56,
        borderWidth:1,
        borderColor:'grey',
        borderRadius:5,
        paddingLeft:10,

    },
    error:{
        color:'red',
        fontSize:13,
        marginTop:3,
        paddingLeft:10

    }
})
export default Input;