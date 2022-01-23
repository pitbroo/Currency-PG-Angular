export interface IRates {
  effectiveDate?: string| null;
  code?: string| null;
  currency?: string | null;
  bid?: number | null;
  ask?: number | null;
}

export class Rates implements IRates {

  constructor(
    public effectiveDate?: string | null,
    public code?: string | null,
    public currency?: string | null,
    public bid?: number | null,
    public ask?: number | null

  ) {
  }

}
