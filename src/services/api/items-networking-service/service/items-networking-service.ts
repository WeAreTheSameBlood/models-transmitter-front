import { BACKEND_URLs } from "@/constants";
import { StoreItem } from "../entities/store-item";
import { checkResponse } from "../util/helpers";

export const ItemsNetworkingService = {
  // MARK: - GET ALL
  async getAllItems(): Promise<StoreItem[]> {
    try {
      const res = await fetch(BACKEND_URLs.GET_ALL_ITEMS, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await checkResponse<StoreItem[]>(res);
    } catch (error) {
      throw new Error(
        "Failed to fetch items. Please check your network or try again later"
      );
    }
  },

  // MARK: - GET One By ID
  async getItemById(id: string): Promise<StoreItem> {
    const res = await fetch(BACKEND_URLs.GET_ITEM_BY_ID(id), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return checkResponse<StoreItem>(res);
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
