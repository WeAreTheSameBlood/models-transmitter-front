import { ApiError } from "../entities/api-error";

export async function checkResponse<T>(response: Response): Promise<T> {
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