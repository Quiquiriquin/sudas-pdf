import React from 'react';
import MainInfoDocument from '../MainInfoDocument';
import { styles } from '../PdfStyles';
import ListOfPractices from './ListOfPractices';
import StrategiesTable from './StrategiesTable';

const TematicUnitInfo = ({ practices, index }) => {
  const activities = [
    'Desarrollo de conceptos teóricos a partir de organizadores gráficos con uso de TIC, gráficas, cuadros de doble entrada.',
    'Resolución en equipo de ejercicios y problemas de adsorción, sistemas coloidales y cinética química',
    'Realización de prácticas',
  ];

  const evidencies = [
    'Mapas conceptuales y cuadros de doble entrada',
    'Problemas resueltos',
    'Reporte de prácticas',
    'Evaluación escrita',
  ];

  return (
    <view>
      <MainInfoDocument />
      <view style={styles.break} />
      <StrategiesTable
        activities={activities}
        evidencies={evidencies}
      />
      <view style={styles.break} />
      <ListOfPractices practices={practices} />
    </view>
  );
};

export default TematicUnitInfo;
