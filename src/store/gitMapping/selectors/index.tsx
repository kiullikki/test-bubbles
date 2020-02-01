import { IStore } from "../../types";

export const loadingStatus = ({ gitMapping }: IStore): boolean => gitMapping.loading;