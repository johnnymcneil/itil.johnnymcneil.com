import Layout from '../../../../components/Layout'
import PageHeading from '../../../../components/PageHeading';
import { Notes } from '../../../../contexts/notes';
import LinkList from '../../../../components/LinkList';

export default function FinancialManagement() {
  const note = Notes.ServiceStrategyProcesses
  const nextUp = [Notes.ServicePortfolioManagement]

  return (
    <Layout>

      <PageHeading note={note} />

      <p>This process provides a means of understanding and managing costs and opportunities associated with services.</p>
      <h2>ABC's of Financial Management</h2>
      <ul>
        <li><strong>Accounting</strong></li>
        <li><strong>Budgeting</strong></li>
        <li>Charging</li>
      </ul>
      
      <LinkList heading='Next Up' linkList={nextUp} />
      
    </Layout>
  )
}