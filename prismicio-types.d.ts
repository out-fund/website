// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client"

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] }

/**
 * Item in *Footer → Company Links*
 */
export interface FooterDocumentDataCompanyLinksItem {
  /**
   * Label field in *Footer → Company Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.company_links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField

  /**
   * Link field in *Footer → Company Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.company_links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Item in *Footer → Funding Links*
 */
export interface FooterDocumentDataFundingLinksItem {
  /**
   * Label field in *Footer → Funding Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.funding_links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField

  /**
   * Link field in *Footer → Funding Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.funding_links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Item in *Footer → Support Links*
 */
export interface FooterDocumentDataSupportLinksItem {
  /**
   * Label field in *Footer → Support Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.support_links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField

  /**
   * Link field in *Footer → Support Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.support_links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Item in *Footer → Policy Links*
 */
export interface FooterDocumentDataPolicyLinksItem {
  /**
   * Label field in *Footer → Policy Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.policy_links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField

  /**
   * Link field in *Footer → Policy Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.policy_links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Company Title field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.company_title
   * - **Tab**: Top
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  company_title: prismic.KeyTextField

  /**
   * Company Links field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.company_links[]
   * - **Tab**: Top
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  company_links: prismic.GroupField<
    Simplify<FooterDocumentDataCompanyLinksItem>
  >

  /**
   * Funding Title field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.funding_title
   * - **Tab**: Top
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  funding_title: prismic.KeyTextField

  /**
   * Funding Links field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.funding_links[]
   * - **Tab**: Top
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  funding_links: prismic.GroupField<
    Simplify<FooterDocumentDataFundingLinksItem>
  >

  /**
   * Support Title field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.support_title
   * - **Tab**: Top
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  support_title: prismic.KeyTextField

  /**
   * Support Links field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.support_links[]
   * - **Tab**: Top
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  support_links: prismic.GroupField<
    Simplify<FooterDocumentDataSupportLinksItem>
  >

  /**
   * Countries Title field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.countries_title
   * - **Tab**: Top
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  countries_title: prismic.KeyTextField
  /**
   * FCA Statement field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.fca_statement
   * - **Tab**: Bottom
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  fca_statement: prismic.KeyTextField

  /**
   * Copyright field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.copyright
   * - **Tab**: Bottom
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  copyright: prismic.KeyTextField

  /**
   * Policy Links field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.policy_links[]
   * - **Tab**: Bottom
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  policy_links: prismic.GroupField<Simplify<FooterDocumentDataPolicyLinksItem>>
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >

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
 * Item in *Navbar → Navbar Left*
 */
export interface NavbarDocumentDataNavbarLeftItem {
  /**
   * Label field in *Navbar → Navbar Left*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.navbar_left[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField

  /**
   * Link field in *Navbar → Navbar Left*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.navbar_left[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Item in *Navbar → Navbar Right*
 */
export interface NavbarDocumentDataNavbarRightItem {
  /**
   * Label field in *Navbar → Navbar Right*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.navbar_right[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField

  /**
   * Link field in *Navbar → Navbar Right*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.navbar_right[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Content for Navbar documents
 */
interface NavbarDocumentData {
  /**
   * Navbar Left field in *Navbar*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.navbar_left[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navbar_left: prismic.GroupField<Simplify<NavbarDocumentDataNavbarLeftItem>>

  /**
   * Navbar Right field in *Navbar*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.navbar_right[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navbar_right: prismic.GroupField<Simplify<NavbarDocumentDataNavbarRightItem>>
}

/**
 * Navbar document from Prismic
 *
 * - **API ID**: `navbar`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavbarDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavbarDocumentData>,
    "navbar",
    Lang
  >

type PageDocumentDataSlicesSlice =
  | PartnersSlice
  | BenefitsSlice
  | CalculatorSlice
  | TrustPilotStripSlice
  | ClientsSaySlice
  | HeroSlice

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title (Browser Tab Title) field in *Page*
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
   * Meta Title (Social Share Title) field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used when sharing on social media
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

/**
 * Content for Testimonial documents
 */
interface TestimonialDocumentData {
  /**
   * Company Name field in *Testimonial*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonial.company_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  company_name: prismic.KeyTextField

  /**
   * Company Logo field in *Testimonial*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonial.company_logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  company_logo: prismic.ImageField<never>

  /**
   * Quote field in *Testimonial*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonial.quote
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  quote: prismic.KeyTextField

  /**
   * Name field in *Testimonial*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonial.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField

  /**
   * Job Title field in *Testimonial*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonial.job_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  job_title: prismic.KeyTextField

  /**
   * Profile photo field in *Testimonial*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonial.profile_photo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  profile_photo: prismic.ImageField<never>
}

/**
 * Testimonial document from Prismic
 *
 * - **API ID**: `testimonial`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TestimonialDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<TestimonialDocumentData>,
    "testimonial",
    Lang
  >

export type AllDocumentTypes =
  | FooterDocument
  | GlobalSeoDocument
  | NavbarDocument
  | PageDocument
  | TestimonialDocument

/**
 * Primary content in *Benefits → Items*
 */
export interface BenefitsSliceDefaultItem {
  /**
   * Top Text field in *Benefits → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: benefits.items[].top_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  top_text: prismic.KeyTextField

  /**
   * Bottom Text field in *Benefits → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: benefits.items[].bottom_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  bottom_text: prismic.KeyTextField
}

/**
 * Default variation for Benefits Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BenefitsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<BenefitsSliceDefaultItem>
>

/**
 * Slice variation for *Benefits*
 */
type BenefitsSliceVariation = BenefitsSliceDefault

/**
 * Benefits Shared Slice
 *
 * - **API ID**: `benefits`
 * - **Description**: Benefits
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BenefitsSlice = prismic.SharedSlice<
  "benefits",
  BenefitsSliceVariation
>

/**
 * Primary content in *Calculator → Primary*
 */
export interface CalculatorSliceDefaultPrimary {
  /**
   * Heading field in *Calculator → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: calculator.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField

  /**
   * Description field in *Calculator → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: calculator.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField

  /**
   * Subheading field in *Calculator → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: calculator.primary.subheading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subheading: prismic.KeyTextField

  /**
   * Currency field in *Calculator → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: calculator.primary.currency
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  currency: prismic.SelectField<"GBP" | "EUR" | "USD" | "AUD">

  /**
   * Amount Title field in *Calculator → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: calculator.primary.amount_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  amount_title: prismic.KeyTextField

  /**
   * Amounts field in *Calculator → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Amounts separated by comma like: 10000, 25000, 50000
   * - **API ID Path**: calculator.primary.amounts
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  amounts: prismic.KeyTextField

  /**
   * Term Title field in *Calculator → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: calculator.primary.term_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  term_title: prismic.KeyTextField

  /**
   * Term Min (Months) field in *Calculator → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: calculator.primary.term_min
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  term_min: prismic.NumberField

  /**
   * Term Max (Months) field in *Calculator → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: calculator.primary.term_max
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  term_max: prismic.NumberField

  /**
   * Slider Months Text field in *Calculator → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: calculator.primary.slider_months_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  slider_months_text: prismic.KeyTextField

  /**
   * Total Title field in *Calculator → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: calculator.primary.total_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  total_title: prismic.KeyTextField

  /**
   * Example Note field in *Calculator → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: calculator.primary.example_note
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  example_note: prismic.KeyTextField

  /**
   * Button Text field in *Calculator → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: calculator.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField

  /**
   * Button Note field in *Calculator → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: calculator.primary.button_note
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_note: prismic.KeyTextField
}

/**
 * Primary content in *Calculator → Items*
 */
export interface CalculatorSliceDefaultItem {
  /**
   * Bulletpoint field in *Calculator → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: calculator.items[].bulletpoint
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  bulletpoint: prismic.KeyTextField
}

/**
 * Default variation for Calculator Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CalculatorSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CalculatorSliceDefaultPrimary>,
  Simplify<CalculatorSliceDefaultItem>
>

/**
 * Slice variation for *Calculator*
 */
type CalculatorSliceVariation = CalculatorSliceDefault

/**
 * Calculator Shared Slice
 *
 * - **API ID**: `calculator`
 * - **Description**: Calculator
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CalculatorSlice = prismic.SharedSlice<
  "calculator",
  CalculatorSliceVariation
>

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

  /**
   * CTA Title field in *ClientsSay → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: clients_say.primary.cta_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_title: prismic.KeyTextField

  /**
   * Button Text field in *ClientsSay → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: clients_say.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField
}

/**
 * Primary content in *ClientsSay → Items*
 */
export interface ClientsSaySliceDefaultItem {
  /**
   * Testimonial field in *ClientsSay → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: clients_say.items[].testimonial
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  testimonial: prismic.ContentRelationshipField<"testimonial">
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

  /**
   * Button Note field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.button_note
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_note: prismic.KeyTextField
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

/**
 * Primary content in *Partners → Primary*
 */
export interface PartnersSliceDefaultPrimary {
  /**
   * Heading field in *Partners → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: partners.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField

  /**
   * Description field in *Partners → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: partners.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField
}

/**
 * Primary content in *Partners → Items*
 */
export interface PartnersSliceDefaultItem {
  /**
   * Partner Logo field in *Partners → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: partners.items[].partner_logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  partner_logo: prismic.ImageField<never>
}

/**
 * Default variation for Partners Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PartnersSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PartnersSliceDefaultPrimary>,
  Simplify<PartnersSliceDefaultItem>
>

/**
 * Slice variation for *Partners*
 */
type PartnersSliceVariation = PartnersSliceDefault

/**
 * Partners Shared Slice
 *
 * - **API ID**: `partners`
 * - **Description**: Partners
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PartnersSlice = prismic.SharedSlice<
  "partners",
  PartnersSliceVariation
>

/**
 * Primary content in *TrustPilotStrip → Items*
 */
export interface TrustPilotStripSliceDefaultItem {
  /**
   * title field in *TrustPilotStrip → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trust_pilot_strip.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * review field in *TrustPilotStrip → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trust_pilot_strip.items[].review
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  review: prismic.KeyTextField

  /**
   * name field in *TrustPilotStrip → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trust_pilot_strip.items[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField

  /**
   * date field in *TrustPilotStrip → Items*
   *
   * - **Field Type**: Timestamp
   * - **Placeholder**: *None*
   * - **API ID Path**: trust_pilot_strip.items[].date
   * - **Documentation**: https://prismic.io/docs/field#timestamp
   */
  date: prismic.TimestampField

