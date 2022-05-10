import Layout from '../../../components/Layout'
import PageHeading from '../../../components/PageHeading';
import { Notes } from '../../../contexts/notes';
import LinkList from '../../../components/LinkList';
import Link from 'next/link'

export default function ServiceDesign() {
  const note = Notes.ServiceDesign
  const nextUp = [Notes.SLM]
  return (
    <>
      <Layout>

        <PageHeading note={note} />
        
        <p>The Service Design lifecycle phase is about the design of services and all supporting elements for introduction into the live environment.</p>

        <h2>5 Aspects of Service Design</h2>
        <ol>
          <li>The design of the services (e.g., functional requirements, resources and capabilities)</li>
          <li>The design of service <strong>management</strong> systems and tools through their lifecycle.</li>
          <li>The design of the <strong>technology</strong> architectures and management systems required to provide the services.</li>
          <li>The design of the <strong>processes</strong> and roles.</li>
          <li>The design of the measurement methods and <strong>metrics</strong> of the services.</li>
        </ol>

        <h2>Processes</h2>
        <ol>
          <li><Link href={Notes.SLM.href}><a>Service Level Management (SLM)</a></Link></li>
          <li><Link href={Notes.ServiceCatalogManagement.href}><a>Service Catalog Management</a></Link></li>
          <li><Link href={Notes.CapacityManagement.href}><a>Capacity Management</a></Link></li>
          <li><Link href={Notes.AvailabilityManagement.href}><a>Availability Management</a></Link></li>
          <li><Link href={Notes.ITSCM.href}><a>IT Service Continuity Management (ITSCM)</a></Link></li>
          <li><Link href={Notes.InformationSecurityManagement.href}><a>Information Security Management</a></Link></li>
          <li><Link href={Notes.SupplierManagement.href}><a>Supplier Management</a></Link></li>
        </ol>

        <LinkList heading='Next Up' linkList={nextUp} />

      </Layout>
    </>
  );
}
