import React,{ useContext } from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity,Image} from 'react-native';
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
        style = {styles.button5Min}
        onPress={() => setTimerDuration(300000)}
        >
      </TouchableOpacity>
      
      <TouchableOpacity 
        style = {styles.button10Min}
        onPress={() => setTimerDuration(600000)}
        >
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
  button5Min:{
    marginLeft:100,
    marginTop:20,
    zIndex:1,
    position:'absolute',
    width:50,
    height:50,
    borderRadius:10,
    backgroundColor:colors.GRAY
  },
  button10Min:{
    marginLeft:200,
    marginTop:20,
    zIndex:1,
    position:'absolute',
    width:50,
    height:50,
    borderRadius:10,
    backgroundColor:colors.GRAY
  },
});
