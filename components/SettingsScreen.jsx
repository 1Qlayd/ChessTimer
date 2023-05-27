import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import colors  from '../styles/colors';

export const SettingsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>   

    <TouchableOpacity 
        style ={styles.buttonReset}
        onPress={() => navigation.goBack()}
        >
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent:'flex-start'
    
  },
  buttonReset:{
    zIndex:1,
    position:'absolute',
    width:100,
    height:200,
    backgroundColor: colors.BLACK,
    borderRadius:25,
  }
});
