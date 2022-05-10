import { Notes } from '../../../../contexts/notes';
import Layout from '../../../../components/Layout'
import LinkList from '../../../../components/LinkList';
import PageHeading from '../../../../components/PageHeading'

export default function InformationSecurityManagement() {
  const note = Notes.InformationSecurityManagement
  const nextUp = [Notes.SupplierManagement]

  return (
    <Layout>

      <PageHeading note={note} />
      
      <p>Information Security Management ensures that information is:</p>
      <ul>
        <li>Available and usable when required (<strong>availabililty</strong>)</li>
        <li>Disclosed only to those who have a right to know (<strong>confidentiality</strong>)</li>
        <li>Complete, accurate, and protected against unauthorized modification (<strong>integrity</strong>)</li>
        <li>Information exchanges between enterprises or with partners can be trusted (<strong>authenticity and non-repudiation</strong>)</li>
      </ul>
      
      <h2>Recommended Security Controls</h2>
      <ul>
        <li><strong>Preventive</strong> -&gt; Keep a security incident from happening.</li>
        <li><strong>Detective</strong> -&gt; Identify a risk or threat as quickly as possible.</li>
        <li>Repressive -&gt; Work like counterattacks.</li>
        <li><strong>Corrective</strong> -&gt; Repair any damage caused by an error or incident.</li>
      </ul>
      
      <LinkList heading='Next Up' linkList={nextUp} />

    </Layout>
  );
}
