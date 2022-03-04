import fs from "fs";
import path from "path";

function handler(req, res) {
  if (req.method === "POST") {
    const name = req.body.name;
    const price = req.body.price;
    const quantity = req.body.quantity;

    const newProduct = {
      id: new Date().toISOString,
      name: name,
      price: price,
      quantity: quantity,
    };

    // store that in a database or in a file

    const filePath = path.join(process.cwd(), "data", "products.json");
    const fileData = fs.writeFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newProduct);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success", product: newProduct });
  } else {
    res.status(200).json({ message: "Success" });
  }
}

export default handler;
