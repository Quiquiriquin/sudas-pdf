import { Font, Text } from '@react-pdf/renderer';
import React from 'react';
import { styles } from '../PdfStyles';

Font.register({
  family: 'Arial',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/@canvas-fonts/arial-bold@1.0.4/Arial%20Bold.ttf',
      fontWeight: 'bold',
    },
  ],
});

const LastRowPracticeTable = ({ totalHours }) => {
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
        <Text> </Text>
      </view>
      <view
        style={[
          styles.cell,
          {
            width: '9cm',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          },
        ]}
      >
        <Text> </Text>
      </view>
      <view
        style={[
          styles.cell,
          {
            width: '3.25cm',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 .5cm',
            textAlign: 'center',
            borderTop: '1px solid #000',
            fontFamily: 'Arial',
            fontWeight: 'bold',
          },
        ]}
      >
        <Text>TOTAL DE HORAS {totalHours}</Text>
      </view>
      <view
        style={[
          styles.cell,
          {
            width: '3.27cm',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            border: '0',
          },
        ]}
      >
        <Text> </Text>
      </view>
    </view>
  );
};

export default LastRowPracticeTable;
