import React from 'react';
import {SafeAreaView, ScrollView, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Text>Bem vindo ao react-native com apollo</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
