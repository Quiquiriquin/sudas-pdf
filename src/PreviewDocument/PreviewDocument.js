import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import {useLocation, useParams} from 'react-router-dom';
import { Page, Document, PDFViewer, Font } from '@react-pdf/renderer';

// import { SubjectContext } from '../../context/SubjectContext';
import DocumentHeader from './DocumentHeader';
import SyntheticProgram from './SyntaticProgram/SyntheticProgram';
import './PreviewDocument.scss';
import { styles } from './PdfStyles';
import Syllabus from './Syllabus/Syllabus';
import TematicUnit from './TematicUnit/TematicUnit';
import BasicBibliography from './Bibliography/BasicBibliography';
import DigResBibliography from './Bibliography/DigResBibliography';
import TeacherProfile from './TeacherProfile/TeacherProfile';
import { SubjectContext } from '../context/SubjectContext';
import { GET_COMPETENCES_AXIOS, GET_CONNECTOR_AXIOS, GET_SUBJECT_AXIOS, GET_SUBJECT_BIBLIO_AXIOS, GET_VERB_AXIOS } from '../helpers/AxiosEnpoints';

Font.register({ family: 'Arial', fontStyle: 'bold' });
Font.registerHyphenationCallback(word => [word]);

const PreviewDocument = () => {
  const {
    setVerbs,
    verbs,
    setConnectors,
    connectors,
    setSubject,
    subject,
    setUnits,
    units,
  } = useContext(SubjectContext);
  const [biblio, setBiblio] = useState({});
  const location = useLocation();
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const t = new URLSearchParams(location.search).get("t");
    console.log(t, "---");
    if (t && t?.length > 10) {
      localStorage.setItem('a_t', t);
      setHasToken(true);
    }
  }, [location.search]);
  const { data: biblipographiesData } = useQuery(
    ['bibliography', subject?.id],
    GET_SUBJECT_BIBLIO_AXIOS,
    {
      enabled: !!subject && hasToken,
    }
  );
  
  const { id } = useParams();
  // const { isLoading: isLoadingSubject, data: subjectResponse } =
  //   useQuery(['subject', 1], GET_SUBJECT);
  const { isLoading: isLoadingSubject, data: subjectResponse } =
    useQuery(['subject', id], GET_SUBJECT_AXIOS);

  const { isLoading: isLoadingVerbs, data: verbsResponse } = useQuery(
    'verbs',
    GET_VERB_AXIOS, {
      enabled: hasToken
    }
  );

  const { isLoading: isLoadingUnits, data: unitsResponse } = useQuery(
    ['competences', subject.id],
    GET_COMPETENCES_AXIOS,
    {
      enabled: !!subject?.id && hasToken,
    }
  );

  const { isLoading: isLoadingConnectors, data: connectorsResponse } =
    useQuery('connectors', GET_CONNECTOR_AXIOS, {
      enabled: hasToken
    });

  useEffect(() => {
    if (biblipographiesData && biblipographiesData.status !== 204) {
      const { data } = biblipographiesData;
      if (data) {
        setBiblio(data);
      }
    }
  }, [biblipographiesData]);

  useEffect(() => {
    if (unitsResponse) {
      setUnits(unitsResponse.data);
    }
  }, [setUnits, unitsResponse]);

  // const {
  //   isLoading: isLoadingRelatedUnits,
  //   data: relatedUnitsResponse,
  // } = useQuery(['relatedUnits', id], GET_RELATED_UNITS);

  useEffect(() => {
    if (subjectResponse) {
      setSubject(subjectResponse);
    }
  }, [setSubject, subjectResponse]);

  useEffect(() => {
    if (verbsResponse && connectorsResponse) {
      const newVerbs = verbsResponse?.map(
        ({ description, id: idVerb }) => ({
          id: idVerb,
          value: description,
          label: description,
        })
      );
      const newConnectors = connectorsResponse?.map(
        ({ description, id: idConnector }) => ({
          id: idConnector,
          value: description,
          label: description,
        })
        );
      setConnectors(newConnectors);
      setVerbs(newVerbs);
    }
  }, [verbsResponse, connectorsResponse, setConnectors, setVerbs]);

  // useEffect(() => {
  //   if (relatedUnitsResponse) {
  //     setRelatedUnits(relatedUnitsResponse.data);
  //   }
  // }, [relatedUnitsResponse]);

  if (
    isLoadingSubject ||
    isLoadingConnectors ||
    isLoadingVerbs ||
    // isLoadingRelatedUnits ||
    isLoadingUnits
  )
    return <p className="title">Cargando...</p>;
  if (!hasToken) {
    return (
      <div style={{ height: '100vh', width: '100vw', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>
          Esperando autorización
        </h1>
      </div>
    )
  }

  return (
    <div className="w-full">
      <PDFViewer style={styles.viewer}>
        <Document>
          <Page size="A4" style={styles.page}>
            <DocumentHeader />
            <SyntheticProgram
              subject={subject}
              units={units}
              verbs={verbs}
              connectors={connectors}
              biblio={biblio}
            />
          </Page>
          <Page size="A4" style={styles.page}>
            <DocumentHeader />
            <Syllabus
              subject={subject}
              units={units}
              verbs={verbs}
              connectors={connectors}
            />
          </Page>
          {units?.map((unit, index) => (
            <TematicUnit
              // eslint-disable-next-line react/no-array-index-key
              key={`unit${index}`}
              unit={unit}
              subject={subject}
              verbs={verbs}
              connectors={connectors}
              index={index}
            />
          ))}
          <Page size="A4" style={styles.page}>
            <DocumentHeader />
            <BasicBibliography biblio={biblio} />
          </Page>
          <Page size="A4" style={styles.page}>
            <DocumentHeader />
            <DigResBibliography subject={subject} biblio={biblio} />
          </Page>
          <Page size="A4" style={styles.page}>
            <DocumentHeader />
            <TeacherProfile subject={subject} />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default PreviewDocument;
