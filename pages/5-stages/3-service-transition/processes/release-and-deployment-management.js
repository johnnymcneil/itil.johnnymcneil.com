import Head from 'next/head'
import Layout from '../../../../components/Layout'
import LinkList from '../../../../components/LinkList'
import { Notes } from '../../../../contexts/notes';
import PageHeading from '../../../../components/PageHeading';

export default function ReleaseDeploymentManagement() {
  const note = Notes.ReleaseDeploymentManagment
  const nextUp = [Notes.ServiceValidationTesting]

  return (
    <Layout>
      <PageHeading note={note} />

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
      
      <h2>How to Release</h2>
      <ul>
        <li><strong>Big Bang Releases</strong>: Deployed to all users, all at once</li>
        <li><strong>Phased Approach Releases</strong>: Releases are more paced gradually</li>
      </ul>

      <LinkList heading={'Next Up'} linkList={nextUp} />

    </Layout>
  );
}
