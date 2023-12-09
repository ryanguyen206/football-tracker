import Players from '../components/Players';
import TeamHeader from '../components/TeamHeader';
import { getAllTeams } from '@/helperFn/helper';

const SingleTeam =  ({ params }: { params: { id: string } }) => {
  return (
    <div className='mt-48 '>
      <TeamHeader teamName={params.id}/>
      <Players teamName = {params.id}/>
    </div> 
  );
  }
  
export default SingleTeam;


export async function generateStaticParams()
{
  const allTeams = await getAllTeams();
  const filterOnlyTeams = allTeams.map((singleTeam : any) => singleTeam.Key)
  return (
    filterOnlyTeams.map((singleTeam : any) => {id: singleTeam})
  )

}
