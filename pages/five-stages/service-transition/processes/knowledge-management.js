import PageHeading from '../../../../components/PageHeading';
import { Notes } from '../../../../contexts/notes';
import Layout from '../../../../components/Layout'
import LinkList from '../../../../components/LinkList';

export default function KnowledgeManagement() {
  const note = Notes.KnowledgeManagement
  const nextUp = [Notes.TransitionPlanningSupport]

  return (
    <Layout>

      <PageHeading note={note} />
      
      <p>Responsible for <strong>capturing</strong>, <strong>distributing</strong>, and effectively using knowledge within an organization.</p>
      <p>It is estimated that poor-knowledge sharing practices cost Fortune 500 companies $31.5 billion dollars annually!</p>
      <p>The primary purpose of Knowledge Management is to improve efficiency by reducing the need to <strong>rediscover</strong> knowledge. Through effective knowledge management, organizations can:</p>
      <ul>
        <li>Decrease training time</li>
        <li>Reduce errors &amp; redundancy</li>
        <li>Increase collaboration</li>
        <li>Improve customer experience</li>
      </ul>

      <h2>Types of Knowledge to Manage</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Explicit</strong></td>
            <td>Information in tangible form such as books, newspapers, or articles.</td>
          </tr>
          <tr>
            <td><strong>Tacit</strong></td>
            <td>Information that is difficult to capture in a tangible form like someone's perception of an experience or a feeling after a big event.</td>
          </tr>
        </tbody>
      </table>

      <h2>Examples of Knowledge Management</h2>
      <ul>
        <li>Training Agreements</li>
        <li>Q&amp;As</li>
        <li>Content Management System</li>
        <li>Documentations</li>
        <li>FAQs</li>
        <li>Forums</li>
        <li>Webinars</li>
        <li>Chatbots</li>
        <li>etc.</li>
      </ul>
      
      <LinkList heading='Next Up' linkList={nextUp} />

    </Layout>
  );
}
