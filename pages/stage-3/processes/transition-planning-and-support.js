import Head from 'next/head'
import Layout from '../../../components/Layout'

export default function TransitionPlanningSupport() {
  const stage = 3
  const process = 4
  const title = 'Transition Planning and Support'
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
          <h1 data-heading="Transition Planning and Support">Transition Planning and Support</h1>
          <p><strong><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Stage" data-dv-norm-key="stage">Stage</span><span class="dataview inline-field-value"><span>3</span></span></span>  <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Process" data-dv-norm-key="process">Process</span><span class="dataview inline-field-value"><span>4</span></span></span></strong></p>
          <p><strong>Plan</strong> and <strong>coordinate</strong> service transition activities by</p>
          <ul>
          <li>Working with <strong>capacity</strong> management to ensure that adequate resources are available </li>
          <li>Ensuring that all parties use a <strong>standard</strong>, reusable process framework in order to improve the effectiveness and efficiency of the integrated planning and coordination activities</li>
          <li><strong>Monitoring</strong> and improving the performance of the <a data-href="Service Transition" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 3\Processes\Service%20Transition.html" class="internal-link" target="_blank" rel="noopener">Service Transition</a> lifecycle phase.</li>
          </ul>
          <hr />
          <h2 data-heading="Next Up">Next Up</h2>
          <p><a data-href="Process 5 - Release and Deployment Management" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 3\Processes\Process%205%20-%20Release%20and%20Deployment%20Management.html" class="internal-link" target="_blank" rel="noopener">Process 5 - Release and Deployment Management</a></p>
          <hr />
          <h2 data-heading="File Details">File Details</h2>
          <p><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Last Modified" data-dv-norm-key="last-modified">Last Modified</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span><br />
          <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Date Created" data-dv-norm-key="date-created">Date Created</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span></p>
        </main>
      </Layout>
    </>
  );
}
