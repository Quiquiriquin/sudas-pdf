import React from 'react';
import MainInfoDocument from '../MainInfoDocument';
import { styles } from '../PdfStyles';
import TableDigitalResources from './TableDigitalResources';

const DigResBibliography = ({ subject, biblio }) => {
  const itemsDigitalBibliography = biblio?.digital
    ?.map((b) => {
      const item = {
        text: `Author, W.G (${b?.year}). ${b?.title}. ISB ${b?.library}`,
        type: b?.kind,
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
