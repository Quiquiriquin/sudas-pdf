import { StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
  family: 'Arial',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/@canvas-fonts/arial-bold@1.0.4/Arial%20Bold.ttf',
      fontWeight: 'bold',
    },
  ],
});

export const styles = StyleSheet.create({
  page: {
    color: 'black',
    padding: '2cm 1.675cm 2.25cm 1.675cm',
  },
  bold: {
    fontFamily: 'Arial',
    fontStyle: 'bold',
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth,
    height: window.innerHeight,
    fontFamily: 'Arial',
  },
  syntheticProgram: {
    // fontFamily: 'Arial',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  mainTitle: {
    fontSize: '12pt',
    fontWeight: 'black',
    width: '100%',
    textAlign: 'center',
    margin: '10px 0',
  },
  table: {
    // width: '18.24cm',
    width: '100%',
    border: '1px solid #000',
    fontSize: '10pt',
  },
  cell_bottom: {
    borderBottom: '1px solid #000',
  },
  title_cell: {
    fontWeight: 'bold',
  },
  row: {
    width: '100%',
    padding: '0 2px',
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid #000',
    alignItems: 'center',
    fontSize: '10pt',
  },
  rowNoBorder: {
    margin: '2px 0',
    padding: '0 2px',
    display: 'flex',
    flexDirection: 'row',
  },
  cell: {
    display: 'flex',
    flexDirection: 'row',
    borderRight: '1px solid #000',
    alignItems: 'center',
  },
  lastCell: {
    display: 'flex',
    flexDirection: 'row',
  },
  col: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
  break: {
    display: 'block',
    margin: '5px 0',
  },
});
