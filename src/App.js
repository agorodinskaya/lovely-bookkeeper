import Header from "./components/Header";
import DebitCredit from "./components/DebitCredit";
import Transactions from "./components/Transactions";
function App() {
  return (
    <div className='App'>
      <Header />
      <DebitCredit />
      <Transactions />
    </div>
  );
}

export default App;
