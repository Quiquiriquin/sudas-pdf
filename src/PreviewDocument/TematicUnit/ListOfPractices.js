import { Text, Font } from '@react-pdf/renderer';
import React from 'react';
import { styles } from '../PdfStyles';
import ItemListPractices from './ItemListPractices';
import LastRowPracticeTable from './LastRowPracticeTable';
import ListOfPracticesHeader from './ListOfPracticesHeader';

Font.register({
  family: 'Arial',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/@canvas-fonts/arial-bold@1.0.4/Arial%20Bold.ttf',
      fontWeight: 'bold',
    },
  ],
});

// const practices = [
//   {
//     name: 'name 1',
//     hours: '3.0',
//     place: 'Laboratorio de Fisicoquímica',
//   },
//   {
//     name: 'name 2',
//     hours: '3.0',
//     place: 'Laboratorio de Fisicoquímica',
//   },
//   {
//     name: 'name 3',
//     hours: '3.0',
//     place: 'Laboratorio de Fisicoquímica',
//   },
//   {
//     name: 'name 4',
//     hours: '3.0',
//     place: 'Laboratorio de Fisicoquímica',
//   },
// ];

const ListOfPractices = ({ practices }) => {
  const totalHours = practices.reduce((accumulator, object) => {
    return parseFloat(
      parseFloat(accumulator) + parseFloat(object.hours)
    ).toFixed(1);
  }, 0);

  return (
    <view style={[styles.table]}>
      <view style={[styles.row]}>
        <view
          style={[
            styles.cell,
            {
              width: '100%',
              height: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '.3cm 0',
              border: '0',
            },
          ]}
        >
          <Text
            styles={{
              margin: '0 auto',
              fontFamily: 'Arial',
              fontWeight: 'bold',
            }}
          >
            RELACIÓN DE PRÁCTICAS
          </Text>
        </view>
      </view>
      <ListOfPracticesHeader />
      {practices.map((practice, index) => (
        <ItemListPractices
          // eslint-disable-next-line react/no-array-index-key
          key={`practice-${index}`}
          index={index + 1}
          name={practice.name}
          hours={parseFloat(practice.hours).toFixed(1)}
          place={practice.place}
        />
      ))}
      <LastRowPracticeTable totalHours={totalHours} />
    </view>
  );
};

export default ListOfPractices;
