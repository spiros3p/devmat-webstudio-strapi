/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Body as Body } from "@webstudio-is/sdk-components-react-router";
import { Image as Image } from "@webstudio-is/sdk-components-react";


      export const projectId = "b76c7430-2a95-4845-aeef-095a5acae881";

      export const lastPublished = "2026-02-02T22:49:02.451Z";

      export const siteName = "Devmat Solutions PC – Easy, Powerful, Intelligent";

      export const breakpoints = [{"id":"IOEBbQqW2Zb9XucSe4u8N"},{"id":"DbhVpmYVsZWuN8eaww6JI","maxWidth":991},{"id":"C3TGAnuYbFrXJRwOz5IBY","maxWidth":767},{"id":"Cau1OpnQLcB8-xVPpUhsW","maxWidth":479}];

      export const favIconAsset: string | undefined =
        "favicon_APM-vqgr8Z9I7VmPQSXYr_vdkAt5PAsc3Yrv-eO-IZd.png";

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        ["Monoton-Regular_2wnBBOU8x4IpGGenJ_aES.ttf"]

      export const pageBackgroundImageAssets: string[] =
        []

      
            

            export const CustomCode = () => {
              return (<></>);
            }
          

      const Page = (_props: { system: any; }) => {
let SiteState = useResource("SiteState_1")
return <Body
className={`w-element`}>
<h1
className={`w-element c1anbojs cpf8n67 ctg9xgo cavlpe`}>
{"Devmat Solutions PC"}
</h1>
<h2
className={`w-element cavlpe c153cr87`}>
{SiteState?.data?.data?.siteStatus}
</h2>
<Image
src={"/assets/work-in-progress_9kwdBfP1AlkQIoCBpUhxT_tzCv1ntJfGV095tFowbBF.webp"}
width={300}
height={300}
alt={""}
loading={"eager"}
className={`w-image cu3uc3t c1xz0hfv c1nn1c1j`} />
</Body>
}


      export { Page }
    