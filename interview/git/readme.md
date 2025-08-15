# GIT 日常使用



## Git
开发中的如何使用git


- 安装开发环境
    - node
    - git 环境  开源的分布式版本管理软件
    - 公司会发放一个git 账号，私有项目

- git config --global user.name ""
    git config --global user.email ""
- 入职 git clone 公司代码
    - 主分支 main/master
        所有人都在用的，线上分支
    - 新开有个分支
    在自己的工作任务分支
    git checkout -b xxx  -b是创建分支，checkout切换
    git branch 
    git checkout main  切换分支
- 常用命令
    git pull origin main 每天上班前的动作
    git status  当前git 状态
    git log --oneline 查看提交记录
    git add . 提交到暂存区
    git commit -m '' 提交到仓库
    git push origin main  提交搭配远程仓库
    git merge xxx 把分支合并到主分支


- 场景
    - 回退
    git restore --staged algorithm/readme.md   从暂存区回退到工作区
    git restore algorithm/readme.md  从本地仓库回退到工作区

- branch
- git restore
- 协作开发
    添加其他作者
- 提pr
    开源项目作者 如何合并其他开发者提交的代码
    如何给开源项目提交pr

    - fork 项目到远程仓库
