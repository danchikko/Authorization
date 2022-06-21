import Login from "./components/Login/Login";
import Successfully from "./components/Login/Successfully";
import LostPassword from "./components/Login/LostPassword";

import PlayerPage from "./components/Login/PlayerPage";


function App() {
  return (
    <div>
      <Login />
      <LostPassword />
      <Successfully />
      <PlayerPage />
    </div>
  );
}

export default App;
