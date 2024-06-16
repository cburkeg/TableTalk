import request from 'superagent'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Data, TableEntry } from '../../models/models'

export function usePlaceholderdata() {
  return useQuery({
    queryKey: ['datatable'],
    queryFn: async () => {
      const res = await request.get('api/v1/placeholder')
      return res.body as Data
    },
  })
}

export function useUpdatePlaceholderdata() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (entry: TableEntry) => {
      {
        await request
          .patch(`api/v1/placeholder/${entry[Object.keys(entry)[0]]}`)
          .send(entry)
      }
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['datatable'] })
    },
  })
}

export function useDeletePlaceholderdata() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: string | number) => {
      {
        await request.delete(`api/v1/placeholder/${String(id)}`)
      }
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['datatable'] })
    },
  })
}
