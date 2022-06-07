import React from 'react';
import RowContent from './RowContent';

const ContentList = ({ content, index, indexContent }) => {
  return (
    <view
      style={{
        width: '100%',
      }}
    >
      <RowContent
        content={content?.title}
        teoricHour={content?.T}
        practiceHour={content?.P}
        AAHour={content?.AA}
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
