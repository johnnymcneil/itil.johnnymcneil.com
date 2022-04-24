import Link from 'next/link'
import Layout from '../../../../components/Layout'
import LinkList from '../../../../components/LinkList'
import PageHeading from '../../../../components/PageHeading';
import { Notes } from '../../../../contexts/notes';

export default function EventManagement() {
  const note = Notes.EventManagement
  const nextUp = [Notes.AccessManagement]

  return (
    <Layout>

      <PageHeading note={note} />
      
      <h2>What is an event?</h2>
      <p>A <strong>change</strong> of state which has significance for the management of a Configuration Item (CIs) or IT Service.</p>
      <ul>
        <li>All incidents are events, since an outage or service quality reduction is a change in the state of that service. But not all events are incidents.</li>
        <li>It's important to <strong>automate</strong> many routine operations management activities for efficient event management.</li>
      </ul>
      <h2>Types of Events</h2>
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

      <h2>Monitoring vs Event Management</h2>
      <h3>Event Management</h3>
      <p>Serves as the trigger that kicks off the <Link href={Notes.IncidentManagement.href}><a>Incident Management</a></Link> process while also playing a major role in <Link href={Notes.ProblemManagement.href}><a>Problem Management</a></Link>.</p>
      <p>The Incident Management function aims to restore service as soon as possible. The Problem Management cycle focuses on determining why an Incident happened in the first place - and to keep it from recurring in the future.</p>
      <p>The core value of Event Management lies in facilitating the early <strong>detection</strong> and even prediction of incidents and, of course, with Problem Management.</p>
      
      <LinkList heading={'Next Up'} linkList={nextUp} />

    </Layout>
  );
}
