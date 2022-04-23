import Head from 'next/head'
import Layout from '../../components/Layout'

export default function RACI() {
  const title = 'Stage 2 - RACI Responsibilities Matrix - ITIL Fundamentals'
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="description" content="Johnny McNeil's notes on ITIL Fundamentals." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <h1 data-heading="RACI - Responsibilities MATRIX">RACI - Responsibilities MATRIX</h1>
          <p><strong><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Stage" data-dv-norm-key="stage">Stage</span><span class="dataview inline-field-value"><span>2</span></span></span></strong><br />
          <img alt="(Session 1) ITIL Overview_Page_26.png" src="(Session 1) ITIL Overview_Page_26.png" class="internal-embed" /></p>
          <ul>
          <li><strong>Responsible</strong> -&gt; The person who does the work to achieve the task such as administrators and developers.</li>
          <li><strong>Accountable</strong> -&gt; The person who is accountable for the correct and thorough completion of the task, such as managers and directors.</li>
          <li><strong>Consulted</strong> -&gt; The people who provide information for the project, often subject matter experts.</li>
          <li><strong>Informed</strong> -&gt; The people kept informed of progress. These are people that are affected by the outcome of the tasks, such as clients.</li>
          </ul>
          <hr />
          <h2 data-heading="Next Up">Next Up</h2>
          <p><a data-href="Service Transition" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 2\Service%20Transition.html" class="internal-link" target="_blank" rel="noopener">Service Transition</a></p>
          <hr />
          <h2 data-heading="File Details">File Details</h2>
          <p><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Last Modified" data-dv-norm-key="last-modified">Last Modified</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span><br />
          <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Date Created" data-dv-norm-key="date-created">Date Created</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span></p>
        </main>
      </Layout>
    </>
  );
}
