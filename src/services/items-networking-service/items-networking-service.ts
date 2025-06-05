export interface Item {
  id: string;
  title: string;
  brand: string;
  barcode_value: string;
  amount: number;
  model_file_download_url?: string;
}

const BASE_URL = "https://objectstransmitterbackend.onrender.com/v1";

export interface ApiError {
  message: string;
  code?: number;
}

async function checkResponse<T>(response: Response): Promise<T> {
  if (response.ok) {
    return (await response.json()) as T;
  } else {
    let errorBody: ApiError;
    try {
      errorBody = (await response.json()) as ApiError;
    } catch {
      errorBody = { message: response.statusText, code: response.status };
    }
    throw new Error(errorBody.message || `HTTP error ${response.status}`);
  }
}

export const ItemsNetworkingService = {
  async getAllItems(): Promise<Item[]> {
    const totalUrl = BASE_URL + "/items";
    try {
      const res = await fetch(totalUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await checkResponse<Item[]>(res);
    } catch (error) {
      console.error("Network error fetching all items:", error);
      throw new Error("Failed to fetch items. Please check your network or try again later.");
    }
  },

  async getItemById(id: string): Promise<Item> {
    const res = await fetch(`${BASE_URL}/items/${encodeURIComponent(id)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return checkResponse<Item>(res);
  },


  async deleteItemById(
    id: string,
  ): Promise<{ message: string }> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    const res = await fetch(`${BASE_URL}/items/${encodeURIComponent(id)}`, {
      method: "POST",
      headers,
    });
    return checkResponse<{ message: string }>(res);
  },
};
