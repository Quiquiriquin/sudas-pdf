import React from 'react';
import { Text, Font } from '@react-pdf/renderer';
import { styles } from '../PdfStyles';
import RowAndX from './RowAndX';

Font.register({
  family: 'Arial',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/@canvas-fonts/arial-bold@1.0.4/Arial%20Bold.ttf',
      fontWeight: 'bold',
    },
  ],
});

const TeachingApproach = ({ units, strategy }) => {

  const methods = [
    ...new Set(units?.map((unit) => (
      unit?.method?.label
    )))
  ];

  const missingRowMethods = Array.from(Array(5 - methods.length).keys());

  const missingRowStrategies = Array.from(Array(4).keys());

  return (
    <view
      style={[styles.row, { padding: '0', alignItems: 'flex-start' }]}
    >
      <view
        style={[
          styles.cell,
          {
            width: '3.24cm',
            height: '100%',
          },
        ]}
      >
        <Text
          style={{
            margin: '0 auto',
            textAlign: 'center',
            fontFamily: 'Arial',
            fontWeight: 'bold',
          }}
        >
          ORIENTACIÓN DIDÁCTICA:
        </Text>
      </view>
      <view
        style={[
          styles.cell,
          {
            width: '15cm',
            flexDirection: 'column',
            borderRight: '0',
          },
        ]}
      >
        {/* Headers Metodos de enseñanza y Estrategias */}
        <view
          style={[
            styles.row,
            {
              width: '100%',
              height: '0.6cm',
              flexDirection: 'row',
            },
          ]}
        >
          <view
            style={[
              styles.cell,
              {
                width: '50%',
                height: '100%',
                flexDirection: 'row',
              },
            ]}
          >
            <Text
              style={{
                margin: '0 auto',
                fontFamily: 'Arial',
                fontWeight: 'bold',
              }}
            >
              Métodos de enseñanza
            </Text>
          </view>
          <view
            style={[
              styles.cell,
              {
                width: '50%',
                height: '100%',
                flexDirection: 'row',
                borderRight: '0',
              },
            ]}
          >
            <Text
              style={{
                margin: '0 auto',
                fontFamily: 'Arial',
                fontWeight: 'bold',
              }}
            >
              Estrategias de aprendizaje
            </Text>
          </view>
        </view>
        {/* End Headers Metodos de enseñanza y Estrategias */}
        <view
          style={[
            styles.row,
            {
              width: '100%',
              height: '3cm',
              flexDirection: 'row',
              alignContent: 'flex-start',
              padding: '0',
              borderBottom: '0',
            },
          ]}
        >
          <view style={[styles.list, { width: '7.3cm', borderRight: '1px solid #000', height: '3cm' }]}>
          {methods?.map((method, index) => (
              <view
                // eslint-disable-next-line react/no-array-index-key
                key={index + method}
                style={[
                  styles.row,
                  {
                    width: '7.24cm',
                    flexDirection: 'row',
                    height: '0.6cm',
                    padding: '0',
                    alignContent: 'flex-start',
                    borderBottom:
                      index + 1 !== 5
                        ? '1px solid #000'
                        : '0',
                  },
                ]}
              >
                <RowAndX text={method} mark={true}/>
              </view>
            ))
            }
            {
              missingRowMethods?.map((index) => (
                <view
                  // eslint-disable-next-line react/no-array-index-key
                  key={index + "method"}
                  style={[
                    styles.row,
                    {
                      width: '7.24cm',
                      flexDirection: 'row',
                      height: '0.6cm',
                      padding: '0',
                      alignContent: 'flex-start',
                      borderBottom:
                        index + 1 + methods.length !== 5
                          ? '1px solid #000'
                          : '0',
                    },
                  ]}
                >
                  <RowAndX text="" mark={false}/>
                </view>
              ))
            }
          </view>
          <view style={[styles.list, { width: '7.3cm', height: '3cm'}]}>
              <view
                style={[
                  styles.row,
                  {
                    width: '7.24cm',
                    flexDirection: 'row',
                    height: '0.6cm',
                    padding: '0',
                    // borderBottom:
                    //   index + 1 === teachingMethods.length
                    //     ? '0'
                    //     : '1px solid #000',
                  },
                ]}
              >
                <RowAndX text={strategy?.label} mark={true} />
              </view>
            {
                missingRowStrategies?.map((index) => (
                  <view
                    // eslint-disable-next-line react/no-array-index-key
                    key={index + "method"}
                    style={[
                      styles.row,
                      {
                        width: '7.24cm',
                        flexDirection: 'row',
                        height: '0.6cm',
                        padding: '0',
                        alignContent: 'flex-start',
                        borderBottom:
                          index + 1  !== 4
                            ? '1px solid #000'
                            : '0',
                      },
                    ]}
                  >
                    <RowAndX text="" mark={false}/>
                  </view>
                ))
              }
          </view>
        </view>
      </view>
    </view>
  );
};

export default TeachingApproach;
