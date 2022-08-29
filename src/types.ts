import type { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

interface CommitMessage {
  message: string
  description: string
}

export interface CommitType {
  type: string
  list: CommitMessage[]
}

export interface Config {
  title: string
  commitList: CommitType[]
}
