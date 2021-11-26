import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a
      href="https://www.notion.so/Team-Mission-a86e51a927bf41b590e6a4fefab3d2fb"
      target="_blank"
      rel="noopener noreferrer"
    >
      <PageHeader
        title="ODDs Token"
        subTitle="Our vision is to be the place where entrepreneurs can finance each other business using off-chain and on-chain data to determine the ODDS of business success and ROI"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
