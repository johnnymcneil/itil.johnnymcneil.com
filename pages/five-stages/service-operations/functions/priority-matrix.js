import Layout from '../../../../components/Layout'
import LinkList from '../../../../components/LinkList'
import PageHeading from '../../../../components/PageHeading'
import { Notes } from '../../../../contexts/notes'
import Image from 'next/image'
import matrix from '../../../../assets/images/Priority Matrix.png'

export default function PriorityMatrix() {
  const note = Notes.PriorityMatrix
  const nextUp = [Notes.RequestFulfillment]

  return (
    <Layout>
      
      <PageHeading note={note} />

      <blockquote>
      <p>Insert slide here</p>
      </blockquote>

      <p><Image src={matrix} /></p>
      
      <h2>Priority Matrix Explained</h2>
      <table>
        <thead>
          <tr>
            <th>Priority</th>
            <th>Definition</th>
            <th>Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>P1 Critical</td>
            <td>High Impact/High Urgency<br />Critical to the ongoing operation of the organization, or present the highest risk to it.</td>
            <td>-&gt; A large amount of data has been corrupted.<br />-&gt; A suspected breach of IT security that could affect all users.</td>
          </tr>
          <tr>
            <td>P2 High</td>
            <td>High Impact/mid Urgency, or Mid Impact/High Urgency<br />Requires a quick resolution, but the effect to the organization is not as great as P1 tasks</td>
            <td>-&gt; Data has been corrupted affecting several users.<br />-&gt; A suspected breach of IT security affecting some users.</td>
          </tr>
          <tr>
            <td>P3-4 Normal</td>
            <td>Often routine IT issues<br />Still needs to be fixed, but not as urgent as P1 or P2 tasks.</td>
            <td>-&gt; Basic functionality is available, but with some limitations.<br />-&gt; Workarounds are available.<br />-&gt; A low number of users are affected.</td>
          </tr>
          <tr>
            <td>P5 Low</td>
            <td>Low impact &amp; low urgency<br />Minor issues where the users are still able to carry out their business activities.</td>
            <td>-&gt; Poor layout of content on a web page.</td>
          </tr>
        </tbody>
      </table>

      <h2>Priority Matrix &amp; Service Levels (Example)</h2>
      <table>
        <thead>
          <tr>
            <th>Priority</th>
            <th>Time to Resolve Tasks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>P1</td>
            <td>Respond within 15 minutes, resolve within 2 hours.</td>
          </tr>
          <tr>
            <td>P2</td>
            <td>Respond within 15 minutes, resolve within 4 hours.</td>
          </tr>
          <tr>
            <td>P3</td>
            <td>Respond within 1 hour, resolve within 2 days.</td>
          </tr>
          <tr>
            <td>P4</td>
            <td>Respond within 4 hours, resolve within 5 days.</td>
          </tr>
          <tr>
            <td>P5</td>
            <td>Respond within 1 day, resolve within 2 weeks.</td>
          </tr>
        </tbody>
      </table>

      <LinkList heading={'Next Up'} linkList={nextUp} />
      
    </Layout>
  );
}
