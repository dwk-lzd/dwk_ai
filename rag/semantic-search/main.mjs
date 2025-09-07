import {
    client,
    cosineSimilarity
} from './llm.mjs'
import fs from 'fs/promises'

const inputFilePath = './data/posts_with_embedding.json'
const data = await fs.readFile(inputFilePath, 'utf-8')
// 向量 cosine函数  文本语义化检索
// 你好  hello
// LIKE 文本的检索

const posts = JSON.parse(data)

const response = await client.embeddings.create({
    model: 'text-embedding-ada-002',
    input: `react,tainwindcss`
})
// console.log(response.data[0].embedding);

const {
    embedding
} = response.data[0]

const result = posts.map(item => ({
    ...item,
    similarity: cosineSimilarity(embedding, item.embeddings)
}))
    .sort((a, b) => a.similarity - b.similarity)
    .reverse()
    .slice(0, 3)
    .map((item, index) => `${index + 1}, ${item.title}, ${item.category}`)
    .join('\n');

console.log(result);