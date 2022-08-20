import {Routes, Route} from 'react-router-dom'
import { Home } from '../../screens';

const PublicRoutes = () => {
    return <Routes>
        <Route path="/" element={<Home />}></Route>
    </Routes>
}

export default PublicRoutes;