export type DatabaseKey = "postgresql" | "mysql" | "microsoft-sql";

export interface DatabaseFeature {
  title: string;
  description: string;
}

export interface DatabaseProduct {
  key: DatabaseKey;
  name: string;
  shortName: string;
  summary: string;
  description: string;
  thumbnail: string;
  docHref: string;
  badge: string;
  accent: string;
  coreList: string[];
  features: DatabaseFeature[];
  workflow: string[];
  notes: string[];
}

export const databaseCommonFeatures: DatabaseFeature[] = [
  {
    title: "Blueprint Nodes for All Databases",
    description:
      "Use the same Blueprint-style flow to connect, check status, run queries, and close the connection.",
  },
  {
    title: "Async Runtime Queries",
    description:
      "Run select, insert, update, and delete SQL from gameplay or editor tools without freezing the project.",
  },
  {
    title: "Easy Result Reading",
    description:
      "Read query output as Blueprint-friendly rows and columns for UI tables, save data, and admin screens.",
  },
  {
    title: "Blueprint-First Workflow",
    description:
      "Place the actor or add the component, fill in connection fields, bind events, connect, and run queries from Blueprint.",
  },
  {
    title: "Status Events",
    description:
      "Show loading, success, failure, and retry states in your UI with Blueprint events.",
  },
  {
    title: "Advanced Connection Fields",
    description:
      "Use optional fields for SSL, timeouts, custom ports, or full connection strings when your project needs them.",
  },
];

