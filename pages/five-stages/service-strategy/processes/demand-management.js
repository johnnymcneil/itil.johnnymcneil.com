import Layout from '../../../../components/Layout'
import PageHeading from '../../../../components/PageHeading';
import { Notes } from '../../../../contexts/notes';
import LinkList from '../../../../components/LinkList';

export default function DemandManagement() {
  const note = Notes.DemandManagement
  const nextUp = [Notes.BusinessRelationshipManagement]

  return (
    <Layout>

      <PageHeading note={note} />
      
      <p>This process helps a business:</p>
      <ul>
      <li>Understand current customer usage of IT services</li>
      <li><strong>Anticipate</strong> future customer demands for IT services</li>
      <li><strong>Influence</strong> customer service consumption to mitigate risks and expenses</li>
      </ul>
      <p>This involves understanding the <strong>Patterns of Business Activity</strong> (PBAs) and associate them with <strong>User Profiles</strong> (UPs).</p>
      
      <LinkList heading='Next Up' linkList={nextUp} />

    </Layout>
  );
}
