import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import SideMenu from 'react-native-side-menu';

import List from './src/components/List';
import Slider from './src/components/Slider';
import Header from './src/components/Header';

class App extends Component {
  render() {
    return (
      <View style={[{ flex: 1 }, styles.container]}>
        <SideMenu>
          <Header />
          <Slider />
          <List />
        </SideMenu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});

export default App;
