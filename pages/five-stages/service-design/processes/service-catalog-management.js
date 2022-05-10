import PageHeading from '../../../../components/PageHeading';
import { Notes } from '../../../../contexts/notes';
import Layout from '../../../../components/Layout'
import LinkList from '../../../../components/LinkList';

export default function SCM() {
  const note = Notes.ServiceCatalogManagement
  const nextUp = [Notes.CapacityManagement]
  return (
    <Layout>

      <PageHeading note={note} />
      
      <p>Service catalog management ensures that an accurate and up-to-date service catalog is available to all parties authorized to see it. All parts of IT Service Management, as well as customers and users, use the service catalog.</p>
      <p><strong>Accuracy</strong> and <strong>availability</strong> are essential.</p>
      
      <h2>2 Views for Service Catalog</h2>
      <ol>
        <li><strong>Customer facing services</strong> which are visible for the business.</li>
        <li><strong>Supporting services</strong> which are required by the service provider to deliver customer-facing services.</li>
      </ol>

      <p>A Service Catalog should include the following elements:</p>
      
      <ul>
        <li>Service Description</li>
        <li>Categorization and Identification Label</li>
        <li>Costs</li>
        <li>Supporting Services</li>
        <li>Related Service Request Types</li>
        <li>Ownership and Accountability</li>
        <li>Escalation Points</li>
        <li>Service Level Agreement (SLA) Data</li>
      </ul>
      
      <LinkList heading='Next Up' linkList={nextUp} />
      
    </Layout>
  );
}