export const databaseProducts: DatabaseProduct[] = [
  {
    key: "postgresql",
    name: "PostgreSQL",
    shortName: "PostgreSQL",
    summary:
      "PostgreSQL support for Blueprint projects that need SQL reads, writes, image storage, and clean result parsing.",
    description:
      "PostgreSQL lets Blueprint users connect with host, database, login, password, and port fields, then run queries and receive results through Blueprint events. It is a good fit when your project already uses PostgreSQL or needs image data stored in the database.",
    thumbnail: "/images/products/databases/postgresql.png",
    docHref: "/docs/databases/postgresql",
    badge: "Images Supported",
    accent: "from-sky-500/20 to-blue-500/5 border-sky-400/30",
    coreList: [
      "Connect with Blueprint setup fields",
      "Run select and update queries",
      "Read rows and image data in Blueprint",
    ],
    features: [
      {
        title: "Blueprint Connection Setup",
        description:
          "Fill in server, database, login, password, and port fields directly in Blueprint.",
      },
      {
        title: "PostgreSQL Options",
        description:
          "Use advanced fields for SSL, timeouts, and project-specific connection needs when required.",
      },
      {
        title: "Query Status Events",
        description:
          "Update UI, loading states, and retry flows when connection, select, or update actions finish.",
      },
      {
        title: "Readable Result Tables",
        description:
          "Read rows, columns, and values in Blueprint so results can be shown in UMG or saved into game data.",
      },
      {
        title: "Runtime Read and Write",
        description:
          "Run leaderboard, account, inventory, analytics, or admin-style select/update queries from Blueprint.",
      },
      {
        title: "Image Data Support",
        description:
          "Store and read image data through the PostgreSQL Blueprint flow when your project needs database-backed images.",
      },
    ],
    workflow: [
      "Add the connection component or reference the connection actor.",
      "Fill in the PostgreSQL connection fields in Blueprint.",
      "Bind connection and query events before opening the connection.",
      "Call CreateConnection, then run SelectDataFromQuery or UpdateDataFromQuery.",
      "Read rows from the returned Blueprint data table and update your UI.",
    ],
    notes: [
      "Use the default PostgreSQL port unless your server is configured differently.",
      "Use advanced connection fields only when your database server requires them.",
      "Keep SQL permissions limited to what your Blueprint flow needs.",
    ],
  },
  {
    key: "mysql",
    name: "MySQL / MariaDB",
    shortName: "MySQL",
    summary:
      "MySQL and MariaDB support for Blueprint projects that need clean SQL reads, writes, and result events.",
    description:
      "MySQL / MariaDB gives Blueprint users a familiar connection flow for server, database, login, password, and port. It fits projects that use MySQL-style servers and need reliable query events for UI, save systems, tools, or admin screens.",
    thumbnail: "/images/products/databases/mysql.png",
    docHref: "/docs/databases/mysql",
    badge: "Blueprint Setup",
    accent: "from-amber-500/20 to-cyan-500/5 border-amber-300/30",
    coreList: [
      "Connect with Blueprint setup fields",
      "Run select and update queries",
      "Track multiple database tasks",
    ],
    features: [
      {
        title: "Blueprint Connection Setup",
        description:
          "Fill in server, database, login, password, and port fields directly in Blueprint.",
      },
      {
        title: "Multiple Query Tasks",
        description:
          "Keep separate database actions organized when your UI or tools run more than one query.",
      },
      {
        title: "Editable Connection Options",
        description:
          "Save SSL, timeout, read-only, and multi-result settings as editable project data.",
      },
      {
        title: "Blueprint Batch Updates",
        description:
          "Use update-query nodes for insert, update, delete, and multi-query workflows.",
      },
      {
        title: "Readable Select Results",
        description:
          "Return rows and columns through Blueprint events for UI tables, save systems, or admin screens.",
      },
      {
        title: "Text and Table Data Focus",
        description:
          "This option focuses on rows, columns, and standard SQL data. Use PostgreSQL or Microsoft SQL Server when your project needs image data nodes.",
      },
    ],
    workflow: [
      "Add the connection component or place the MySQL connection actor.",
      "Fill in the MySQL or MariaDB connection fields in Blueprint.",
      "Bind connection, select, and update status events.",
      "Keep task IDs when your Blueprint runs more than one database action.",
      "Run select/update nodes and route results back to your Blueprint UI.",
    ],
    notes: [
      "Use the default MySQL port unless your server is configured differently.",
      "Save SSL, timeout, or multi-result settings in editable project data when needed.",
      "Close unused connections when the owning Blueprint no longer needs them.",
    ],
  },
  {
    key: "microsoft-sql",
    name: "Microsoft SQL Server",
    shortName: "Microsoft SQL",
    summary:
      "SQL Server support with Blueprint setup, Windows sign-in, custom connection fields, and image data nodes.",
    description:
      "Microsoft SQL Server gives Blueprint users setup fields for server, database, login, password, and Windows sign-in. It also supports database image workflows for projects that store textures or uploaded images in SQL Server.",
    thumbnail: "/images/products/databases/microsoft-sql.png",
    docHref: "/docs/databases/microsoft-sql",
    badge: "Images Supported",
    accent: "from-rose-500/20 to-cyan-500/5 border-rose-300/30",
    coreList: [
      "Connect with SQL login or Windows sign-in",
      "Run select and update queries",
      "Read and write image data in Blueprint",
    ],
    features: [
      {
        title: "Blueprint Connection Setup",
        description:
          "Fill in SQL Server connection fields directly in Blueprint, or use an advanced connection string when needed.",
      },
      {
        title: "Windows Sign-in",
        description:
          "Use Windows-based access when the running account already has permission for the database.",
      },
      {
        title: "Reusable Server Settings",
        description:
          "Store reusable SQL Server settings in a project asset for cleaner Blueprint setup.",
      },
      {
        title: "Image Data Nodes",
        description:
          "Upload images and read image data back as Texture2D assets through Blueprint.",
      },
      {
        title: "Select and Update Events",
        description:
          "Update UI and retry flows from connection, select, update, and image-result status events.",
      },
      {
        title: "Advanced Connection Control",
        description:
          "Use advanced fields for named servers, encryption, or custom deployment settings.",
      },
    ],
    workflow: [
      "Fill in the SQL Server connection fields in Blueprint.",
      "Choose SQL login or Windows sign-in.",
      "Bind connection, select, update, and image-select events.",
      "Run SQL queries, or use image nodes when working with binary image columns.",
      "Read rows, values, or image results back into your Blueprint UI.",
    ],
    notes: [
      "Use image nodes when your SQL Server table stores image data.",
      "Use advanced connection fields only when your server setup requires them.",
      "Use Windows sign-in only when the running account has database permission.",
    ],
  },
];

export function getDatabaseProduct(key: string): DatabaseProduct | undefined {
  return databaseProducts.find((product) => product.key === key);
}
