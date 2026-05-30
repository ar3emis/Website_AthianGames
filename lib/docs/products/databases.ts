import type { ProductDocumentation } from "../types";

const databasesDocs: ProductDocumentation = {
  productSlug: "databases",
  sections: [
    {
      slug: "postgresql",
      title: "PostgreSQL",
      description: "Blueprint setup for PostgreSQL runtime queries in Unreal Engine",
      content: `
        <section>
          <h3>Before You Start</h3>
          <ul>
            <li>Keep your PostgreSQL server reachable from the machine running the game or editor.</li>
            <li>Know the host, database name, username, password, and port. The default PostgreSQL port is <code>5432</code>.</li>
            <li>Create the tables you want to read or update before calling them from Blueprint.</li>
          </ul>
        </section>
        <section>
          <h3>Blueprint Connection Steps</h3>
          <ol>
            <li>Open the Blueprint that should talk to the database. This can be a level actor, GameInstance, subsystem wrapper, or UI controller.</li>
            <li>Add the PostgreSQL connection component from this product, or place the PostgreSQL connection actor in the level and reference it from your Blueprint.</li>
            <li>On <code>BeginPlay</code>, a login button, or your own setup event, add <code>MakePostgreSQLConnectionParams</code>.</li>
            <li>Fill <code>Server</code>, <code>Database</code>, <code>Username</code>, <code>Password</code>, and <code>Port</code>.</li>
            <li>If your server requires SSL or a timeout, add those values in the advanced connection fields.</li>
            <li>Pass the params into <code>CreateConnection</code>.</li>
            <li>Bind <code>OnConnectionStatusChanged</code> and <code>OnConnectionInvalid</code> so your Blueprint can show success, failure, and reconnect UI.</li>
          </ol>
        </section>
        <section>
          <h3>Run a Select Query</h3>
          <ol>
            <li>After the connection succeeds, call <code>SelectDataFromQuery</code>.</li>
            <li>Pass a normal SQL select string, such as:</li>
          </ol>
          <pre><code>SELECT id, player_name, score
FROM public.leaderboard
ORDER BY score DESC
LIMIT 10;</code></pre>
          <ol start="3">
            <li>Bind <code>OnQuerySelectStatusChanged</code>.</li>
            <li>When the event returns success, read the result from the returned data table or data rows.</li>
            <li>Use helper nodes such as <code>GetDataTableValue</code>, <code>GetDataRowValue</code>, or <code>FormatDataTableAsText</code> to display results in UMG.</li>
          </ol>
        </section>
        <section>
          <h3>Run an Insert, Update, or Delete</h3>
          <ol>
            <li>Build your SQL statement in Blueprint.</li>
            <li>Call <code>UpdateDataFromQuery</code>.</li>
            <li>Bind <code>OnQueryUpdateStatusChanged</code> to show whether the query finished successfully.</li>
          </ol>
          <pre><code>INSERT INTO public.leaderboard (player_name, score)
VALUES ('PlayerOne', 2500);</code></pre>
        </section>
        <section>
          <h3>PostgreSQL Notes</h3>
          <ul>
            <li>Use <code>ExtraParams</code> for PostgreSQL-specific connection settings.</li>
            <li>Keep SQL permissions limited to the actions your game needs.</li>
            <li>PostgreSQL supports image data through the PostgreSQL Blueprint image flow.</li>
          </ul>
        </section>
      `,
      next: { slug: "mysql", title: "MySQL / MariaDB" },
    },
    {
      slug: "mysql",
      title: "MySQL / MariaDB",
      description: "Blueprint setup for MySQL and MariaDB runtime queries in Unreal Engine",
      content: `
        <section>
          <h3>Before You Start</h3>
          <ul>
            <li>Keep your MySQL or MariaDB server reachable from the machine running the game or editor.</li>
            <li>Know the host, schema/database name, username, password, and port. The default MySQL port is <code>3306</code>.</li>
            <li>Create a database user with only the permissions your Blueprint flow needs.</li>
          </ul>
        </section>
        <section>
          <h3>Blueprint Connection Steps</h3>
          <ol>
            <li>Open the Blueprint that should own the database connection.</li>
            <li>Add the MySQL connection component from this product, or place the MySQL connection actor in the level and reference it.</li>
            <li>On your setup event, add <code>MakeMySQLConnectionParams</code>.</li>
            <li>Fill <code>Server</code>, <code>Database</code>, <code>Username</code>, <code>Password</code>, and <code>Port</code>.</li>
            <li>Pass the params into <code>CreateConnection</code>.</li>
            <li>Bind <code>OnConnectionStatusChanged</code>, <code>OnConnectionInvalid</code>, <code>OnQuerySelectStatusChanged</code>, and <code>OnQueryUpdateStatusChanged</code>.</li>
          </ol>
        </section>
        <section>
          <h3>Run a Select Query</h3>
          <ol>
            <li>Wait until <code>OnConnectionStatusChanged</code> reports a valid connection.</li>
            <li>Call <code>SelectDataFromQuery</code> with your SQL select statement.</li>
          </ol>
          <pre><code>SELECT id, display_name, coins
FROM players
ORDER BY coins DESC
LIMIT 10;</code></pre>
          <ol start="3">
            <li>Use the select status event to check for success or error text.</li>
            <li>Read values from the Blueprint data rows or table result.</li>
          </ol>
        </section>
        <section>
          <h3>Run an Insert, Update, or Delete</h3>
          <ol>
            <li>Call <code>UpdateDataFromQuery</code> for statements that change data.</li>
            <li>Bind the update status event and show a success or failure message in your UI.</li>
          </ol>
          <pre><code>UPDATE players
SET coins = coins + 100
WHERE id = 42;</code></pre>
        </section>
        <section>
          <h3>Using the Dedicated MySQL Actor</h3>
          <ol>
            <li>Place the MySQL connection actor if you need several live connections at once.</li>
            <li>Call <code>CreateNewConnection</code> and store the returned <code>ConnectionID</code>.</li>
            <li>Pass that <code>ConnectionID</code> into future select or update nodes.</li>
            <li>Use <code>QueryID</code> when you need to match a completed event back to the UI request that started it.</li>
            <li>Create a <code>MySQLConnectionOptions</code> asset when you need SSL, timeout, connect attribute, read-only, or multi-result settings editable outside the Blueprint graph.</li>
          </ol>
        </section>
        <section>
          <h3>MySQL Notes</h3>
          <ul>
            <li>Use MySQL or MariaDB SQL syntax for queries.</li>
            <li>Close connections when the owning Blueprint is finished with them.</li>
            <li>Image and BLOB Blueprint nodes are not currently supported for MySQL or MariaDB in this package. Use Microsoft SQL Server if you need the image workflow today.</li>
          </ul>
        </section>
      `,
      prev: { slug: "postgresql", title: "PostgreSQL" },
      next: { slug: "microsoft-sql", title: "Microsoft SQL Server" },
    },
    {
      slug: "microsoft-sql",
      title: "Microsoft SQL Server",
      description: "Blueprint setup for Microsoft SQL Server queries and image data in Unreal Engine",
      content: `
        <section>
          <h3>Before You Start</h3>
          <ul>
            <li>Install a compatible SQL Server ODBC driver on the Windows machine running the game or editor.</li>
            <li>Know the server name, instance or address, database name, and login method.</li>
            <li>For Windows Authentication, make sure the Windows account running the game has access to the database.</li>
            <li>For username/password authentication, make sure SQL Server authentication is enabled on the server.</li>
          </ul>
        </section>
        <section>
          <h3>Blueprint Connection Steps</h3>
          <ol>
            <li>Open the Blueprint that should own the database connection.</li>
            <li>Add the Microsoft SQL Server connection component from this product, or place the Microsoft SQL Server connection actor in the level and reference it.</li>
            <li>On your setup event, add <code>MakeMSSQLConnectionParams</code>.</li>
            <li>Fill <code>Server</code> and <code>Database</code>.</li>
            <li>If using SQL login, fill <code>Username</code> and <code>Password</code>.</li>
            <li>If using Windows Authentication, enable <code>bUseWindowsAuthentication</code>.</li>
            <li>Add ODBC settings such as encryption or certificate trust to <code>ExtraParams</code> when needed.</li>
            <li>Use <code>ConnectionStringOverride</code> only when you need to provide the full ODBC string yourself.</li>
            <li>Pass the params into <code>CreateConnection</code>.</li>
            <li>Bind <code>OnConnectionStatusChanged</code>, <code>OnConnectionInvalid</code>, <code>OnQuerySelectStatusChanged</code>, and <code>OnQueryUpdateStatusChanged</code>.</li>
          </ol>
        </section>
        <section>
          <h3>Run a Select Query</h3>
          <ol>
            <li>Wait until the connection reports success.</li>
            <li>Call <code>SelectDataFromQuery</code>.</li>
          </ol>
          <pre><code>SELECT TOP 10 Id, DisplayName, Score
FROM dbo.Leaderboard
ORDER BY Score DESC;</code></pre>
          <ol start="3">
            <li>Use the select status event to check success or read the error message.</li>
            <li>Use the returned Blueprint rows/table to update UMG widgets or gameplay state.</li>
          </ol>
        </section>
        <section>
          <h3>Run an Insert, Update, or Delete</h3>
          <ol>
            <li>Call <code>UpdateDataFromQuery</code> for statements that change data.</li>
            <li>Bind <code>OnQueryUpdateStatusChanged</code> to show progress and failures to the player or tool user.</li>
          </ol>
          <pre><code>UPDATE dbo.Leaderboard
SET Score = 3200
WHERE Id = 7;</code></pre>
        </section>
        <section>
          <h3>Image and BLOB Workflow</h3>
          <p>This workflow is currently specific to Microsoft SQL Server. It is not enabled for PostgreSQL or MySQL in this package.</p>
          <ol>
            <li>Create a table column that can store binary image data, such as <code>VARBINARY(MAX)</code>.</li>
            <li>Connect to SQL Server using the steps above.</li>
            <li>To upload an image from Blueprint, call <code>UpdateImageData</code> with the file path or supported image input and the SQL update statement.</li>
            <li>To load an image back into Unreal, call <code>SelectImageDataFromQuery</code>.</li>
            <li>Bind the image select status event and use the returned <code>Texture2D</code> in UMG, materials, or runtime display actors.</li>
          </ol>
          <pre><code>SELECT TOP 1 PortraitImage
FROM dbo.PlayerPortraits
WHERE PlayerId = 7;</code></pre>
        </section>
        <section>
          <h3>Microsoft SQL Notes</h3>
          <ul>
            <li>The default generated connection path targets the SQL Server ODBC driver flow.</li>
            <li>Use <code>Trusted_Connection</code> through the Windows Authentication option instead of typing a Windows password into Blueprint.</li>
            <li>Use <code>ConnectionStringOverride</code> for named instances, DSN paths, non-default drivers, or enterprise security strings.</li>
            <li>Close the connection when your owning Blueprint is finished with it.</li>
          </ul>
        </section>
      `,
      prev: { slug: "mysql", title: "MySQL / MariaDB" },
    },
  ],
};

export default databasesDocs;
