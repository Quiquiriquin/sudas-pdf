import { Text, Font } from '@react-pdf/renderer';
import React from 'react';
import { styles } from '../PdfStyles';

const Signatures = () => {
  return (
    <view style={[styles.table, { border: '0' }]}>
      <view
        style={[
          styles.row,
          {
            padding: '0',
            fontFamily: 'Arial',
            fontWeight: 'bold',
            border: '0',
          },
        ]}
      >
        <view
          style={[
            styles.cell,
            {
              width: '33.33%',
              height: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0 0.2cm',
              textAlign: 'justify',
              border: '0',
            },
          ]}
        >
          <Text>ELABORÓ</Text>
        </view>
        <view
          style={[
            styles.cell,
            {
              width: '33.33%',
              height: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0 0.2cm',
              textAlign: 'justify',
              border: '0',
            },
          ]}
        >
          <Text>REVISÓ</Text>
        </view>
        <view
          style={[
            styles.cell,
            {
              width: '33.33%',
              height: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0 0.2cm',
              textAlign: 'justify',
              border: '0',
            },
          ]}
        >
          <Text>AUTORIZÓ</Text>
        </view>
      </view>
      <view style={[styles.row, { padding: '0', border: '0' }]}>
        <view
          style={[
            styles.cell,
            {
              width: '33.33%',
              height: '5.63cm',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '0 0.2cm',
              alignContent: 'justify',
              border: '0px',
            },
          ]}
        >
          <view
            style={{
              flexDirection: 'column',
              width: '95%',
              textAlign: 'center',
              borderTop: '1px solid #000',
            }}
          >
            <Text>M. en C. Lilia Rico Rodríguez</Text>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
              Profesora Coordinadora
            </Text>
          </view>
        </view>
      </view>
      <view style={[styles.row, { padding: '0', border: '0' }]}>
        <view
          style={[
            styles.cell,
            {
              width: '33.33%',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '0 0.2cm',
              alignContent: 'justify',
              border: '0px',
            },
          ]}
        >
          <view
            style={{
              flexDirection: 'column',
              width: '95%',
              textAlign: 'center',
              borderTop: '1px solid #000',
            }}
          >
            <Text>M. en E. Gabriela Calderón Montoya</Text>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
              Profesora Colaboradora
            </Text>
          </view>
        </view>
        <view
          style={[
            styles.cell,
            {
              width: '33.33%',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '0 0.2cm',
              alignContent: 'justify',
              border: '0px',
            },
          ]}
        >
          <view
            style={{
              flexDirection: 'column',
              width: '95%',
              textAlign: 'center',
              borderTop: '1px solid #000',
            }}
          >
            <Text>M. en C. Martha Patricia Cervantes Cervantes</Text>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
              Subdirectora Académica
            </Text>
          </view>
        </view>
        <view
          style={[
            styles.cell,
            {
              width: '33.33%',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '0 0.2cm',
              alignContent: 'justify',
              border: '0px',
            },
          ]}
        >
          <view
            style={{
              flexDirection: 'column',
              width: '95%',
              textAlign: 'center',
              borderTop: '1px solid #000',
            }}
          >
            <Text>Dr. Gonzalo Trujillo Chávez</Text>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
              Director
            </Text>
          </view>
        </view>
      </view>
    </view>
  );
};

export default Signatures;
