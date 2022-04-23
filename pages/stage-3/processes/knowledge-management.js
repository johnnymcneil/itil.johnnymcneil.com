import Head from 'next/head'
import Layout from '../../../components/Layout'

export default function KnowledgeManagement() {
  const stage = 3
  const process = 3
  const title = 'Knowledge Management'
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
          <h1 data-heading="Knowledge Management">Knowledge Management</h1>
          <p><strong><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Stage" data-dv-norm-key="stage">Stage</span><span class="dataview inline-field-value"><span>3</span></span></span>  <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Process" data-dv-norm-key="process">Process</span><span class="dataview inline-field-value"><span>3</span></span></span></strong></p>
          <p>Responsible for <strong>capturing</strong>, <strong>distributing</strong>, and effectively using knowledge within an organization.</p>
          <p>It is estimated that poor-knowledge sharing practices cost Fortune 500 companies $31.5 billion dollars annually!</p>
          <p>The primary purpose of Knowledge Management is to improve efficiency by reducing the need to <strong>rediscover</strong> knowledge. Through effective knowledge management, organizations can:</p>
          <ul>
          <li>Decrease training time</li>
          <li>Reduce errors &amp; redundancy</li>
          <li>Increase collaboration</li>
          <li>Improve customer experience</li>
          </ul>
          <h2 data-heading="Types of Knowledge to Manage">Types of Knowledge to Manage</h2>
          <table>
          <thead>
          <tr>
          <th>Type</th>
          <th>Description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td><strong>Explicit</strong></td>
          <td>Information in tangible form such as books, newspapers, or articles.</td>
          </tr>
          <tr>
          <td><strong>Tacit</strong></td>
          <td>Information that is difficult to capture in a tangible form like someone's perception of an experience or a feeling after a big event.</td>
          </tr>
          </tbody>
          </table>
          <h2 data-heading="Examples of Knowledge Management">Examples of Knowledge Management</h2>
          <ul>
          <li>Training Agreements</li>
          <li>Q&amp;As</li>
          <li>Content Management System</li>
          <li>Documentations</li>
          <li>FAQs</li>
          <li>Forums</li>
          <li>Webinars</li>
          <li>Chatbots</li>
          <li>etc.</li>
          </ul>
          <hr />
          <h2 data-heading="Next Up">Next Up</h2>
          <p><a data-href="Process 4 - Transition Planning and Support" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 3\Processes\Process%204%20-%20Transition%20Planning%20and%20Support.html" class="internal-link" target="_blank" rel="noopener">Process 4 - Transition Planning and Support</a></p>
          <hr />
          <h2 data-heading="File Details">File Details</h2>
          <p><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Last Modified" data-dv-norm-key="last-modified">Last Modified</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span><br />
          <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Date Created" data-dv-norm-key="date-created">Date Created</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span></p>
        </main>
      </Layout>
    </>
  );
}
