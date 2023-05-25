import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ManageProducts } from "../pages";


const CoustomRouter = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ManageProducts/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default CoustomRouter;