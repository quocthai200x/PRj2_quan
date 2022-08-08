import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import mongoose from "mongoose";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  let room = req.body;
  room.hotelId = hotelId;
  console.log(room)
  const newRoom = new Room(room);
  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};

export const updateRoomCheckIn = async (req, res, next) => {
  try {
    await Room.updateOne(
      { "roomNumbers.unavailableDates._id": req.params.id },
      {
        $set: {
          "roomNumbers.$.unavailableDates.$[j].isCheckIn": true,
          "roomNumbers.$.unavailableDates.$[j].isCheckOut": false, 
        },
      },
      {
        arrayFilters:[{
            "j._id" : mongoose.Types.ObjectId(req.params.id)
        }]
      }
    );
    res.status(200).json("User check in");
  } catch (err) {
    next(err);
  }
};


export const updateRoomCheckOut = async (req, res, next) => {
  try {
    await Room.updateOne(
      { "roomNumbers.unavailableDates._id": req.params.id },
      {
        $set: {
          "roomNumbers.$.unavailableDates.$[j].isCheckIn": true,
          "roomNumbers.$.unavailableDates.$[j].isCheckOut": true, 
        },
      },
      {
        arrayFilters:[{
            "j._id" : mongoose.Types.ObjectId(req.params.id)
        }]
      }
    );
    res.status(200).json("User check out.");
  } catch (err) {
    next(err);
  }
};


export const updateRoomAvailability = async (req, res, next) => {
  try {
    await Room.updateOne(
      { "roomNumbers._id": req.params.id },
      {
        $push: {
          "roomNumbers.$.unavailableDates": req.body.dates,
          
        },
      }
    );
    res.status(200).json("Room status has been updated.");
  } catch (err) {
    next(err);
  }
};
export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Room has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id).populate('roomNumbers.unavailableDates.userId',{"roomNumbers.unavailableDates.userId.password":0})
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};
export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};
