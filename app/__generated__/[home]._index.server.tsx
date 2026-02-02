/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  let cmsUrl = "http://172.18.0.23:1337"
  const homepagedatacms_1: ResourceRequest = {
    name: "home page data | cms",
    url: "http://172.18.0.23:1337/api/general",
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const benfitsOfDevmat_1: ResourceRequest = {
    name: "benfitsOfDevmat",
    url: cmsUrl+"/api/benefits",
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const _data = new Map<string, ResourceRequest>([
    ["homepagedatacms_1", homepagedatacms_1],
    ["benfitsOfDevmat_1", benfitsOfDevmat_1],
  ])
  const _action = new Map<string, ResourceRequest>([
  ])
  return { data: _data, action: _action }
}


      export const getPageMeta = ({
  system,
  resources,
}: {
  system: System;
  resources: Record<string, any>;
}): PageMeta => {
  return {
    title: "Devmat Solutions PC – Easy, Powerful, Intelligent",
    description: "",
    excludePageFromSearch: true,
    language: "",
    socialImageAssetName: undefined,
    socialImageUrl: "",
    status: undefined,
    redirect: "",
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params
}


      export const contactEmail = "hello@webstudio.is";
    