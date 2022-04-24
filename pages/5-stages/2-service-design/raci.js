import { Notes } from '../../../contexts/notes';
import Layout from '../../../components/Layout'
import LinkList from '../../../components/LinkList';
import Image from 'next/image';
import page26 from '../../../assets/images/page-26.png'
import ImgLoader from '../../../loaders/ImgLoader'

export default function RACI() {
  const note = Notes.RACI
  const nextUp = [Notes.ServiceTransition]

  return (
    <Layout>
      <h1>RACI - Responsibilities MATRIX</h1>
      <p><strong>Stage2</strong><br />
      <Image loader={ImgLoader} src={page26} /></p>
      <ul>
      <li><strong>Responsible</strong> -&gt; The person who does the work to achieve the task such as administrators and developers.</li>
      <li><strong>Accountable</strong> -&gt; The person who is accountable for the correct and thorough completion of the task, such as managers and directors.</li>
      <li><strong>Consulted</strong> -&gt; The people who provide information for the project, often subject matter experts.</li>
      <li><strong>Informed</strong> -&gt; The people kept informed of progress. These are people that are affected by the outcome of the tasks, such as clients.</li>
      </ul>
      
      <LinkList heading='Next Up' linkList={nextUp} />

    </Layout>
  );
}
