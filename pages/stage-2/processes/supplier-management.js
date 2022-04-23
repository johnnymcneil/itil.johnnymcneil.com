import Head from 'next/head'
import Layout from '../../../components/Layout'

export default function SupplierManagement() {
  const title = 'Stage 2 - Process 7 - Supplier Management - ITIL Fundamentals'
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="description" content="Overview of the Five Stages of the ITIL Service Lifecycle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <h1 data-heading="Supplier Management">Supplier Management</h1>
          <p><strong><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Stage" data-dv-norm-key="stage">Stage</span><span class="dataview inline-field-value"><span>2</span></span></span>  <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Process" data-dv-norm-key="process">Process</span><span class="dataview inline-field-value"><span>7</span></span></span></strong></p>
          <p>Supplier Management deals with maintaining good <strong>relationship</strong> between suppliers and the partners to ensure quality IT services. It ensures alignment of <strong>contracts</strong> with the needs of the business and that suppliers are meeting their <strong>commitments</strong>.</p>
          <ul>
          <li>Implementation and enforcement of the supplier <strong>policy</strong></li>
          <li>Maintenance of an SCD (Supply Chain Design)</li>
          <li>Supplier and contract categorization, risk assessment, evaluation, and selection</li>
          <li>Development, negotiation, agreement, review, renewal, and termination of <strong>contracts</strong></li>
          <li>Management of suppliers and supplier performance</li>
          <li>Maintenance of standard contracts, terms and conditions</li>
          <li>Management of contractual <strong>dispute</strong> resolution</li>
          <li>Management of sub-contracted suppliers</li>
          </ul>
          <hr />
          <h2 data-heading="Next Up">Next Up</h2>
          <p><a data-href="RACI - Responsibilities MATRIX" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five Stages of ITIL Service Lifecycle\Stage 2\Processes\RACI%20-%20Responsibilities%20MATRIX.html" class="internal-link" target="_blank" rel="noopener">RACI - Responsibilities MATRIX</a></p>
          <hr />
          <h2 data-heading="File Details">File Details</h2>
          <p><span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Last Modified" data-dv-norm-key="last-modified">Last Modified</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span><br />
          <span class="dataview inline-field"><span class="dataview inline-field-key" data-dv-key="Date Created" data-dv-norm-key="date-created">Date Created</span><span class="dataview inline-field-value"><span><span><span>-</span></span></span></span></span></p>
        </main>
      </Layout>
    </>
  );
}
