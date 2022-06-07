import { Text, Font } from '@react-pdf/renderer';
import React from 'react';
import romanize from '../../helpers/Romanize';
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

const UnitContentsHeaders = ({ description, index }) => {
  return (
    <view style={[styles.row, { padding: '0 2px' }]}>
      <view
        style={[
          styles.cell,
          {
            width: '5.51cm',
            height: '100%',
            flexDirection: 'column',
          },
        ]}
      >
        <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
          UNIDAD TEMÁTICA {romanize(index + 1)}
        </Text>
        <Text style={{ alignText: 'center' }}>{description}</Text>
      </view>
      <view
        style={[
          styles.cell,
          {
            width: '9cm',
            height: '100%',
            flexDirection: 'column',
          },
        ]}
      >
        <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
          CONTENIDO
        </Text>
      </view>
      <view
        style={[
          styles.cell,
          {
            width: '2.72cm',
            height: '100%',
            flexDirection: 'row',
            border: '0',
          },
        ]}
      >
        <view
          style={[
            styles.cell,
            {
              width: '2.72cm',
              height: '100%',
              flexDirection: 'column',
            },
          ]}
        >
          <view style={[styles.row]}>
            <Text
              style={{
                margin: '0 auto',
                fontFamily: 'Arial',
                fontWeight: 'bold',
              }}
            >
              HORAS CON DOCENTE
            </Text>
          </view>
          <view
            style={
              ([styles.row], { border: '0', flexDirection: 'row' })
            }
          >
            <view
              style={[
                styles.cell,
                {
                  width: '50%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                },
              ]}
            >
              <Text
                style={{ fontFamily: 'Arial', fontWeight: 'bold' }}
              >
                T
              </Text>
            </view>
            <view
              style={[
                styles.cell,
                {
                  width: '50%',
                  flexDirection: 'row',
                  border: '0',
                  justifyContent: 'center',
                  fontFamily: 'Arial',
                  fontWeight: 'bold',
                },
              ]}
            >
              <Text
                style={{ fontFamily: 'Arial', fontWeight: 'bold' }}
              >
                P
              </Text>
            </view>
          </view>
        </view>
      </view>
      <view
        style={[
          styles.cell,
          {
            width: '1.06cm',
            height: '100%',
            flexDirection: 'column',
            border: '0',
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
          HRS
        </Text>
        <Text
          style={{
            margin: '0 auto',
            fontFamily: 'Arial',
            fontWeight: 'bold',
          }}
        >
          AA
        </Text>
      </view>
    </view>
  );
};

export default UnitContentsHeaders;
