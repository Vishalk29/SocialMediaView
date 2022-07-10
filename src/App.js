import "./App.css"
// import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/Home";
// import ProfileDeatil from "./Pages/ProfileDetail/ProfileDeatil";
function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <Home />
      {/*<ProfileDeatil />*/}
      {/* <Auth />*/}
    </div>
  );
}

export default App;
