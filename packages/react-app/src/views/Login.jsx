import React from "react";
import { Link } from "react-router-dom";
import { useContractReader } from "eth-hooks";
import { ethers } from "ethers";
import { Button, Space } from "antd";
import { Account } from "../components";

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 */
function Login({
  address,
  userSigner,
  localProvider,
  mainnetProvider,
  price,
  minimized,
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal,
  blockExplorer,
}) {
  return (
    <div>
      <div style={{ margin: 32 }}>
        <h1>Ready to Sign Up?</h1>
      </div>
      <div style={{ margin: 32 }}>
        <h3>And join a community that can help with your finances?</h3>
      </div>
      <div
        style={{
          minHeight: "280px",
          padding: "24px",
          background: "#fff",
        }}
      >
        <Space direction="vertical">
          <Account
            address={address}
            localProvider={localProvider}
            userSigner={userSigner}
            mainnetProvider={mainnetProvider}
            price={price}
            web3Modal={web3Modal}
            loadWeb3Modal={loadWeb3Modal}
            logoutOfWeb3Modal={logoutOfWeb3Modal}
            blockExplorer={blockExplorer}
            balance={false}
          />
          <Button
            key="logoutbutton"
            style={{ verticalAlign: "top", marginLeft: 8, marginTop: 4 }}
            shape="round"
            size="large"
          >
            Reddit
          </Button>
          <Button
            key="logoutbutton"
            style={{ verticalAlign: "top", marginLeft: 8, marginTop: 4 }}
            shape="round"
            size="large"
          >
            Continue
          </Button>
        </Space>
      </div>
    </div>
  );
}

export default Login;
