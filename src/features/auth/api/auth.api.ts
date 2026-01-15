import { api } from "../../../services/api";

export const register = (data: any) =>
  api.post("/auth/register", data);
