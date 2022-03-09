import React from 'react';
import {View, Text} from 'react-native';

const SPACING = 20;

const Content = ({item}) => {
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '800',
          fontSize: 16,
          textTransform: 'uppercase',
        }}
        numberOfLines={1}
        adjustsFontSizeToFit>
        {item.title}
      </Text>
      <Text style={{fontSize: 12, opacity: 0.4}}>{item.subtitle}</Text>
      <View style={{flexDirection: 'row', marginTop: SPACING}}>
        <Text
          style={{
            fontSize: 42,
            letterSpacing: 3,
            fontWeight: '900',
            marginRight: 8,
          }}>
          {item.price}
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 36,
            fontWeight: '800',
            alignSelf: 'flex-end',
          }}>
          USD
        </Text>
      </View>
    </View>
  );
};

export default Content;
