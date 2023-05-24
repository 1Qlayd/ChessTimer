import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import React, { useState } from 'react';
import colors  from './styles/colors';

export default function App() {

  const [Toggle, setToggle] = useState(true);
  
  const changeToggle  = () => {
      if(Toggle)
      setToggle(false)
      else
      setToggle(true)
  }

  return (
    <View style={styles.container}>   

      <TouchableOpacity 
        disabled = {Toggle ? false : true} 
        style = {[styles.buttonUp, { backgroundColor: Toggle ? colors.GREEN : colors.GRAY }]}
        onPress = {changeToggle}
        >
        <Text style={styles.text}>TIMER</Text>
      </TouchableOpacity> 

      <TouchableOpacity 
        disabled = {Toggle ? true : false} 
        style={[styles.buttonDown,{backgroundColor: Toggle ? colors.GRAY : colors.GREEN}]}
        onPress = {changeToggle}
        >
        <Text style={styles.text}>TIMER</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BLACK,
    justifyContent:'center',

  },
  text:{
    color:colors.WHITE,
    fontSize:50,
  },
    buttonUp:{
      width:'100%',
      height:'50%',
      borderRadius:5,
      alignItems: 'center',
      justifyContent:'center',
      transform: [{rotate: '180deg'}],
    },
    buttonDown:{
      backgroundColor:colors.BLACK,
      borderRadius:5,
      width:'100%',
      height:'50%',
      alignItems: 'center',
      justifyContent:'center',
    },
});
