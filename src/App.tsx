import ChatWindown from "./Components/Chat/ChatWindow";
import GeneralContext from "./Contexts/GeneralContext";

function App() {
  return (
    <GeneralContext>
      <div className="w-full h-full flex justify-center items-center">
        <ChatWindown />
      </div>
    </GeneralContext>
  );
}

export default App;
