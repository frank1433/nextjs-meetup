import { MongoClient } from "mongodb";
//api/new-meetup
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, address, image, description } = data;
    const client = await MongoClient.connect(
      "mongodb+srv://frank1433:zy511726@cluster0.ivy5b.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: " meetup inserted" });
  }
}
export default handler;
