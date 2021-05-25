import { DBConnect, InsertOne } from "../../lib/dbconnection";
export default async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    let client;
    try {
      client = await DBConnect();
    } catch (err) {
      res.status(500).json({ err: "Connecting Database Failed!" });
      return;
    }
    if (!email || !name || !message || !email.includes("@")) {
      res.status(422).json({
        err: "Invalid Response",
      });
    } else {
      try {
        await InsertOne(client, { email, name, message }, "contact");
      } catch (error) {
        res.status(500).json({ err: `Inserting Data Failed!` });
        return;
      }
      res.status(200).json({ message: "Data inserted successfully" });
      client.close();
    }
  }
};
