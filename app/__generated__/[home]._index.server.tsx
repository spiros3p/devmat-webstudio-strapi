/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  let URLcmsdocker = "http://172.18.0.23:1337"
  let URLmiddlemanproxy = "http://172.18.0.25:5151"
  let ENDPOINTproxysubmitcontactform = "/proxy/submit-contact-form"
  const REQHomePage_1: ResourceRequest = {
    name: "REQ | Home Page",
    url: URLcmsdocker+"/api/general",
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const REQBenfitsDevmat_1: ResourceRequest = {
    name: "REQ | Benfits Devmat",
    url: URLcmsdocker+"/api/benefits",
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const REQGetStartedSteps_1: ResourceRequest = {
    name: "REQ | Get Started Steps",
    url: URLcmsdocker+'/api/getting-started-steps',
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const REQSolutions_1: ResourceRequest = {
    name: "REQ | Solutions",
    url: URLcmsdocker+'/api/solutions',
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const REQClientReviews_1: ResourceRequest = {
    name: "REQ | Client Reviews",
    url: URLcmsdocker+'/api/client-reviews',
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const REQFAQs_1: ResourceRequest = {
    name: "REQ | FAQs ",
    url: URLcmsdocker+'/api/faqs',
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const action: ResourceRequest = {
    name: "action",
    url: URLmiddlemanproxy+ENDPOINTproxysubmitcontactform,
    searchParams: [
    ],
    method: "post",
    headers: [
      { name: "Content-Type", value: "application/json" },
    ],
  }
  const _data = new Map<string, ResourceRequest>([
    ["REQHomePage_1", REQHomePage_1],
    ["REQBenfitsDevmat_1", REQBenfitsDevmat_1],
    ["REQGetStartedSteps_1", REQGetStartedSteps_1],
    ["REQSolutions_1", REQSolutions_1],
    ["REQClientReviews_1", REQClientReviews_1],
    ["REQFAQs_1", REQFAQs_1],
  ])
  const _action = new Map<string, ResourceRequest>([
    ["action", action],
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
    