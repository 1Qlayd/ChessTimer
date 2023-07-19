import React from 'react';
import { View }  from 'react-native';
import { AppNavigator }  from './navigation/AppNavigator';
import TimerProvider from './components/TimerContext';

export default function App() {
  return (
    <TimerProvider>
      
      <View style ={{flex:1}}>    
      
        <AppNavigator/>

      </View>

    </TimerProvider>
  );
}