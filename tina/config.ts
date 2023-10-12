import { defineConfig } from "tinacms";
import { courseFields } from "./templates";
import { courses_main_pageFields } from "./templates";
import { homepage_bannerFields } from "./templates";
import { instructorFields } from "./templates";
import { no_editFields } from "./templates";
import { productFields } from "./templates";
import { simpleFields } from "./templates";
import { single_page_templateFields } from "./templates";
import { course_list } from "./templates";
import { course_font_style } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "yaml",
        label: "Home Slider",
        name: "home_slider",
        path: "data/home_slider",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "list",
        },
        fields: [
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
        ],
      },
      {
        format: "md",
        label: "Home Page",
        name: "home_page",
        path: "content",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
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
        ],
      },
      {
        format: "md",
        label: "Blog",
        name: "blog",
        path: "content/blog",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...single_page_templateFields(),
        ],
      },
      {
        format: "md",
        label: "Plugins / Products",
        name: "plugins___products",
        path: "content/product",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
          exclude: "_index",
        },
        templates: [
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...productFields(),
            ],
            label: "product",
            name: "product",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...single_page_templateFields(),
            ],
            label: "single-page-template",
            name: "single_page_template",
          },
        ],
      },
      {
        format: "md",
        label: "Courses",
        name: "courses",
        path: "content/courses",
        frontmatterFormat: "yaml",
        match: {
            include: "**/*",
            exclude: "_index",
        },
        templates: [
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...courses_main_pageFields(),
            ],
            label: "courses-main-page",
            name: "courses_main_page",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },

              ...courseFields(),
            ],
            label: "course",
            name: "course",
          },
        ],
      },
      {
        format: "md",
        label: "Instructors",
        name: "instructors",
        path: "content/instructors",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...instructorFields(),
        ],
      },
      {
        format: "md",
        label: "Disclaimer",
        name: "disclaimer",
        path: "content/disclaimer",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...simpleFields(),
        ],
      },
      {
        format: "md",
        label: "Scripts",
        name: "scripts",
        path: "content/scripts",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...simpleFields(),
        ],
      },
      {
        format: "md",
        label: "Site Info",
        name: "site_info",
        path: "content/info",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "About",
        name: "about",
        path: "content/about",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
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
        ],
      },
      {
        format: "md",
        label: "Contact",
        name: "contact",
        path: "content/contact",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
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
        ],
      },
      {
        format: "yaml",
        label: "Course List",
        name: "course_list",
        path: "data", // Replace this with the actual path to your YAML file
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "course_list",
        },
        fields: [
          {
            type: "object",
            name: "category",
            label: "Category",
            list: true,
            fields: [
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
            ],
          },

        ],
      },

      {
        format: "md",
        label: "Course Font ",
        name: "course_font",  // Use the base name of your file without the extension
        path: "content",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "course_font", // Specify the file you want to include
        },

        fields: [

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
        ],
      },
    ],
  },
});

