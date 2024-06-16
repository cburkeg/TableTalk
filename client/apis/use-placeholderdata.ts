import request from 'superagent'
import { useQuery } from '@tanstack/react-query'
import { Data } from '../../models/models'

export function usePlaceholderdata() {
  return useQuery({
    queryKey: ['datatable'],
    queryFn: async () => {
      const res = await request.get('api/v1/placeholder')
      return res.body as Data
    },
  })
}
