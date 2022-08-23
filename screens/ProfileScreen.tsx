import { Entypo, Feather } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { MasonryList } from '../components/MasonryList';


import { Text, View } from '../components/Themed';
import pins from '../data/pins';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <View style={styles.icons}>
        <Feather name = "share"  size={24} color="black" style = {styles.icon}/>
        <Entypo
           name = "dots-three-horizontal" 
           size={24} 
           color="black" style = {styles.icon} />
        </View>
      
        <Image source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/8.jpeg"
        }}  style={styles.image} />
        <Text  style={styles.title} numberOfLines={2}>Victor Buzes</Text>
        <Text  style={styles.subtitle} >1M Followers</Text>

      </View>
      <MasonryList pins={pins} />

    
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    
  },
  icon: {
    paddingHorizontal: 10
    
  },
  icons: {
    flexDirection: 'row',
    alignSelf:"flex-end"

  },
  header: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    aspectRatio: 1,
    borderRadius: 200,
    marginVertical:10

  },
  subtitle: {
  
    fontWeight: '600',
    color:'181818',
    margin: 10,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    margin: 10,
    
  },

});
