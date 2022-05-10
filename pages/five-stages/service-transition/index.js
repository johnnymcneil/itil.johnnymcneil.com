import PageHeading from '../../../components/PageHeading';
import { Notes } from '../../../contexts/notes';
import Layout from '../../../components/Layout'
import LinkList from '../../../components/LinkList';
import Link from 'next/link'

export default function ServiceTransition() {
  const note = Notes.ServiceTransition
  const nextUp = [Notes.ChangeManagement]

  return (
    <Layout>
      
      <PageHeading note={note} />

      <p><strong>Transition</strong> refers to movement, passage, or change <strong>from</strong> one position, state, stage, subject, concept, etc... to another.</p>
      <p>No change is without <strong>risk</strong>. In fact, change can create extra <strong>risk</strong>. When transitioning services, focus on communication planning for awareness and compliance. One of the biggest challenges in service transition is changing people's behavior to accommodate a new or different service. People have a psychological need to feel safe and comfortable with changes to them and around them.</p>
      
      <h2>The 7 Processes of Service Transition</h2>
      <ol>
        <li><Link href={Notes.ChangeManagement.href}><a>Change Management</a></Link></li>
        <li><Link href={Notes.SACM.href}><a>Service Asset and Configuration Management (SACM)</a></Link></li>
        <li><Link href={Notes.KnowledgeManagement.href}><a>Knowledge Management</a></Link></li>
        <li><Link href={Notes.TransitionPlanningSupport.href}><a>Transition Planning and Support</a></Link></li>
        <li><Link href={Notes.ReleaseDeploymentManagment.href}><a>Release and Deployment Management</a></Link></li>
        <li><Link href={Notes.ServiceValidationTesting.href}><a>Service Validation and Testing</a></Link></li>
        <li><Link href={Notes.ChangeEvaluation.href}><a>Change Evaluation</a></Link></li>
      </ol>
      
      <LinkList heading='Next Up' linkList={nextUp} />

    </Layout>
  );
}
