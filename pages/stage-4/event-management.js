import Head from 'next/head'
import Layout from '../../components/Layout'

export default function EventManagement() {
  const stage = 4
  const process = 0
  const title = 'Event Management'
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
          <h1 data-heading="Event Management">Event Management</h1>
          <p><strong><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Stage" data-dv-norm-key="stage">Stage</span><span class="dataview inline-field-value"><span>4</span></span></span></strong></p>
          <h2 data-heading="What is an event?">What is an event?</h2>
          <p>A <strong>change</strong> of state which has significance for the management of a Configuration Item (CIs) or IT Service.</p>
          <ul>
          <li>All incidents are events, since an outage or service quality reduction is a change in the state of that service. But not all events are incidents.</li>
          <li>It's important to <strong>automate</strong> many routine operations management activities for efficient event management.</li>
          </ul>
          <h2 data-heading="Types of Events">Types of Events</h2>
          <table>
          <thead>
          <tr>
          <th>Event Type</th>
          <th>Explanation</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td><strong>Information</strong></td>
          <td>A successful task, like a user login or an email being received by the participant.</td>
          </tr>
          <tr>
          <td><strong>Warning</strong></td>
          <td>When a device or service is reaching a threshold limit, like a scheduled backup not running or a server's memory within 10% of its usable memory.</td>
          </tr>
          <tr>
          <td><strong>Exception</strong></td>
          <td>An error given off when a component of the system acts abnormally, such as a server going down or a backup failing.</td>
          </tr>
          </tbody>
          </table>
          <h2 data-heading="Monitoring vs Event Management">Monitoring vs Event Management</h2>
          <h3 data-heading="Event Management">Event Management</h3>
          <p>Serves as the trigger that kicks off the <a data-href="Incident Management" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 4\Incident%20Management.html" class="internal-link" target="_blank" rel="noopener">Incident Management</a> process while also playing a major role in <a data-href="Problem Management" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 4\Problem%20Management.html" class="internal-link" target="_blank" rel="noopener">Problem Management</a>.</p>
          <p>The Incident Management function aims to restore service as soon as possible. The Problem Management cycle focuses on determining why an Incident happened in the first place - and to keep it from recurring in the future.</p>
          <p>The core value of Event Management lies in facilitating the early <strong>detection</strong> and even prediction of incidents and, of course, with Problem Management.</p>
          <hr />
          <h2 data-heading="Next Up">Next Up</h2>
          <p><a data-href="Access Management" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 4\Access%20Management.html" class="internal-link" target="_blank" rel="noopener">Access Management</a></p>
          <hr />
          <h2 data-heading="File Details">File Details</h2>
          <p><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Last Modified" data-dv-norm-key="last-modified">Last Modified</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span><br />
          <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Date Created" data-dv-norm-key="date-created">Date Created</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span></p>
        </main>
      </Layout>
    </>
  );
}
