import Layout from '../../../../components/Layout'
import PageHeading from '../../../../components/PageHeading';
import { Notes } from '../../../../contexts/notes';
import LinkList from '../../../../components/LinkList';

export default function ServicePortfolioManagement() {
  const note = Notes.ServicePortfolioManagement
  const nextUp = [Notes.DemandManagement]

  return (
    <Layout>

      <PageHeading note={note} />
      
      <p>The entire set of services under management by a service provider. It consists of three main parts.</p>
      <h2>Three Main Parts</h2>
      <ol>
      <li>Service <strong>Pipeline</strong></li>
      <li>Service <strong>Catalog</strong></li>
      <li><strong>Retired</strong> Services</li>
      </ol>
      <p>SPM organizes the process by which services are identified, described, evaluated, selected, and chartered.</p>

      <LinkList heading='Next Up' linkList={nextUp} />

    </Layout>
  );
}
