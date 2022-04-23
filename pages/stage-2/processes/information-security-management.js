import Head from 'next/head'
import Layout from '../../../components/Layout'

export default function InformationSecurityManagement() {
  const title = 'Stage 2 - Process 6 - Information Security Management - ITIL Fundamentals'
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="description" content="Overview of the Five Stages of the ITIL Service Lifecycle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <h1 data-heading="Information Security Management">Information Security Management</h1>
          <p><strong><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Stage" data-dv-norm-key="stage">Stage</span><span class="dataview inline-field-value"><span>2</span></span></span>  <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Process" data-dv-norm-key="process">Process</span><span class="dataview inline-field-value"><span>6</span></span></span></strong></p>
          <p>Information Security Management ensures that information is:</p>
          <ul>
          <li>Available and usable when required (<strong>availabililty</strong>)</li>
          <li>Disclosed only to those who have a right to know (<strong>confidentiality</strong>)</li>
          <li>Complete, accurate, and protected against unauthorized modification (<strong>integrity</strong>)</li>
          <li>Information exchanges between enterprises or with partners can be trusted (<strong>authenticity and non-repudiation</strong>)</li>
          </ul>
          <h2 data-heading="Recommended Security Controls">Recommended Security Controls</h2>
          <ul>
          <li><strong>Preventive</strong> -&gt; Keep a security incident from happening.</li>
          <li><strong>Detective</strong> -&gt; Identify a risk or threat as quickly as possible.</li>
          <li>Repressive -&gt; Work like counterattacks.</li>
          <li><strong>Corrective</strong> -&gt; Repair any damage caused by an error or incident.</li>
          </ul>
          <hr />
          <h2 data-heading="Next Up">Next Up</h2>
          <p><a data-href="Process 7 - Supplier Management" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 2\Processes\Process%207%20-%20Supplier%20Management.html" class="internal-link" target="_blank" rel="noopener">Process 7 - Supplier Management</a></p>
          <hr />
          <h2 data-heading="File Details">File Details</h2>
          <p><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Last Modified" data-dv-norm-key="last-modified">Last Modified</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span><br />
          <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Date Created" data-dv-norm-key="date-created">Date Created</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span></p>
        </main>
      </Layout>
    </>
  );
}
