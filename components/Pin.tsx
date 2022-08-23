import React, { useEffect, useState } from 'react'
import { View, Image, Text , StyleSheet , Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';




export const Pin = (props) => {
  const {id , image, title} = props.pin;
  const navigation = useNavigation();

  

  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => setRatio(width / height));
    }
  }, [image])
  const [ratio, setRatio] =useState(1/2);
  const onLike = () => {
  }
  const goToPinPage = () => {
    navigation.navigate("Pin", { id});
  };


  return (
    <Pressable onPress={goToPinPage} style={styles.pin}> 
      <View>
          <Image source={{
                uri: image
                }}
                style={[styles.image, {aspectRatio: ratio}]}
                
            />
            <Pressable onPress={onLike} style = {styles.hearthBtn}>
                <AntDesign name="hearto" size={16} color="black" />

            </Pressable>

        </View>
        <Text numberOfLines={2} style={styles.title}>{title}</Text>
      </Pressable>
  )
}
const styles = StyleSheet.create({
    pin: {
      width: '100%',
      padding: 4
    
      },
      title: {
        fontSize: 16,
        lineHeight:22,
        fontWeight: '600',
        margin: 5,
        color: '#181818',
      },
      image: {
        width: "100%" ,
        borderRadius: 15,
      
      },
      hearthBtn: {
        backgroundColor: "#D3CFD4",
        position: "absolute",
        bottom: 10,
        right: 10,
        padding: 5,
        borderRadius: 50,
      },
})
