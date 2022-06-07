import React from 'react';
import { styles } from '../PdfStyles';
import BiographyDigResItem from './BiographyDigResItem';
import TableHeaderDigRes from './TableHeaderDigRes';

const TableDigitalResources = ({ bibliography }) => {
  return (
    <view style={[styles.table]}>
      <TableHeaderDigRes
        title={bibliography?.title}
        documents={bibliography?.documents}
      />
      {bibliography?.items.map((item, index) => (
        <BiographyDigResItem
          item={item}
          // eslint-disable-next-line react/no-array-index-key
          key={`bibliographyDig${index}`}
        />
      ))}
    </view>
  );
};

export default TableDigitalResources;
