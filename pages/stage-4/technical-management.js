import Head from 'next/head'
import Layout from '../../components/Layout'

export default function TechnicalManagement() {
  const stage = 4
  const process = 0
  const title = 'Technical Management'
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
          <h1 data-heading="Technical Management">Technical Management</h1>
          <p><strong><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Stage" data-dv-norm-key="stage">Stage</span><span class="dataview inline-field-value"><span>4</span></span></span></strong></p>
          <p>Provides technical expertise and manages the overall IT infrastructure.</p>
          <hr />
          <h2 data-heading="Next Up">Next Up</h2>
          <hr />
          <h2 data-heading="File Details">File Details</h2>
          <p><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Last Modified" data-dv-norm-key="last-modified">Last Modified</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span><br />
          <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Date Created" data-dv-norm-key="date-created">Date Created</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span></p>
        </main>
      </Layout>
    </>
  );
}
