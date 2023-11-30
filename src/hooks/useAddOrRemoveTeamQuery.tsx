import { addTeam, fetchWatchlist, removeTeam } from '@/helperFn/watchlist/helper';
import { useMutation, useQuery, useQueryClient} from 'react-query'

const useAddOrRemoveTeamQuery = () => {

    const queryClient = useQueryClient();


    
    const addTeamMutation = useMutation({
        mutationFn: (variables: { team: string; userId: string }) => addTeam(variables),
        onSuccess: async () => {
          await queryClient.invalidateQueries({ queryKey: ['watchlist'] })
        }
      })

      const removeTeamMutation = useMutation({
        mutationFn: (variables: { team: string; userId: string }) => removeTeam(variables),
        onSuccess: async () => {
          await queryClient.invalidateQueries({ queryKey: ['watchlist'] })
        }
      })

      return {removeTeamMutation, addTeamMutation}

}

export default useAddOrRemoveTeamQuery