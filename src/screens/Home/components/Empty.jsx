import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../utils/constans';
import Icon from 'react-native-vector-icons/Ionicons';

const Empty = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'red'}}>Have no data!</Text>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
});
