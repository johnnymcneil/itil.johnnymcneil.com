import Link from 'next/link';
import Layout from '../../../../components/Layout'
import LinkList from '../../../../components/LinkList'
import PageHeading from '../../../../components/PageHeading';
import { Notes } from '../../../../contexts/notes';
import Image from 'next/image';
import serviceOpsFlow from '../../../../public/images/Service Operations Flow Chart.png'


export default function ServiceOperationFunctions() {
  const note = Notes.ServiceOperationFunctions
  const nextUp = [Notes.ServiceDesk]

  return (
    <Layout>

      <PageHeading note={note} />

      <h1>Service Operation Functions</h1>
      <p><strong>Stage4</strong></p>
      <p><Image src={serviceOpsFlow} layout='fill' /></p>
      <p>A function is a team or group of people who perform a set of activities.</p>
      <ul>
        <li><Link href={Notes.ServiceDesk.href}><a>Service Desk</a></Link></li>
        <li><Link href={Notes.TechnicalManagement.href}><a>Technical Management</a></Link></li>
        <li><Link href={Notes.ApplicationManagement.href}><a>Application Management</a></Link></li>
        <li><Link href={Notes.ITOperationsManagement.href}><a>IT Operations Management</a></Link></li>
      </ul>
      
      <LinkList heading={'Next Up'} linkList={nextUp} />

    </Layout>
  );
}
