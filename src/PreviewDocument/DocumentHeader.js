import React from 'react';
import { Text, StyleSheet, Image, Font } from '@react-pdf/renderer';

// Font.register({ family: 'Arial', fontWeight: '400' });

Font.register({
  family: 'Arial',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/@canvas-fonts/arial-bold@1.0.4/Arial%20Bold.ttf',
      fontWeight: 'bold',
    },
  ],
});

const styles = StyleSheet.create({
  em: {
    fontWeight: 'bold',
  },
  header: {
    fontFamily: 'Arial',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    fontWeight: 'bold',
  },
  image: {
    width: '2.46cm',
    height: '1.73cm',
  },
  titles: {
    fontFamily: 'Arial',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  mainTitle: {
    fontFamily: 'Arial',
    fontSize: '16pt',
    fontWeight: 'bold',
  },
  subtitle1: {
    fontSize: '14pt',
    fontWeight: 'bold',
  },
  subtitle2: {
    fontSize: '11pt',
    // fontWeight: 'bold',
  },
});

const ipnImage =
  'https://upload.wikimedia.org/wikipedia/commons/f/f8/Logo_Instituto_Polit%C3%A9cnico_Nacional.png';

const logoSchool =
  // 'https://www.encb.ipn.mx/assets/files/encb/img/escudos/escudo-330X330.jpg';
  // 'https://documentalias.files.wordpress.com/2012/06/maldonado-31.jpg';
  'https://i.ibb.co/rtDBL1q/ENCB-sinfondo.png';

const DocumentHeader = () => {
  return (
    <view style={styles.header}>
      <Image
        src={ipnImage}
        style={[styles.image, { width: '3.5cm', height: '2.7cm' }]}
      />
      <view style={styles.titles}>
        <Text style={[styles.mainTitle]}>
          INSTITUTO POLITÉCNICO NACIONAL
        </Text>
        <Text style={styles.subtitle1}>SECRETARÍA ACADÉMICA</Text>
        <Text style={styles.subtitle2}>
          DIRECCIÓN DE EDUCACIÓN SUPERIOR
        </Text>
      </view>
      <Image
        src={logoSchool}
        style={[
          styles.image,
          {
            marginLeft: '1cm',
            padding: '0',
            width: '2cm',
            height: '2.5cm',
          },
        ]}
      />
    </view>
  );
};

export default DocumentHeader;
