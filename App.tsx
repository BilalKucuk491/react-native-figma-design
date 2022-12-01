import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Router from './src/Router';

const RootApp = () => {
  return (
      <GestureHandlerRootView style={{flex: 1}}>
        <Router />
      </GestureHandlerRootView>
  );
};

const App = () => {
  return <RootApp />;
};

export default App;
