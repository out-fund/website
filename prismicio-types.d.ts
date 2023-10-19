// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client"

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] }

/**
 * Content for Global SEO documents
 */
interface GlobalSeoDocumentData {
  /**
   * Site Title field in *Global SEO*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: global_seo.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField

  /**
   * Meta Description field in *Global SEO*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: global_seo.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Open Graph Image field in *Global SEO*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: global_seo.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>
}

/**
 * Global SEO document from Prismic
 *
 * - **API ID**: `global_seo`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GlobalSeoDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<GlobalSeoDocumentData>,
    "global_seo",
    Lang
  >

/**
 * Item in *Navigation → Navbar Links*
 */
export interface NavigationDocumentDataNavbarLinksItem {
  /**
   * Label field in *Navigation → Navbar Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.navbar_links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField

  /**
   * Link field in *Navigation → Navbar Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.navbar_links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Item in *Navigation → Company Links*
 */
export interface NavigationDocumentDataCompanyLinksItem {
  /**
   * Label field in *Navigation → Company Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.company_links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField

  /**
   * Link field in *Navigation → Company Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.company_links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Item in *Navigation → Funding Links*
 */
export interface NavigationDocumentDataFundingLinksItem {
  /**
   * label field in *Navigation → Funding Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.funding_links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField

  /**
   * Link field in *Navigation → Funding Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.funding_links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Item in *Navigation → Support Links*
 */
export interface NavigationDocumentDataSupportLinksItem {
  /**
   * label field in *Navigation → Support Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.support_links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField

  /**
   * Link field in *Navigation → Support Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.support_links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Item in *Navigation → Policy Links*
 */
export interface NavigationDocumentDataPolicyLinksItem {
  /**
   * Label field in *Navigation → Policy Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.policy_links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField

  /**
   * link field in *Navigation → Policy Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.policy_links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Navbar Links field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.navbar_links[]
   * - **Tab**: Navbar
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navbar_links: prismic.GroupField<
    Simplify<NavigationDocumentDataNavbarLinksItem>
  >
  /**
   * Company Links field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.company_links[]
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  company_links: prismic.GroupField<
    Simplify<NavigationDocumentDataCompanyLinksItem>
  >

  /**
   * Funding Links field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.funding_links[]
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  funding_links: prismic.GroupField<
    Simplify<NavigationDocumentDataFundingLinksItem>
  >

  /**
   * Support Links field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.support_links[]
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  support_links: prismic.GroupField<
    Simplify<NavigationDocumentDataSupportLinksItem>
  >
  /**
   * Policy Links field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.policy_links[]
   * - **Tab**: Legal
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  policy_links: prismic.GroupField<
    Simplify<NavigationDocumentDataPolicyLinksItem>
  >

  /**
   * Copyright field in *Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.copyright
   * - **Tab**: Legal
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  copyright: prismic.KeyTextField

  /**
   * FCA Statement field in *Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.fca_statement
   * - **Tab**: Legal
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  fca_statement: prismic.KeyTextField
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >

type PageDocumentDataSlicesSlice = HeroSlice

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Browser Tab Title
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>
  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>

export type AllDocumentTypes =
  | GlobalSeoDocument
  | NavigationDocument
  | PageDocument

/**
 * Primary content in *ClientsSay → Primary*
 */
export interface ClientsSaySliceDefaultPrimary {
  /**
   * Heading field in *ClientsSay → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: clients_say.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField
}

/**
 * Primary content in *ClientsSay → Items*
 */
export interface ClientsSaySliceDefaultItem {
  /**
   * Company Name field in *ClientsSay → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: clients_say.items[].company_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  company_name: prismic.KeyTextField

  /**
   * Company Logo field in *ClientsSay → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: clients_say.items[].company_logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  company_logo: prismic.ImageField<never>

  /**
   * Quote field in *ClientsSay → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: clients_say.items[].quote
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  quote: prismic.RichTextField

  /**
   * Profile Image field in *ClientsSay → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: clients_say.items[].profile_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  profile_image: prismic.ImageField<never>

  /**
   * Author field in *ClientsSay → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: clients_say.items[].author
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  author: prismic.KeyTextField
}

/**
 * Default variation for ClientsSay Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ClientsSaySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ClientsSaySliceDefaultPrimary>,
  Simplify<ClientsSaySliceDefaultItem>
>

/**
 * Slice variation for *ClientsSay*
 */
type ClientsSaySliceVariation = ClientsSaySliceDefault

/**
 * ClientsSay Shared Slice
 *
 * - **API ID**: `clients_say`
 * - **Description**: ClientsSay
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ClientsSaySlice = prismic.SharedSlice<
  "clients_say",
  ClientsSaySliceVariation
>

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField

  /**
   * Description field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField

  /**
   * Button Text field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField

  /**
   * Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>
  }

  namespace Content {
    export type {
      GlobalSeoDocument,
      GlobalSeoDocumentData,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataNavbarLinksItem,
      NavigationDocumentDataCompanyLinksItem,
      NavigationDocumentDataFundingLinksItem,
      NavigationDocumentDataSupportLinksItem,
      NavigationDocumentDataPolicyLinksItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      ClientsSaySlice,
      ClientsSaySliceDefaultPrimary,
      ClientsSaySliceDefaultItem,
      ClientsSaySliceVariation,
      ClientsSaySliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
    }
  }
}
