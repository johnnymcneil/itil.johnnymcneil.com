import PageHeading from '../../../../components/PageHeading';
import { Notes } from '../../../../contexts/notes';
import Layout from '../../../../components/Layout'
import LinkList from '../../../../components/LinkList';

export default function ChangeManagement() {
  const note = Notes.ChangeManagement
  const nextUp = [Notes.SACM]

  return (
      <Layout>

        <PageHeading note={note} />
        
        <p>ITIL change management is a process designed to  understand and minimize <strong>risks</strong> while making IT changes so that the services could be stable, reliable, and predictable while being able to change rapidly to meet the business needs at the same time.</p>
        <h2>Types of IT Changes</h2>
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

        <h2>KPIs for Change Management</h2>
        <ul>
          <li><strong>Successful Changes</strong>: The number of changes that have been completed successfully.</li>
          <li><strong>Backlog of Changes</strong>: The number of changes that are not yet completed.</li>
          <li><strong>Emergency Changes</strong>: The number of completed "emergency" changes.</li>
        </ul>

        <h2>The Process</h2>
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

        <LinkList heading='Next Up' linkList={nextUp} />

      </Layout>
  );
}
