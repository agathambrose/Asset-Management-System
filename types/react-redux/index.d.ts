import "react-redux";

type User = {
  user: {
    id: number | null;
    first_name: string | null;
    middle_name: string | null;
    last_name: string | null;
    email: string | null;
    verified: boolean | null;
    phone: string | null;
    office: string | null;
    designation: string | null;
    bio: string | null;
    picture_url: string | null;
    roles: string[] | [];
  };
  isAuthenticated: boolean;
  signedUp: boolean;
};

type Asset = {
  id: number | null;
  name: string | null;
  serial: number | null;
  description: string | null;
  quantity: number | null;
  purchase_price: number | null;
  purchase_date: string | null;
  warranty_exp_date: string | null;
  vendor: string | null;
  category: string | null;
  location: string | null;
  status: string | null;
  picture_url: string | null;
};
type Location = {
  name: string | null;
  id: number | null;
};
declare module "react-redux" {
  interface DefaultRootState {
    user: User;
    asset: { asset: Asset[] };
    assigned: { assignedAssets: Asset[] };
    unassigned: { unAssignedAssets: Asset[] };
    location: { location: Location[] };
  }
}
