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
  static table = "posts";
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    time: DataTypes.DATE
  };
}

db.link([Post]);
await db.sync({ drop: true });