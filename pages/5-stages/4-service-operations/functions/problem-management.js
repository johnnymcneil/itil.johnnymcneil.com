import Head from 'next/head'
import Layout from '../../../../components/Layout'
import LinkList from '../../../../components/LinkList'
import PageHeading from '../../../../components/PageHeading'
import { Notes } from '../../../../contexts/notes'

export default function ProblemManagement() {
  const note = Notes.ProblemManagement
  const nextUp = [Notes.PriorityMatrix]

  return (
    <Layout>

      <PageHeading note={note} />

      <p>Reduce the likelihood and impact of <strong>incidents</strong> by identifying actual and potential causes of incidents (diagnosis of <strong>root</strong> cause), and managing workarounds and known-errors.</p>
      <h2>What is a Problem?</h2>
      <ul>
      <li>A cause, or potential cause, of one or more prior, current, or future <strong>incidents</strong>.</li>
      <li>A <strong>known-error</strong> is a problem that has been analyzed and has not been resolved.</li>
      </ul>
      <h2>Examples of Problems in the IT Sector</h2>
      <ul>
      <li>Exchange server stops sending email</li>
      <li>Financial application does not allow submission if numbers lack decimal points</li>
      </ul>
      <h2>What is a Workaround?</h2>
      <p>A <strong>workaround</strong> is a solution that reduces or eliminates the impact of an incident or problem for which a full resolution is not yet available. Some workarounds reduce the likelihood of incidents.</p>
      <h2>Problem Management Process</h2>
      <ol>
      <li>Detect the problem</li>
      <li>Log the problem</li>
      <li><strong>Categorize</strong> the problem</li>
      <li><strong>Prioritize</strong> the problem</li>
      <li>Investigate &amp; diagnose the problem</li>
      <li>Identify a <strong>workaround</strong> for the problem</li>
      <li>Raise a <strong>known-error</strong> record</li>
      <li>Resolve the problem</li>
      <li>Close the problem</li>
      <li>Review the problem</li>
      </ol>
      <h2>Examples of Key Performance Indicators</h2>
      <ul>
      <li>Average time to start Root Cause Analysis (RCA)</li>
      <li>Total number of uncompleted problems</li>
      <li>Percentage increase/decrease of major incidents</li>
      <li>Total number of <strong>problem records</strong> reported</li>
      <li>Average resolution time of problems</li>
      <li>Total number of <strong>known-errors</strong></li>
      <li>Percentage of problems with a workaround</li>
      </ul>

      <LinkList heading={'Next Up'} linkList={nextUp} />
      
    </Layout>
  );
}
