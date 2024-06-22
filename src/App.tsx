import Routers from "./pages";

function App() {
  return (
    <div className="flex justify-center relative mb-7 md:mb-0">
      <div className="flex  flex-col lg:flex-row  gap-5 w-[90%] my-8 relative">
        <Routers />
      </div>
    </div>
  );
}

export default App;
