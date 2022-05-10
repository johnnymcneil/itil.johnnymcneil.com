import PageHeading from '../../../../components/PageHeading';
import { Notes } from '../../../../contexts/notes';
import Layout from '../../../../components/Layout'
import LinkList from '../../../../components/LinkList';

export default function ChangeEvaluation() {
  const note = Notes.ChangeEvaluation

  return (
    <Layout>

      <PageHeading note={note} />
      
      <h1>Change Evaluation</h1>
      
      <p><strong>Stage3  Process7</strong></p>
      <p>Assess major changes, like the introduction of <strong>new services</strong> or a <strong>substantial change</strong> to an existing service, before those changes are allowed to proceed to the next phase in their lifecycle.</p>
      
      <h2>Change Evaluation prior to...</h2>
      <ul>
        <li><strong>Planning</strong> -&gt; Evaluation of extensive changes prior to authorization of the planning phase of the change.</li>
        <li><strong>Realization</strong> -&gt; Evaluation of extensive changes prior to authorization of the realization phase of the change.</li>
        <li><strong>Development</strong> -&gt; Evaluation of extensive changes prior to authorization of the deployment phase of the change.</li>
      </ul>

      <h2>Change Evaluation after Deployment</h2>
      <ul>
        <li>Evaluation of extensive changes after the deployment phase of the change.</li>
      </ul>
    </Layout>
  );
}
