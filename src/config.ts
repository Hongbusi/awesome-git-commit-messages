import type { Config } from './types'

const config: Config = {
  title: 'Git commit message example.',
  commitList: [
    {
      title: 'Chore',
      description: '变更构建流程或辅助工具',
      list: [
        { message: 'chore: add xxx dep', description: '添加 xxx 依赖' },
        { message: 'chore: remove xxx dep', description: '删除 xxx 依赖' },
        { message: 'chore: update deps', description: '更新依赖' },
        { message: 'chore: update example', description: '更新示例' },
        { message: 'chore: update readme', description: '更新 README' },
        { message: 'chore: update lockfile', description: '更新 lock 文件' },
        { message: 'chore: fix eslint error', description: '修复 eslint error' },
        { message: 'chore: remove debugger', description: '移除 debugger' },
        { message: 'chore: format', description: '格式化' }
      ]
    },
    // {
    //   title: 'Feat',
    //   description: '新增特性',
    //   list: [
    //     { message: '暂无', description: '暂无' }
    //   ]
    // },
    {
      title: 'Fix',
      description: '修复 Bug',
      list: [
        { message: 'fix: style writing error', description: '风格书写错误' },
        { message: 'fix: break long words on overflow', description: '在溢出时中断长词' },
        { message: 'fix: spell checker', description: '拼写检查' }
      ]
    },
    {
      title: 'Docs',
      description: '修改文档',
      list: [
        { message: 'docs: improve example', description: 'docs: 改进示例' },
        { message: 'docs: fix typo', description: '错字修改' },
        { message: 'docs: update', description: '更新文档' },
        { message: 'docs: rename example', description: '重命名示例' }
      ]
    },
    // {
    //   title: 'Style',
    //   description: '代码格式修改',
    //   list: [
    //     { message: '暂无', description: '暂无' }
    //   ]
    // },
    {
      title: 'Refactor',
      description: '代码重构',
      list: [
        { message: 'refactor: improve code readability', description: '改进代码可读性' },
        { message: 'refactor: rename directory', description: '重命名目录' },
        { message: 'refactor: simplify logic', description: '简化逻辑' }
      ]
    },
    // {
    //   title: 'Perf',
    //   description: '改善性能',
    //   list: [
    //     { message: '暂无', description: '暂无' }
    //   ]
    // },
    // {
    //   title: 'Test',
    //   description: '测试',
    //   list: [
    //     { message: '暂无', description: '暂无' }
    //   ]
    // },
    // {
    //   title: 'Build',
    //   description: '变更项目构建或外部依赖',
    //   list: [
    //     { message: '暂无', description: '暂无' }
    //   ]
    // },
    {
      title: 'Ci',
      description: '更改持续集成软件的配置文件和 package 中的 scripts 命令',
      list: [
        { message: 'ci: remove verify script', description: '删除验证脚本' }
      ]
    }
    // {
    //   title: 'Revert',
    //   description: '代码回退',
    //   list: [
    //     { message: '暂无', description: '暂无' }
    //   ]
    // }
  ]
}

export default config
