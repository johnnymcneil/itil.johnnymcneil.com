import Layout from '../components/Layout'
import PageHeading from '../components/PageHeading'
import { Notes } from '../contexts/notes'
import LinkList from '../components/LinkList'

export default function WhatIsITIL() {
  const note = Notes.WhatIsItil
  const nextUp = [Notes.FiveStages]
  const seeAlso = [Notes.RACI]

  return (
    <Layout>
      <PageHeading note={note} />
      
      <p>ITIL (Information Technology Infrastructure Library) is a <strong>framework</strong> consisting of best practices and <strong>processes</strong> that can be adopted in order to provide <strong>IT service</strong> management (ITSM)</p>
      <h3>Why do we use ITIL?</h3>
      <ul>
        <li>Deliver maximum <strong>value</strong> to customers</li>
        <li>Optimize <strong>resources</strong> and capabilities</li>
        <li>Offer services that are useful and reliable</li>
        <li>Plan <strong>processes</strong> with specific goals in mind</li>
        <li>Define <strong>roles</strong> clearly for each task</li>
      </ul>

      <LinkList heading={'Next Up'} linkList={ nextUp } />

      <LinkList heading={'See Also'} linkList={ seeAlso } />

    </Layout>
);
}
