import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RootNavigator = () => {
  return (
    <View style={styles.container}>
      <Text>RootNavigator</Text>
    </View>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
