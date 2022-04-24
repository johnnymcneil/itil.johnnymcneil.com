import Head from 'next/head'
import Layout from '../../../../components/Layout'
import LinkList from '../../../../components/LinkList'
import PageHeading from '../../../../components/PageHeading';
import { Notes } from '../../../../contexts/notes';

export default function IncidentManagement() {
  const note = Notes.IncidentManagement
  const nextUp = [Notes.ProblemManagement]

  return (
    <Layout>

      <PageHeading note={note} />

      <p>An Incident is a degradation of service. A service has either slowed down, stopped, or is experiencing other similar issues. An unplanned interruption or reduction in quality.</p>
      <h2>Examples of Incidents in the IT Sector</h2>
      <ul>
        <li>Site is down</li>
        <li>Exchange/email is down</li>
        <li>Password reset required</li>
        <li>Blue screen of death</li>
        <li>Network server is unresponsive</li>
      </ul>

      <h2>The Purpose of Incident Management</h2>
      <p>Minimize the negative impact of incidents by restoring normal service operation as quickly as possible.</p>
      <ul>
        <li>Incidents should be logged</li>
        <li>Incidents should be managed to meet agreed target resolution times</li>
        <li>Incidents should be <strong>prioritized</strong> based on agreed classification</li>
        <li>incidents may be <strong>escalated</strong> to a support team for resolution</li>
      </ul>
      
      <p>Incident Management is typically closely aligned with the <strong>service desk</strong>, which is the <strong>single</strong> point of contact for all users communicating with IT.</p>

      <h2>Incident Management Process (Level 1 Support)</h2>
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

      <h2>Incident Priorities</h2>
      <p>Determined based on the Service Level Agreement response adherence.</p>
      <ul>
        <li><strong>Low-Priority Incidents</strong>: Do not interrupt users or the business and can be worked around.</li>
        <li><strong>Medium-Priority Incidents</strong>: Affect a few staff and interrupt work to some degree.</li>
        <li><strong>High-Priority Incidents</strong>: Affect a large number of users or customers, interrupt business, and affect service delivery. These incidents almost always have a financial impact.</li>
      </ul>

      <h2>Incident Status</h2>
      <ul>
        <li>New</li>
        <li>Assigned</li>
        <li>In Progress</li>
        <li>On Hold or Pending</li>
        <li>Resolved</li>
        <li>Closed</li>
      </ul>

      <h2>Incident Management KPIs</h2>
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
      
      <LinkList heading={'Next Up'} linkList={nextUp} />
      
    </Layout>
  );
}
