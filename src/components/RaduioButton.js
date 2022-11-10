import React,{useEffect,useState} from "react";
import{Text,View,StyleSheet,TextInput,Alert} from 'react-native';
import {CheckBox} from 'react-native-elements';

const RaduioButton=()=>{
    const[male,setMale]=useState(false);
    const[female,setFemale]=useState(false);
    const[other,setother]=useState(false);
    const genderMale=()=>{setMale(true);setFemale(false);setother(false);}
    const genderFemale=()=>{setMale(false);setFemale(true);setother(false);}
    const genderOther=()=>{setMale(false);setFemale(false);setother(true);}


    
    return(
<View>
    <CheckBox
     title='Male' 
     center 
     checked={male}
     checkedIcon='dot-cirle-o'
     uncheckedIcon='circle-o'
    onPress={genderMale}
    />
    <CheckBox
     title='Female' 
     center 
     checked={male}
     checkedIcon='dot-cirle-o'
     uncheckedIcon='circle-o'
    onPress={genderFemale}
    />
    <CheckBox
     title='Other' 
     center 
     checked={male}
     checkedIcon='dot-cirle-o'
     uncheckedIcon='circle-o'
    onPress={genderOther}
    />
</View>
    )
};
export default RaduioButton;