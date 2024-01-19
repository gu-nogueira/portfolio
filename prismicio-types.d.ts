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
 * Primary content in *Education → Primary*
 */
export interface EducationSliceDefaultPrimary {
  /**
   * Education Title field in *Education → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: education.primary.education_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  education_title: prismic.KeyTextField;

  /**
   * Education Institution field in *Education → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: education.primary.education_institution
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  education_institution: prismic.KeyTextField;

  /**
   * Education Location field in *Education → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: education.primary.education_location
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  education_location: prismic.KeyTextField;

  /**
   * Education Start Date field in *Education → Primary*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: education.primary.education_start_date
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  education_start_date: prismic.DateField;

  /**
   * Education End Date field in *Education → Primary*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: education.primary.education_end_date
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  education_end_date: prismic.DateField;
}

/**
 * Default variation for Education Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EducationSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<EducationSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Education*
 */
type EducationSliceVariation = EducationSliceDefault;

/**
 * Education Shared Slice
 *
 * - **API ID**: `education`
 * - **Description**: Education
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EducationSlice = prismic.SharedSlice<
  "education",
  EducationSliceVariation
>;

/**
 * Primary content in *Experience → Primary*
 */
export interface ExperienceSliceDefaultPrimary {
  /**
   * Experience Title field in *Experience → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.primary.experience_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  experience_title: prismic.KeyTextField;

  /**
   * Experience Company field in *Experience → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.primary.experience_company
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  experience_company: prismic.KeyTextField;

  /**
   * Experience Location field in *Experience → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.primary.experience_location
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  experience_location: prismic.KeyTextField;

  /**
   * Experience Start Date field in *Experience → Primary*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.primary.experience_start_date
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  experience_start_date: prismic.DateField;

  /**
   * Experience End Date field in *Experience → Primary*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.primary.experience_end_date
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  experience_end_date: prismic.DateField;

  /**
   * Experience Description field in *Experience → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.primary.experience_description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  experience_description: prismic.RichTextField;
}

/**
 * Default variation for Experience Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExperienceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ExperienceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Experience*
 */
type ExperienceSliceVariation = ExperienceSliceDefault;

/**
 * Experience Shared Slice
 *
 * - **API ID**: `experience`
 * - **Description**: Experience
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExperienceSlice = prismic.SharedSlice<
  "experience",
  ExperienceSliceVariation
>;

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
      EducationSlice,
      EducationSliceDefaultPrimary,
      EducationSliceVariation,
      EducationSliceDefault,
      ExperienceSlice,
      ExperienceSliceDefaultPrimary,
      ExperienceSliceVariation,
      ExperienceSliceDefault,
      ProjectSlice,
      ProjectSliceDefaultPrimary,
      ProjectSliceDefaultItem,
      ProjectSliceVariation,
      ProjectSliceDefault,
    };
  }
}