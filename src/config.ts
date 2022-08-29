import type { Config } from './types'

const config: Config = {
  title: 'Git commit message example.',
  commitList: [
    {
      type: 'feat - 新增特性',
      list: [
        { message: '暂无', description: '暂无' }
      ]
    },
    {
      type: 'fix - 修复 Bug',
      list: [
        { message: 'fix: style writing error', description: '风格书写错误' }
      ]
    },
    {
      type: 'docs - 修改文档',
      list: [
        { message: 'docs: improve example', description: 'docs: 改进示例' },
        { message: 'docs: fix typo', description: '错字修改' }
      ]
    },
    {
      type: 'style - 代码格式修改',
      list: [
        { message: '暂无', description: '暂无' }
      ]
    },
    {
      type: 'refactor - 代码重构',
      list: [
        { message: 'refactor: improve code readability', description: '改进代码可读性' }
      ]
    },
    {
      type: 'perf - 改善性能',
      list: [
        { message: '暂无', description: '暂无' }
      ]
    },
    {
      type: 'test - 测试',
      list: [
        { message: '暂无', description: '暂无' }
      ]
    },
    {
      type: 'build - 变更项目构建或外部依赖',
      list: [
        { message: '暂无', description: '暂无' }
      ]
    },
    {
      type: 'ci - 更改持续集成软件的配置文件和 package 中的 scripts 命令',
      list: [
        { message: '暂无', description: '暂无' }
      ]
    },
    {
      type: 'chore - 变更构建流程或辅助工具',
      list: [
        { message: 'chore: add/remove xxx dep', description: '添加/删除 xxx 依赖' },
        { message: 'chore: update deps', description: '更新依赖' },
        { message: 'chore: update readme', description: '更新 README' }
      ]
    },
    {
      type: 'revert - 代码回退',
      list: [
        { message: '暂无', description: '暂无' }
      ]
    }
  ]
}

export default config
