import Head from 'next/head'
import Layout from '../../components/Layout'

export default function RequestFulfillment() {
  const stage = 4
  const process = 0
  const title = 'Request Fulfillment'
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
          <h1 data-heading="Request Fulfillment">Request Fulfillment</h1>
          <p><strong><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Stage" data-dv-norm-key="stage">Stage</span><span class="dataview inline-field-value"><span>4</span></span></span></strong></p>
          <h2 data-heading="Service Request">Service Request</h2>
          <p>When a user submits a formal request for something, such as information, advice, a <strong>standard change</strong>, or access to a service.</p>
          <ul>
          <li>Standard Change - A pre-approved change that is low risk and that follows a standard procedure.</li>
          </ul>
          <h2 data-heading="Incidents &amp; Problems vs Service Requests">Incidents &amp; Problems vs Service Requests</h2>
          <ul>
          <li>Incidents - <strong>Unplanned interruptions</strong> to your IT services.</li>
          <li>Problems - The underlying cause of <strong>recurring</strong> or preventable incidents.</li>
          <li>Service Requests - Deal with requests for something new to be provided to the user (e.g. access to an online portal, a new version of software).</li>
          </ul>
          <p><img alt="Pasted image 20220318121511.png" src="Pasted image 20220318121511.png" class="internal-embed" /><br />
          Image source: <a rel="noopener" class="external-link" href="https://www.atlassian.com/itsm/service-request-management" target="_blank">https://www.atlassian.com/itsm/service-request-management</a></p>
          <ol>
          <li>A customer requests service</li>
          <li>The IT service team assesses the request - does it need financial or business <strong>approval</strong>?</li>
          <li>A service desk agent works to fulfill the service request, or forwards the request to someone who can.</li>
          <li>After resolving the request, the agent closes the ticket and consults the customer to make sure they are <strong>satisfied</strong>.</li>
          </ol>
          <hr />
          <h2 data-heading="Next Up">Next Up</h2>
          <p><a data-href="Event Management" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 4\Event%20Management.html" class="internal-link" target="_blank" rel="noopener">Event Management</a></p>
          <hr />
          <h2 data-heading="File Details">File Details</h2>
          <p><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Last Modified" data-dv-norm-key="last-modified">Last Modified</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span><br />
          <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Date Created" data-dv-norm-key="date-created">Date Created</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span></p>
        </main>
      </Layout>
    </>
  );
}
