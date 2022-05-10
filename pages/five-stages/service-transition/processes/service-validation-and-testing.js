import Layout from '../../../../components/Layout'
import LinkList from '../../../../components/LinkList'
import { Notes } from '../../../../contexts/notes';
import PageHeading from '../../../../components/PageHeading';

export default function ServiceValidationTesting() {
  const note = Notes.ServiceValidationTesting
  const nextUp = [Notes.ChangeEvaluation]

  return (
    <Layout>

      <PageHeading note={note} />
      
      <p>Working with change evaluation, service, validation and testing will</p>
      <ul>
        <li>Work with <strong>transition planning and support</strong> to plan the resources required for testing</li>
        <li>Plan, design, schedule, <strong>perform</strong>, and <strong>close</strong> tests</li>
        <li>Prepare the test environment</li>
      </ul>
      <h2>Types of Testing</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Utility</td>
            <td>Does the service have the required functionality?</td>
          </tr>
          <tr>
            <td>Warranty</td>
            <td>Will the service deliver required levels of availability, capacity, and continuity?</td>
          </tr>
          <tr>
            <td>Usability</td>
            <td>Will the service be usable by all potential users?</td>
          </tr>
          <tr>
            <td>Contract and Regulation</td>
            <td>Will the service conform to applicable regulatory &amp; contract requirements?</td>
          </tr>
          <tr>
            <td>Operational Readiness</td>
            <td>Are the support functions (including the service desk) staffed and trained to support the new or changed service?</td>
          </tr>
        </tbody>
      </table>

      <LinkList heading={'Next Up'} linkList={nextUp} />

    </Layout>
  );
}
