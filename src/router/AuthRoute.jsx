/* 鉴权路由 */

import { Navigate, useLocation } from "react-router-dom";

export default function AuthRoute({ children }) {
  const token = localStorage.getItem("token") ?? "";
  const { pathname } = useLocation();
  if (pathname === "/login") {
    return children;
  }
  if (!token) {
    // 不存在token，返回一个重定向的navigate，重定向到登录页面
    return <Navigate to="/login" />;
  } else {
    // 如果存在，就直接返回children
    return children;
  }
}
