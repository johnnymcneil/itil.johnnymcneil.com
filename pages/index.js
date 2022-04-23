import Head from 'next/head'
import Layout from '../components/Layout'
import PageHeading from '../components/pageHeading';

export default function WhatIsITIL() {
  const stage = 3
  const process = 1
  const title = 'Change Management'
  const pageHeader = `Stage ${stage} - Process ${process} - ${title}`
  const browserTabText = `${pageHeader} - ITIL Fundamentals`
  return (
    <>
      <Head>
        <title>{ browserTabText }</title>
        <meta name="description" content="Johnny McNeil's notes on ITIL Fundamentals." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <PageHeading title={title} stage={stage} process={process} />
          <h1 data-heading="What is ITIL?">What is ITIL?</h1>
          <p>ITIL (Information Technology Infrastructure Library) is a <strong>framework</strong> consisting of best practices and <strong>processes</strong> that can be adopted in order to provide <strong>IT service</strong> management (ITSM)</p>
          <h2 data-heading="Why Use ITIL?">Why Use ITIL?</h2>
          <ul>
          <li>Deliver maximum <strong>value</strong> to customers</li>
          <li>Optimize <strong>resources</strong> and capabilities</li>
          <li>Offer services that are useful and reliable</li>
          <li>Plan <strong>processes</strong> with specific goals in mind</li>
          <li>Define <strong>roles</strong> clearly for each task</li>
          </ul>
          <hr />
          <h2 data-heading="Next Up">Next Up</h2>
          <p><a data-href="Five Stages of ITIL Service Lifecycle" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\Five%20Stages%20of%20ITIL%20Service%20Lifecycle.html" class="internal-link" target="_blank" rel="noopener">Five Stages of ITIL Service Lifecycle</a></p>
          <hr />
          <h2 data-heading="See Also">See Also</h2>
          <p><a data-href="RACI - Responsibilities MATRIX" href="D:\Black Mesa Transit\Obsidian\IT ServiceNow Bootcamp\ITIL Overview\RACI%20-%20Responsibilities%20MATRIX.html" class="internal-link" target="_blank" rel="noopener">RACI - Responsibilities MATRIX</a></p>
          <hr />
        </main>
      </Layout>
    </>
  );
}
