import Head from 'next/head'
import Layout from '../../../../components/Layout'
import LinkList from '../../../../components/LinkList'
import PageHeading from '../../../../components/PageHeading'
import { Notes } from '../../../../contexts/notes'

export default function ITOperationsManagement() {
  const note = Notes.ITOperationsManagement
  const nextUp = [Notes.ApplicationManagement]

  return (
    <Layout>

      <PageHeading note={note} />

      <p>Monitor and control the IT <strong>services</strong> and their underlying <strong>infrastructure</strong>, executing day-to-day routine tasks related to the operation of infrastructure components and applications.</p>
      
      <LinkList heading={'Next Up'} linkList={nextUp} />

    </Layout>
  );
}
