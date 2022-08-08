import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    isUsed:{
      type: Boolean,
      default: true,
    },
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
        isCheckIn: {type: Boolean, default: false},
        isCheckOut: {type: Boolean, default: false},
        date: {type: [Date]},
        userId: {
          type : mongoose.Types.ObjectId, 
          ref : "User", 
          require : true,
        }
      }
      ]
    }],
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
