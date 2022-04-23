import Head from 'next/head'
import Layout from '../../../components/Layout'

export default function ChangeManagement() {
  const stage = 3
  const process = 1
  const title = 'Change Management'
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
          <h1 data-heading="Change Management">{ pageHeader }</h1>
          <p><strong><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Stage" data-dv-norm-key="stage">Stage</span><span class="dataview inline-field-value"><span>3</span></span></span>  <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Process" data-dv-norm-key="process">Process</span><span class="dataview inline-field-value"><span>1</span></span></span></strong></p>
          <p>ITIL change management is a process designed to  understand and minimize <strong>risks</strong> while making IT changes so that the services could be stable, reliable, and predictable while being able to change rapidly to meet the business needs at the same time.</p>
          <h2 data-heading="Types of IT Changes">Types of IT Changes</h2>
          <table>
          <thead>
          <tr>
          <th>Change</th>
          <th>Description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td><strong>Standard Changes</strong></td>
          <td>Changes to a service or to the IT infrastructure where the implementation process and the risks are known upfront. They are the easiest to prioritize and implement, and often don't require approval from a risk management perspective.</td>
          </tr>
          <tr>
          <td><strong>Normal Changes</strong></td>
          <td>Changes that must go through the change process before being approved and implemented.</td>
          </tr>
          <tr>
          <td><strong>Emergency Changes</strong></td>
          <td>Arise when an unexpected error or threat occurs, such as when a flaw in the infrastructure related to services needs to be addressed immediately.</td>
          </tr>
          </tbody>
          </table>
          <h2 data-heading="KPIs for Change Management">KPIs for Change Management</h2>
          <ul>
          <li><strong>Successful Changes</strong>: The number of changes that have been completed successfully.</li>
          <li><strong>Backlog of Changes</strong>: The number of changes that are not yet completed.</li>
          <li><strong>Emergency Changes</strong>: The number of completed "emergency" changes.</li>
          </ul>
          <h2 data-heading="The Process">The Process</h2>
          <ul>
          <li>Creating a Request for Change</li>
          <li>Reviewing and Assessing a Request for Change</li>
          <li>Planning the change</li>
          <li><strong>Testing</strong> the change</li>
          <li>Creating a change proposal</li>
          <li><strong>Implementing</strong> changes</li>
          <li>Reviewing change performance</li>
          <li><strong>Closing</strong> the process</li>
          </ul>
          <hr />
          <h2 data-heading="Next Up">Next Up</h2>
          <p><a data-href="Process 2 - Service Asset and Configuration Management (SACM)" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 3\Processes\Process%202%20-%20Service%20Asset%20and%20Configuration%20Management%20(SACM).html" class="internal-link" target="_blank" rel="noopener">Process 2 - Service Asset and Configuration Management (SACM)</a></p>
          <hr />
          <h2 data-heading="File Details">File Details</h2>
          <p><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Last Modified" data-dv-norm-key="last-modified">Last Modified</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span><br />
          <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Date Created" data-dv-norm-key="date-created">Date Created</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span></p>
        </main>
      </Layout>
    </>
  );
}
