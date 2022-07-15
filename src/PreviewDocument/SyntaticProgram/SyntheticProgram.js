import { Text, Font } from '@react-pdf/renderer';
import { styles } from '../PdfStyles';
import Contents from './Contents';
import TeachingApproach from './TeachingApproach';
import Evaluation from './Evaluation';
import Bibliography from './Bibliography';

Font.register({
  family: 'Arial',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/@canvas-fonts/arial-bold@1.0.4/Arial%20Bold.ttf',
      fontWeight: 'bold',
    },
  ],
});

const SyntheticProgram = ({
  subject,
  units,
  verbs,
  connectors,
  biblio,
}) => {
  const verb = verbs.find((v) => v.id === subject?.purpose?.verbId);
  const connector = connectors.find(
    (c) => c.id === subject?.purpose?.connectorId
  );
  return (
    <view style={styles.syntheticProgram}>
      <Text
        style={[
          styles.mainTitle,
          { fontFamily: 'Arial', fontWeight: 'bold' },
        ]}
      >
        PROGRAMA SINTÉTICO
      </Text>
      <view style={styles.table}>
        <view
          style={[styles.row, { height: '0.6cm', padding: '0 2px' }]}
        >
          <view
            style={[
              styles.cell,
              {
                width: '100%',
                flexDirection: 'row',
                borderRight: '0',
              },
            ]}
          >
            <Text
              style={[
                styles.title_cell,
                { fontFamily: 'Arial', fontWeight: 'bold' },
              ]}
            >
              UNIDAD ACADÉMICA: ESCUELA NACIONAL DE CIENCIAS BIOLÓGICAS
            </Text>
          </view>
        </view>
        <view
          style={[styles.row, { height: '0.6cm', padding: '0 2px' }]}
        >
          <view
            style={[
              styles.cell,
              {
                width: '100%',
                flexDirection: 'row',
                borderRight: '0',
              },
            ]}
          >
            <Text
              style={[
                styles.title_cell,
                { fontFamily: 'Arial', fontWeight: 'bold' },
              ]}
            >
              PROGRAMA ACADÉMICO:
            </Text>
            <Text> {` ${subject?.academicPlan?.name}`}</Text>
          </view>
        </view>
        <view
          style={[
            styles.row,
            { height: '0.6cm', borderBottom: '0', padding: '0 2px' },
          ]}
        >
          <view
            style={[
              styles.cell,
              { width: '12cm', height: '100%', flexDirection: 'row' },
            ]}
          >
            <Text
              style={[
                styles.title_cell,
                { fontFamily: 'Arial', fontWeight: 'bold' },
              ]}
            >
              UNIDAD DE APRENDIZAJE:
            </Text>
            <Text> {subject?.name}</Text>
          </view>
          <view
            style={[
              styles.title_cell,
              {
                fontFamily: 'Arial',
                fontWeight: 'bold',
                flexDirection: 'row',
              },
            ]}
          >
            <Text> {' SEMESTRE:'}</Text>
            <Text>{subject?.semester}</Text>
          </view>
        </view>
      </view>

      <view style={styles.break} />

      <view style={styles.table}>
        <view style={styles.rowNoBorder}>
          <Text
            style={{
              width: '100%',
              textAlign: 'center',
              fontFamily: 'Arial',
              fontWeight: 'bold',
            }}
          >
            PROPÓSITO DE LA UNIDAD DE APRENDIZAJE
          </Text>
        </view>
        <view style={[styles.row, { padding: '0 2px' }]}>
          <Text>
            {verb?.value} {subject?.purpose?.object}{' '}
            {connector?.value} {subject?.purpose?.quality}
          </Text>
        </view>
        <Contents units={units} />
        <TeachingApproach units={units} strategy={subject?.strategy} />
        <Evaluation />
        <Bibliography biblio={biblio} />
      </view>
    </view>
  );
};

export default SyntheticProgram;
