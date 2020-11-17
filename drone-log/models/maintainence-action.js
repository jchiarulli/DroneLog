const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const maintainenceActionSchema = new Schema({
  actions: {
    type: String,
    required: [true, "Name field is required"],
  },
  lastActionDate: {
    type: Date,
    required: [true, "Last Action Date is required"],
  },
  complete: {
    type: Boolean,
    default: false,
  },

  nextActionDate: {
    type: Date,
    required: [true, "Next Action Date is required"],
  },
});

const maintainenceAction = mongoose.model(
  "maintainenceAction",
  maintainenceActionSchema
);

module.exports = maintainenceAction;
