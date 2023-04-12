import {Route, Routes, createBrowserRouter, RouterProvider} from 'react-router-dom'
import { CancelPage } from '../Pages/cancelPage'
import { CreateAcount } from '../Pages/LoginPage/CreateAcount'
import { Login } from '../Pages/LoginPage/Login'
import { MenuPage } from '../Pages/MenuPage/Index'
import { Creator } from '../Pages/NavBark/Criador'
import { Tecnologies } from '../Pages/NavBark/Tecnologias'
import { ProductPage } from '../Pages/ProductsPage'
import { SuccessPage } from '../Pages/SuccessPage'
export function Router() {
    const router = createBrowserRouter([
        {
            path: '/criarconta',
            element: (<CreateAcount/>) 
           
        },
        {
            path: '/',
            element: (<Login />),
            
        },
        {
            path: '/menu',
            element: (<MenuPage/>)
        },
        {
            path: '/produtos/:id',
            element: (<ProductPage/>)
        },
        {
            path: '/criador',
            element: (<Creator/>)
        },
        {
            path: '/tecnologias',
            element: (<Tecnologies/>)
        },
        {
            path: '/sucesso',
            element: (<SuccessPage/>)
        },
        {
            path: '/cancelado',
            element: (<CancelPage/>)
        }
    ])
    return (
       <RouterProvider router={router}/>
    )
}