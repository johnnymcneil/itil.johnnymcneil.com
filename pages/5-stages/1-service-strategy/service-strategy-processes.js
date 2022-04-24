import Layout from '../../../components/Layout'
import PageHeading from '../../../components/PageHeading';
import { Notes } from '../../../contexts/notes';
import LinkList from '../../../components/LinkList';

export default function ServiceStrategyProcesses() {
  const note = Notes.ServiceStrategyProcesses
  const nextUp = [Notes.ServiceDesign]

  return (
    <Layout>

      <PageHeading note={note} />
      
      <h2>Service Portfolio Management (SPM)</h2>
      <p>The entire set of services under management by a service provider. It consists of three main parts.</p>
      <h3>Three Main Parts</h3>
      <ol>
      <li>Service <strong>Pipeline</strong></li>
      <li>Service <strong>Catalog</strong></li>
      <li><strong>Retired</strong> Services</li>
      </ol>
      <p>SPM organizes the process by which services are identified, described, evaluated, selected, and chartered.</p>
      
      <h2>Strategy Management</h2>
      <p>Fill in some things later</p>
      <h2>Financial Management</h2>
      <p>This process provides a means of understanding and managing costs and opportunities associated with services.</p>
      <h3>ABC's of Financial Management</h3>
      <ul>
      <li><strong>Accounting</strong></li>
      <li><strong>Budgeting</strong></li>
      <li>Charging</li>
      </ul>
      
      <h2>Demand Management</h2>
      <p>This process helps a business:</p>
      <ul>
      <li>Understand current customer usage of IT services</li>
      <li><strong>Anticipate</strong> future customer demands for IT services</li>
      <li><strong>Influence</strong> customer service consumption to mitigate risks and expenses</li>
      </ul>
      <p>This involves understanding the <strong>Patterns of Business Activity</strong> (PBAs) and associate them with <strong>User Profiles</strong> (UPs).</p>
      
      <h2>Business Relationship Management</h2>
      <p>Seek to form a relationship with customers to understand their needs for service. The important KPI is customer <strong>satisfaction</strong>.</p>
      
      <LinkList heading='Next Up' linkList={nextUp} />

    </Layout>
  );
}
