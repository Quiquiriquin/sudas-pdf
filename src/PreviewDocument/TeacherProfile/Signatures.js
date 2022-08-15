import { Text } from '@react-pdf/renderer';
import React from 'react';
import { styles } from '../PdfStyles';

const Signatures = ({subject}) => {
  const reviewedBy = subject?.academicPlan?.reviewedBy === null ? "Sin autoridad" : subject?.academicPlan?.reviewedBy;
  // const approvedBy = subject?.academicPlan?.approvedBy === null ? "Sin autoridad" : subject?.academicPlan?.approvedBy;
  const authorizedBy = subject?.academicPlan?.authorizedBy === null ? "Sin autoridad" : subject?.academicPlan?.authorizedBy;
  const coordinator =   subject?.Coordinator[0]?.academicGrade  
                      + " " + subject?.Coordinator[0]?.name 
                      + " " + subject?.Coordinator[0]?.firstSurname 
                      + " " + subject?.Coordinator[0]?.secondSurname;
  const collaborator =   subject?.Collaborator[0]?.academicGrade  
                      + " " + subject?.Collaborator[0]?.name 
                      + " " + subject?.Collaborator[0]?.firstSurname 
                      + " " + subject?.Collaborator[0]?.secondSurname;
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
            <Text>{coordinator}</Text>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
              Profesor Coordinador
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
            <Text>{collaborator}</Text>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
              Profesor Colaborador
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
            <Text>{reviewedBy}</Text>
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
            <Text>{authorizedBy}</Text>
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
