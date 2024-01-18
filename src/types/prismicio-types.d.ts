// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type ProjectDocumentDataSlicesSlice = ProjectSlice;

/**
 * Content for projects documents
 */
interface ProjectDocumentData {
  /**
   * Slice Zone field in *projects*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: project.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectDocumentDataSlicesSlice> /**
   * Meta Description field in *projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: project.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *projects*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: project.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * projects document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectDocumentData>,
    "project",
    Lang
  >;

export type AllDocumentTypes = ProjectDocument;

/**
 * Primary content in *Project → Primary*
 */
export interface ProjectSliceDefaultPrimary {
  /**
   * Project Image field in *Project → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.primary.project_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  project_image: prismic.ImageField<never>;

  /**
   * Project Name field in *Project → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.primary.project_name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project_name: prismic.RichTextField;

  /**
   * Project Url field in *Project → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: project.primary.project_url
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  project_url: prismic.LinkField;

  /**
   * Project Source Code field in *Project → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: project.primary.project_source_code
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  project_source_code: prismic.LinkField;

  /**
   * Project Description field in *Project → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.primary.project_description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project_description: prismic.RichTextField;

  /**
   * Project Built at field in *Project → Primary*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: project.primary.project_built_at
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  project_built_at: prismic.DateField;
}

/**
 * Primary content in *Project → Items*
 */
export interface ProjectSliceDefaultItem {
  /**
   * Project Tag field in *Project → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.items[].project_tag
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  project_tag: prismic.KeyTextField;
}

/**
 * Default variation for Project Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProjectSliceDefaultPrimary>,
  Simplify<ProjectSliceDefaultItem>
>;

/**
 * Slice variation for *Project*
 */
type ProjectSliceVariation = ProjectSliceDefault;

/**
 * Project Shared Slice
 *
 * - **API ID**: `project`
 * - **Description**: Project
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectSlice = prismic.SharedSlice<
  "project",
  ProjectSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ProjectDocument,
      ProjectDocumentData,
      ProjectDocumentDataSlicesSlice,
      AllDocumentTypes,
      ProjectSlice,
      ProjectSliceDefaultPrimary,
      ProjectSliceDefaultItem,
      ProjectSliceVariation,
      ProjectSliceDefault,
    };
  }
}