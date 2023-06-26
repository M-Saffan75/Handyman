import Main from './AppNavigator/Main'
import theme from './Toggle.js/theme';
import DefaultTheme from 'react-native-paper'
import React, { useEffect, useState } from 'react'
import themeContext from './Toggle.js/themeContext';
import { EventRegister } from 'react-native-event-listeners';
import { DarkTheme, NavigationContainer } from '@react-navigation/native'

const App = () => {

  const [darkmode, setDarkMode] = useState(false);

  useEffect(() => {

    const listener = EventRegister.addEventListener('changeTheme', (data) => {setDarkMode(data); console.log(data)});
    return () => {
      EventRegister.removeAllListeners(listener);
    }
  }, [darkmode]);

  return (
    
      <themeContext.Provider value={darkmode === true ? theme.dark : theme.light}>
        <NavigationContainer theme={darkmode === true  ? DarkTheme : DefaultTheme}>
          <Main />
        </NavigationContainer>
      </themeContext.Provider>
    
  )
}

export default App
