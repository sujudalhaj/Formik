import React from 'react';
 import { TextInput, View ,StyleSheet } from 'react-native';
 import { Formik } from 'formik';
 import Input from '../Input';
 import Button from '../Button';
 import * as yup from 'yup';

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
export default function LoginPage() {
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
    <Button onPress={handleSubmit}/>
    

  </View>
    )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margineTop:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
