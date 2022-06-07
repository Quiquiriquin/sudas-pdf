import React from 'react';
import { Text, Font } from '@react-pdf/renderer';
import MainInfoDocument from '../MainInfoDocument';
import { styles } from '../PdfStyles';
import UnitContentsHeaders from './UnitContentsHeaders';
import ContentList from './ContentList';
// 18.29
const UnitContents = ({
  unit,
  subject,
  verbs,
  connectors,
  index,
}) => {
  const verb = verbs.find((v) => v?.id === unit?.purpose?.verbId);
  const connector = connectors.find(
    (c) => c?.id === unit?.purpose?.connectorId
  );

  Font.register({
    family: 'Arial',
    fonts: [
      {
        src: 'https://cdn.jsdelivr.net/npm/@canvas-fonts/arial-bold@1.0.4/Arial%20Bold.ttf',
        fontWeight: 'bold',
      },
    ],
  });

  return (
    <view>
      <MainInfoDocument subject={subject} />
      <view style={styles.break} />
      <view style={[styles.table]}>
        <UnitContentsHeaders
          description={unit?.description}
          index={index}
        />
        <view style={[styles.row, { padding: '0' }]}>
          <view
            style={[
              styles.cell,
              {
                width: '5.54cm',
                height: '100%',
                flexDirection: 'column',
                padding: '0 0.2cm',
              },
            ]}
          >
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>
              UNIDAD DE COMPETENCIA
            </Text>
            <Text style={{ alignText: 'center' }}>
              {verb?.value} {unit?.purpose?.object} {connector?.value}{' '}
              {unit?.purpose?.quality}
            </Text>
          </view>
          <view
            style={[
              styles.cell,
              {
                width: '12.78cm',
                height: '100%',
                flexDirection: 'column',
                border: '0',
                padding: '0',
              },
            ]}
          >
            {unit?.topics?.map((content, i) => (
              <ContentList
                // eslint-disable-next-line react/no-array-index-key
                key={`content-${i}`}
                content={content}
                index={index + 1}
                indexContent={i + 1}
              />
            ))}
          </view>
        </view>
      </view>
    </view>
  );
};

export default UnitContents;
