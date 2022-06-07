import { Font, Text } from '@react-pdf/renderer';
import React from 'react';
import MainInfoDocument from '../MainInfoDocument';
import { styles } from '../PdfStyles';
import Signatures from './Signatures';
import TableProfileTeacher from './TableProfileTeacher';

Font.register({
  family: 'Arial',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/@canvas-fonts/arial-bold@1.0.4/Arial%20Bold.ttf',
      fontWeight: 'bold',
    },
  ],
});

const TeacherProfile = ({ subject }) => {
  return (
    <view style={styles.syntheticProgram}>
      <view style={styles.break} />
      <MainInfoDocument subject="" />
      <view style={styles.break} />
      <view style={[styles.row, { padding: '0 1cm', border: 0 }]}>
        <view
          style={{
            width: '4cm',
            fontFamily: 'Arial',
            fontWeight: 'bold',
          }}
        >
          <Text>PERFIL DOCENTE:</Text>
        </view>
        <view style={{ width: '10cm' }}>
          <Text>{subject?.teacherProfile?.profile}</Text>
        </view>
      </view>
      <view style={styles.break} />
      <TableProfileTeacher profile={subject?.teacherProfile} />
      <view style={styles.break} />
      <Signatures />
    </view>
  );
};

export default TeacherProfile;
