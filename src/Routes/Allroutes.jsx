const { Routes,Route } = require("react-router-dom")
const { Home } = require("../Pages/Home")
const { Single } = require("../Pages/Single")

export const Allroutes=()=>{
    return (
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/single/:id" element={<Single/>}/>

          </Routes>
    )
}