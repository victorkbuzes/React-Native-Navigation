import {   ScrollView, StyleSheet } from 'react-native';

import { MasonryList } from '../components/MasonryList';
import pins from '../data/pins';


export default function HomeScreen() {
  return (
    <MasonryList pins ={pins}/>
    
 
  );
}


