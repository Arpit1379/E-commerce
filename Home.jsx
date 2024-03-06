import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
    <Image style={styles.HomeImage} source={require('../assets/Mathematics-rafiki.png')}/>
      <Text style={styles.homeText}>Welcome to Kalra's Mathematices Classes</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('About')}><Text style={styles.button}>Login
      <MaterialCommunityIcons name="math-compass" size={24} color="black" />
      </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems:'center',
      justifyContent:'center'
    },
    homeText:{
      color:"#3364CF",
      paddingTop:6,
      fontSize:16,
      fontWeight:'bold',
      paddingLeft:20
    },
    button:{
      paddingLeft:50,
      padding:20,
      borderColor:'#fff',
      fontSize:20,
      color:"#000",
      borderRadius:4
    },
    HomeImage:{
      width:300,
      height:300
    }
  });
  