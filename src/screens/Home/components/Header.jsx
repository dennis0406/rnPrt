import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../../utils/constans';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={[styles.title]}>Friends</Text>
        <Icon name="search" size={30} color={COLORS.black} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