  /**
   * url field in *TrustPilotStrip → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trust_pilot_strip.items[].url
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  url: prismic.KeyTextField
}

/**
 * Default variation for TrustPilotStrip Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TrustPilotStripSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<TrustPilotStripSliceDefaultItem>
>

/**
 * Slice variation for *TrustPilotStrip*
 */
type TrustPilotStripSliceVariation = TrustPilotStripSliceDefault

/**
 * TrustPilotStrip Shared Slice
 *
 * - **API ID**: `trust_pilot_strip`
 * - **Description**: TrustPilotStrip
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TrustPilotStripSlice = prismic.SharedSlice<
  "trust_pilot_strip",
  TrustPilotStripSliceVariation
>

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>
  }

  namespace Content {
    export type {
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataCompanyLinksItem,
      FooterDocumentDataFundingLinksItem,
      FooterDocumentDataSupportLinksItem,
      FooterDocumentDataPolicyLinksItem,
      GlobalSeoDocument,
      GlobalSeoDocumentData,
      NavbarDocument,
      NavbarDocumentData,
      NavbarDocumentDataNavbarLeftItem,
      NavbarDocumentDataNavbarRightItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      TestimonialDocument,
      TestimonialDocumentData,
      AllDocumentTypes,
      BenefitsSlice,
      BenefitsSliceDefaultItem,
      BenefitsSliceVariation,
      BenefitsSliceDefault,
      CalculatorSlice,
      CalculatorSliceDefaultPrimary,
      CalculatorSliceDefaultItem,
      CalculatorSliceVariation,
      CalculatorSliceDefault,
      ClientsSaySlice,
      ClientsSaySliceDefaultPrimary,
      ClientsSaySliceDefaultItem,
      ClientsSaySliceVariation,
      ClientsSaySliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      PartnersSlice,
      PartnersSliceDefaultPrimary,
      PartnersSliceDefaultItem,
      PartnersSliceVariation,
      PartnersSliceDefault,
      TrustPilotStripSlice,
      TrustPilotStripSliceDefaultItem,
      TrustPilotStripSliceVariation,
      TrustPilotStripSliceDefault,
    }
  }
}