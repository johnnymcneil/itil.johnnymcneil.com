import Layout from '../../../../components/Layout'
import PageHeading from '../../../../components/PageHeading';
import { Notes } from '../../../../contexts/notes';
import LinkList from '../../../../components/LinkList';

export default function ServiceManagement() {
  const note = Notes.ServiceManagement
  const nextUp = [Notes.FinancialManagement]

  return (
    <Layout>

      <PageHeading note={note} />

      <p>This is the first process under Service Strategy. Strategy Management ensures that IT services will align the organization.</p>
      <p>During this stage, you will assess, define, and execute strategies for your service offerings.</p>
      
      <h2>Assess</h2>
      <p>Evaluate your organizations opportunities and constraints. What will impact your services? Compare your service offerings and audiences to those of your competitors.</p>
      
      <h2>Define</h2>
      <p>Using your assessment as a guide, define the goals you have for your services. Identify and recommend services for different customer segments.</p>
      
      <h2>Execute</h2>
      <p>Now it's time to <strong>implement</strong>. Plan your strategy for the successful execution of your strategic initiatives.</p>
      
      <LinkList heading='Next Up' linkList={nextUp} />

    </Layout>
  )
}