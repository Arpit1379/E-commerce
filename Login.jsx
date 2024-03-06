import { View, Text,StyleSheet ,TextField,Image} from 'react-native'
import React from 'react'

function Login() {
  return (
    <View>
      <Text>Login</Text>
      <TextField placeholder="Enter the Email"/>
      <TextField placeholder="Enter the Password"/>
    </View>
  )
}

const styles = StyleSheet.create({})

export default Login