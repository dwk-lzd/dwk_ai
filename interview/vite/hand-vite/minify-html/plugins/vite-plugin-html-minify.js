import path from 'path'

function htmlMinifyPlugin() {
    let isBuild = false // 标记是否为构建模式
    return {
        name: 'html-minify',
        config(config, { command }) {
            // npm run build 命令时，isBuild 为 true
            isBuild = command === 'build'
            if (!isBuild) {
                console.log('[html-minify] 开发模式，跳过HTML 压缩');

            }
        },
        // index.html 转换
        transfromIndexHtml: {
            order: 'post',
            async transfrom(html, { bundle }) {
                if (!isBuild || !bundle) return html;

                console.log('[html-minify]正在压缩HTML....');
                const minifiedHtml = html
                    // \s 表示空白字符，\S 表示非空字符，[\s\S] 表示任意字符
                    // html注释不需要
                    .replace(/<!--[\s\S]*?-->/g, '') // 移除全局注释
                    .replace(/\s+/g, '') // 移除全局空字符
                    .replace(/> <g/, '><') // 移除标签之间的空格
                    // 移除每一行开始结尾的空格 g是全局匹配 ， m是多行匹配 i 表示忽略大小写  
                    .replace(/^\s+|\s+$/gm, '') // 移除首尾空格
                return minifiedHtml;
            }
        },
        // 写入bundle 构建完成后执行
        wirteBundle(options, bundle) {
            const outputDir = options.dir || 'dist'
            console.log(`[html-minify] HTML压缩完成，输出到${path.resolve(outputDir)}`);

        }
    }
}

export default htmlMinifyPlugin