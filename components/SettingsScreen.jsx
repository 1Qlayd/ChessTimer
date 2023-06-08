import React,{ useContext } from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import colors  from '../styles/colors';
import { TimerContext } from './TimerContext';

export const SettingsScreen = ({navigation}) => {
  
  const {timerDuration, setTimerDuration} = useContext(TimerContext);

  return (
    
    <SafeAreaView style={styles.container}>   

    <TouchableOpacity 
        style ={styles.buttonBack}
        onPress={() => navigation.goBack()}
        >
          <Image source={require('../assets/icon/IconBack.png')} style={styles.iconBack} />
      </TouchableOpacity>

      <TouchableOpacity 
        style = {styles.button1Min}
        onPress={() => setTimerDuration(60000)}
        >
          <Text style = {{fontSize:32}}>1 Min</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style = {styles.button3Min}
        onPress={() => setTimerDuration(180000)}
        >
          <Text style = {{fontSize:32}}>3 Min</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style = {styles.button5Min}
        onPress={() => setTimerDuration(300000)}
        >
          <Text style = {{fontSize:32}}>5 Min</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style = {styles.button10Min}
        onPress = {() => setTimerDuration(600000)}
        >
          <Text style = {{fontSize:32}}>10 Min</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'flex-start',
    
  },
  buttonBack:{
    marginTop:20,
    zIndex:1,
    position:'absolute',
    width:50,
    height:50,
    borderRadius:10,
    alignItems: 'center',
    justifyContent:'center',
  },
  iconBack:{
    width:37,
    height:34,
  },
  button1Min:{
    marginLeft:10,
    marginTop:70,
    zIndex:1,
    position:'absolute',
    width:190,
    height:190,
    borderRadius:10,
    backgroundColor:colors.GRAY,
    alignItems:'center',
    justifyContent:'center',
  },
  button3Min:{
    marginLeft:213,
    marginTop:70,
    zIndex:1,
    position:'absolute',
    width:190,
    height:190,
    borderRadius:10,
    backgroundColor:colors.GRAY,
    alignItems:'center',
    justifyContent:'center',
  },
  button5Min:{
    marginLeft:10,
    marginTop:270,
    zIndex:1,
    position:'absolute',
    width:190,
    height:190,
    borderRadius:10,
    backgroundColor:colors.GRAY,
    alignItems:'center',
    justifyContent:'center',
  },
  button10Min:{
    marginLeft:213,
    marginTop:270,
    zIndex:1,
    position:'absolute',
    width:190,
    height:190,
    borderRadius:10,
    backgroundColor:colors.GRAY,
    alignItems:'center',
    justifyContent:'center',
  },
});
