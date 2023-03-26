import {
  Database,
  DataTypes,
  Model,
  PostgresConnector,
} from "https://deno.land/x/denodb/mod.ts";

const connector = new PostgresConnector({
  host: "localhost",
  username: "username",
  password: "password",
  database: "database",
});

const db = new Database(connector);

class Post extends Model {
  id: { primaryKey: true, autoIncrement: true };
}
