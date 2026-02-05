import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000",
  admin: {
    user: "users",
  },
  collections: [
    {
      slug: "users",
      auth: true,
      admin: {
        useAsTitle: "email",
      },
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
      ],
    },
    {
      slug: "products",
      admin: {
        useAsTitle: "name",
        defaultColumns: ["name", "price", "category", "isFeatured"],
      },
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "slug",
          type: "text",
          required: true,
          unique: true,
          admin: {
            description: "URL-friendly identifier (e.g., volumetric-nebula)",
          },
        },
        {
          name: "description",
          type: "richText",
          required: true,
        },
        {
          name: "shortDescription",
          type: "textarea",
          required: true,
          maxLength: 200,
        },
        {
          name: "price",
          type: "number",
          required: true,
          min: 0,
        },
        {
          name: "images",
          type: "array",
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "alt",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "videos",
          type: "array",
          fields: [
            {
              name: "url",
              type: "text",
              required: true,
            },
            {
              name: "thumbnail",
              type: "upload",
              relationTo: "media",
            },
            {
              name: "title",
              type: "text",
            },
          ],
        },
        {
          name: "features",
          type: "array",
          fields: [
            {
              name: "feature",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "engineCompatibility",
          type: "array",
          fields: [
            {
              name: "version",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "license",
          type: "select",
          required: true,
          options: [
            { label: "Single Project", value: "single-project" },
            { label: "Multi-Project", value: "multi-project" },
            { label: "Commercial", value: "commercial" },
            { label: "Enterprise", value: "enterprise" },
          ],
        },
        {
          name: "category",
          type: "select",
          required: true,
          options: [
            { label: "Assets", value: "assets" },
            { label: "Plugins", value: "plugins" },
            { label: "Tools", value: "tools" },
            { label: "Blueprints", value: "blueprints" },
            { label: "Materials", value: "materials" },
            { label: "VFX", value: "vfx" },
          ],
        },
        {
          name: "tags",
          type: "array",
          fields: [
            {
              name: "tag",
              type: "text",
            },
          ],
        },
        {
          name: "downloadUrl",
          type: "text",
          admin: {
            description: "Secure download link (generated after purchase)",
          },
        },
        {
          name: "isExternal",
          type: "checkbox",
          defaultValue: false,
          admin: {
            description: "Is this product sold on external marketplaces only?",
          },
        },
        {
          name: "externalUrl",
          type: "text",
          admin: {
            description: "External marketplace URL (if applicable)",
            condition: (data) => data.isExternal === true,
          },
        },
        {
          name: "isFeatured",
          type: "checkbox",
          defaultValue: false,
          admin: {
            description: "Show on homepage featured section",
          },
        },
      ],
    },
    {
      slug: "media",
      upload: {
        staticDir: path.resolve(__dirname, "public/uploads"),
        mimeTypes: ["image/*", "video/*"],
      },
      fields: [
        {
          name: "alt",
          type: "text",
        },
      ],
    },
    {
      slug: "marketplace-listings",
      admin: {
        useAsTitle: "name",
      },
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "platform",
          type: "select",
          required: true,
          options: [
            { label: "Fab", value: "fab" },
            { label: "Unreal Marketplace", value: "unreal-marketplace" },
            { label: "Gumroad", value: "gumroad" },
          ],
        },
        {
          name: "url",
          type: "text",
          required: true,
        },
        {
          name: "thumbnail",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "description",
          type: "textarea",
        },
        {
          name: "price",
          type: "number",
        },
      ],
    },
    {
      slug: "plugins",
      admin: {
        useAsTitle: "name",
      },
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "slug",
          type: "text",
          required: true,
          unique: true,
        },
        {
          name: "tagline",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "richText",
          required: true,
        },
        {
          name: "thumbnail",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "screenshots",
          type: "array",
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
            },
          ],
        },
        {
          name: "features",
          type: "array",
          fields: [
            {
              name: "feature",
              type: "text",
            },
          ],
        },
        {
          name: "engineVersions",
          type: "array",
          fields: [
            {
              name: "version",
              type: "text",
            },
          ],
        },
        {
          name: "category",
          type: "select",
          options: [
            { label: "VFX", value: "vfx" },
            { label: "UI", value: "ui" },
            { label: "Tools", value: "tools" },
            { label: "Gameplay", value: "gameplay" },
          ],
        },
        {
          name: "documentation",
          type: "text",
        },
        {
          name: "githubUrl",
          type: "text",
        },
        {
          name: "linkedProduct",
          type: "relationship",
          relationTo: "products",
        },
      ],
    },
  ],
  editor: lexicalEditor({}),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || process.env.MONGODB_URI || "",
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "types/payload-types.ts"),
  },
});
