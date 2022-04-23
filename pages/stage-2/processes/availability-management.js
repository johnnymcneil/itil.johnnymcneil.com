import Head from 'next/head'
import Layout from '../../../components/Layout'

export default function AvailabilityManagement() {
  const title = 'Stage 2 - Process 4 - Availability Management - ITIL Fundamentals'
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="description" content="Overview of the Five Stages of the ITIL Service Lifecycle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <h1 data-heading="Availability Management">Availability Management</h1>
          <p><strong><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Stage" data-dv-norm-key="stage">Stage</span><span class="dataview inline-field-value"><span>2</span></span></span>  <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Process" data-dv-norm-key="process">Process</span><span class="dataview inline-field-value"><span>4</span></span></span></strong></p>
          <p><strong>Availability</strong> is the degree to which something is accessible and usable when needed.</p>
          <p>Availability Management ensures that infrastructure, tools, roles, etc. are appropriate for the agreed targets. It views availability from the <strong>user's</strong> perspective, from end to end.</p>
          <h2 data-heading="Capacity Management vs Availability Management">Capacity Management vs Availability Management</h2>
          <p>Capacity management is focused on how best to provide resources to meet service requirements.</p>
          <p>Availability management is focused on <strong>delivering</strong> a sustained level of availability to meet service requirements.</p>
          <p>However, at a high level, many of the best practices for capacity management and availability management are similar enough to be combined, and they become closely coupled.</p>
          <hr />
          <h2 data-heading="Next Up">Next Up</h2>
          <p><a data-href="Process 5 - IT Service Continuity Management (ITSCM)" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 2\Processes\Process%205%20-%20IT%20Service%20Continuity%20Management%20(ITSCM).html" class="internal-link" target="_blank" rel="noopener">Process 5 - IT Service Continuity Management (ITSCM)</a></p>
          <hr />
          <h2 data-heading="File Details">File Details</h2>
          <p><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Last Modified" data-dv-norm-key="last-modified">Last Modified</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span><br />
          <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Date Created" data-dv-norm-key="date-created">Date Created</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span></p>
        </main>
      </Layout>
    </>
  );
}
