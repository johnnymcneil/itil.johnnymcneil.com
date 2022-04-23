import Head from 'next/head'
import Layout from '../../../components/Layout'

export default function SLM() {
  const title = 'Stage 2 - Process 1 - Service Level Management - ITIL Fundamentals'
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="description" content="Overview of the Five Stages of the ITIL Service Lifecycle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <h1 data-heading="Service Level Management (SLM)">Service Level Management (SLM)</h1>
          <p><strong><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Stage" data-dv-norm-key="stage">Stage</span><span class="dataview inline-field-value"><span>2</span></span></span>  <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Process" data-dv-norm-key="process">Process</span><span class="dataview inline-field-value"><span>1</span></span></span></strong></p>
          <p>SLM focuses on:</p>
          <ul>
          <li>Defining, negotiating, agreeing upon and documenting IT service targets.</li>
          <li>Monitoring, <strong>measuring</strong>, and <strong>reporting</strong> on how well the service provider delivered the agreed upon targets.</li>
          </ul>
          <p>Agreed upon targets are often spelled out in <strong>Service Level Agreements</strong> (SLAs).</p>
          <h2 data-heading="SLAs vs OLAs">SLAs vs OLAs</h2>
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
          <h3 data-heading="SLA Example">SLA Example</h3>
          <p><a rel="noopener" class="external-link" href="https://www.fleetster.net/legal/service-level-agreement.pdf" target="_blank">https://www.fleetster.net/legal/service-level-agreement.pdf</a></p>
          <h2 data-heading="3 Types of SLA">3 Types of SLA</h2>
          <ol>
          <li><strong>Corporate</strong> Level; all of the general issues relevant to the organization are covered, and they are the same throughout the entire organization. This SLA does not require frequent updates since its issues are typically unchanging.</li>
          <li><strong>Customer</strong> Level; this type of agreements is used for individual customers and comprises all relevant services that a client may need</li>
          <li><strong>Service</strong> Level; this SLA is a contract that includes one identical type of service for all of its customers. Because the service is limited to one unchanging standard, it is more straightforward and convenient for vendors.</li>
          </ol>
          <p>Additionally, <strong>Multi-level</strong> SLA; a combination of levels with the purpose of addressing multiple sets of customers. <em>Example -&gt; when you have different tiers of customers who are paying for different types of service plans.</em></p>
          <hr />
          <h2 data-heading="Next Up">Next Up</h2>
          <p><a data-href="Process 2 - Service Catalog Management" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 2\Processes\Process%202%20-%20Service%20Catalog%20Management.html" class="internal-link" target="_blank" rel="noopener">Process 2 - Service Catalog Management</a></p>
          <hr />
          <h2 data-heading="File Details">File Details</h2>
          <p><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Last Modified" data-dv-norm-key="last-modified">Last Modified</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span><br />
          <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Date Created" data-dv-norm-key="date-created">Date Created</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span></p>
        </main>
      </Layout>
    </>
  );
}
