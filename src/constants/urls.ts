const BACKEND_BASE_URL = "https://objectstransmitterbackend.onrender.com/v1";

export const BACKEND_URLs = {
  GET_ALL_ITEMS: `${BACKEND_BASE_URL}/items`,
  GET_ITEM_BY_ID: (id: string) => `${BACKEND_BASE_URL}/items/${encodeURIComponent(id)}`,
  DELETE_ITEM_BY_ID: (id: string) => `${BACKEND_BASE_URL}/items/${encodeURIComponent(id)}`,
};
