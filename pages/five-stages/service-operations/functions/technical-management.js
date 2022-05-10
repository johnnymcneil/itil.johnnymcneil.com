import Head from 'next/head'
import Layout from '../../../../components/Layout'
import LinkList from '../../../../components/LinkList'
import PageHeading from '../../../../components/PageHeading'
import { Notes } from '../../../../contexts/notes'

export default function TechnicalManagement() {
  const note = Notes.TechnicalManagement
  const nextUp = [Notes.WhatIsItil]
  
  return (
    <Layout>

      <PageHeading note={note} />

      <p>Provides technical expertise and manages the overall IT infrastructure.</p>
      
      <LinkList heading={'Next Up'} linkList={nextUp} />

    </Layout>
  );
}
