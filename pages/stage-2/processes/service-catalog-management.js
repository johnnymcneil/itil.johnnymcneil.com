import Head from 'next/head'
import Layout from '../../../components/Layout'

export default function SCM() {
  const title = 'Stage 2 - Process 2 - Service Catalog Management - ITIL Fundamentals'
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="description" content="Overview of the Five Stages of the ITIL Service Lifecycle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <h1 data-heading="Service Catalog Management">Service Catalog Management</h1>
          <p><strong><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Stage" data-dv-norm-key="stage">Stage</span><span class="dataview inline-field-value"><span>2</span></span></span>  <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Process" data-dv-norm-key="process">Process</span><span class="dataview inline-field-value"><span>2</span></span></span></strong></p>
          <p>Service catalog management ensures that an accurate and up-to-date service catalog is available to all parties authorized to see it. All parts of IT Service Management, as well as customers and users, use the service catalog.</p>
          <p><strong>Accuracy</strong> and <strong>availability</strong> are essential.</p>
          <h2 data-heading="2 Views for Service Catalog">2 Views for Service Catalog</h2>
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
          <hr />
          <h2 data-heading="Next Up">Next Up</h2>
          <p><a data-href="Process 3 - Capacity Management" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 2\Processes\Process%203%20-%20Capacity%20Management.html" class="internal-link" target="_blank" rel="noopener">Process 3 - Capacity Management</a></p>
          <hr />
          <h2 data-heading="File Details">File Details</h2>
          <p><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Last Modified" data-dv-norm-key="last-modified">Last Modified</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span><br />
          <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Date Created" data-dv-norm-key="date-created">Date Created</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span></p>
        </main>
      </Layout>
    </>
  );
}
