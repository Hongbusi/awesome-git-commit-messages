import path from 'path'
import fse from 'fs-extra'
import type { CommitType } from '~/types'
import config from '~/config'

function getCommitExampleToMd(list: CommitType[]) {
  let result = '\n\n## Example \n\n'

  list.forEach((item) => {
    result += `### ${item.title} - ${item.description}\n\n\`\`\` bash\n`
    item.list.forEach((commit) => {
      result += `${commit.message} # ${commit.description}\n`
    })
    result += '```\n\n'
  })

  return result
}

function generatorExample(exampleContent: string) {
  const readmePath = path.resolve('./README.md')
  const content = fse.readFileSync(readmePath, { encoding: 'utf-8' })

  const reg = /(?<=<!-- example-start -->)[^>]*(?=<!-- example-end -->)/gms
  const resultContent = content.replace(reg, exampleContent)
  fse.writeFileSync(readmePath, resultContent)
}

generatorExample(getCommitExampleToMd(config.commitList))

console.log('\nThe example inserted successfully!!!\n\n\n')
