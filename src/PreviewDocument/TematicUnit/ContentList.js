import React from 'react';
import RowContent from './RowContent';

const ContentList = ({ content, index, indexContent }) => {
  const format = (hour) => {
    return parseFloat(hour || 0).toFixed(1);
  };
  return (
    <view
      style={{
        width: '100%',
      }}
    >
      <RowContent
        content={content?.title}
        teoricHour={format(content?.T)}
        practiceHour={format(content?.P)}
        AAHour={format(content?.AA)}
        indexUnit={index}
        indexContent={indexContent}
      />
      {content?.subTopics.map((subTopic, i) => (
        <RowContent
          // eslint-disable-next-line react/no-array-index-key
          key={`subcontent-${i}`}
          content={subTopic}
          indexUnit={index}
          indexContent={indexContent}
          indexSubcontent={i + 1}
        />
      ))}
    </view>
  );
};

export default ContentList;
