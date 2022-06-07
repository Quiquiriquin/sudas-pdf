import React from 'react';
import { Text, View, Font } from '@react-pdf/renderer';
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

const teachingMethods = [
  'a) Inductivo',
  'b) Deductivo',
  'c) Analógico',
  'd) Aula Invertida',
  'e)',
];

const teachingStrategies = [
  'a) Estudio de casos',
  'b) Aprendizaje basado en problemas',
  'c) Aprendizaje orientado proyectos ',
  'd)',
  'e)',
];

const TeachingApproach = ({ units }) => {
  return (
    <view
      style={[styles.row, { padding: '0', alignItems: 'flex-start' }]}
    >
      <view
        style={[
          styles.cell,
          {
            width: '3.24cm',
            height: '100%',
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
          ORIENTACIÓN DIDÁCTICA:
        </Text>
      </view>
      <view
        style={[
          styles.cell,
          {
            width: '15cm',
            flexDirection: 'column',
            borderRight: '0',
          },
        ]}
      >
        {/* Headers Metodos de enseñanza y Estrategias */}
        <view
          style={[
            styles.row,
            {
              width: '100%',
              height: '0.6cm',
              flexDirection: 'row',
            },
          ]}
        >
          <view
            style={[
              styles.cell,
              {
                width: '50%',
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
              Métodos de enseñanza
            </Text>
          </view>
          <view
            style={[
              styles.cell,
              {
                width: '50%',
                height: '100%',
                flexDirection: 'row',
                borderRight: '0',
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
              Estrategias de aprendizaje
            </Text>
          </view>
        </view>
        {/* End Headers Metodos de enseñanza y Estrategias */}
        <view
          style={[
            styles.row,
            {
              width: '100%',
              flexDirection: 'row',
              padding: '0',
              borderBottom: '0',
            },
          ]}
        >
          <view style={[styles.list, { width: '7.3cm' }]}>
            {teachingMethods?.map((method, index) => (
              <view
                // eslint-disable-next-line react/no-array-index-key
                key={index + method}
                style={[
                  styles.row,
                  {
                    width: '7.24cm',
                    flexDirection: 'row',
                    height: '0.6cm',
                    padding: '0',
                    borderBottom:
                      index + 1 !== teachingMethods.length
                        ? '1px solid #000'
                        : '0',
                  },
                ]}
              >
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
                    {method}
                  </Text>
                </view>
                <view
                  style={[
                    styles.cell,
                    {
                      flexDirection: 'row',
                      width: '0.92cm',
                      height: '0.6cm',
                    },
                  ]}
                >
                  <Text style={{ margin: '0 auto' }}>X</Text>
                </view>
              </view>
            ))}
          </view>
          <view style={[styles.list, { width: '7.3cm' }]}>
            {teachingStrategies.map((strategie, index) => (
              <view
                // eslint-disable-next-line react/no-array-index-key
                key={index + strategie}
                style={[
                  styles.row,
                  {
                    width: '7.24cm',
                    flexDirection: 'row',
                    height: '0.6cm',
                    padding: '0',
                    borderBottom:
                      index + 1 === teachingMethods.length
                        ? '0'
                        : '1px solid #000',
                  },
                ]}
              >
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
                    {strategie}
                  </Text>
                </view>
                <view
                  style={[
                    styles.cell,
                    {
                      flexDirection: 'row',
                      width: '0.92cm',
                      height: '0.6cm',
                      borderRight: '0',
                    },
                  ]}
                >
                  <Text style={{ margin: '0 auto' }}>X</Text>
                </view>
              </view>
            ))}
          </view>
        </view>
      </view>
    </view>
  );
};

export default TeachingApproach;
