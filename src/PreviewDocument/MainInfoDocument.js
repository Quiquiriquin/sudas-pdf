import React from 'react';
import { Text, Font } from '@react-pdf/renderer';
import { styles } from './PdfStyles';

Font.register({
  family: 'Arial',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/@canvas-fonts/arial-bold@1.0.4/Arial%20Bold.ttf',
      fontWeight: 'bold',
    },
  ],
});

const MainInfoDocument = ({ subject }) => {
  return (
    <view style={[styles.table, { border: '0' }]}>
      <view
        style={[
          styles.row,
          { height: '0.6cm', borderBottom: '0', padding: '0 2px' },
        ]}
      >
        <view
          style={[
            styles.cell,
            {
              width: '5.25cm',
              height: '100%',
              flexDirection: 'row',
              border: '0',
            },
          ]}
        >
          <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
            {' '}
            UNIDAD DE APRENDIZAJE:
          </Text>
        </view>
        <view
          style={[
            styles.cell,
            {
              width: '8.5cm',
              height: '100%',
              flexDirection: 'row',
              border: '0',
            },
          ]}
        >
          <Text>{subject?.name}</Text>
        </view>
        <view
          style={[
            styles.cell,
            {
              width: '1.5cm',
              height: '100%',
              flexDirection: 'row',
              border: '0',
            },
          ]}
        >
          <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
            Hoja
          </Text>
        </view>
        <view
          style={[
            styles.cell,
            {
              width: '1cm',
              height: '100%',
              flexDirection: 'row',
              border: '0',
            },
          ]}
        >
          <Text render={({ pageNumber }) => `${pageNumber}`} fixed />
        </view>
        <view
          style={[
            styles.cell,
            {
              width: '1cm',
              height: '100%',
              flexDirection: 'row',
              border: '0',
            },
          ]}
        >
          <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
            De
          </Text>
        </view>
        <view
          style={[
            styles.cell,
            {
              width: '1cm',
              height: '100%',
              flexDirection: 'row',
              border: '0',
            },
          ]}
        >
          <Text render={({ totalPages }) => `${totalPages}`} fixed />
        </view>
      </view>
    </view>
  );
};

export default MainInfoDocument;
