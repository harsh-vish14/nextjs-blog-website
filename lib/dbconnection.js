import { MongoClient } from "mongodb";

const DBConnect = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.USERANDPASS}@${process.env.CLUSTER}.ozhsq.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  return client;
};

const InsertOne = async (client, data, Dbname) => {
  const db = client.db();
  await db.collection(Dbname).insertOne(data);
};

export { DBConnect, InsertOne };
