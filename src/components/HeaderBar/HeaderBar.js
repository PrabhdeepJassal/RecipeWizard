import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HeaderBar({ navigation }) {
  return (
    <Header
      containerStyle={{
        backgroundColor: '#0f172a',
        borderBottomWidth: 0,
        height: 70,
        paddingHorizontal: 20,
      }}
      placement="left"
      leftComponent={
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons name="chef-hat" size={28} color="#10b981" />
          <Text style={{
            color: '#fff',
            fontSize: 22,
            fontWeight: 'bold',
            marginLeft: 10,
            letterSpacing: 0.5
          }}> Recipe Wizard </Text>
        </View>
      }
      rightComponent={
        <TouchableOpacity
          style={{ padding: 5 }}
          onPress={() => navigation.navigate('Search')}
        >
          <MaterialCommunityIcons name="magnify" size={26} color="#FFF" />
        </TouchableOpacity>
      }
    />
  );
}
