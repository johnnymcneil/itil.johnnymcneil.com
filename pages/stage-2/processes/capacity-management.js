import Head from 'next/head'
import Layout from '../../../components/Layout'

export default function CapacityManagement() {
  const title = 'Stage 2 - Process 3 - Capacity Management - ITIL Fundamentals'
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="description" content="Overview of the Five Stages of the ITIL Service Lifecycle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <h1 data-heading="Capacity Management">Capacity Management</h1>
          <p><strong><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Stage" data-dv-norm-key="stage">Stage</span><span class="dataview inline-field-value"><span>2</span></span></span>  <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Process" data-dv-norm-key="process">Process</span><span class="dataview inline-field-value"><span>3</span></span></span></strong></p>
          <p>Capacity management is responsible for ensuring that adequate capacity is available at all times to meet the agreed needs of the business in a cost-effective manner.</p>
          <p>It is concerned with <strong>speed</strong> and <strong>efficiency</strong>. If IT capacity forecasts are accurate and the amount of IT capacity in place meets business needs ,the capacity management process is a success.</p>
          <p>The capacity management process works closely with <a data-href="Process 1 - Service Level Management (SLM)" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 2\Processes\Process%201%20-%20Service%20Level%20Management%20(SLM).html" class="internal-link" target="_blank" rel="noopener">Process 1 - Service Level Management (SLM)</a> to ensure that the business' requirements for capacity and performance can be met.</p>
          <h2 data-heading="3 Sub-Processes of Capacity Management">3 Sub-Processes of Capacity Management</h2>
          <ol>
          <li>Business Capacity Management</li>
          <li>Service Capacity Management</li>
          <li>Component Capacity Management</li>
          </ol>
          <hr />
          <h2 data-heading="Next Up">Next Up</h2>
          <p><a data-href="Process 4 - Availability Management" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 2\Processes\Process%204%20-%20Availability%20Management.html" class="internal-link" target="_blank" rel="noopener">Process 4 - Availability Management</a></p>
          <hr />
          <h2 data-heading="File Details">File Details</h2>
          <p><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Last Modified" data-dv-norm-key="last-modified">Last Modified</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span><br />
          <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Date Created" data-dv-norm-key="date-created">Date Created</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span></p>
        </main>
      </Layout>
    </>
  );
}
