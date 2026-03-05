import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import FundTransfer from "./pages/FundTransfer";
import OtherBankTransfer from "./pages/OtherBankTransfer";
import IMPSTransfer from "./pages/IMPSTransfer";
import Statement from "./pages/Statement";
import Register from "./pages/Register";
import ChequeBook from "./pages/ChequeBook";
import Layout from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "dashboard", Component: Dashboard },
      { path: "fund-transfer", Component: FundTransfer },
      { path: "other-bank-transfer", Component: OtherBankTransfer },
      { path: "imps-transfer", Component: IMPSTransfer },
      { path: "statement", Component: Statement },
      { path: "register", Component: Register },
      { path: "cheque-book", Component: ChequeBook },
    ],
  },
]);
