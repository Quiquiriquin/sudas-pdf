import React from 'react';
import { styles } from '../PdfStyles';
import BiographyItem from './BiographyItem';
import TableHeader from './TableHeader';

export const TableBibliography = ({ bibliography }) => {

  if (bibliography) 

  return (
    <view style={[styles.table]}>
      <TableHeader
        title={bibliography?.title}
        documents={bibliography?.documents}
      />
      {bibliography?.items?.map((item, index) => (
        <BiographyItem
          item={item}
          // eslint-disable-next-line react/no-array-index-key
          key={`bibliography${index}`}
        />
      ))}
    </view>
  );

  return (
    <view />
  )
};
