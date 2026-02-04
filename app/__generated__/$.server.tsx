/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  let cmsUrl = "http://172.18.0.23:1337"
  const homepagedatacms: ResourceRequest = {
    name: "home page data | cms",
    url: "http://172.18.0.23:1337/api/general",
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const benfitsOfDevmat: ResourceRequest = {
    name: "benfitsOfDevmat",
    url: cmsUrl+"/api/benefits",
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const gettingStartedSteps: ResourceRequest = {
    name: "gettingStartedSteps",
    url: cmsUrl+'/api/getting-started-steps',
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const solutions: ResourceRequest = {
    name: "solutions",
    url: cmsUrl+'/api/solutions',
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const clientReviewsReq: ResourceRequest = {
    name: "clientReviewsReq",
    url: cmsUrl+'/api/client-reviews',
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const _data = new Map<string, ResourceRequest>([
    ["homepagedatacms", homepagedatacms],
    ["benfitsOfDevmat", benfitsOfDevmat],
    ["gettingStartedSteps", gettingStartedSteps],
    ["solutions", solutions],
    ["clientReviewsReq", clientReviewsReq],
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
    title: "Page not found",
    description: undefined,
    excludePageFromSearch: false,
    language: undefined,
    socialImageAssetName: undefined,
    socialImageUrl: undefined,
    status: 404,
    redirect: undefined,
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  params[0] = params["*"]
  delete params["*"]
  return params
}


      export const contactEmail = "hello@webstudio.is";
    