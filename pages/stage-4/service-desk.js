import Head from 'next/head'
import Layout from '../../components/Layout'

export default function ServiceDesk() {
  const stage = 4
  const process = 0
  const title = 'Service Desk'
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
          <h1 data-heading="Service Desk">Service Desk</h1>
          <p><strong><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Stage" data-dv-norm-key="stage">Stage</span><span class="dataview inline-field-value"><span>4</span></span></span></strong></p>
          <p>Capture demand for <strong>incident</strong> resolution and <a aria-label-position="top" aria-label="Request Fulfillment > Service Request" data-href="Request Fulfillment#Service Request" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 4\Request%20Fulfillment.html#Service%20Request" class="internal-link" target="_blank" rel="noopener">service requests</a>. The Service Desk is the entry point and <strong>single</strong> point of contact for the service provider with all of its users.</p>
          <h2 data-heading="Service Desk Channels">Service Desk Channels</h2>
          <ul>
          <li>Phone Calls</li>
          <li>Service Portals</li>
          <li>Chat (Live, Chatbots)</li>
          <li>Email</li>
          <li>Walk-in</li>
          <li>Service Desk,</li>
          <li>etc.</li>
          </ul>
          <h2 data-heading="Why are local service desks included?">Why are local service desks included?</h2>
          <ul>
          <li>There may be cultural, linguistic, and political difference between user communities.</li>
          <li>The user communities may operate in various time zones.</li>
          <li>There are specialized user communities such as one working on Apple computers whereas others work on Windows.</li>
          </ul>
          <h2 data-heading="IT Ticketing Lifecycle">IT Ticketing Lifecycle</h2>
          <table>
          <thead>
          <tr>
          <th>Step</th>
          <th>Explanation</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>Collect data for ticket creation.</td>
          <td>Collect enough data to accurately represent the underlying issue, classify it, and route it to the correct support resource.</td>
          </tr>
          <tr>
          <td>Create/classify a ticket.</td>
          <td>Tickets need to be accurately and consistently classified so they receive the appropriate level of attention from your support team.<br />- <strong>Ticket Type</strong> - Incident? Problem? Request? Event?<br />- <strong>Source</strong> - User generated? Agent generated? System generated?<br />- <strong>Priority</strong> - P1, P2, P3, ...?</td>
          </tr>
          <tr>
          <td><strong>Routing</strong> Tickets</td>
          <td>Who to route to?<br />- Internal Support Teams<br />- External (3rd Party) Support Vendors<br />- Follow-the-sun support.</td>
          </tr>
          <tr>
          <td>Handling Tickets</td>
          <td>Evaluate ticket handling based on [[Process 1 - Service Level Management (SLM)#3 Types of SLA</td>
          </tr>
          <tr>
          <td><strong>Escalating</strong> Tickets</td>
          <td>- When the agent lacks the skills, access, or knowledge to resolve the issue.<br />- When SLA targets are missed (auto escalation).<br />- Sometimes when a user requests escalation.</td>
          </tr>
          </tbody>
          </table>
          <hr />
          <h2 data-heading="Next Up">Next Up</h2>
          <p><a data-href="IT Operations Management" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 4\IT%20Operations%20Management.html" class="internal-link" target="_blank" rel="noopener">IT Operations Management</a></p>
          <hr />
          <h2 data-heading="File Details">File Details</h2>
          <p><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Last Modified" data-dv-norm-key="last-modified">Last Modified</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span><br />
          <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Date Created" data-dv-norm-key="date-created">Date Created</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span></p>
        </main>
      </Layout>
    </>
  );
}
