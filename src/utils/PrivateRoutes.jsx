import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './useAuth'
import MainLayout from '../components/MainLayout/MainLayout'

function PrivateRoutes() {
    const token = useAuth()
    console.log('private routes', token)
    return token ? <MainLayout /> : <MainLayout />
}


export function PublicRoutes() {
    const token = useAuth()
    return token ? <Navigate to='/' /> : <MainLayout />
}

export default PrivateRoutes