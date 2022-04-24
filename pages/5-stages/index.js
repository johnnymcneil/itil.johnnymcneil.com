import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import PageHeading from '../../components/PageHeading'
import LinkList from '../../components/LinkList'
import { Notes } from '../../contexts/notes'

import page5 from '../../assets/images/page-5.png'
import page6 from '../../assets/images/page-6.png'


export default function FiveStages() {
  const note = Notes.FiveStages
  const nextUp = [Notes.ServiceStrategy]
  return (
    <Layout>

      <PageHeading note={note} />
      
      <p>
        <img src={page5} />
      </p>
      <p>The ITIL Service Lifecycle goes through 5 Stages:</p>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><Link href={Notes.ServiceStrategy.href}><a>Service Strategy</a></Link></td>
          </tr>
          <tr>
            <td>2</td>
            <td><Link href={Notes.ServiceDesign.href}><a>Service Design</a></Link></td>
          </tr>
          <tr>
            <td>3</td>
            <td><Link href={Notes.ServiceTransition.href}><a>Service Transition</a></Link></td>
          </tr>
          <tr>
            <td>4</td>
            <td><Link href={Notes.ServiceOperations.href}><a>Service Operations</a></Link></td>
          </tr>
          <tr>
            <td>5</td>
            <td><a>Continual Service Improvement</a></td>
          </tr>
        </tbody>
      </table>
      <p><imgsrc={page6} /></p>
      <p>Each stage has its own unique set of processes and steps to ensure a healthy service lifecycle.</p>

      <LinkList heading='Next Up' linkList={nextUp} />

    </Layout>
  );
}
