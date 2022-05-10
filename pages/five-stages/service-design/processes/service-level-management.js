import PageHeading from '../../../../components/PageHeading';
import { Notes } from '../../../../contexts/notes';
import Layout from '../../../../components/Layout'
import LinkList from '../../../../components/LinkList';

export default function SLM() {
  const note = Notes.SLM
  const nextUp = [Notes.ServiceCatalogManagement]

  return (
    <Layout>

      <PageHeading note={note} />

      <p>SLM focuses on:</p>
      <ul>
        <li>Defining, negotiating, agreeing upon and documenting IT service targets.</li>
        <li>Monitoring, <strong>measuring</strong>, and <strong>reporting</strong> on how well the service provider delivered the agreed upon targets.</li>
      </ul>
      
      <p>Agreed upon targets are often spelled out in <strong>Service Level Agreements</strong> (SLAs).</p>
      
      <h2>SLAs vs OLAs</h2>
      
      <p>SLAs are agreements to provide specific services at a defined level of quality (warranty) for a specific price. SLAs typically need negotiation of agreements with other internal organizations (OLAs).</p>
      <ul>
        <li>SLA -&gt; Service Level Agreement
          <ul>
            <li>Between <strong>Service Provider</strong> and <strong>Customer</strong></li>
          </ul>
        </li>
        <li>OLA -&gt; Operational Level Agreement
          <ul>
            <li>Between the <strong>Internal Organizations</strong> who are providing service.</li>
          </ul>
        </li>
      </ul>
      <h3>SLA Example</h3>
      
      <p><a href="https://www.fleetster.net/legal/service-level-agreement.pdf">https://www.fleetster.net/legal/service-level-agreement.pdf</a></p>
      
      <h2>3 Types of SLA</h2>
      
      <ol>
        <li><strong>Corporate</strong> Level; all of the general issues relevant to the organization are covered, and they are the same throughout the entire organization. This SLA does not require frequent updates since its issues are typically unchanging.</li>
        <li><strong>Customer</strong> Level; this type of agreements is used for individual customers and comprises all relevant services that a client may need</li>
        <li><strong>Service</strong> Level; this SLA is a contract that includes one identical type of service for all of its customers. Because the service is limited to one unchanging standard, it is more straightforward and convenient for vendors.</li>
      </ol>
      <p>Additionally, <strong>Multi-level</strong> SLA; a combination of levels with the purpose of addressing multiple sets of customers. <em>Example -&gt; when you have different tiers of customers who are paying for different types of service plans.</em></p>
      
      <LinkList heading='Next Up' linkList={nextUp} />

    </Layout>
  );
}
