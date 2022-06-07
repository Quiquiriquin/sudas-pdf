import { Text } from '@react-pdf/renderer';
import React from 'react';
import MainInfoDocument from '../MainInfoDocument';
import { styles } from '../PdfStyles';
import { TableBibliography } from './TableBibliography';
import TableDigitalResources from './TableDigitalResources';

const DigResBibliography = ({ subject }) => {
  const itemsDigitalBibliography = subject?.bibliographies
    ?.filter((b) => b.type === 'DIGITAL')
    ?.map((b) => {
      const item = {
        text: `Author, W.G (${b?.year}). ${b?.title}. ISB ${b?.library}`,
        type: 1,
      };
      return item;
    });

  const bibliographies = [
    {
      title: 'Recursos digitales',
      documents: [
        'Texto',
        'Simuladores',
        'Imágenes',
        'Tutoriales',
        'Videos',
        'Presentaciones',
        'Diccionarios',
        'Otros',
      ],
      items: itemsDigitalBibliography,
    },
  ];

  return (
    <view style={styles.syntheticProgram}>
      <MainInfoDocument subject={subject} />
      <view style={styles.break} />
      <TableDigitalResources bibliography={bibliographies[0]} />
    </view>
  );
};

export default DigResBibliography;
