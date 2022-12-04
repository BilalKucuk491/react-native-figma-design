import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Router from './src/Router';
import {MenuProvider} from 'react-native-popup-menu';

const RootApp = () => {
  return (
    <MenuProvider>

    <GestureHandlerRootView style={{flex: 1}}>
        <Router />
    </GestureHandlerRootView>
    </MenuProvider>

  );
};

const App = () => {
  return <RootApp />;
};

export default App;
