import { AppDispath } from "@/app/model/store/Store";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispath>();