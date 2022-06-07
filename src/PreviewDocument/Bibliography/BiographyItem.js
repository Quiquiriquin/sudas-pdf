import { Text } from '@react-pdf/renderer';
import React from 'react';
import { styles } from '../PdfStyles';

const BiographyItem = ({ item }) => {
  return (
    <view style={[styles.row, { padding: '0' }]}>
      <view
        style={[
          styles.cell,
          {
            width: '15.5cm',
            height: '100%',
            flexDirection: 'row',
            alignItems: 'start',
            padding: '0 0.2cm',
            textAlign: 'justify',
          },
        ]}
      >
        <Text>{item?.text}</Text>
      </view>
      <view
        style={[
          styles.cell,
          {
            width: '0.75cm',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          },
        ]}
      >
        <Text> {item.type === 1 ? 'X' : ''} </Text>
      </view>
      <view
        style={[
          styles.cell,
          {
            width: '0.75cm',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          },
        ]}
      >
        <Text> {item.type === 2 ? 'X' : ''} </Text>
      </view>
      <view
        style={[
          styles.cell,
          {
            width: '0.75cm',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            border: '0',
          },
        ]}
      >
        <Text> {item.type === 3 ? 'X' : ''} </Text>
      </view>
    </view>
  );
};

export default BiographyItem;
