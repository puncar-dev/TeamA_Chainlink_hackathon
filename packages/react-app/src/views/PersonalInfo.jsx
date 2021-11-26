import React from "react";
import { Link } from "react-router-dom";
import { useContractReader } from "eth-hooks";
import { ethers } from "ethers";
import { Button, Space } from "antd";
import { PersonalInfoForm } from "../components";

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 */
function PersonalInfo() {
  return (
    <div>
      <div style={{ margin: 32 }}>
        <h1>Let us get to know you!</h1>
      </div>
      <div style={{ margin: 32 }}>
        <h3>This information will help us to set up your account and connect you with the right community members</h3>
      </div>
      <div
        style={{
          minHeight: "280px",
          padding: "24px",
          background: "#fff",
        }}
      >
        <h3>Basic Info:</h3>
        <PersonalInfoForm />
      </div>
    </div>
  );
}

export default PersonalInfo;
