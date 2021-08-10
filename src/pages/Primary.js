/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, SafeAreaView, TextInput, Button, View} from 'react-native';

import {useDispatch} from 'react-redux';

const Primary = () => {
  const [text, setText] = useState('');
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch({type: 'ADD_NAME', payload: {name: text}});
  };

  const handleClean = () => {
    dispatch({type: 'CLEAN_LIST'});
  };

  const handleSaveUsername = () => {
    dispatch({type: 'SAVE_USERNAME', payload: {username}});
  };

  return (
    <SafeAreaView>
      <Text style={{fontSize: 30}}>Primary</Text>
      <View style={style}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="İsim giriniz..."
        />
      </View>
      <View style={style}>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Kullanıcı adı giriniz..."
        />
      </View>
      <Button title="Kaydet" onPress={handleSaveUsername} />
      <Button title="Ekle" onPress={handleAdd} />
      <Button title="Temizle" onPress={handleClean} />
      
    </SafeAreaView>
  );
};

const style = {
  borderWidth: 1,
  margin: 10,
  padding: 5,
  borderColor: '#e0e0e0',
};

export default Primary;
