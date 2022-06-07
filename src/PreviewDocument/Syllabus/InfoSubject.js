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

const InfoSubject = ({ subject, verb, connector }) => {
  return (
    <view style={[styles.table, { padding: '0' }]}>
      <view
        style={[styles.row, { height: '0.6cm', padding: '0 2px' }]}
      >
        <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
          UNIDAD ACADÉMICA:{' '}
        </Text>
      </view>
      <view
        style={[styles.row, { height: '0.6cm', padding: '0 2px' }]}
      >
        <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
          PROGRAMA ACADÉMICO:{' '}
        </Text>
        <Text style={{ fontFamily: 'Arial' }}>
          {` ${subject?.academicPlan?.name}`}
        </Text>
      </view>
      <view style={[styles.row, { padding: '0 2px' }]}>
        <view
          style={[
            styles.cell,
            {
              width: '3.49cm',
              height: '100%',
              flexDirection: 'row',
            },
          ]}
        >
          <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
            Semestre: {subject?.semester}
          </Text>
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
            ÁREA DE FORMACIÓN:
          </Text>
          <Text>Científica Básica</Text>
        </view>
        <view
          style={[
            styles.cell,
            {
              width: '5.8cm',
              height: '100%',
              flexDirection: 'column',
              border: '0',
            },
          ]}
        >
          <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
            Modalidad
          </Text>
          <Text>Escolarizada</Text>
        </view>
      </view>
      <view style={[styles.row, { padding: '0 2px' }]}>
        <view
          style={[
            styles.cell,
            {
              width: '100%',
              height: '100%',
              flexDirection: 'col',
              borderRight: '0',
            },
          ]}
        >
          <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
            TIPO DE UNIDAD DE APRENDIZAJE:
          </Text>
          <Text>Teórica - Practica y Obligatoria</Text>
        </view>
      </view>
      <view style={[styles.row, { padding: '0 2px' }]}>
        <view
          style={[
            styles.cell,
            {
              width: '6.24cm',
              height: '100%',
              flexDirection: 'column',
              borderRight: '1px solid #000',
            },
          ]}
        >
          <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
            VIGENCIA A PARTIR DE:
          </Text>
          <Text>agosto 2021</Text>
        </view>
        <view
          style={[
            styles.cell,
            {
              width: '12.6cm',
              height: '100%',
              flexDirection: 'column',
              borderRight: '0',
            },
          ]}
        >
          <view style={[styles.row, { padding: '0 2px' }]}>
            <Text
              style={{
                alignText: 'center',
                margin: '0 auto',
                fontFamily: 'Arial',
                fontWeight: 'bold',
              }}
            >
              CRÉDITOS
            </Text>
          </view>
          <view
            style={[
              styles.row,
              { padding: '0 2px', borderBottom: '0' },
            ]}
          >
            <view
              style={[
                styles.cell,
                {
                  width: '50%',
                  height: '100%',
                },
              ]}
            >
              <Text
                style={{
                  margin: '0',
                  fontFamily: 'Arial',
                }}
              >
                TEPIC: {subject?.tepic}
              </Text>
            </view>
            <view
              style={[
                styles.cell,
                {
                  width: '50%',
                  height: '100%',
                  borderRight: '0',
                },
              ]}
            >
              <Text
                style={{
                  margin: '0 0 0 2px',
                  fontFamily: 'Arial',
                }}
              >
                SACTA: {subject?.satca}
              </Text>
            </view>
          </view>
        </view>
      </view>
      <view style={[styles.row, { padding: '2px' }]}>
        <view
          style={[
            styles.cell,
            {
              width: '100%',
              height: '100%',
              flexDirection: 'column',
              borderRight: '0',
            },
          ]}
        >
          <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
            INTENCIÓN EDUCATIVA
          </Text>
          <Text style={{ textAlign: 'justify' }}>
            {subject?.educationalIntention}
          </Text>
          <Text style={{ textAlign: 'justify', marginTop: '0.5cm' }}>
            Esta unidad de aprendizaje se relaciona de manera
            antecedente con Matemáticas, Física y Química inorgánica,
            lateral con Bioquímica, Microbiología General y Biología
            Celular; y de manera consecuente con Biología Molecular,
            Fisiología General, Diseño y análisis de experimentos
            biológicos
          </Text>
        </view>
      </view>
      <view style={[styles.row, { padding: '2px', border: '0' }]}>
        <view
          style={[
            styles.cell,
            {
              width: '100%',
              height: '100%',
              flexDirection: 'column',
              borderRight: '0',
            },
          ]}
        >
          <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
            PROPÓSITO DE LA UNIDAD DE APRENDIZAJE
          </Text>
          <Text style={{ textAlign: 'left', width: '100%' }}>
            {verb?.value} {subject?.purpose?.object}{' '}
            {connector?.value} {subject?.purpose?.quality}
          </Text>
        </view>
      </view>
    </view>
  );
};

export default InfoSubject;
