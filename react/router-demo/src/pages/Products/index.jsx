import { Outlet } from "react-router-dom"

const Products = () => {
    return (
        <>
            <h1>产品列表</h1>
            {/* 二级路由的占位符 */}
            <a href="http://localhost:5173/products/new">NewProduct</a><br />
            <a href="http://localhost:5173/products/123">ProductDetail123</a><br />
            <Outlet />
        </>
    )
}
export default Products