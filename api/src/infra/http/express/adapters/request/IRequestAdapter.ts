import { Request as ExpressRequest } from "express";
import { IRequest } from "@/interface/requests/api/v1/IRequest";
export interface IRequestAdapter {
  adapt(ExpressRequest: ExpressRequest): IRequest;
}
