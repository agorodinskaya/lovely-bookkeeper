import Header from "./components/Header";
import DebitCredit from "./components/DebitCredit";
import Transactions from "./components/Transactions";
import Add from "./components/AddItem";
import { GlobalProvider } from "./context/GlobalContext";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <DebitCredit />
      <Transactions />
      <Add />
    </GlobalProvider>
  );
}

export default App;
