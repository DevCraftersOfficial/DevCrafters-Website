import { createClient } from '@sanity/client'

// Create a new Sanity client instance
const client = createClient({
  projectId: 'nr8mmlv4', 
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2023-01-01'
})

export default client

