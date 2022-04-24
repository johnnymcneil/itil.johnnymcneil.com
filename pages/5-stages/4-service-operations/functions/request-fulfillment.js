import Layout from '../../../../components/Layout'
import LinkList from '../../../../components/LinkList'
import PageHeading from '../../../../components/PageHeading'
import { Notes } from '../../../../contexts/notes'

import Image from 'next/image'
import ImgLoader from '../../../../loaders/ImgLoader'
import reqFul from '../../../../assets/images/request-fulfillment.png'

export default function RequestFulfillment() {
  const note = Notes.RequestFulfillment
  const nextUp = [Notes.EventManagement]
  
  return (
    <Layout>

      <PageHeading note={note} />

      <h2 id="Service-Requests">Service Request</h2>
      <p>When a user submits a formal request for something, such as information, advice, a <strong>standard change</strong>, or access to a service.</p>
      <ul>
        <li>Standard Change - A pre-approved change that is low risk and that follows a standard procedure.</li>
      </ul>

      <h2>Incidents &amp; Problems vs Service Requests</h2>
      <ul>
        <li>Incidents - <strong>Unplanned interruptions</strong> to your IT services.</li>
        <li>Problems - The underlying cause of <strong>recurring</strong> or preventable incidents.</li>
        <li>Service Requests - Deal with requests for something new to be provided to the user (e.g. access to an online portal, a new version of software).</li>
      </ul>

      <p><Image loader={ImgLoader} src={reqFul} /><br />
      Image source: <a href="https://www.atlassian.com/itsm/service-request-management">https://www.atlassian.com/itsm/service-request-management</a></p>
      <ol>
        <li>A customer requests service</li>
        <li>The IT service team assesses the request - does it need financial or business <strong>approval</strong>?</li>
        <li>A service desk agent works to fulfill the service request, or forwards the request to someone who can.</li>
        <li>After resolving the request, the agent closes the ticket and consults the customer to make sure they are <strong>satisfied</strong>.</li>
      </ol>
      
      <LinkList heading={'Next Up'} linkList={nextUp} />

    </Layout>
  );
}
