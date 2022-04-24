import PageHeading from '../../../../components/PageHeading';
import { Notes } from '../../../../contexts/notes';
import Layout from '../../../../components/Layout'
import LinkList from '../../../../components/LinkList';

export default function ITSCM() {
  const note = Notes.ITSCM
  const nextUp = [Notes.InformationSecurityManagement]

  return (
    <Layout>
      
      <PageHeading note={note} />

      <h1>IT Service Continuity Management (ITSCM)</h1>
      <p><strong>Stage2  Process5</strong></p>
      <p>ITSCM ensures continuity of IT service in time of any <strong>disaster</strong>. It also evaluates the level of insurance we need to protect service assets and a manuscript to recover from a disaster.</p>
      <p>It includes business impact analysis &amp; <strong>risk</strong> management.</p>
         
      <LinkList heading='Next Up' linkList={nextUp} />

    </Layout>
  );
}
