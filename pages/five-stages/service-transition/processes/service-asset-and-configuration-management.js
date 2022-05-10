import Head from 'next/head'
import Layout from '../../../../components/Layout'
import LinkList from '../../../../components/LinkList'
import { Notes } from '../../../../contexts/notes';
import PageHeading from '../../../../components/PageHeading';

export default function SACM() {
  const note = Notes.SACM
  const nextUp = [Notes.KnowledgeManagement]

  return (
    <Layout>
      
      <PageHeading note={note} />
      
      <p>SACM is responsible for ensuring that you are able to identify and control all <strong>assets</strong> across your infrastructure as well as how the assets have been <strong>configured</strong> and the relationships between assets.</p>
      
      <h2>SACM Definitions</h2>
      <table>
        <thead>
          <tr>
            <th>Term</th>
            <th>Definitions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Configuration of Items (CI)</td>
            <td>Any component that needs to be managed in order to deliver an IT service (e.g., server, application, etc.).</td>
          </tr>
          <tr>
            <td>Configuration Records</td>
            <td>Describe your CIs by recording information about attributes (version number, name, location, etc.) and relationships among your CIs.</td>
          </tr>
          <tr>
            <td>Configuration Management Database (CMDB)</td>
            <td>A database that stores configuration records throughout their lifecycle.</td>
          </tr>
          <tr>
            <td>Service Assets</td>
            <td>Any resources or capabilities that contribute to the delivery service.</td>
          </tr>
        </tbody>
      </table>

      <LinkList heading={'Next Up'} linkList={nextUp} />
      
    </Layout>
  );
}
