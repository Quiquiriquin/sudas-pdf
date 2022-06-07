import React from 'react';
import { Text } from '@react-pdf/renderer';
import { styles } from '../PdfStyles';

const assessments = [
  'Diagnostica',
  'Solución de casos',
  'Problemas resueltos',
  'Reporte de proyectos',
  'Reportes de indagación',
  'Reportes de indagación',
  'Reportes de prácticas',
  'Evaluaciones escritas',
];

const assessments2 = [
  'Saberes Previamente Adquiridos',
  'Organizadores gráficos',
  'Problemarios',
  'Exposiciones',
];

const Evaluation = ({ units }) => {
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
          EVALUACIÓN Y ACREDITACIÓN:
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
        {/* End Headers Metodos de enseñanza y Estrategias */}
        <view
          style={[
            styles.row,
            {
              width: '100%',
              flexDirection: 'row',
              padding: '0',
              borderBottom: '0',
              alignItems: 'flex-start',
            },
          ]}
        >
          <view style={[styles.list, { width: '7.3cm' }]}>
            {assessments?.map((assessment, index) => (
              <view
                // eslint-disable-next-line react/no-array-index-key
                key={index + assessment}
                style={[
                  styles.row,
                  {
                    width: '7.24cm',
                    flexDirection: 'row',
                    height: '0.6cm',
                    padding: '0',
                    borderBottom:
                      index + 1 !== assessments.length
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
                    {assessment}
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
            {assessments2?.map((assessment, index) => (
              <view
                // eslint-disable-next-line react/no-array-index-key
                key={index + assessment}
                style={[
                  styles.row,
                  {
                    width: '7.24cm',
                    flexDirection: 'row',
                    height: '0.6cm',
                    padding: '0',
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
                    {assessment}
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
            <view
              style={[
                styles.row,
                {
                  width: '7.24cm',
                  flexDirection: 'row',
                  padding: '0',
                  borderBottom: '0',
                },
              ]}
            >
              <view
                style={[
                  styles.cell,
                  {
                    flexDirection: 'column',
                    width: '100%',
                    borderRight: 0,
                    alignItems: 'flex-start',
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
                  Otras Evidencia a evaluar:
                </Text>
                <Text style={{ margin: '0 3px' }}>Resumen</Text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  );
};

export default Evaluation;
