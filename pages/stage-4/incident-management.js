import Head from 'next/head'
import Layout from '../../components/Layout'

export default function IncidentManagement() {
  const stage = 4
  const process = 0
  const title = 'Incident Management'
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
          <h1 data-heading="Incident Management">Incident Management</h1>
          <p><strong><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Stage" data-dv-norm-key="stage">Stage</span><span class="dataview inline-field-value"><span>4</span></span></span></strong></p>
          <p>An Incident is a degradation of service. A service has either slowed down, stopped, or is experiencing other similar issues. An unplanned interruption or reduction in quality.</p>
          <h2 data-heading="Examples of Incidents in the IT Sector">Examples of Incidents in the IT Sector</h2>
          <ul>
          <li>Site is down</li>
          <li>Exchange/email is down</li>
          <li>Password reset required</li>
          <li>Blue screen of death</li>
          <li>Network server is unresponsive</li>
          </ul>
          <h2 data-heading="The Purpose of Incident Management">The Purpose of Incident Management</h2>
          <p>Minimize the negative impact of incidents by restoring normal service operation as quickly as possible.</p>
          <ul>
          <li>Incidents should be logged</li>
          <li>Incidents should be managed to meet agreed target resolution times</li>
          <li>Incidents should be <strong>prioritized</strong> based on agreed classification</li>
          <li>incidents may be <strong>escalated</strong> to a support team for resolution</li>
          </ul>
          <p>Incident Management is typically closely aligned with the <strong>service desk</strong>, which is the <strong>single</strong> point of contact for all users communicating with IT.</p>
          <h2 data-heading="Incident Management Process (Level 1 Support)">Incident Management Process (Level 1 Support)</h2>
          <ul>
          <li>Incident <strong>Identification</strong></li>
          <li>Incident <strong>Logging</strong></li>
          <li>Incident <strong>Categorization</strong></li>
          <li>Incident <strong>Prioritization</strong></li>
          <li>Incident response
          <ul>
          <li>Initial diagnosis</li>
          <li><strong>Escalation</strong>, as necessary, to Level 2 Support</li>
          <li>Incident <strong>Resolution</strong> &amp; Recovery</li>
          <li>Incident <strong>Closure</strong>
          <ul>
          <li>Customer acknowledges that the resolution is working.</li>
          </ul>
          </li>
          </ul>
          </li>
          <li>Communication with the user community throughout the life of the incident</li>
          </ul>
          <h2 data-heading="Incident Priorities">Incident Priorities</h2>
          <p>Determined based on the Service Level Agreement response adherence.</p>
          <ul>
          <li><strong>Low-Priority Incidents</strong>: Do not interrupt users or the business and can be worked around.</li>
          <li><strong>Medium-Priority Incidents</strong>: Affect a few staff and interrupt work to some degree.</li>
          <li><strong>High-Priority Incidents</strong>: Affect a large number of users or customers, interrupt business, and affect service delivery. These incidents almost always have a financial impact.</li>
          </ul>
          <h2 data-heading="Incident Status">Incident Status</h2>
          <ul>
          <li>New</li>
          <li>Assigned</li>
          <li>In Progress</li>
          <li>On Hold or Pending</li>
          <li>Resolved</li>
          <li>Closed</li>
          </ul>
          <h2 data-heading="Incident Management KPIs">Incident Management KPIs</h2>
          <ul>
          <li>Average <strong>Resolution</strong> Time</li>
          <li>Average <strong>Initial</strong> Response Time</li>
          <li><strong>SLA</strong> Compliance Rate</li>
          <li><strong>First</strong> Call Resolution Rate</li>
          <li>Number of <strong>Repeat</strong> Incidents</li>
          <li>Incident <strong>Backlog</strong></li>
          <li>Percentage of <strong>Major</strong> Incidents</li>
          <li><strong>Cost</strong> Per Ticket</li>
          <li>End User <strong>Satisfaction</strong> Rates</li>
          </ul>
          <hr />
          <h2 data-heading="Next Up">Next Up</h2>
          <p><a data-href="Problem Management" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 4\Problem%20Management.html" class="internal-link" target="_blank" rel="noopener">Problem Management</a></p>
          <hr />
          <h2 data-heading="File Details">File Details</h2>
          <p><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Last Modified" data-dv-norm-key="last-modified">Last Modified</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span><br />
          <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Date Created" data-dv-norm-key="date-created">Date Created</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span></p>
        </main>
      </Layout>
    </>
  );
}
