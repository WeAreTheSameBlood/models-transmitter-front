import { BACKEND_URLs } from "@/constants";
import { StoreItemDetailedInfo } from "../entities/store-item-detailed-info";
import { checkResponse } from "../util/helpers";
import { StoreItemGeneralInfo } from "../entities/store-item-general-info";

export const ItemsNetworkingService = {
  // MARK: - GET ALL
  async getAllItems(): Promise<StoreItemGeneralInfo[]> {
    try {
      const res = await fetch(BACKEND_URLs.GET_ALL_ITEMS, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await checkResponse<StoreItemGeneralInfo[]>(res);
    } catch (error) {
      throw new Error(
        "Failed to fetch items. Please check your network or try again later"
      );
    }
  },

  // MARK: - GET One By ID
  async getItemById(id: string): Promise<StoreItemDetailedInfo> {
    const res = await fetch(BACKEND_URLs.GET_ITEM_BY_ID(id), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return checkResponse<StoreItemDetailedInfo>(res);
  },

  // MARK: - DELETE One By ID
  async deleteItemById(id: string): Promise<{ message: string }> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    const res = await fetch(BACKEND_URLs.DELETE_ITEM_BY_ID(id), {
      method: "POST",
      headers,
    });
    return checkResponse<{ message: string }>(res);
  },
};
