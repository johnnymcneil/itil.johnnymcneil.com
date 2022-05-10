import PageHeading from '../../../../components/PageHeading';
import { Notes } from '../../../../contexts/notes';
import Layout from '../../../../components/Layout'
import LinkList from '../../../../components/LinkList';

export default function AvailabilityManagement() {
  const note = Notes.AvailabilityManagement
  const nextUp = [Notes.ITSCM]

  return (
    <Layout>

      <PageHeading note={note} />
      
      <p><strong>Availability</strong> is the degree to which something is accessible and usable when needed.</p>
      <p>Availability Management ensures that infrastructure, tools, roles, etc. are appropriate for the agreed targets. It views availability from the <strong>user's</strong> perspective, from end to end.</p>

      <h2>Capacity Management vs Availability Management</h2>
      <p>Capacity management is focused on how best to provide resources to meet service requirements.</p>
      <p>Availability management is focused on <strong>delivering</strong> a sustained level of availability to meet service requirements.</p>
      <p>However, at a high level, many of the best practices for capacity management and availability management are similar enough to be combined, and they become closely coupled.</p>

      <LinkList heading='Next Up' linkList={nextUp} />

    </Layout>
  );
}
