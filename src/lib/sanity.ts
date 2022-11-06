import {
  portableTextToHtml,
  useSanityClient,
  createImageBuilder,
} from "astro-sanity";

const customComponents = {
  /* your custom components here */
};

export function sanityPortableText(portabletext: any) {
  return portableTextToHtml(portabletext, customComponents);
}

const builder = createImageBuilder(useSanityClient());

export const getSanityImageUrl = (source: string) => {
  builder.image(source);
};
