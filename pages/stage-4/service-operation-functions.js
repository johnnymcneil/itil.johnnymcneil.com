import Head from 'next/head'
import Layout from '../../components/Layout'

export default function ServiceOperationFunctions() {
  const stage = 4
  const process = 0
  const title = 'Service Operation Functions'
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
          <h1 data-heading="Service Operation Functions">Service Operation Functions</h1>
          <p><strong><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Stage" data-dv-norm-key="stage">Stage</span><span class="dataview inline-field-value"><span>4</span></span></span></strong></p>
          <p><img alt="Pasted image 20220318122957.png" src="Pasted image 20220318122957.png" class="internal-embed" /></p>
          <p>A function is a team or group of people who perform a set of activities.</p>
          <ul>
          <li><a data-href="Service Desk" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 4\Service%20Desk.html" class="internal-link" target="_blank" rel="noopener">Service Desk</a></li>
          <li><a data-href="Technical Management" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 4\Technical%20Management.html" class="internal-link" target="_blank" rel="noopener">Technical Management</a></li>
          <li><a data-href="Application Management" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 4\Application%20Management.html" class="internal-link" target="_blank" rel="noopener">Application Management</a></li>
          <li><a data-href="IT Operations Management" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 4\IT%20Operations%20Management.html" class="internal-link" target="_blank" rel="noopener">IT Operations Management</a></li>
          </ul>
          <hr />
          <h2 data-heading="Next Up">Next Up</h2>
          <p><a data-href="Service Desk" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 4\Service%20Desk.html" class="internal-link" target="_blank" rel="noopener">Service Desk</a></p>
          <hr />
          <h2 data-heading="File Details">File Details</h2>
          <p><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Last Modified" data-dv-norm-key="last-modified">Last Modified</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span><br />
          <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Date Created" data-dv-norm-key="date-created">Date Created</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span></p>
        </main>
      </Layout>
    </>
  );
}
