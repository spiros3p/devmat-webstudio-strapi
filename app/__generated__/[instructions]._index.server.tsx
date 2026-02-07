/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  let URLcmsdocker = "http://172.18.0.23:1337"
  const REQHomePage: ResourceRequest = {
    name: "REQ | Home Page",
    url: URLcmsdocker+"/api/general",
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const REQBenfitsDevmat: ResourceRequest = {
    name: "REQ | Benfits Devmat",
    url: URLcmsdocker+"/api/benefits",
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const REQGetStartedSteps: ResourceRequest = {
    name: "REQ | Get Started Steps",
    url: URLcmsdocker+'/api/getting-started-steps',
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const REQSolutions: ResourceRequest = {
    name: "REQ | Solutions",
    url: URLcmsdocker+'/api/solutions',
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const REQClientReviews: ResourceRequest = {
    name: "REQ | Client Reviews",
    url: URLcmsdocker+'/api/client-reviews',
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const REQFAQs: ResourceRequest = {
    name: "REQ | FAQs ",
    url: URLcmsdocker+'/api/faqs',
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const REQfooter: ResourceRequest = {
    name: "REQ | footer",
    url: URLcmsdocker+'/api/footer',
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const REQSocial: ResourceRequest = {
    name: "REQ | Social",
    url: URLcmsdocker+'/api/social-media-devmats',
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const REQContactInfo: ResourceRequest = {
    name: "REQ | Contact Info",
    url: URLcmsdocker+'/api/contact-info',
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const REQNavigation: ResourceRequest = {
    name: "REQ | Navigation",
    url: URLcmsdocker+'/api/navigation',
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const REQsitestate_1: ResourceRequest = {
    name: "REQ | site state",
    url: URLcmsdocker + '/api/site-state',
    searchParams: [
    ],
    method: "get",
    headers: [
    ],
  }
  const _data = new Map<string, ResourceRequest>([
    ["REQHomePage", REQHomePage],
    ["REQBenfitsDevmat", REQBenfitsDevmat],
    ["REQGetStartedSteps", REQGetStartedSteps],
    ["REQSolutions", REQSolutions],
    ["REQClientReviews", REQClientReviews],
    ["REQFAQs", REQFAQs],
    ["REQfooter", REQfooter],
    ["REQSocial", REQSocial],
    ["REQContactInfo", REQContactInfo],
    ["REQNavigation", REQNavigation],
    ["REQsitestate_1", REQsitestate_1],
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
    title: "Instructions to CMS",
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
    