import React from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native';
import CarList from './src/components/CarList';

const App = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <CarList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
