import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './useAuth'
import MainLayout from '../components/MainLayout/MainLayout'

function PrivateRoutes() {
    const token = useAuth()
    return token ? <Outlet /> : <Navigate to='/login' />
}


export function PublicRoutes() {
    const token = useAuth()
    return token ? <Navigate to='/' /> : <Outlet />
}

export default PrivateRoutes