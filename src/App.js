import "./App.css";
import { lazy, Suspense } from "react";
import store from "./store";
import { Provider } from "react-redux";
const LaptopContainer = lazy(() => import("./Laptop/LaptopContainer"));
const MobileContainer = lazy(() => import("./Mobile/MobileContainer"));
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Suspense fallback={<p>Loading...</p>}>
          <MobileContainer />
        </Suspense>
        <Suspense fallback={<p>Loading...</p>}>
          <LaptopContainer />
        </Suspense>
      </Provider>
    </div>
  );
}

export default App;
