import Head from 'next/head'
import Layout from '../../components/Layout'

export default function ServiceStrategyProcesses() {
  const title = 'Stage 1 - Service Strategy Processes - ITIL Fundamentals'
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="description" content="Overview of the Five Stages of the ITIL Service Lifecycle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
        <h1 data-heading="Service Strategy Processes">Service Strategy Processes</h1>
        <p><strong><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Stage" data-dv-norm-key="stage">Stage</span><span class="dataview inline-field-value"><span>1</span></span></span></strong></p>
        <h2 data-heading="Service Portfolio Management (SPM)">Service Portfolio Management (SPM)</h2>
        <p>The entire set of services under management by a service provider. It consists of three main parts.</p>
        <h3 data-heading="Three Main Parts">Three Main Parts</h3>
        <ol>
        <li>Service <strong>Pipeline</strong></li>
        <li>Service <strong>Catalog</strong></li>
        <li><strong>Retired</strong> Services</li>
        </ol>
        <p>SPM organizes the process by which services are identified, described, evaluated, selected, and chartered.</p>
        <hr />
        <h2 data-heading="Strategy Management">Strategy Management</h2>
        <p>Fill in some things later</p>
        <h2 data-heading="Financial Management">Financial Management</h2>
        <p>This process provides a means of understanding and managing costs and opportunities associated with services.</p>
        <h3 data-heading="ABC's of Financial Management">ABC's of Financial Management</h3>
        <ul>
        <li><strong>Accounting</strong></li>
        <li><strong>Budgeting</strong></li>
        <li>Charging</li>
        </ul>
        <hr />
        <h2 data-heading="Demand Management">Demand Management</h2>
        <p>This process helps a business:</p>
        <ul>
        <li>Understand current customer usage of IT services</li>
        <li><strong>Anticipate</strong> future customer demands for IT services</li>
        <li><strong>Influence</strong> customer service consumption to mitigate risks and expenses</li>
        </ul>
        <p>This involves understanding the <strong>Patterns of Business Activity</strong> (PBAs) and associate them with <strong>User Profiles</strong> (UPs).</p>
        <hr />
        <h2 data-heading="Business Relationship Management">Business Relationship Management</h2>
        <p>Seek to form a relationship with customers to understand their needs for service. The important KPI is customer <strong>satisfaction</strong>.</p>
        <hr />
        <h2 data-heading="Next Up">Next Up</h2>
        <p><a aria-label-position="top" aria-label="Service Design" data-href="Service Design" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 1\Service%20Design.html" class="internal-link" target="_blank" rel="noopener">Stage 2 - Service Design</a></p>
        <hr />
        <h2 data-heading="File Details">File Details</h2>
        <p><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Last Modified" data-dv-norm-key="last-modified">Last Modified</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span><br />
        <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Date Created" data-dv-norm-key="date-created">Date Created</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span></p>
        </main>
      </Layout>
    </>
  );
}
