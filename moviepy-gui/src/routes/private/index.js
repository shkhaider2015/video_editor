import {Routes, Route} from 'react-router-dom'
import { Home, Private } from '../../screens';

const PrivateRoutes = () => {
    return <Routes>
    <Route path="/" element={<Private />}></Route>
</Routes>
}

export default PrivateRoutes;