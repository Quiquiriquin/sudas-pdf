import { Font, Text } from '@react-pdf/renderer';
import React from 'react';
import { styles } from '../PdfStyles';

// const profile = {
//   experience:
//     'De preferencia dos años experiencia docente en el nivel superior.De preferencia experiencia de dos años en consultoría ambiental, tratamiento de aguas residuales, manejo de pesquerías y manejo de suelos',
//   knowledge:
//     'En termodinámica, química, biología, física y matemáticas Del Modelo Educativo Institucional (MEI).',
//   skills:
//     'Manejo de estrategias didácticas centradas en el aprendizaje',
//   attitudes: 'Compromiso social e Institucional',
// };

Font.register({
  family: 'Arial',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/@canvas-fonts/arial-bold@1.0.4/Arial%20Bold.ttf',
      fontWeight: 'bold',
    },
  ],
});

const TableProfileTeacher = ({ profile }) => {
  console.log('Perfil: ', profile);
  return (
    <view style={[styles.table]}>
      <view
        style={[
          styles.row,
          { padding: '0', fontFamily: 'Arial', fontWeight: 'bold' },
        ]}
      >
        <view
          style={[
            styles.cell,
            {
              width: '4.73cm',
              height: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0 0.2cm',
              textAlign: 'justify',
            },
          ]}
        >
          <Text>EXPERIENCIA</Text>
          <Text>PROFESIONAL</Text>
        </view>
        <view
          style={[
            styles.cell,
            {
              width: '4.73cm',
              height: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0 0.2cm',
              textAlign: 'justify',
            },
          ]}
        >
          <Text>CONOCIMIENTOS</Text>
        </view>
        <view
          style={[
            styles.cell,
            {
              width: '4.73cm',
              height: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0 0.2cm',
              textAlign: 'justify',
            },
          ]}
        >
          <Text>HABILIDADES</Text>
          <Text>DIDÁCTICAS</Text>
        </view>
        <view
          style={[
            styles.cell,
            {
              width: '4.73cm',
              height: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0 0.2cm',
              textAlign: 'justify',
              border: '0',
            },
          ]}
        >
          <Text>ACTITUDES</Text>
        </view>
      </view>
      <view style={[styles.row, { border: '0' }]}>
        <view
          style={[
            styles.cell,
            {
              width: '4.73cm',
              height: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0 0.2cm',
              textAlign: 'justify',
            },
          ]}
        >
          <Text>{profile?.experience}</Text>
        </view>
        <view
          style={[
            styles.cell,
            {
              width: '4.73cm',
              height: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0 0.2cm',
              textAlign: 'justify',
            },
          ]}
        >
          <Text>{profile?.knowledge}</Text>
        </view>
        <view
          style={[
            styles.cell,
            {
              width: '4.73cm',
              height: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0 0.2cm',
              textAlign: 'justify',
            },
          ]}
        >
          <Text>{profile?.skills}</Text>
        </view>
        <view
          style={[
            styles.cell,
            {
              width: '4.73cm',
              height: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0 0.2cm',
              textAlign: 'justify',
              border: '0',

            },
          ]}
        >
          <Text>{profile?.attitudes.split(',').map((attitude, index) => (<Text>{attitude} {index + 1 === profile?.attitudes.split(',').length ? '.' : ','}</Text>))}</Text>
        </view>
      </view>
    </view>
  );
};

export default TableProfileTeacher;
