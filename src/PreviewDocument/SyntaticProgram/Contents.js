import React from 'react';
import { Text, Font } from '@react-pdf/renderer';
import { styles } from '../PdfStyles';
import romanize from '../../helpers/Romanize';
// import romanize from '../../../helpers/Romanize';

Font.register({
  family: 'Arial',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/@canvas-fonts/arial-bold@1.0.4/Arial%20Bold.ttf',
      fontWeight: 'bold',
    },
  ],
});

const Contents = ({ units }) => {
  return (
    <view style={[styles.row, { padding: '0' }]}>
      <view
        style={[
          styles.cell,
          {
            width: '3.24cm',
            height: '100%',
            flexDirection: 'row',
          },
        ]}
      >
        <Text
          style={{
            margin: '0 auto',
            fontFamily: 'Arial',
            fontWeight: 'bold',
          }}
        >
          CONTENIDOS:
        </Text>
      </view>
      <view
        style={[
          styles.cell,
          {
            width: '15cm',
            flexDirection: 'row',
            borderRight: '0',
          },
        ]}
      >
        <view
          style={[
            styles.list,
            {
              padding: '.3cm 0',
              margin: '0 1cm',
            },
          ]}
        >
          {units?.map((unit, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <view style={[
              {
                width: '100%',
                flexDirection: 'row',
              },
            ]}>
              <view style={{ width: '7%' }}>
                <Text>
                {romanize(index + 1)}.
                </Text>
              </view>
              <view style={{ width: '85%' }}>
                <Text>{unit?.description}</Text>
              </view>
            </view>
          ))}
        </view>
      </view>
    </view>
  );
};

export default Contents;
