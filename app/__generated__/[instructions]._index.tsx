/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Body as Body } from "@webstudio-is/sdk-components-react-router";
import { HtmlEmbed as HtmlEmbed } from "@webstudio-is/sdk-components-react";


      export const projectId = "b76c7430-2a95-4845-aeef-095a5acae881";

      export const lastPublished = "2026-02-07T16:55:03.698Z";

      export const siteName = "Devmat Solutions PC – Easy, Powerful, Intelligent";

      export const breakpoints = [{"id":"IOEBbQqW2Zb9XucSe4u8N"},{"id":"DbhVpmYVsZWuN8eaww6JI","maxWidth":991},{"id":"C3TGAnuYbFrXJRwOz5IBY","maxWidth":767},{"id":"Cau1OpnQLcB8-xVPpUhsW","maxWidth":479}];

      export const favIconAsset: string | undefined =
        "favicon_APM-vqgr8Z9I7VmPQSXYr_vdkAt5PAsc3Yrv-eO-IZd.png";

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        []

      export const pageBackgroundImageAssets: string[] =
        []

      

      const Page = (_props: { system: any; }) => {
let [URLcmsMedia, set$URLcmsMedia] = useVariableState<any>("https://admin.devmat.spirosroadto.info")
let REQsitestate = useResource("REQsitestate_1")
return <Body
className={`w-element`}>
<HtmlEmbed
code={`<iframe src=\"https://docs.google.com/viewer?url=${URLcmsMedia}${REQsitestate?.data?.data?.instructionsToCms?.url}&amp;embedded=true\" width=\"100%\" height=\"100%\" style=\"border: none; min-height: 100vh;\">\n</iframe>`}
executeScriptOnCanvas={true}
clientOnly={true}
className={`w-html-embed`} />
</Body>
}


      export { Page }
    