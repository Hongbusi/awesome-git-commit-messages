import type { Config } from './types'

const config: Config = {
  title: 'Git commit message example.',
  commitList: [
    {
      type: 'Feat',
      list: [
        { message: 'docs: fix typo', description: '错字修改' }
      ]
    }
  ]
}

export default config
