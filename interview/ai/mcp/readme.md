# mcp

- chatbot
- 推理模型 reasoning model
- agent

- Function call
    可以让LLM 突破自身知识和能力的局限，通过调用外部工具或API
    来获取实时信息、执行计算或操作，从而获取最新数据，精确计算与外部系统
    交互的复杂任务

- MCP Model Context Protocol
    是一个协议，web 开发中的Restful协议，如何将外部资源
    暴露给LLM的协议和编程风格
    是Function Call 的升级版

    在做各种Function Call有点乱的时候，mcp 统一了一切

    mcp是LLM 与外界之间的通信协议，它就好像USB，LLM训练完后的不了解的知识

    LLM 本身不知道怎么调用地图、数据库、搜索引擎，MCP规定了标准上下文交换的方式
    让大模型向调用API一样去访问外部的能力

## 举例
    高德地图MCP，请帮我规划从公司到机场的路线
    根据高德地图mcp插件，获取实时的路径和交通数据

## 意义
- LLM 输出更可靠
- 降低集成成本（自有系统和LLM集成）
- 数据安全可控
高德地图接入MCP，就像LLM的眼睛和耳朵，让AI真正理解和使用实时世界
pnpm i @modelcontextprotocol/sdk  安装MCP SDK


- 安装mcp 客户端 cline
- 高德地图

## mcp 的使用
- mcp server 是基于mcp 协议的服务器软件
    定义tool
- LLM
- mcp client  cline/cursor
    配置mcp server
- LLM -> client -> server Transport  通信