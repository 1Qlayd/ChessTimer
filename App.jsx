import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import { Timer } from 'react-native-stopwatch-timer';
import React, { useState } from 'react';
import colors  from './styles/colors';

export default function App() {

  const [timerDuration, setTimerDuration] = useState(180000);
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isTimerStart2, setIsTimerStart2] = useState(false);
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
  }

  return (
    <View style={styles.container}>   

      <TouchableOpacity 
        disabled = {Toggle ? false : true} 
        style = {[styles.buttonUp, { backgroundColor: Toggle ? colors.GREEN : colors.GRAY }]}
        onPress = {changeToggle}
        > 
        <Timer
                totalDuration={timerDuration}
                msecs = {true}
                hour={false}
                start={isTimerStart}
                reset={false}
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
                reset={false}
                options={options}
                handleFinish ={() => {}}
                    />
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

const options = {
  container: {
    width:'100%',
    height:'50%',
    alignItems: 'center',
    justifyContent:'center',
  },
  text: {
      fontSize: 25,
      color: '#FFF',
      marginLeft: 7,
  },
};