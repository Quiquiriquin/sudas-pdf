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

const ListOfPracticesHeader = () => {
  return (
    <view style={[styles.row, { padding: '0' }]}>
      <view
        style={[
          styles.cell,
          {
            width: '2.4cm',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '.3cm 0',
            textAlign: 'center',
          },
        ]}
      >
        <Text
          style={{
            margin: '0 auto',
            textAlign: 'center',
            fontFamily: 'Arial',
            fontWeight: 'bold',
          }}
        >
          PRÁCTICA No.
        </Text>
      </view>
      <view
        style={[
          styles.cell,
          {
            width: '9cm',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '.5cm 0',
            textAlign: 'center',
            fontFamily: 'Arial',
            fontWeight: 'bold',
          },
        ]}
      >
        <Text
          style={{
            margin: '0 auto',
            textAlign: 'center',
            fontFamily: 'Arial',
            fontWeight: 'bold',
          }}
        >
          NOMBRE DE LA PRÁCTICA
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
            padding: '.5cm 0',
            textAlign: 'center',
            fontFamily: 'Arial',
            fontWeight: 'bold',
          },
        ]}
      >
        <Text>HORAS</Text>
      </view>
      <view
        style={[
          styles.cell,
          {
            width: '3.27cm',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '.5cm 0',
            textAlign: 'center',
            border: '0',
            fontFamily: 'Arial',
            fontWeight: 'bold',
          },
        ]}
      >
        <Text>LUGAR DE REAILIZACIÓN</Text>
      </view>
    </view>
  );
};

export default ListOfPracticesHeader;
