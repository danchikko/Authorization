import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import LostPassword from "./LostPassword"
import PlayerPage from "./PlayerPage"
import Successfully from "./Successfully"

const Main = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/lostPassword" element={<LostPassword />} />
                <Route path="/successfully" element={<Successfully />} />
                <Route path="/play" element={<PlayerPage />} />
            </Routes>
        </>
    )
}

export default Main