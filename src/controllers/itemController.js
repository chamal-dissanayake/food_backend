const Item = require("../model/ItemModel");

const getAllItems = async (req, res) => {
  try {
    const result = await Item.find().sort({ createAt: -1 });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "error all items api" });
  }
};

const getSearchItems = async (req, res) => {
  const { q } = req.query;
  try {
    let items;
    if (q) {
      items = await Item.find({ name: { $regex: q, $options: "i" } });
    }

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "not found" });
  }
};

const getSingleItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findById(id);
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "No any Item Found!!!" });
  }
};

module.exports = {
  getAllItems,
  getSearchItems,
  getSingleItem,
};
