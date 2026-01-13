/* eslint-disable */
/* This is a auto generated file for building the project */

import { Fragment, useState } from "react";
import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
import { Body as Body } from "@webstudio-is/sdk-components-react-router";

export const projectId = "0a2d7944-5150-4e8a-bdc4-05d3f1900326";

export const lastPublished = "2026-01-11T21:04:18.002Z";

export const siteName = undefined;

export const breakpoints = [
  { id: "LGch67xgB8qBuXgBepmCw" },
  { id: "R1S7kBD_wbh0OqRcarSve", maxWidth: 991 },
  { id: "8Me_X-4PSbtACW2eerf0O", maxWidth: 767 },
  { id: "G3PBx5haKWv4BbxZ05Wat", maxWidth: 479 },
];

export const favIconAsset: string | undefined = undefined;

// Font assets on current page (can be preloaded)
export const pageFontAssets: string[] = [];

export const pageBackgroundImageAssets: string[] = [];

export const CustomCode = () => {
  return <></>;
};

const Page = (_props: { system: any }) => {
  let mainVarName = useResource("mainVarName_1");
  return (
    <Body className={`w-element`}>
      <div className={`w-element`}>
        <h1 className={`w-element c1ok9k6w`}>
          {"Hello " + mainVarName?.data?.data?.name}
        </h1>
        <h2 className={`w-element c1xx6mlz`}>{"Godspeed "}</h2>
      </div>
      <div className={`w-element`}>{"k,lo,o"}</div>
    </Body>
  );
};

export { Page };
