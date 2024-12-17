export type Item = {
  id: string;
  name: string;
  creator: {
    id: string;
    name: string;
    avatar: string;
  };
  image: string | null;
  box: string;
  utem_code: string;
  internal_code: string;
  concept: string;
  location_or_borrowed_by: string;
  property: {
    value: string;
    color: string;
  } | null;
  designated_location: {
    value: string;
    color: string;
  } | null;
  circumstance: {
    value: string;
    color: string;
  } | null;
  status: {
    value: string;
    color: string;
  } | null;
}