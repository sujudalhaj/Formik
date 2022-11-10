import React from 'react';
 import { TouchableOpacity,Text,TextInput, View ,StyleSheet } from 'react-native';
 //import {LoginPage} from './src/components/screens/LoginPage';
 //import {HomeScreen} from './src/components/screens/HomeScreen'
 //import {Details} from './src/components/screens/Details'
 import { Formik } from 'formik';
 import Input from './src/components/Input';
 import Button from './src/components/Button';
 import * as yup from 'yup';
 import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('DetailsScreen')
      }}
    >
        <Text>DetailsScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Login')
      }}
    >
        <Text>LoginPage</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailsScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}



 const loginSchema=yup.object().shape({
  email: yup
    .string()
    .email()
    .required("Email is a required field"),


  password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
 })
function LoginPage({navigation}) {
  const handleSubmit=(values,{setSubmitting})=>{console.log(values,'printing');
setSubmitting(true);
};
  return (
    <Formik
    validationSchema={loginSchema}
    initialValues={{ email: '',password:'' }}
    onSubmit={handleSubmit}
  >
    {({ handleChange, handleBlur, handleSubmit,isSubmitting, setSubmitting,values,errors,touched }) => (
  
  <View  
  style={styles.container} >
    <Input placeholder='Enter Email' 
    value={values.email}
    onChangeText={handleChange('email')}
    error={touched.email && errors.email}/>
    <Input placeholder='Enter Password'
    value={values.password}
    onChangeText={handleChange('password')}
    keyboardType="default"
    autoCapitalize={'none'}
    secureTextEntry
    error={touched.password && errors.password}
    />
    <Button onPress={
      () => {
          /* 1. Navigate to the Details route with params */
          
          navigation.navigate('Home')
      }
      }/>
    

  </View>
    )}
    </Formik>
  );
}


 
export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="LoginPage">
    <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />


    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margineTop:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop:20
  },
});
