import { MongoClient } from "mongodb";

const DBConnect = async () => {
  const dbName = "blog-contact-form";
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.USERANDPASS}@cluster0.ozhsq.mongodb.net/${dbName}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  return client;
};

const InsertOne = async (client, data, Dbname) => {
  const db = client.db();
  await db.collection(Dbname).insertOne(data);
};

export { DBConnect, InsertOne };
