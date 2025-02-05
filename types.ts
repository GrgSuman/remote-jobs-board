

export interface Category {
  id: string
  name: string
  description: string
  isActive?: boolean
}

export type Company = {
  id: number
  name: string
  description: string | null
  logo: string | null
  website: string | null
  linkedinURL: string
  twitterURL: string
  industry: string | null
  size: string | null
  remotePolicy: string | null
  userId: string
}

