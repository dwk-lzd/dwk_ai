# Next.js

## supabase

## 数据库开发
- ORM 工具
    不需要写SQL ，向操作对象一样去操作数据库
    Prisma
## Prisma？ 数据库的工程化
    pnpm i prisma @prisma/client 安装prisma 和客户端
    
    
    是命令行工具，用于管理数据库 schema、迁移
    schema 是数据库的结构蓝图，定义了表、字段、数据类型、关系和约束等组织方式
    Migration  是数据库结构变更（建表、改字段）等
    不仅可以帮助外面操作数据库，还可以为我们的数据库操作留下记录

    初始化 npx prisma init

    DATABASE_URL="mysql://root:Codingdream2021@localhost:3306/blogs"  环境变量，连接数据库

    npx prisma migrate dev --name init  生成迁移文件，并执行迁移