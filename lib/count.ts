import mongoose, { Document, Schema } from "mongoose";
import Request from "../models/count";

const updateReqCount = async () => {
  try {
    const request = await Request.findOne();
    console.log("=====================COUNT++=====================");
    if (request) {
      await Request.updateOne({}, { $inc: { counter: 1 } });
    } else {
      const newRequest = new Request();
      await newRequest.save();
    }
  } catch (error) {
    console.error("Erro ao atualizar e buscar o valor:", error);
  }
};

export default updateReqCount;
