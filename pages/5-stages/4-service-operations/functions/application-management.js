import Layout from '../../../../components/Layout'
import LinkList from '../../../../components/LinkList'
import PageHeading from '../../../../components/PageHeading';
import { Notes } from '../../../../contexts/notes';
import Link from 'next/link'

export default function ApplicationManagement() {
  const note = Notes.ApplicationManagement
  const nextUp = []

  return (
    <Layout>
      
      <PageHeading note={note} />
      
      <p>Manage applications for their lifecycle and decide whether to buy or build an application.</p>
      
      <h2>Next Up</h2>
      <p><Link href={Notes.TechnicalManagement.href}><a>Technical Management</a></Link></p>
      
      <h2>File Details</h2>
      <p>Last Modified-<br />
      Date Created-</p>
      
      <LinkList heading={'Next Up'} linkList={nextUp} />

    </Layout>
  );
}
