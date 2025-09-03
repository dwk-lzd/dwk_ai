import {
    NextRequest,
    NextResponse,
} from 'next/server'
import { verifyToken } from './lib/jwt'
const protectPath = ['/dashboard', '/profile']

export async function middleware(request: NextRequest) {
    // pre      next
    const path = request.nextUrl.pathname

    // console.log(path);
    // console.log('打中间件这必须过一下子');
    // 非保护的
    if (!protectPath.some(p => path.startsWith(p))) {
        return NextResponse.next()
    }
    // 检测是否已经登录
    const accessToken = request.cookies.get('accessToken')?.value
    const refreshToken = request.cookies.get('refreshToken')?.value
    // console.log('accessToken', accessToken);
    // console.log('refreshToken', refreshToken);

    if (!accessToken && !refreshToken) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    if (accessToken) {
        const accessPayload = await verifyToken(accessToken)
        console.log(accessPayload, '/////');
        if (accessPayload) {
            const requestHeaders = new Headers(request.headers)
            requestHeaders.set(
                'x-user-id',
                accessPayload.userId as string  // 这里要加上as string 因为payload.userId 可能不是string类型，所以加上as string 强制转换一下类型
            )
            return NextResponse.next({
                request: {
                    headers: requestHeaders
                }
            })
        }
    }

    // accessToken 过期了，但是有 refreshToken
    if (refreshToken) {
        // 刷新accessToken
        const refreshPayload = await verifyToken(refreshToken)
        if (refreshPayload) {
            // 刷新accessToken
            // 断言
            // const userId = refreshPayload.userId as string
            const refreshUrl = new URL('/api/auth/refresh', request.url)
            refreshUrl.searchParams.set('redirect', request.url)
            // console.log(refreshUrl, '////////');
            return NextResponse.redirect(refreshUrl)
        }
    }

    return NextResponse.redirect(new URL('/login', request.url))
}
