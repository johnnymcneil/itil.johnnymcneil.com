import PageHeading from '../../../../components/PageHeading';
import { Notes } from '../../../../contexts/notes';
import Layout from '../../../../components/Layout'
import LinkList from '../../../../components/LinkList';

export default function SupplierManagement() {
  const note = Notes.SupplierManagement
  const nextUp = [Notes.RACI]

  return (
    <Layout>
      
      <PageHeading note={note} />
      
      <p>Supplier Management deals with maintaining good <strong>relationship</strong> between suppliers and the partners to ensure quality IT services. It ensures alignment of <strong>contracts</strong> with the needs of the business and that suppliers are meeting their <strong>commitments</strong>.</p>
      <ul>
        <li>Implementation and enforcement of the supplier <strong>policy</strong></li>
        <li>Maintenance of an SCD (Supply Chain Design)</li>
        <li>Supplier and contract categorization, risk assessment, evaluation, and selection</li>
        <li>Development, negotiation, agreement, review, renewal, and termination of <strong>contracts</strong></li>
        <li>Management of suppliers and supplier performance</li>
        <li>Maintenance of standard contracts, terms and conditions</li>
        <li>Management of contractual <strong>dispute</strong> resolution</li>
        <li>Management of sub-contracted suppliers</li>
      </ul>
      
      <LinkList heading='Next Up' linkList={nextUp} />
      
    </Layout>
  );
}
