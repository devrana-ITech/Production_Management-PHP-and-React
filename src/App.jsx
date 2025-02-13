import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import RightSideber from "./components/RightSideber"
import Sidebar from "./components/Sidebar"
import HomePage from "./pages/HomePage"
import Footer from "./components/Footer"
import Index from "./pages/Index"
import ManageSupplier from "./pages/supplier/ManageSupplier"
import CreacteProduction from "./pages/production/CreacteProduction"
import ManageProduction from "./pages/production/ManageProduction"
import CreateSup from "./pages/supplier/CreateSup"
import UpdateSup from './pages/supplier/UpdateSup';
import ManageStock from "./pages/stock/ManageStock"
import Dashboard from "./pages/Dashboard"
import Purchase from './pages/purchases/Purchase';
import CreateSales from './pages/sales/CreateSales';
import ManageCustomer from "./pages/customer/ManageCustomer"
import ManageProduct from './pages/product/ManageProduct';






function App() {
  

  return (
    <>
    <BrowserRouter>
      <Header/>
        <Sidebar/>
          <Routes>
            <Route path="/" element={<HomePage/>}> 
              <Route index element={<Index/>}/>
              <Route path="/purchase" element={<Purchase/>} />
              <Route path="/managesupplier" element={<ManageSupplier/>} />
              <Route path="/createsup"  element={<CreateSup/>}/>
              <Route path="/update/:id" element={<UpdateSup/>}/>
              <Route path="/createproduction" element={<CreacteProduction/>} />
              <Route path="/manageproduction" element={<ManageProduction/>} />
              <Route path="/managestock" element={<ManageStock/>} />
              <Route path="/dashboard" element={<Dashboard/>}/> 
              <Route path="/createsales" element={<CreateSales/>}/>
              <Route path="/customer" element={<ManageCustomer/>}/>
              <Route path="/product" element={<ManageProduct/>}/>
            </Route>
          </Routes>
        <RightSideber/>
      <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
