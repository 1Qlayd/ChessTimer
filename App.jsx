import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import React, { useState } from 'react';
import colors  from './styles/colors';

export default function App() {

  const [Toggler, setToggler] = useState(true);
  
  const changeToggler  = () => {
      if(Toggler)
      setToggler(false)
      else
      setToggler(true)
  }

  return (
    <View style={styles.container}>   

      <TouchableOpacity 
        disabled = {Toggler ? false : true} 
        style = {[styles.buttonDown, { backgroundColor: Toggler ? colors.GREEN : colors.GRAY }]}
        onPress = {changeToggler}
        >
        <Text style={styles.text}>TIMER</Text>
      </TouchableOpacity> 

      <TouchableOpacity 
        disabled = {Toggler ? true : false} 
        style={[styles.buttonUp,{backgroundColor: Toggler ? colors.GRAY : colors.GREEN}]}
        onPress = {changeToggler}
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
    buttonDown:{
      width:'100%',
      height:'50%',
      borderRadius:5,
      alignItems: 'center',
      justifyContent:'center',
      transform: [{rotate: '180deg'}],
    },
    buttonUp:{
      backgroundColor:colors.BLACK,
      borderRadius:5,
      width:'100%',
      height:'50%',
      alignItems: 'center',
      justifyContent:'center',
    },
});
