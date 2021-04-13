import Header from "./components/Header";
import Balance from "./components/Balance";
import DebitCredit from "./components/DebitCredit";
import Transactions from "./components/Transactions";
import Add from "./components/AddItem";
import { GlobalProvider } from "./context/GlobalContext";
function App() {
  return (
    <GlobalProvider>
      <div className='container'>
        <Header />
        <Balance />
        <DebitCredit />
        <Transactions />
        <Add />
      </div>
    </GlobalProvider>
  );
}

export default App;
