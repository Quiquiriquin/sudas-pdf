import { Text } from '@react-pdf/renderer';
import React from 'react';
import { styles } from '../PdfStyles';

const RowContent = ({
  content,
  teoricHour = ' ',
  practiceHour = ' ',
  AAHour = ' ',
  indexUnit = 0,
  indexContent = 0,
  indexSubcontent = -1,
}) => {
  return (
    <view
      style={[
        styles.row,
        { width: '100%', padding: '0 .02cm', border: '0' },
      ]}
    >
      <view
        style={[
          styles.cell,
          {
            width: '8.58cm',
            height: '100%',
            padding: '0 .2cm',
            flexDirection: 'row',
          },
        ]}
      >
        <view style={{ width: '15%' }}>
          <Text>
            {`${indexUnit}.${indexContent}`}
            {indexSubcontent !== -1 ? `.${indexSubcontent}` : ''}
          </Text>
        </view>
        <view styles={{ width: '85%' }}>
          <Text>{content}</Text>
        </view>
      </view>
      <view
        style={[
          styles.cell,
          {
            width: '1.28cm',
            flexDirection: 'row',
            justifyContent: 'center',
          },
        ]}
      >
        <Text
          styles={{
            alignText: 'center',
          }}
        >
          {teoricHour}
        </Text>
      </view>
      <view
        style={[
          styles.cell,
          {
            width: '1.32cm',
            flexDirection: 'row',
            justifyContent: 'center',
          },
        ]}
      >
        <Text
          styles={{
            alignText: 'center',
          }}
        >
          {practiceHour}
        </Text>
      </view>
      <view
        style={[
          styles.cell,
          {
            width: '1cm',
            flexDirection: 'row',
            justifyContent: 'center',
            border: '0',
          },
        ]}
      >
        <Text
          styles={{
            alignText: 'center',
          }}
        >
          {AAHour}
        </Text>
      </view>
    </view>
  );
};

export default RowContent;
