import {Notes} from '../../../contexts/notes'
import Layout from '../../../components/Layout'
import PageHeading from '../../../components/PageHeading'
import LinkList from '../../../components/LinkList'
import Link from 'next/link'

export default function ServiceStrategy() {
  const note = Notes.ServiceStrategy
  const nextUp = [Notes.ServiceStrategyProcesses]
  return (
    <Layout>

      <PageHeading note={note} />
      
      <p>The purpose of Service Strategy is to provide a <strong>strategy</strong> for the service lifecycle. The strategy should be in sync with business <strong>objectives</strong>. The <strong>utility</strong> and <strong>warranty</strong> of this component are designed to ensure that the service is fit for purpose and fit for use, respectively.</p>
      <p>The <strong>Utility</strong> and <strong>Warranty</strong> of this component are designed to ensure that the service is fit for purpose and fit for use</p>
      <h2>Utility</h2>
      <p>Fitness for <strong>Purpose</strong>; refers to <strong>functionality</strong> offered by a product or service to meet a particular need.</p>
      <h2>Warranty</h2>
      <p>Fitness for <strong>Use</strong>; refers to the <strong>assurance</strong> that a product or service will meet agreed requirements.</p>

      <LinkList heading='Next Up' linkList={nextUp} />

      </Layout>
  );
}
