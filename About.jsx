import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity,ScrollView, View,Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Home({navigation}) {
  return (
     <ScrollView contentContainerStyle={styles.container}>
     <Image source={require('../assets/About us page-rafiki.png')} style={styles.logo}/>
     <Text style={styles.title}>Kalra Mathematics Classes</Text>
     <Text style={styles.description}>
       Welcome to Kalra Mathematics Classes, where we believe in nurturing minds towards a mathematical journey. Founded by the renowned educator Mr. Kalra, our classes provide a comprehensive learning experience for high school and college mathematics. Join us to explore the world of numbers in a way you've never experienced before.
     </Text>
     <View style={styles.contactInfo}>
       <Text style={styles.contactTitle}>Contact Us</Text>
       <Text style={styles.contactDetail}>Email: info@kalramathclasses.com</Text>
       <Text style={styles.contactDetail}>Phone: +123 456 7890</Text>
     </View>
     <Text style={styles.quote}>
       "Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding." - William Paul Thurston
     </Text>
   </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop:70,
    padding: 40,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75, // Makes the image circular
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 20,
  },
  contactInfo: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contactDetail: {
    fontSize: 16,
    marginBottom: 5,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
  },
});
  