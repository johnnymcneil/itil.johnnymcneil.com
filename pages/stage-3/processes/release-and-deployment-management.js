import Head from 'next/head'
import Layout from '../../../components/Layout'

export default function ReleaseDeploymentManagement() {
  const stage = 3
  const process = 5
  const title = 'Transition Planning and Support'
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
          <h1 data-heading="Release and Deployment Management">Release and Deployment Management</h1>
          <p><strong><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Stage" data-dv-norm-key="stage">Stage</span><span class="dataview inline-field-value"><span>3</span></span></span>  <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Process" data-dv-norm-key="process">Process</span><span class="dataview inline-field-value"><span>5</span></span></span></strong></p>
          <p>To plan, schedule, and control the build, test, and deployment of releases, and to deliver new functionality required by the business while protecting the integrity of existing services.</p>
          <ul>
          <li><strong>Major</strong> releases - such as new hardware, software, or introducing completely new functionality (e.g. v1.0, v2.0)
          <ul>
          <li>New routers</li>
          <li>Transition from on-premises to cloud</li>
          </ul>
          </li>
          <li><strong>Minor</strong> - improving existing functionality (e.g. v1.1, v1.2, v1.3)
          <ul>
          <li>Updating a driver</li>
          <li>Flashing new firmware</li>
          </ul>
          </li>
          <li><strong>Emergency</strong> - releasing a temporary fix in order to fix some urgent errors (e.g. v1.1.1, v1.1.2, v1.1.3)</li>
          </ul>
          <h2 data-heading="How to Release">How to Release</h2>
          <ul>
          <li><strong>Big Bang Releases</strong>: Deployed to all users, all at once</li>
          <li><strong>Phased Approach Releases</strong>: Releases are more paced gradually</li>
          </ul>
          <hr />
          <h2 data-heading="Next Up">Next Up</h2>
          <p><a data-href="Process 6 - Service Validation and Testing" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 3\Processes\Process%206%20-%20Service%20Validation%20and%20Testing.html" class="internal-link" target="_blank" rel="noopener">Process 6 - Service Validation and Testing</a></p>
          <hr />
          <h2 data-heading="File Details">File Details</h2>
          <p><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Last Modified" data-dv-norm-key="last-modified">Last Modified</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span><br />
          <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Date Created" data-dv-norm-key="date-created">Date Created</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span></p>
        </main>
      </Layout>
    </>
  );
}
