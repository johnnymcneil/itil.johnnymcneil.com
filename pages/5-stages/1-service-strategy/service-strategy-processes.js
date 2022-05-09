import Layout from '../../../components/Layout'
import PageHeading from '../../../components/PageHeading';
import { Notes } from '../../../contexts/notes';
import LinkList from '../../../components/LinkList';

export default function ServiceStrategyProcesses() {
  const note = Notes.ServiceStrategyProcesses
  const nextUp = [Notes.ServiceManagement]

  const processes = [
    Notes.ServiceManagement,
    Notes.FinancialManagement,
    Notes.ServicePortfolioManagement,
    Notes.DemandManagement,
    Notes.BusinessRelationshipManagement
  ]
  const processLi = []
  processes.forEach((process) => {
    processLi.push(
      <li>
        <a href={process.href}>{process.name}</a>
      </li>
    )
  })
  return (
    <Layout>

      <PageHeading note={note} />
      
      <h1>The Processes of Service Strategy</h1>
      <p>There are five processes to learn about.</p>
      
      <ol>
        { processLi }
      </ol>
      
      <LinkList heading='Next Up' linkList={nextUp} />

    </Layout>
  );
}
