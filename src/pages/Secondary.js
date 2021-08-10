/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, SafeAreaView, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
const Secondary = () => {
  const list = useSelector(s => s.nameList);
  const myUsername = useSelector(s => s.userName);
  return (
    <SafeAreaView>
      <Text style={{fontSize: 30}}>Secondary</Text>
      <Text style={{fontSize: 30}}>Kullanıcı Adı: {myUsername} </Text>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={list}
        renderItem={({item}) => <Text>{item}</Text>}
      />
    </SafeAreaView>
  );
};

export default Secondary;
