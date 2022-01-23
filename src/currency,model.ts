import {IRates} from "./rates.model";

export interface ICurrency {
  sumAsk?: number| null;
  sumBid?: number | null;
  rates?: Array<IRates> | null;
}

export class Currency implements ICurrency {

  constructor(
    public sumAsk?: number| null,
    public sumBid?: number| null,
    public rates?: Array<IRates> | null,
  ) {

  }

}
