import type { TinaField } from "tinacms";
export function courseFields() {
  return [
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },

    
    {
      type: "string",
      name: "shortDescription",
      label: "shortDescription",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "mainImage",
      label: "mainImage",
    },
    {
      type: "string",
      name: "font_size",
      label: "Font Size",
    },
    {
      type: "string",
      name: "font_family",
      label: "Font Family",
    },
    {
      type: "string",
      name: "course_categories",
      label: "course_categories",
      list: true,
      ui: {
        component: "text",
      },
    },
    {
      type: "boolean",
      name: "upcoming",
      label: "upcoming",
    },
    {
      type: "string",
      name: "formURL",
      label: "Enroll Button URL",
      description: "Enter the URL for the enrolment form",
    },
    {
      type: "boolean",
      name: "draft",
      label: "Draft",
      description: "Set to true if the course is a draft and should not be published",
    },
  ] as TinaField[];
}
export function courses_main_pageFields() {
  return [
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "enrolTitle",
      label: "enrolTitle",
    },
    {
      type: "object",
      name: "contactFields",
      label: "contactFields",
      list: true,
      fields: [
        {
          type: "string",
          name: "label",
          label: "label",
        },
        {
          type: "string",
          name: "name",
          label: "name",
        },
      ],
    },
    {
      type: "string",
      name: "coursesListTitle",
      label: "coursesListTitle",
    },
    {
      type: "string",
      name: "upcomingCoursesListTitle",
      label: "upcomingCoursesListTitle",
    },
    {
      type: "string",
      name: "formURL",
      label: "formURL",
    },
    {
      type: "object",
      name: "UpcomingTrainings",
      label: "Upcoming Trainings",
      list: true,
      fields: [
        {
          type: "string",
          name: "Title",
          label: "Title",
        },
        {
          type: "image",
          name: "Thumbnail",
          label: "Thumbnail",
        },
        {
          type: "string",
          name: "Trainer",
          label: "Trainer",
        },
        {
          type: "string",
          name: "RegisterLink",
          label: "Register Link",
        },
      ],
    },
  ] as TinaField[];
}
export function homepage_bannerFields() {
  return [
    {
      type: "object",
      name: "List",
      label: "List",
      list: true,
      fields: [
        {
          type: "string",
          name: "topText",
          label: "topText",
        },
        {
          type: "string",
          name: "bottomText",
          label: "bottomText",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "bannerImage",
          label: "BG IMAGE",
        },
        {
          type: "object",
          name: "button",
          label: "button",
          list: true,
          fields: [
            {
              type: "string",
              name: "buttonText",
              label: "buttonText",
            },
            {
              type: "string",
              name: "buttonLink",
              label: "buttonLink",
            },
          ],
        },
        {
          type: "object",
          name: "showreel",
          label: "showreel",
          list: true,
          fields: [
            {
              type: "string",
              name: "showreelText",
              label: "showreelText",
            },
            {
              type: "string",
              name: "showreelLink",
              label: "showreelLink",
            },
          ],
        },
      ],
    },
  ] as TinaField[];
}
export function instructorFields() {
  return [
    {
      type: "string",
      name: "name",
      label: "name",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "shortDescription",
      label: "shortDescription",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "authorizedInstructorImage",
      label: "authorizedInstructorImage",
    },
  ] as TinaField[];
}
export function no_editFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "seotitle",
      label: "seotitle",
    },
    {
      type: "string",
      name: "seodescription",
      label: "seodescription",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "boolean",
      name: "private",
      label: "private",
    },
    {
      type: "string",
      name: "canonical",
      label: "canonical",
    },
  ] as TinaField[];
}
export function productFields() {
  return [
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "topText",
      label: "topText",
    },
    {
      type: "string",
      name: "summary",
      label: "summary",
    },
    {
      type: "string",
      name: "product_categories",
      label: "product_categories",
      list: true,
      ui: {
        component: "select",
        options: [
          { label: "Art Of Shader", value: "Art Of Shader" },
          { label: "Miscellaneous", value: "Miscellaneous" },
          { label: "GamePlay", value: "GamePlay" },
          { label: "Niagara FX", value: "Niagara FX" },
          { label: "Procedural World", value: "Procedural World" },
          // Add more categories here
        ],
      },
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "object",
      name: "buttons",
      label: "buttons",
      list: true,
      fields: [
        {
          type: "string",
          name: "buttonText",
          label: "buttonText",
        },
        {
          type: "string",
          name: "buttonLink",
          label: "buttonLink",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "string",
      name: "seotitle",
      label: "seotitle",
    },
    {
      type: "string",
      name: "seodescription",
      label: "seodescription",
    },
    {
      type: "boolean",
      name: "private",
      label: "private",
    },
    {
      type: "string",
      name: "canonical",
      label: "canonical",
    },
    {
      type: "image",
      name: "bannerImage",
      label: "bannerImage",
    },
    {
      type: "string",
      name: "contentVideoId",
      label: "contentVideoId",
    },
    {
      type: "image",
      name: "contentVideoThumbnail",
      label: "contentVideoThumbnail",
    },
    {
      type: "object",
      name: "features",
      label: "features",
      list: true,
      fields: [
        {
          type: "image",
          name: "image",
          label: "image",
        },
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "string",
          name: "description",
          label: "description",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "object",
          name: "buttons",
          label: "buttons",
          list: true,
          fields: [
            {
              type: "string",
              name: "buttonText",
              label: "buttonText",
            },
            {
              type: "string",
              name: "buttonLink",
              label: "buttonLink",
            },
          ],
        },
      ],
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "bottomText",
      label: "bottomText",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "fontFamily",
      label: "fontFamily",
    },
    {
      type: "string",
      name: "contentFontSize",
      label: "contentFontSize",
    },
    {
      type: "string",
      name: "featureTitleFontSize",
      label: "featureTitleFontSize",
    },
    {
      type: "string",
      name: "featureTextFontSize",
      label: "featureTextFontSize",
    },
  ] as TinaField[];
}
export function simpleFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "topText",
      label: "topText",
    },
    {
      type: "string",
      name: "bottomText",
      label: "bottomText",
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
      required: true,
    },
    {
      type: "object",
      name: "buttons",
      label: "buttons",
      list: true,
      fields: [
        {
          type: "string",
          name: "buttonText",
          label: "buttonText",
        },
        {
          type: "string",
          name: "buttonLink",
          label: "buttonLink",
        },
      ],
    },
    {
      type: "string",
      name: "seotitle",
      label: "seotitle",
    },
    {
      type: "string",
      name: "seodescription",
      label: "seodescription",
    },
    {
      type: "boolean",
      name: "private",
      label: "private",
    },
    {
      type: "string",
      name: "canonical",
      label: "canonical",
    },
  ] as TinaField[];
}
export function single_page_templateFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "topText",
      label: "topText",
    },
    {
      type: "string",
      name: "bottomText",
      label: "bottomText",
    },
    {
      type: "string",
      name: "summary",
      label: "summary",
    },
    {
      type: "string",
      name: "product_categories",
      label: "product_categories",
      list: true,
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "image",
      name: "bannerImage",
      label: "bannerImage",
    },
    {
      type: "object",
      name: "buttons",
      label: "buttons",
      list: true,
      fields: [
        {
          type: "string",
          name: "buttonText",
          label: "buttonText",
        },
        {
          type: "string",
          name: "buttonLink",
          label: "buttonLink",
        },
      ],
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "seotitle",
      label: "seotitle",
    },
    {
      type: "string",
      name: "seodescription",
      label: "seodescription",
    },
    {
      type: "boolean",
      name: "private",
      label: "private",
    },
    {
      type: "string",
      name: "canonical",
      label: "canonical",
    },
  ] as TinaField[];
}
export function course_list() {
  return [
    {
      type: "string",
      name: "course_categories",
      label: "Category",
      description: "Enter the course category",
    },
    {
      type: "image",
      name: "thumbnail",
      label: "Thumbnail",
      description: "Upload the category thumbnail image",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      description: "Enter the course description",
      ui: {
        component: "textarea",
      },
    },


  ] as TinaField[];
}