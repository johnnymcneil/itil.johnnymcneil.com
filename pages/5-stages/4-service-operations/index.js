import Layout from '../../../components/Layout'
import { Notes } from '../../../contexts/notes';
import LinkList from '../../../components/LinkList'
import PageHeading from '../../../components/PageHeading';
import Link from 'next/link'

export default function ServiceOperations() {
  const note = Notes.ServiceOperations
  const nextUp = [Notes.ServiceOperationFunctions]

  return (
    <Layout>
      
      <PageHeading note={note} />
      
      <p>This refers to the process of allowing access to authorized users and prevent access by non-authorized users. It works closely with <Link href={Notes.InformationSecurityManagement.href}><a>Information Security Management</a></Link>.</p>
     
      <h2>Access Management Activites</h2>
      <ul>
        <li>Request Access - Typically comes from the service desk via a <strong>service request</strong> (in <Link href={Notes.ServiceOperations.href}><a>Service Operations</a></Link>) or from a request for change (in <Link href={Notes.ServiceTransition.href}><a>Service Transition</a></Link>).</li>
        <li>Verification - Different levels of access may include different amounts of verification.</li>
        <li>Providing Rights</li>
        <li>Monitoring Identity Status</li>
        <li>Logging and Tracking Access</li>
        <li>Removing or Restricting Rights</li>
      </ul>
      
      <LinkList heading={'Next Up'} linkList={nextUp} />

    </Layout>
  );
}
