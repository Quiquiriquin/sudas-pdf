import React from 'react';
import MainInfoDocument from '../MainInfoDocument';
import { styles } from '../PdfStyles';
import ListOfPractices from './ListOfPractices';
import StrategiesTable from './StrategiesTable';

const TematicUnitInfo = ({ practices, activitiesData, strategy, index }) => {
  const activities = activitiesData.map( a => a.title );

  const evidencies = activitiesData.map( a => a.description );

  return (
    <view>
      <MainInfoDocument />
      <view style={styles.break} />
      <StrategiesTable
        activities={activities}
        evidencies={evidencies}
        strategy={strategy}
      />
      <view style={styles.break} />
      <ListOfPractices practices={practices} />
    </view>
  );
};

export default TematicUnitInfo;
