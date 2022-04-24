import Layout from '../../../../components/Layout'
import LinkList from '../../../../components/LinkList'
import { Notes } from '../../../../contexts/notes'
import PageHeading from '../../../../components/PageHeading'
import Link from 'next/link'

export default function TransitionPlanningSupport() {
  const note = Notes.TransitionPlanningSupport
  const nextUp = [Notes.ReleaseDeploymentManagment]

  return (
    <Layout>

      <PageHeading note={note} />

      <p><strong>Plan</strong> and <strong>coordinate</strong> service transition activities by</p>
      <ul>
        <li>Working with <strong>capacity</strong> management to ensure that adequate resources are available </li>
        <li>Ensuring that all parties use a <strong>standard</strong>, reusable process framework in order to improve the effectiveness and efficiency of the integrated planning and coordination activities</li>
        <li><strong>Monitoring</strong> and improving the performance of the <Link href={Notes.ServiceTransition.href}><a>Service Transition</a></Link> lifecycle phase.</li>
      </ul>
      
      <LinkList heading={'Next Up'} linkList={nextUp} />

    </Layout>
  );
}
