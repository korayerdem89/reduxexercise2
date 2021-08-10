/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, SafeAreaView, TextInput, Button, View} from 'react-native';

const Secondary = () => {
  const [text, setText] = useState('');
  const handleAdd = () => {};
  return (
    <SafeAreaView>
      <Text style={{fontSize: 30}}>Secondary</Text>
      <View
        style={{
          borderWidth: 1,
          margin: 10,
          padding: 5,
          borderColor: '#e0e0e0',
        }}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="İsim giriniz..."
        />
      </View>
      <Button title="Ekle" onPress={handleAdd} />
    </SafeAreaView>
  );
};

export default Secondary;
