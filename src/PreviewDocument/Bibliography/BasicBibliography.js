import React from 'react';
import MainInfoDocument from '../MainInfoDocument';
import { styles } from '../PdfStyles';
import { TableBibliography } from './TableBibliography';

const BasicBibliography = ({ subject }) => {
  console.log(subject?.bibliographies);
  const itemsBasicBibliography = subject?.bibliographies
    ?.filter((b) => b.type === 'BASIC')
    ?.map((b) => {
      const item = {
        text: `Author, W.G (${b?.year}). ${b?.title}. ISB ${b?.library}`,
        type: b.kind,
      };
      return item;
    });

  const itemsComplementaryBibliography = subject?.bibliographies
    ?.filter((b) => b?.type === 'COMPLEMENTARY')
    ?.map((b) => {
      const item = {
        text: `Author, W.G (${b?.year}). ${b?.title}. ISB ${b?.library}`,
        type: b.kind,
      };
      return item;
    });

  const itemsCiberBibliography = subject?.bibliographies
    ?.filter((b) => b?.type === 'CYBER')
    ?.map((b) => {
      const item = {
        text: `Author, W.G (${b?.year}). ${b?.title}. ISB ${b?.library}`,
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
