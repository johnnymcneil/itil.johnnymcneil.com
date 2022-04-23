import Head from 'next/head'
import Layout from '../../../components/Layout'

export default function ServiceValidationTesting() {
  const stage = 3
  const process = 6
  const title = 'Service Validation and Testing'
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
          <h1 data-heading="Service Validation and Testing">Service Validation and Testing</h1>
          <p><strong><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Stage" data-dv-norm-key="stage">Stage</span><span class="dataview inline-field-value"><span>3</span></span></span>  <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Process" data-dv-norm-key="process">Process</span><span class="dataview inline-field-value"><span>6</span></span></span></strong></p>
          <p>Working with change evaluation, service, validation and testing will</p>
          <ul>
          <li>Work with <strong>transition planning and support</strong> to plan the resources required for testing</li>
          <li>Plan, design, schedule, <strong>perform</strong>, and <strong>close</strong> tests</li>
          <li>Prepare the test environment</li>
          </ul>
          <h2 data-heading="Types of Testing">Types of Testing</h2>
          <table>
          <thead>
          <tr>
          <th>Type</th>
          <th>Description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>Utility</td>
          <td>Does the service have the required functionality?</td>
          </tr>
          <tr>
          <td>Warranty</td>
          <td>Will the service deliver required levels of availability, capacity, and continuity?</td>
          </tr>
          <tr>
          <td>Usability</td>
          <td>Will the service be usable by all potential users?</td>
          </tr>
          <tr>
          <td>Contract and Regulation</td>
          <td>Will the service conform to applicable regulatory &amp; contract requirements?</td>
          </tr>
          <tr>
          <td>Operational Readiness</td>
          <td>Are the support functions (including the service desk) staffed and trained to support the new or changed service?</td>
          </tr>
          </tbody>
          </table>
          <hr />
          <h2 data-heading="Next Up">Next Up</h2>
          <p><a data-href="Process 7 - Change Evaluation" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 3\Processes\Process%207%20-%20Change%20Evaluation.html" class="internal-link" target="_blank" rel="noopener">Process 7 - Change Evaluation</a></p>
          <hr />
          <h2 data-heading="File Details">File Details</h2>
          <p><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Last Modified" data-dv-norm-key="last-modified">Last Modified</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span><br />
          <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Date Created" data-dv-norm-key="date-created">Date Created</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span></p>
        </main>
      </Layout>
    </>
  );
}
