import Head from 'next/head'
import Layout from '../../components/Layout'

export default function PriorityMatrix() {
  const stage = 4
  const process = 0
  const title = 'Priority Matrix'
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
          <h1 data-heading="Priority Matrix">Priority Matrix</h1>
          <p><strong><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Stage" data-dv-norm-key="stage">Stage</span><span class="dataview inline-field-value"><span>4</span></span></span></strong></p>
          <blockquote>
          <p>Insert slide here</p>
          </blockquote>
          <p><img alt="Priority Matrix.png" src="Priority Matrix.png" class="internal-embed"></p>
          <h2 data-heading="Priority Matrix Explained">Priority Matrix Explained</h2>
          <table>
          <thead>
          <tr>
          <th>Priority</th>
          <th>Definition</th>
          <th>Examples</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>P1 Critical</td>
          <td>High Impact/High Urgency<br />Critical to the ongoing operation of the organization, or present the highest risk to it.</td>
          <td>-&gt; A large amount of data has been corrupted.<br />-&gt; A suspected breach of IT security that could affect all users.</td>
          </tr>
          <tr>
          <td>P2 High</td>
          <td>High Impact/mid Urgency, or Mid Impact/High Urgency<br />Requires a quick resolution, but the effect to the organization is not as great as P1 tasks</td>
          <td>-&gt; Data has been corrupted affecting several users.<br />-&gt; A suspected breach of IT security affecting some users.</td>
          </tr>
          <tr>
          <td>P3-4 Normal</td>
          <td>Often routine IT issues<br />Still needs to be fixed, but not as urgent as P1 or P2 tasks.</td>
          <td>-&gt; Basic functionality is available, but with some limitations.<br />-&gt; Workarounds are available.<br />-&gt; A low number of users are affected.</td>
          </tr>
          <tr>
          <td>P5 Low</td>
          <td>Low impact &amp; low urgency<br />Minor issues where the users are still able to carry out their business activities.</td>
          <td>-&gt; Poor layout of content on a web page.</td>
          </tr>
          </tbody>
          </table>
          <h2 data-heading="Priority Matrix &amp; Service Levels (Example)">Priority Matrix &amp; Service Levels (Example)</h2>
          <table>
          <thead>
          <tr>
          <th>Priority</th>
          <th>Time to Resolve Tasks</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>P1</td>
          <td>Respond within 15 minutes, resolve within 2 hours.</td>
          </tr>
          <tr>
          <td>P2</td>
          <td>Respond within 15 minutes, resolve within 4 hours.</td>
          </tr>
          <tr>
          <td>P3</td>
          <td>Respond within 1 hour, resolve within 2 days.</td>
          </tr>
          <tr>
          <td>P4</td>
          <td>Respond within 4 hours, resolve within 5 days.</td>
          </tr>
          <tr>
          <td>P5</td>
          <td>Respond within 1 day, resolve within 2 weeks.</td>
          </tr>
          </tbody>
          </table>
          <hr />
          <h2 data-heading="Next Up">Next Up</h2>
          <p><a data-href="Request Fulfillment" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 4\Request%20Fulfillment.html" class="internal-link" target="_blank" rel="noopener">Request Fulfillment</a></p>
          <hr />
          <h2 data-heading="File Details">File Details</h2>
          <p><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Last Modified" data-dv-norm-key="last-modified">Last Modified</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span><br />
          <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Date Created" data-dv-norm-key="date-created">Date Created</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span></p>
        </main>
      </Layout>
    </>
  );
}
