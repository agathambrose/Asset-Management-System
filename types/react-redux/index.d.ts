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

declare module "react-redux" {
  interface DefaultRootState {
    user: User;
  }
}
