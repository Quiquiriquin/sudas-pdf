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

const InfoSubject2 = ({ subject }) => {
  const asignedTimes = [
    { text: 'HORAS TEORÍA/SEMANA:', hour: subject?.theoryWeek },
    { text: 'HORAS PRÁCTICA/SEMANA:', hour: subject?.practiceWeek },
    { text: 'HORAS TEORÍA/SEMESTRE:', hour: subject?.theorySemester },
    {
      text: 'HORAS PRÁCTICA/SEMESTRE:',
      hour: subject?.practiceSemester,
    },
    {
      text: 'HORAS APRENDIZAJE AUTÓNOMO:',
      hour: subject?.autonomousLearning,
    },
    { text: 'HORAS TOTALES/SEMESTRE:', hour: subject?.totalHours },
  ];

  return (
    <view style={{ width: '100%', flexDirection: 'row' }}>
      <view style={[styles.table, { width: '6.35cm', padding: '0' }]}>
        <view
          style={[styles.row, { border: '0', marginBottom: '.1cm' }]}
        >
          <Text
            style={{
              margin: '0 auto',
              fontFamily: 'Arial',
              fontWeight: 'bold',
            }}
          >
            TIEMPOS ASIGNADOS
          </Text>
        </view>
        {asignedTimes.map((time, index) => (
          <view
            // eslint-disable-next-line react/no-array-index-key
            key={`asignedTimes${index}`}
            style={[
              styles.row,
              { border: '0', marginBottom: '.6cm' },
            ]}
          >
            <view
              style={[
                styles.cell,
                {
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  border: '0',
                },
              ]}
            >
              <Text
                style={{
                  maxWidth: '90%',
                  fontSize: '9.4pt',
                  fontFamily: 'Arial',
                  fontWeight: 'bold',
                }}
              >
                {time.text}
              </Text>
              <Text>{time.hour}</Text>
            </view>
          </view>
        ))}
      </view>
      <view
        style={[
          styles.table,
          { width: '5.72cm', padding: '0', marginLeft: '.3cm' },
        ]}
      >
        <view
          style={[styles.row, { border: '0', marginBottom: '.05cm' }]}
        >
          <Text
            style={{
              margin: '0 auto',
              fontFamily: 'Arial',
              fontWeight: 'bold',
            }}
          >
            UNIDAD DE APRENDIZAJE
          </Text>
        </view>
        <view
          style={[styles.row, { border: '0', marginBottom: '.05cm' }]}
        >
          <Text
            style={{
              margin: '0 auto',
              fontFamily: 'Arial',
              fontWeight: 'bold',
            }}
          >
            REDISEÑADA POR:
          </Text>
        </view>
        <view
          style={[styles.row, { border: '0', marginBottom: '0.5cm' }]}
        >
          <Text
            style={{
              margin: '0 auto',
            }}
          >
            Academia de Físico-Química:
          </Text>
        </view>
        <view
          style={[styles.row, { border: '0', marginBottom: '.5cm' }]}
        >
          <Text
            style={{
              margin: '0 auto',
              fontFamily: 'Arial',
              fontWeight: 'bold',
            }}
          >
            REVISADA POR:
          </Text>
        </view>
        <view
          style={[styles.row, { border: '0', marginBottom: '.05cm' }]}
        >
          <view
            style={{
              width: '90%',
              margin: '0 auto',
              borderBottom: '1px solid #000',
            }}
          />
        </view>
        <view
          style={[styles.row, { border: '0', marginBottom: '.5cm' }]}
        >
          <Text
            style={{
              margin: '0 auto',
              maxWidth: '100%',
              textAlign: 'center',
            }}
          >
            M. en C. Martha Patricia Cervantes Cervantes
          </Text>
        </view>
        <view
          style={[styles.row, { border: '0', marginBottom: '.02cm' }]}
        >
          <Text
            style={{
              margin: '0 auto',
              fontFamily: 'Arial',
              fontWeight: 'bold',
            }}
          >
            APROBADA POR:
          </Text>
        </view>
        <view
          style={[styles.row, { border: '0', marginBottom: '.5cm' }]}
        >
          <Text
            style={{
              margin: '0 auto',
              maxWidth: '100%',
              textAlign: 'center',
            }}
          >
            H. Consejo Técnico Consultivo Escolar
          </Text>
        </view>
        <view
          style={[styles.row, { border: '0', marginBottom: '.05cm' }]}
        >
          <view
            style={{
              width: '90%',
              margin: '0 auto',
              borderBottom: '1px solid #000',
            }}
          />
        </view>
        <view
          style={[styles.row, { border: '0', marginBottom: '.05cm' }]}
        >
          <Text
            style={{
              margin: '0 auto',
              maxWidth: '100%',
              textAlign: 'center',
            }}
          >
            Dr. Gonzalo Trujillo
          </Text>
        </view>
        <view
          style={[styles.row, { border: '0', marginBottom: '.05cm' }]}
        >
          <Text
            style={{
              margin: '0 auto',
              maxWidth: '100%',
              textAlign: 'center',
            }}
          >
            ChávezPresidente del CTCE
          </Text>
        </view>
      </view>
      <view
        style={{
          width: '6.2cm',
          flexDirection: 'column',
          marginLeft: '.3cm',
          justifyContent: 'space-between',
        }}
      >
        <view style={[styles.table]}>
          <Text>
            APROBADO POR: Comisión de Programas Académicos del H.
            Consejo General Consultivo del IPN.
          </Text>
          <Text style={{ margin: '.2cm auto 0 auto' }}>
            dd/mm/aaaa
          </Text>
        </view>
        <view style={[styles.table]}>
          <view
            style={[
              styles.row,
              {
                border: '0',
                marginTop: '.3cm',
                marginBottom: '1cm',
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
              AUTORIZADO Y VALIDADO POR:{' '}
            </Text>
          </view>
          <view
            style={[
              styles.row,
              { border: '0', marginBottom: '.05cm' },
            ]}
          >
            <view
              style={{
                width: '90%',
                margin: '0 auto',
                borderBottom: '1px solid #000',
              }}
            />
          </view>
          <view style={[styles.row, { border: '0' }]}>
            <Text style={{ margin: '0 auto' }}>
              Ing. Juan Manuel Velázquez Peto
            </Text>
          </view>
          <view
            style={[
              styles.row,
              { border: '0', marginBottom: '0.5cm' },
            ]}
          >
            <Text
              style={{
                margin: '0 auto',
                fontFamily: 'Arial',
                fontWeight: 'bold',
              }}
            >
              Director de Educación Superior
            </Text>
          </view>
        </view>
      </view>
    </view>
  );
};

export default InfoSubject2;
