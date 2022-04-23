import Head from 'next/head'
import Layout from '../../../components/Layout'

export default function SACM() {
  const stage = 3
  const process = 2
  const title = 'Service Asset and Configuration Management'
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
          <h1 data-heading="Service Asset and Configuration Management">Service Asset and Configuration Management</h1>
          <p><strong><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Stage" data-dv-norm-key="stage">Stage</span><span class="dataview inline-field-value"><span>3</span></span></span>  <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Process" data-dv-norm-key="process">Process</span><span class="dataview inline-field-value"><span>2</span></span></span></strong></p>
          <p>SACM is responsible for ensuring that you are able to identify and control all <strong>assets</strong> across your infrastructure as well as how the assets have been <strong>configured</strong> and the relationships between assets.</p>
          <h2 data-heading="SACM Definitions">SACM Definitions</h2>
          <table>
          <thead>
          <tr>
          <th>Term</th>
          <th>Definitions</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>Configuration of Items (CI)</td>
          <td>Any component that needs to be managed in order to deliver an IT service (e.g., server, application, etc.).</td>
          </tr>
          <tr>
          <td>Configuration Records</td>
          <td>Describe your CIs by recording information about attributes (version number, name, location, etc.) and relationships among your CIs.</td>
          </tr>
          <tr>
          <td>Configuration Management Database (CMDB)</td>
          <td>A database that stores configuration records throughout their lifecycle.</td>
          </tr>
          <tr>
          <td>Service Assets</td>
          <td>Any resources or capabilities that contribute to the delivery service.</td>
          </tr>
          </tbody>
          </table>
          <hr />
          <h2 data-heading="Next Up">Next Up</h2>
          <p><a data-href="Process 3 - Knowledge Management" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 3\Processes\Process%203%20-%20Knowledge%20Management.html" class="internal-link" target="_blank" rel="noopener">Process 3 - Knowledge Management</a></p>
          <hr />
          <h2 data-heading="File Details">File Details</h2>
          <p><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Last Modified" data-dv-norm-key="last-modified">Last Modified</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span><br />
          <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Date Created" data-dv-norm-key="date-created">Date Created</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span></p>
        </main>
      </Layout>
    </>
  );
}
