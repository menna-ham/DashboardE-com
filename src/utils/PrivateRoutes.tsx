import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './useAuth';
// import MainLayout from '../components/MainLayout/MainLayout.tsx';
import React from 'react';
import MainLayout from '../components/MainLayout/MainLayout';

// Define the props type for PrivateRoutes
interface PrivateRoutesProps {
    element: React.ReactNode; // Use ReactNode to accept any valid React element
}

function PrivateRoutes({ element }: PrivateRoutesProps) {
    const token = useAuth();
    return token ? element : <Navigate to="/login" />;
}

export function PublicRoutes() {
    const token = useAuth();
    return token ? <Navigate to="/" /> : <MainLayout />;
}

export default PrivateRoutes;
