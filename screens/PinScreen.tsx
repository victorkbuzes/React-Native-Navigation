import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { View,  StyleSheet, Image, Text, Pressable } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import pins from '../data/pins'

export const PinScreen = () => {
    const [ratio, setRatio] =useState(1);
    const route = useRoute();
    const navigation =  useNavigation();
    const insets = useSafeAreaInsets();

    const pinId = route.params?.id;
    const  pin =  pins.find((p) => p.id === pinId);

   
    
  useEffect(() => {
    if (pin?.image) {
      Image.getSize(pin.image, (width, height) => setRatio(width / height));
    }
  }, [pin]);
  const goBack = () => {
    navigation.goBack();

  }
  if (!pin) {
    return  <Text>Pin not found</Text>
    
  }

  return (
    <SafeAreaView  style={{backgroundColor: 'black'}}>
        <StatusBar  style= 'light' />
        <View style={styles.root}>
        <Image 
        source={{ uri: pin.image}} 
        style= {[styles.image, {aspectRatio: ratio}]}
        />
        <Text style={styles.text}> {pin.title}</Text>

    </View>
    <Pressable onPress={goBack} style={[styles.backBtn, {top: insets.top + 20}]}>
        <Ionicons name = {'chevron-back'} size={35} color={"white"} />

    </Pressable>
   

    </SafeAreaView>

   
  )
}
const styles = StyleSheet.create({
    root: {
        height: '100%',
        backgroundColor:"white",
        borderTopLeftRadius: 50,
        borderBottomEndRadius: 50,

    },
    image: {
        width: "100%",
        borderTopLeftRadius: 50,
        borderBottomEndRadius: 50,
        
    },
    text: {
        margin:10,
        fontSize: 24,
        fontWeight: "600",
        textAlign: "center",
        lineHeight: 35

    },
    backBtn: {
        position: "absolute",
        
        left:20,

    }
})
