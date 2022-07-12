import React from 'react';
import { Text, Font } from '@react-pdf/renderer';
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

const RowAndX = ({ text = "", mark = false }) => {
  return (
    <>
      <view
        style={[
          styles.cell,
          {
            flexDirection: 'row',
            width: '6.3cm',
            height: '0.6cm',
          },
        ]}
      >
        <Text
          style={{
            margin: '0 3px',
            fontFamily: 'Arial',
            fontWeight: 'bold',
          }}
        >
          {text}
        </Text>
      </view>
      <view
        style={[
          styles.cell,
          {
            flexDirection: 'row',
            width: '0.92cm',
            height: '0.6cm',
            borderRight: 0,
          },
        ]}
      >
        <Text style={{ margin: '0 auto' }}>
          {mark ? "X" : ""}
        </Text>
      </view>
    </>
  );
};

export default RowAndX;
