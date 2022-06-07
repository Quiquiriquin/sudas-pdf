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

const TableHeader = ({ title, documents }) => {
  return (
    <view style={[styles.row, { padding: '0' }]}>
      <view
        style={[
          styles.cell,
          {
            width: '15.5cm',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1cm 0',
            textAlign: 'center',
          },
        ]}
      >
        <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
          {title}
        </Text>
      </view>
      <view
        style={[
          styles.cell,
          {
            width: '2.25cm',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            border: '0',
          },
        ]}
      >
        <view
          style={[
            styles.row,
            {
              padding: '0 .2cm',
              textAlign: 'center',
            },
          ]}
        >
          <Text
            style={{
              fontFamily: 'Arial',
              fontWeight: 'bold',
              fontSize: '9pt',
            }}
          >
            Documento
          </Text>
        </view>
        <view
          style={[
            styles.cell,
            {
              // width: '2.25cm',
              height: '2.25cm',
              width: '100%',
              padding: '0',
              textAlign: 'center',
              flexDirection: 'column',
              border: '0',
              transform: 'rotate(-90deg)',
            },
          ]}
        >
          <view
            style={[
              styles.row,
              {
                height: '0.75cm',
                padding: '0 0.2cm',
                textAlign: 'center',
              },
            ]}
          >
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
              {documents[0]}
            </Text>
          </view>
          <view
            style={[
              styles.row,
              {
                height: '0.75cm',
                padding: '0 0.2cm',
                textAlign: 'center',
              },
            ]}
          >
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
              {documents[1]}
            </Text>
          </view>
          <view
            style={[
              styles.row,
              {
                height: '0.75cm',
                padding: '0 0.2cm',
                textAlign: 'center',
              },
            ]}
          >
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
              {documents[2]}
            </Text>
          </view>
        </view>
      </view>
    </view>
  );
};

export default TableHeader;
