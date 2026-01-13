/* eslint-disable */
/* This is a auto generated file for building the project */

import type { PageMeta } from "@webstudio-is/sdk";
import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  const name: ResourceRequest = {
    name: "name",
    url: "",
    searchParams: [],
    method: "get",
    headers: [],
  };
  const PageState_1: ResourceRequest = {
    name: "Page State",
    url: "http://172.18.0.23:1337/api/state",
    searchParams: [],
    method: "get",
    headers: [],
  };
  const _data = new Map<string, ResourceRequest>([
    ["name", name],
    ["PageState_1", PageState_1],
  ]);
  const _action = new Map<string, ResourceRequest>([]);
  return { data: _data, action: _action };
};

export const getPageMeta = ({
  system,
  resources,
}: {
  system: System;
  resources: Record<string, any>;
}): PageMeta => {
  return {
    title: "Home",
    description: undefined,
    excludePageFromSearch: undefined,
    language: undefined,
    socialImageAssetName: undefined,
    socialImageUrl: undefined,
    status: undefined,
    redirect: undefined,
    custom: [],
  };
};

type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params;
};

export const contactEmail = "hello@webstudio.is";
