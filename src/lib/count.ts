import mongoose, { Document, Schema } from "mongoose";
import Request from "./models/request";

export class Counter {
  updateReqCount = async () => {
    try {
      const request = await Request.findOne();

      if (request) {
        await Request.updateOne({}, { $inc: { counter: 1 } });
      } else {
        const newRequest = new Request({ counter: 1 });
        await newRequest.save();
      }
    } catch (error) {
      console.error("Erro ao pesquisar e atualizar valores:", error);
    }
  };

  getReqCount = async () => {
    try {
      const request = await Request.findOne();
      return request ? request.counter : 0;
    } catch (error) {
      console.error("Error on values requisition:", error);
    }
  };
}
