/* eslint-disable */
/* This is a auto generated file for building the project */

import { Fragment, useState } from "react";
import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
import {
  Body as Body,
  Link as Link,
} from "@webstudio-is/sdk-components-react-router";
import {
  NavigationMenu as NavigationMenu,
  NavigationMenuList as NavigationMenuList,
  NavigationMenuItem as NavigationMenuItem,
  NavigationMenuTrigger as NavigationMenuTrigger,
  NavigationMenuContent as NavigationMenuContent,
  NavigationMenuLink as NavigationMenuLink,
  NavigationMenuViewport as NavigationMenuViewport,
} from "@webstudio-is/sdk-components-react-radix";
import {
  Button as Button,
  Text as Text,
  Box as Box,
  HtmlEmbed as HtmlEmbed,
  Paragraph as Paragraph,
  Image as Image,
} from "@webstudio-is/sdk-components-react";

export const projectId = "0a2d7944-5150-4e8a-bdc4-05d3f1900326";

export const lastPublished = "2026-01-14T10:04:06.395Z";

export const siteName = "Devmat Solutions PC – Easy, Powerful, Intelligent";

export const breakpoints = [
  { id: "LGch67xgB8qBuXgBepmCw" },
  { id: "R1S7kBD_wbh0OqRcarSve", maxWidth: 991 },
  { id: "8Me_X-4PSbtACW2eerf0O", maxWidth: 767 },
  { id: "G3PBx5haKWv4BbxZ05Wat", maxWidth: 479 },
];

export const favIconAsset: string | undefined =
  "favicon_APM-vqgr8Z9I7VmPQSXYr.png";

// Font assets on current page (can be preloaded)
export const pageFontAssets: string[] = [
  "Monoton-Regular_ZzprU0UZVPRY408r7k90h.ttf",
];

export const pageBackgroundImageAssets: string[] = [];

export const CustomCode = () => {
  return <></>;
};

const Page = (_props: { system: any }) => {
  let sitestate = useResource("sitestate_1");
  return (
    <Body className={`w-element ca1367l cvwj1e5 cmjq5f4 chvthtj`}>
      <div className={`w-element c1e8wxyp`}>
        <h1 className={`w-element c1kiuc91 cf606sg c1ok9k6w ckvo8m0 clc3r69`}>
          {"Devmat Solutions PC"}
        </h1>
        <h2
          className={`w-element c1ok9k6w c12ikdfy cek1jwi c7d6b3o citx16c cjptfmy cielvey co8v17q c2i4ulj`}
        >
          {sitestate?.data?.data?.siteStatus}
        </h2>
        <div className={`w-element c1x97uab`}>
          <Image
            src={"/assets/work-in-progress_9kwdBfP1AlkQIoCBpUhxT.webp"}
            width={350}
            height={350}
            alt={""}
            className={`w-image c1x97uab c1i7pqf3 c10n4v7u`}
          />
        </div>
      </div>
    </Body>
  );
};

export { Page };
