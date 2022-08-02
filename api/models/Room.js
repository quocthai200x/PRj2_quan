import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    hotelId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    roomNumbers: [{
      number: Number,
      unavailableDates: [{
        date: {
          type: Date,
        },
        userId: {
          type: String
        }
      }
      ]
    }],
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
