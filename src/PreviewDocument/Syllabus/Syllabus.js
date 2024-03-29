import React from 'react';
import { Text, Font } from '@react-pdf/renderer';
// import romanize from '../../../helpers/Romanize';
import { styles } from '../PdfStyles';
import MainInfoDocument from '../MainInfoDocument';
import InfoSubject from './InfoSubject';
import InfoSubject2 from './InfoSubject2';

Font.register({ family: 'Arial' });

const Syllabus = ({ subject, verbs, connectors, units }) => {
  const verb = verbs?.find((v) => v?.id === subject?.purpose?.verbId);
  const connector = connectors?.find(
    (c) => c?.id === subject?.purpose?.connectorId
  );
  return (
    <view style={styles.syntheticProgram}>
      <Text style={styles.mainTitle}>PROGRAMA DE ESTUDIOS</Text>
      <MainInfoDocument subject={subject} />
      <view style={styles.break} />
      <InfoSubject
        subject={subject}
        verb={verb}
        connector={connector}
      />
      <view style={styles.break} />
      <InfoSubject2 subject={subject} />
    </view>
  );
};

export default Syllabus;
