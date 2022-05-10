import Layout from '../../../../components/Layout'
import PageHeading from '../../../../components/PageHeading';
import { Notes } from '../../../../contexts/notes';
import LinkList from '../../../../components/LinkList';

export default function BusinessRelationshipManagement() {
  const note = Notes.BusinessRelationshipManagement
  const nextUp = [Notes.ServiceDesign]

  return (
    <Layout>

      <PageHeading note={note} />
      
      <p>Seek to form a relationship with customers to understand their needs for service. The important KPI is customer <strong>satisfaction</strong>.</p>
      
      <LinkList heading='Next Up' linkList={nextUp} />

    </Layout>
  );
}
