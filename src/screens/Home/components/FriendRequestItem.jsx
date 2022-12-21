import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../utils/constans';

const FriendRequestItem = ({data}) => {
  return (
    <View style={styles.wrapper}>
      <Image source={data.image} style={styles.image} />
      <View style={styles.right}>
        <View style={styles.top}>
          <View style={styles.topLeft}>
            <Text style={styles.name}>{data.name}</Text>
            {data.follow ? <Text style={styles.follow}>
              {data.follow ? `Followed by ${data.follow}` : ''}
            </Text> : ''}
          </View>
          <Text style={styles.time}>{data.time}</Text>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            style={[styles.btn, styles.btnConfirm]}
            onPress={() => {}}>
            <Text style={({color: COLORS.white, fontWeight: '500'})}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.btnDelete]}
            onPress={() => {}}>
            <Text style={({color: COLORS.black, fontWeight: '500'})}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FriendRequestItem;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 50,
  },
  right: {
    width: '75%',
    justifyContent: 'center',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 4,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 4,
  },
  name: {
    fontWeight: '600',
    color: COLORS.black,
    fontSize: 17,
  },
  time: {
    color: COLORS.blackLess,
    fontWeight: '400',
  },
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnConfirm: {
    backgroundColor: COLORS.bgPrimary,
  },
  btnDelete: {
    backgroundColor: COLORS.bgDisable,
  },
});
