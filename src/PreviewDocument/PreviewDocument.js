import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
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
import {
  GET_COMPETENCES,
  GET_CONNECTOR,
  GET_RELATED_UNITS,
  GET_SUBJECT,
  GET_VERB,
} from '../helpers/SubjectEndpoints';
import { GET_SUBJECT_BIBLIO } from '../helpers/BibliographyEndpoints';
import { SubjectContext } from '../context/SubjectContext';
import { GET_COMPETENCES_AXIOS, GET_CONNECTOR_AXIOS, GET_RELATED_UNITS_AXIOS, GET_SUBJECT_AXIOS, GET_VERB_AXIOS } from '../helpers/AxiosEnpoints';

Font.register({ family: 'Arial', fontStyle: 'bold' });

const PreviewDocument = () => {
  const {
    setRelatedUnits,
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

  const { data: biblipographiesData } = useQuery(
    ['bibliography', subject?.id],
    GET_SUBJECT_BIBLIO,
    {
      enabled: !!subject,
    }
  );
  
  const { id } = useParams();
  // const { isLoading: isLoadingSubject, data: subjectResponse } =
  //   useQuery(['subject', 1], GET_SUBJECT);
  const { isLoading: isLoadingSubject, data: subjectResponse } =
    useQuery(['subject', id], GET_SUBJECT_AXIOS);

  const { isLoading: isLoadingVerbs, data: verbsResponse } = useQuery(
    'verbs',
    GET_VERB_AXIOS
  );

  const { isLoading: isLoadingUnits, data: unitsResponse } = useQuery(
    ['competences', subject.id],
    GET_COMPETENCES_AXIOS
  );

  const { isLoading: isLoadingConnectors, data: connectorsResponse } =
    useQuery('connectors', GET_CONNECTOR_AXIOS);

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
  }, [unitsResponse]);

  const {
    isLoading: isLoadingRelatedUnits,
    data: relatedUnitsResponse,
  } = useQuery(['relatedUnits', id], GET_RELATED_UNITS);

  useEffect(() => {
    if (subjectResponse) {
      setSubject(subjectResponse);
    }
  }, [setSubject, subjectResponse]);

  useEffect(() => {
    if (verbsResponse && connectorsResponse) {
      console.log(verbsResponse)
      const newVerbs = verbsResponse?.data.map(
        ({ description, id: idVerb }) => ({
          id: idVerb,
          value: description,
          label: description,
        })
      );
      const newConnectors = connectorsResponse.data.map(
        ({ description, id: idConnector }) => ({
          id: idConnector,
          value: description,
          label: description,
        })
      );
      setConnectors(newConnectors);
      setVerbs(newVerbs);
    }
  }, [verbsResponse, connectorsResponse]);

  useEffect(() => {
    if (relatedUnitsResponse) {
      setRelatedUnits(relatedUnitsResponse.data);
    }
  }, [relatedUnitsResponse]);

  if (
    isLoadingSubject ||
    isLoadingConnectors ||
    isLoadingVerbs ||
    isLoadingRelatedUnits ||
    isLoadingUnits
  )
    return <p>Cargando...</p>;

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
            <BasicBibliography subject={subject} />
          </Page>
          <Page size="A4" style={styles.page}>
            <DocumentHeader />
            <DigResBibliography subject={subject} />
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