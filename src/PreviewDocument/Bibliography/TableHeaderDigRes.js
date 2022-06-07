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

const TableHeaderDigRes = ({ title, documents }) => {
  return (
    <view style={[styles.row, { padding: '0', height: '3cm' }]}>
      <view
        style={[
          styles.cell,
          {
            width: '12.95cm',
            height: '100%',
            paddingTop: '1.3cm',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            fontFamily: 'Arial',
            fontWeight: 'bold',
          },
        ]}
      >
        <Text>{title}</Text>
      </view>
      <view
        style={[
          styles.cell,
          {
            width: '3cm',
            flexDirection: 'column',
            paddingTop: '1.65cm',
            alignItems: 'start',
            textAlign: 'center',
            border: '0',
            transform: 'rotate(-90deg)',
          },
        ]}
      >
        {documents.map((document, index) => (
          <view
            // eslint-disable-next-line react/no-array-index-key
            key={`document${index}`}
            style={[
              styles.row,
              {
                width: '3cm',
                height: '0.58cm',
                padding: '0 0.2cm',
                textAlign: 'center',
              },
            ]}
          >
            <Text
              style={{
                fontFamily: 'Arial',
                fontWeight: 'bold',
                fontSize: '9.5pt',
              }}
            >
              {document}
            </Text>
          </view>
        ))}
      </view>
    </view>
  );
};

export default TableHeaderDigRes;
