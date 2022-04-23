import Head from 'next/head'
import Layout from '../../../components/Layout'

export default function ChangeEvaluation() {
  const stage = 3
  const process = 7
  const title = 'Change Evaluation'
  const pageHeader = `Stage ${stage} - Process ${process} - ${title}`
  const browserTabText = `${pageHeader} - ITIL Fundamentals`
  return (
    <>
      <Head>
        <title>{ browserTabText }</title>
        <meta name="description" content="Overview of the Five Stages of the ITIL Service Lifecycle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <h1 data-heading="Change Evaluation">Change Evaluation</h1>
          <p><strong><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Stage" data-dv-norm-key="stage">Stage</span><span class="dataview inline-field-value"><span>3</span></span></span>  <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Process" data-dv-norm-key="process">Process</span><span class="dataview inline-field-value"><span>7</span></span></span></strong></p>
          <p>Assess major changes, like the introduction of <strong>new services</strong> or a <strong>substantial change</strong> to an existing service, before those changes are allowed to proceed to the next phase in their lifecycle.</p>
          <h2 data-heading="Change Evaluation prior to...">Change Evaluation prior to...</h2>
          <ul>
          <li><strong>Planning</strong> -&gt; Evaluation of extensive changes prior to authorization of the planning phase of the change.</li>
          <li><strong>Realization</strong> -&gt; Evaluation of extensive changes prior to authorization of the realization phase of the change.</li>
          <li><strong>Development</strong> -&gt; Evaluation of extensive changes prior to authorization of the deployment phase of the change.</li>
          </ul>
          <h2 data-heading="Change Evaluation after Deployment">Change Evaluation after Deployment</h2>
          <ul>
          <li>Evaluation of extensive changes after the deployment phase of the change.</li>
          </ul>
        </main>
      </Layout>
    </>
  );
}
