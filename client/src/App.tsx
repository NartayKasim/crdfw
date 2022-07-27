import Navigation from "./features/navigation/Navigation";
import Router from "./routes/Router";

function App() {
   return (
      <div className="App">
         <nav className="nav">
            <div className="inner-page">
               <Navigation />
            </div>
         </nav>
         <div className="page">
            <div className="inner-page">
               <Router />
            </div>
         </div>
      </div>
   );
}

export default App;
