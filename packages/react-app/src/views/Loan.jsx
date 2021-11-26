import React from "react";
import { Link } from "react-router-dom";
import { useContractReader } from "eth-hooks";
import { ethers } from "ethers";
import { Button, Space } from "antd";
import { LoanForm } from "../components";

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 */
function Loan() {
  return (
    <div>
      <div style={{ margin: 32 }}>
        <h1>How can we help you?</h1>
      </div>
      <div style={{ margin: 32 }}>
        <h3>
          Let us know your situation and how much you need to borrow. Even if we won't be able to cover everything, we
          will do our best
        </h3>
      </div>
      <div
        style={{
          minHeight: "280px",
          padding: "24px",
          background: "#fff",
        }}
      >
        <h3>Basic Info:</h3>
        <LoanForm />
      </div>
    </div>
  );
}

export default Loan;
