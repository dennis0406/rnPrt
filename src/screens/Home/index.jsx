import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FriendRequestItem from './components/FriendRequestItem';
import {DATA} from '../../utils/constans';
import Header from './components/Header';
import Empty from './components/Empty';

const Home = () => {
  const renderItem = ({item}) => <FriendRequestItem data={item} />;
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ListHeaderComponent={Header}
      stickyHeaderIndices={[0]}
      ListEmptyComponent={Empty}
    />
  );
};

export default Home;

const styles = StyleSheet.create({});
