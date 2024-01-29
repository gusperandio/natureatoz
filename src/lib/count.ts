import mongoose, { Document, Schema } from "mongoose";
import Request from "./models/request";

export class Counter {
  updateReqCount = async (n: number) => {
    try {
      const request = await Request.findOne();
      if (request) {
        await Request.updateOne({}, { counter: n });
      } else {
        const newRequest = new Request();
        await newRequest.save();
      }
    } catch (error) {
      console.error("Error to search and update values:", error);
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
