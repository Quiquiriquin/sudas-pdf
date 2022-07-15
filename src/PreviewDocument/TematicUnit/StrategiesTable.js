import { Text, Font } from '@react-pdf/renderer';
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

const StrategiesTable = ({ activities, evidencies, strategy }) => {
  return (
    <view style={[styles.table]}>
      <view style={[styles.row]}>
        <view
          style={[
            styles.cell,
            {
              width: '50%',
              height: '100%',
              flexDirection: 'column',
              padding: '.3cm 0',
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
            ESTRATEGIAS DE APRENDIZAJE
          </Text>
        </view>
        <view
          style={[
            styles.cell,
            {
              width: '50%',
              height: '100%',
              padding: '.3cm 0',
              flexDirection: 'column',
              border: '0',
            },
          ]}
        >
          <view styles={{ width: '100%' }}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
              EVALUACIÓN DE LOS APRENDIZAJES
            </Text>
          </view>
        </view>
      </view>
      <view style={[styles.row]}>
        <view
          style={[
            styles.cell,
            {
              width: '50%',
              height: '100%',
              flexDirection: 'column',
              alignItems: 'start',
              paddingRight: '0.38cm',
            },
          ]}
        >
          <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
            Estrategia de aprendizaje: {strategy}
          </Text>
          <Text style={{ margin: '0.5cm 0' }}>
            El alumno desarrollará las siguientes actividades:
          </Text>
          {activities.map((activity, index) => (
            <view
              // eslint-disable-next-line react/no-array-index-key
              key={`activty${index}`}
              style={
                ([styles.row],
                {
                  border: '0',
                  paddingLeft: '0.6cm',
                  flexDirection: 'row',
                  // textAlign: 'justify',
                })
              }
            >
              <view
                styles={{
                  marginLeft: '1cm',
                }}
              >
                <Text>{index + 1}. </Text>
              </view>
              <view
                styles={{
                  paddingRight: '1cm',
                }}
              >
                <Text>{activity}</Text>
              </view>
            </view>
          ))}
        </view>
        <view
          style={[
            styles.cell,
            {
              width: '50%',
              height: '100%',
              flexDirection: 'column',
              alignItems: 'start',
              padding: '0 0.38cm',
              border: '0',
            },
          ]}
        >
          <Text style={{ marginTop: '0.5cm' }}>
            Portafolio de evidencias
          </Text>
          {evidencies.map((evidency, index) => (
            <view
              // eslint-disable-next-line react/no-array-index-key
              key={`evidency-${index}`}
              style={
                ([styles.row],
                {
                  border: '0',
                  paddingLeft: '0.2cm',
                  flexDirection: 'row',
                  // textAlign: 'justify',
                })
              }
            >
              <view
                styles={{
                  marginLeft: '1cm',
                }}
              >
                <Text>{index + 1}. </Text>
              </view>
              <view
                styles={{
                  paddingRight: '1cm',
                }}
              >
                <Text>{evidency}</Text>
              </view>
            </view>
          ))}
        </view>
      </view>
    </view>
  );
};

export default StrategiesTable;
