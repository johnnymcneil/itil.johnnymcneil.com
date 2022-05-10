import Link from 'next/link'
import Layout from '../../../../components/Layout'
import LinkList from '../../../../components/LinkList'
import PageHeading from '../../../../components/PageHeading'
import { Notes } from '../../../../contexts/notes'

export default function ServiceDesk() {
  const note = Notes.ServiceDesk
  const nextUp = [Notes.ITOperationsManagement]
  
  return (
    <Layout>

      <PageHeading note={note} />

      <p>Capture demand for <strong>incident</strong> resolution and <Link href={Notes.RequestFulfillment.href + '#Service-Requests'}><a>service requests</a></Link>. The Service Desk is the entry point and <strong>single</strong> point of contact for the service provider with all of its users.</p>

      <h2>Service Desk Channels</h2>
      <ul>
        <li>Phone Calls</li>
        <li>Service Portals</li>
        <li>Chat (Live, Chatbots)</li>
        <li>Email</li>
        <li>Walk-in</li>
        <li>Service Desk,</li>
        <li>etc.</li>
      </ul>

      <h2>Why are local service desks included?</h2>
      <ul>
        <li>There may be cultural, linguistic, and political difference between user communities.</li>
        <li>The user communities may operate in various time zones.</li>
        <li>There are specialized user communities such as one working on Apple computers whereas others work on Windows.</li>
      </ul>
      
      <h2>IT Ticketing Lifecycle</h2>
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
      
      <LinkList heading={'Next Up'} linkList={nextUp} />

    </Layout>
  );
}
