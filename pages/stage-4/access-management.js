import Head from 'next/head'
import Layout from '../../components/Layout'

export default function AccessManagement() {
  const stage = 4
  const process = 0
  const title = 'Access Management'
  const pageHeader = `Stage ${stage} - Process ${process} - ${title}`
  const browserTabText = `${pageHeader} - ITIL Fundamentals`
  return (
    <>
      <Head>
        <title>{ browserTabText }</title>
        <meta name="description" content="Overview of the Five Stages of the ITIL Service Lifecycle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <h1 data-heading="Access Management">Access Management</h1>
          <p><strong><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Stage" data-dv-norm-key="stage">Stage</span><span class="dataview inline-field-value"><span>4</span></span></span></strong></p>
          <p>This refers to the process of allowing access to authorized users and prevent access by non-authorized users. It works closely with <a aria-label-position="top" aria-label="Process 6 - Information Security Management" data-href="Process 6 - Information Security Management" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 4\Process%206%20-%20Information%20Security%20Management.html" class="internal-link" target="_blank" rel="noopener">Information Security Management</a>.</p>
          <h2 data-heading="Access Management Activites">Access Management Activites</h2>
          <ul>
          <li>Request Access - Typically comes from the service desk via a <strong>service request</strong> (in <a data-href="Service Operations" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 4\Service%20Operations.html" class="internal-link" target="_blank" rel="noopener">Service Operations</a>) or from a request for change (in <a data-href="Service Transition" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 4\Service%20Transition.html" class="internal-link" target="_blank" rel="noopener">Service Transition</a>).</li>
          <li>Verification - Different levels of access may include different amounts of verification.</li>
          <li>Providing Rights</li>
          <li>Monitoring Identity Status</li>
          <li>Logging and Tracking Access</li>
          <li>Removing or Restricting Rights</li>
          </ul>
          <hr />
          <h2 data-heading="Next Up">Next Up</h2>
          <p><a data-href="Service Operation Functions" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 4\Service%20Operation%20Functions.html" class="internal-link" target="_blank" rel="noopener">Service Operation Functions</a></p>
          <hr />
          <h2 data-heading="File Details">File Details</h2>
          <p><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Last Modified" data-dv-norm-key="last-modified">Last Modified</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span><br />
          <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Date Created" data-dv-norm-key="date-created">Date Created</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span></p>
        </main>
      </Layout>
    </>
  );
}
