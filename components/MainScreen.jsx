import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Timer } from 'react-native-stopwatch-timer';
import colors  from '../styles/colors';

export const MainScreen = ({navigation}) => {

  const [timerDuration, setTimerDuration] = useState(180000);
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isTimerStart2, setIsTimerStart2] = useState(false);
  const [reset, setReset] = useState(false);
  const [Toggle, setToggle] = useState(false);
  

  const changeToggle  = () => {
      if(Toggle)
      setToggle(false)
      else
      setToggle(true)
      startWork();
  }

  const startWork = () => { //добавить второе нажатие на кнопку, чтобы таймер не запускался 

    if(Toggle === true){
      setIsTimerStart(false)
      setIsTimerStart2(true)
    }
    
    else {
      setIsTimerStart(true)
      setIsTimerStart2(false)
    }
    setReset(false)
  }

  const breakWork = () => {  
    return ( setIsTimerStart2(false), setIsTimerStart(false), setReset(true) )
  }

  return (
    <SafeAreaView style={styles.container}>   

      <TouchableOpacity 
        style ={styles.buttonReset}
        onPress={breakWork}
        >
        <Image source={require('../assets/icon/ResetIcon.png')} style={styles.resetIcon}/>
      </TouchableOpacity>

      <TouchableOpacity 
        style ={styles.buttonSettings}
        onPress={() => navigation.navigate('Settings')}
        >
      </TouchableOpacity>
        
      <TouchableOpacity
        disabled = {Toggle ? false : true} 
        style = {[styles.buttonUp, { backgroundColor: Toggle ? colors.GREEN : colors.GRAY }]}
        onPress = {changeToggle}
        > 
        <Timer
                totalDuration={timerDuration}
                msecs = {true}
                start={isTimerStart}
                reset={reset}
                options={options}
                handleFinish ={() => {}}
                    />
      </TouchableOpacity> 
      
      <TouchableOpacity 
        disabled = {Toggle ? true : false} 
        style={[styles.buttonDown,{backgroundColor: Toggle ? colors.GRAY : colors.GREEN}]}
        onPress = {changeToggle}
        >
        <Timer
                totalDuration={timerDuration}
                msecs = {true}
                start={isTimerStart2}
                reset={reset}
                options={options}
                handleFinish ={() => {}}
                    />
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BLACK,
    justifyContent:'center',
  },
  resetIcon:{
    width:30,
    height:30,
  },
  buttonSettings:{
    zIndex:1,
    position:'absolute',
    width:'15%',
    height:'7%',
    marginLeft:350,
    borderRadius:25,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent:'center',
    opacity: 0.9,
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
  buttonReset:{
    zIndex:1,
    position:'absolute',
    width:'15%',
    height:'7%',
    borderRadius:25,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent:'center',
    opacity: 0.9,
  }
});

const options = StyleSheet.create ({
  container: {
    width:'100%',
    height:'50%',
    alignItems: 'center',
    justifyContent:'center',
  },
  text: {
    fontSize: 25,
    color: colors.WHITE,
    marginLeft: 7,
  },
});