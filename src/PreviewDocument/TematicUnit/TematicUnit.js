import { Page } from '@react-pdf/renderer';
import React from 'react';
import DocumentHeader from '../DocumentHeader';
import { styles } from '../PdfStyles';
import TematicUnitInfo from './TematicUnitInfo';
import UnitContents from './UnitContents';

const TematicUnit = ({ unit, subject, verbs, connectors, index }) => {
  return (
    <>
      <Page size="A4" style={styles.page}>
        <DocumentHeader />
        <UnitContents
          unit={unit}
          subject={subject}
          verbs={verbs}
          connectors={connectors}
          index={index}
        />
      </Page>
      <Page size="A4" style={styles.page}>
        <DocumentHeader />
        <TematicUnitInfo practices={unit.practices} index={index} />
      </Page>
    </>
  );
};

export default TematicUnit;
