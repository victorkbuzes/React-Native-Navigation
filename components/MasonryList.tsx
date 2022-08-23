import React from 'react'
import {   ScrollView, StyleSheet } from 'react-native';

import pins from '../data/pins';
import {  View } from '../components/Themed';
import { Pin } from '../components/Pin';

interface IMasonrtList {
    pins: {
        id: string;
        image: string;
        title: string;
    }[];
}


export const MasonryList = ({pins}: IMasonrtList) => {
  return (
    <ScrollView>
      
      <View style={styles.container}>
        <View style = {styles.column}>
          {pins.filter((_, index) => index %2 === 0).map(pin => (
            <Pin pin={pin} key={pin.id} />
             ))}

        </View>
        <View style = { styles.column}>
          {pins.filter((_, index) => index %2 === 1).map(pin => 
            <Pin pin={pin} key={pin.id} /> )}

        </View>

      </View>

    </ScrollView>
  
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 10,
    },
    column: {
      flex: 1,
  
    }
   
   
  
  });