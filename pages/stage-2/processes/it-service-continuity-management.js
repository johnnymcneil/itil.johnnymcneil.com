import Head from 'next/head'
import Layout from '../../../components/Layout'

export default function ITSCM() {
  const title = 'Stage 2 - Process 5 - Availability Management - ITIL Fundamentals'
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="description" content="Overview of the Five Stages of the ITIL Service Lifecycle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <h1 data-heading="IT Service Continuity Management (ITSCM)">IT Service Continuity Management (ITSCM)</h1>
          <p><strong><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Stage" data-dv-norm-key="stage">Stage</span><span class="dataview inline-field-value"><span>2</span></span></span>  <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Process" data-dv-norm-key="process">Process</span><span class="dataview inline-field-value"><span>5</span></span></span></strong></p>
          <p>ITSCM ensures continuity of IT service in time of any <strong>disaster</strong>. It also evaluates the level of insurance we need to protect service assets and a manuscript to recover from a disaster.</p>
          <p>It includes business impact analysis &amp; <strong>risk</strong> management.</p>
          <hr />
          <h2 data-heading="Next Up">Next Up</h2>
          <p><a data-href="Process 6 - Information Security Management" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 2\Processes\Process%206%20-%20Information%20Security%20Management.html" class="internal-link" target="_blank" rel="noopener">Process 6 - Information Security Management</a></p>
          <hr />
          <h2 data-heading="File Details">File Details</h2>
          <p><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Last Modified" data-dv-norm-key="last-modified">Last Modified</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span><br />
          <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Date Created" data-dv-norm-key="date-created">Date Created</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span></p>
        </main>
      </Layout>
    </>
  );
}
