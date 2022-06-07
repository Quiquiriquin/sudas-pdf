import { Text } from '@react-pdf/renderer';
import React from 'react';
import { styles } from '../PdfStyles';

const ItemListPractices = ({
  index = '',
  name = '',
  hours = '',
  place = '',
}) => {
  return (
    <view style={[styles.row, { padding: '0', border: '0' }]}>
      <view
        style={[
          styles.cell,
          {
            width: '2.4cm',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          },
        ]}
      >
        <Text styles={{ margin: '0 auto', textAlign: 'center' }}>
          {index}
        </Text>
      </view>
      <view
        style={[
          styles.cell,
          {
            width: '9cm',
            height: '100%',
            flexDirection: 'row',
            padding: '0 .1cm',
            alignItems: 'start',
            textAlign: 'center',
          },
        ]}
      >
        <Text styles={{ margin: '0 auto', textAlign: 'center' }}>
          {name}
        </Text>
      </view>
      <view
        style={[
          styles.cell,
          {
            width: '3.25cm',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          },
        ]}
      >
        <Text>{hours}</Text>
      </view>
      <view
        style={[
          styles.cell,
          {
            width: '3.27cm',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 .4cm',
            textAlign: 'center',
            border: '0',
          },
        ]}
      >
        <Text>{place}</Text>
      </view>
    </view>
  );
};

export default ItemListPractices;
