import type { Config } from './types'

const config: Config = {
  title: 'Git commit message example.',
  commitList: [
    {
      title: 'chore',
      description: '变更构建流程或辅助工具',
      list: [
        { message: 'chore: add/remove xxx dep', description: '添加/删除 xxx 依赖' },
        { message: 'chore: update deps', description: '更新依赖' },
        { message: 'chore: update example', description: '更新示例' },
        { message: 'chore: update readme', description: '更新 README' },
        { message: 'chore: update lockfile', description: '更新 lock 文件' },
        { message: 'chore: fix eslint error', description: '修复 eslint error' },
        { message: 'chore: remove debugger', description: '移除 debugger' }
      ]
    },
    {
      title: 'feat',
      description: '新增特性',
      list: [
        { message: '暂无', description: '暂无' }
      ]
    },
    {
      title: 'fix',
      description: '修复 Bug',
      list: [
        { message: 'fix: style writing error', description: '风格书写错误' }
      ]
    },
    {
      title: 'docs',
      description: '修改文档',
      list: [
        { message: 'docs: improve example', description: 'docs: 改进示例' },
        { message: 'docs: fix typo', description: '错字修改' },
        { message: 'docs: update', description: '更新文档' },
        { message: 'docs: rename example', description: '重命名示例' }
      ]
    },
    {
      title: 'style',
      description: '代码格式修改',
      list: [
        { message: '暂无', description: '暂无' }
      ]
    },
    {
      title: 'refactor',
      description: '代码重构',
      list: [
        { message: 'refactor: improve code readability', description: '改进代码可读性' },
        { message: 'refactor: rename directory', description: '重命名目录' },
        { message: 'refactor: simplify logic', description: '简化逻辑' }
      ]
    },
    {
      title: 'perf',
      description: '改善性能',
      list: [
        { message: '暂无', description: '暂无' }
      ]
    },
    {
      title: 'test',
      description: '测试',
      list: [
        { message: '暂无', description: '暂无' }
      ]
    },
    {
      title: 'build',
      description: '变更项目构建或外部依赖',
      list: [
        { message: '暂无', description: '暂无' }
      ]
    },
    {
      title: 'ci',
      description: '更改持续集成软件的配置文件和 package 中的 scripts 命令',
      list: [
        { message: 'ci: remove verify script', description: '删除验证脚本' }
      ]
    },
    {
      title: 'revert',
      description: '代码回退',
      list: [
        { message: '暂无', description: '暂无' }
      ]
    }
  ]
}

export default config
