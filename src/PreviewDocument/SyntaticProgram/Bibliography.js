import React from 'react';
import { Text, Font } from '@react-pdf/renderer';
import { styles } from '../PdfStyles';
// import romanize from '../../../helpers/Romanize';

const bibliographies = [
  {
    autor: 'Castellan, W.G.',
    year: '2015',
    title: 'Fisicoquímica',
    editorial: 'Addison Wesley Longman / Person / ISBN 9684443161',
  },
  {
    autor: 'Chang, R.',
    year: '2012',
    title: 'Fisicoquímica',
    editorial: 'Ed. Interamericana / ISBN 9789701066522',
  },
  {
    autor: 'Levine, I.N.',
    year: '2014',
    title: 'Principios de Fisicoquímica',
    editorial: 'Mc Graw Hill / ISBN 9786071509888',
  },
  {
    autor: 'Monsalvo, V. R. & Pérez, M. L.',
    year: '2017',
    title: 'Alfa Omega / ISBN 9786076221914',
    editorial: 'Addison Wesley Longman / Person / ISBN 9684443161',
  },
  {
    autor: 'Reyes C. L.A.',
    year: '2014',
    title: 'Fisicoquímica',
    editorial: 'Mc Graw Hill Educación / ISBN 9786071509093',
  },
];

// const teachingMethods = [
//   'a) Inductivo',
//   'b) Deductivo',
//   'c) Analógico',
//   'd) Aula Invertida',
//   'e)',
// ];
//
// const teachingStrategies = [
//   'a) Estudio de casos',
//   'b) Aprendizaje basado en problemas',
//   'c) Aprendizaje orientado proyectos ',
//   'd)',
//   'e)',
// ];

Font.register({
  family: 'Arial',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/@canvas-fonts/arial-bold@1.0.4/Arial%20Bold.ttf',
      fontWeight: 'bold',
    },
  ],
});

const Bibliography = ({ biblio }) => {
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
          BIBLIOGRAFÍA BÁSICA:
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
              padding: '0',
            },
          ]}
        >
          <view
            style={[
              styles.cell,
              {
                width: '4cm',
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
              Autor(res)
            </Text>
          </view>
          <view
            style={[
              styles.cell,
              {
                width: '1.5cm',
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
              Año
            </Text>
          </view>
          <view
            style={[
              styles.cell,
              {
                width: '4.75cm',
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
              Título del documento
            </Text>
          </view>
          <view
            style={[
              styles.cell,
              {
                width: '4.8cm',
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
              Editorial/ISBN
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
          <view style={[styles.list, { width: '100%' }]}>
            {biblio?.basic?.map((bibliography, index) => (
              <view
                // eslint-disable-next-line react/no-array-index-key
                key={index + bibliography}
                style={[
                  styles.row,
                  {
                    width: '100%',
                    flexDirection: 'row',
                    padding: '0',
                    borderBottom:
                      index + 1 !== bibliographies.length
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
                      width: '3.85cm',
                      height: '100%',
                    },
                  ]}
                >
                  <Text style={{ margin: '0 3px' }}>
                    {bibliography?.author?.name}
                  </Text>
                </view>
                <view
                  style={[
                    styles.cell,
                    {
                      flexDirection: 'row',
                      width: '1.44cm',
                      height: '100%',
                    },
                  ]}
                >
                  <Text style={{ margin: '0 auto' }}>
                    {bibliography?.year}
                  </Text>
                </view>
                <view
                  style={[
                    styles.cell,
                    {
                      flexDirection: 'row',
                      width: '4.56cm',
                      height: '100%',
                    },
                  ]}
                >
                  <Text style={{ margin: '0 auto' }}>
                    {bibliography?.title}
                  </Text>
                </view>
                <view
                  style={[
                    styles.cell,
                    {
                      flexDirection: 'row',
                      width: '4.6cm',
                      borderRight: '0',
                    },
                  ]}
                >
                  <Text style={{ margin: '0 auto' }}>
                    {bibliography?.editorial?.name}
                  </Text>
                </view>
              </view>
            ))}
          </view>
        </view>
      </view>
    </view>
  );
};

export default Bibliography;
