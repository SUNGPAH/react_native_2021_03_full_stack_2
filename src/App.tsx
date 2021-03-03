import React, {Component} from 'react';
import {Provider} from 'react-redux';

import Router from './config/router';
import store from './config/store';

import {SafeAreaView, StatusBar, Platform} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

type Props = {};
class App extends Component<Props> {
  render() {
    if(Platform.OS == 'ios'){
      return (
        <Provider store={store}>
          <SafeAreaView style={{ flex: 0, backgroundColor: '#fff'}}></SafeAreaView>
          <SafeAreaView style={{flex:1,}}>
            <StatusBar barStyle="dark-content"/>
            <Router />
          </SafeAreaView>
        </Provider>
      );
    }else{
      return <Provider store={store}>
        <SafeAreaProvider>
          <Router />
        </SafeAreaProvider>
      </Provider>
    }
  }
}


//code push is not installed here!
export default App;