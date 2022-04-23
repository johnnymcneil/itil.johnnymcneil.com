import Head from 'next/head'
import Layout from '../../components/Layout'

export default function ProblemManagement() {
  const stage = 4
  const process = 0
  const title = 'Problem Management'
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
          <h1 data-heading="Problem Management">Problem Management</h1>
          <p><strong><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Stage" data-dv-norm-key="stage">Stage</span><span class="dataview inline-field-value"><span>4</span></span></span></strong></p>
          <p>Reduce the likelihood and impact of <strong>incidents</strong> by identifying actual and potential causes of incidents (diagnosis of <strong>root</strong> cause), and managing workarounds and known-errors.</p>
          <h2 data-heading="What is a Problem?">What is a Problem?</h2>
          <ul>
          <li>A cause, or potential cause, of one or more prior, current, or future <strong>incidents</strong>.</li>
          <li>A <strong>known-error</strong> is a problem that has been analyzed and has not been resolved.</li>
          </ul>
          <h2 data-heading="Examples of Problems in the IT Sector">Examples of Problems in the IT Sector</h2>
          <ul>
          <li>Exchange server stops sending email</li>
          <li>Financial application does not allow submission if numbers lack decimal points</li>
          </ul>
          <h2 data-heading="What is a Workaround?">What is a Workaround?</h2>
          <p>A <strong>workaround</strong> is a solution that reduces or eliminates the impact of an incident or problem for which a full resolution is not yet available. Some workarounds reduce the likelihood of incidents.</p>
          <h2 data-heading="Problem Management Process">Problem Management Process</h2>
          <ol>
          <li>Detect the problem</li>
          <li>Log the problem</li>
          <li><strong>Categorize</strong> the problem</li>
          <li><strong>Prioritize</strong> the problem</li>
          <li>Investigate &amp; diagnose the problem</li>
          <li>Identify a <strong>workaround</strong> for the problem</li>
          <li>Raise a <strong>known-error</strong> record</li>
          <li>Resolve the problem</li>
          <li>Close the problem</li>
          <li>Review the problem</li>
          </ol>
          <h2 data-heading="Examples of Key Performance Indicators">Examples of Key Performance Indicators</h2>
          <ul>
          <li>Average time to start Root Cause Analysis (RCA)</li>
          <li>Total number of uncompleted problems</li>
          <li>Percentage increase/decrease of major incidents</li>
          <li>Total number of <strong>problem records</strong> reported</li>
          <li>Average resolution time of problems</li>
          <li>Total number of <strong>known-errors</strong></li>
          <li>Percentage of problems with a workaround</li>
          </ul>
          <hr />
          <h2 data-heading="Next Up">Next Up</h2>
          <p><a data-href="Priority Matrix" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 4\Priority%20Matrix.html" class="internal-link" target="_blank" rel="noopener">Priority Matrix</a></p>
          <hr />
          <h2 data-heading="File Details">File Details</h2>
          <p><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Last Modified" data-dv-norm-key="last-modified">Last Modified</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span><br />
          <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Date Created" data-dv-norm-key="date-created">Date Created</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span></p>
        </main>
      </Layout>
    </>
  );
}
