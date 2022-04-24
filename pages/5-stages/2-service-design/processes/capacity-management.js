import PageHeading from '../../../../components/PageHeading';
import { Notes } from '../../../../contexts/notes';
import Layout from '../../../../components/Layout'
import LinkList from '../../../../components/LinkList';
import Link from 'next/link'

export default function CapacityManagement() {
  const note = Notes.CapacityManagement
  const nextUp = [Notes.AvailabilityManagement]

  return (
    <Layout>
      <PageHeading note={note} />

      <p>Capacity management is responsible for ensuring that adequate capacity is available at all times to meet the agreed needs of the business in a cost-effective manner.</p>
      <p>It is concerned with <strong>speed</strong> and <strong>efficiency</strong>. If IT capacity forecasts are accurate and the amount of IT capacity in place meets business needs ,the capacity management process is a success.</p>
      <p>The capacity management process works closely with <Link href={Notes.SLM.href}><a>Service Level Management (SLM)</a></Link> to ensure that the business' requirements for capacity and performance can be met.</p>

      <h2>3 Sub-Processes of Capacity Management</h2>
      <ol>
        <li>Business Capacity Management</li>
        <li>Service Capacity Management</li>
        <li>Component Capacity Management</li>
      </ol>

      <LinkList heading='Next Up' linkList={nextUp} />

    </Layout>
  );
}
