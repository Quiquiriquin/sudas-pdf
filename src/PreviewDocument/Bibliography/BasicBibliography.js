import React from 'react';
import MainInfoDocument from '../MainInfoDocument';
import { styles } from '../PdfStyles';
import { TableBibliography } from './TableBibliography';

const BasicBibliography = ({ biblio, subject }) => {
  const itemsBasicBibliography = biblio?.basic
    ?.map((b) => {
      const item = {
        text: `${b?.author?.name} (${b?.year}). ${b?.title}. ISB ${b?.library}`,
        type: b.kind,
      };
      return item;
    });

  const itemsComplementaryBibliography = biblio?.complementary
    ?.map((b) => {
      const item = {
        text: `${b?.author?.name} (${b?.year}). ${b?.title}. ISB ${b?.library}`,
        type: b.kind,
      };
      return item;
    });

  const itemsCiberBibliography = biblio?.cyber
    ?.map((b) => {
      const item = {
        text: `${b?.author?.name} .(${b?.year}). ${b?.title}. ISB ${b?.library}`,
        type: b.kind,
      };
      return item;
    });

  const bibliographies = [
    {
      title: 'Bibliografía básica',
      documents: ['Libro', 'Antología', 'Otros'],
      items: itemsBasicBibliography,
    },
    {
      title: 'Bibliografía complementaria',
      documents: ['Libro', 'Antología', 'Otros'],
      items: itemsComplementaryBibliography,
    },
    {
      title: 'Cibergrafía',
      documents: ['Libro', 'Antología', 'Memoria'],
      items: itemsCiberBibliography,
    },
  ];

  return (
    <view style={styles.syntheticProgram}>
      <MainInfoDocument subject={subject} />
      <view style={styles.break} />
      <TableBibliography bibliography={bibliographies[0]} />
      <view style={styles.break} />
      <TableBibliography bibliography={bibliographies[1]} />
      <view style={styles.break} />
      <TableBibliography bibliography={bibliographies[2]} />
    </view>
  );
};

export default BasicBibliography;
