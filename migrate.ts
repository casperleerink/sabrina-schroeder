import client from "@sanity/client";

const sanityClient = client({
  projectId: "5f3g5jjg",
  dataset: "production",
  apiVersion: "2022-11-04",
  useCdn: false,
});

sanityClient.assets.upload;
