export class ApiClient {
  private readonly baseUrl: string;
  
  constructor(baseURL: string) {
    this.baseUrl = baseURL;
  }
  
  async get<T>(endpoint: string): Promise<T> {
    try {
      const response = await $fetch(`${this.baseUrl}${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response as T;
    } catch (error) {
      this.handleError(error, 'GET');
      throw error;
    }
  }
  
  /**
   * POST запрос
   */
  async post<T>(endpoint: string, data: any): Promise<T> {
    try {
      const response = await $fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response as T;
    } catch (error) {
      this.handleError(error, 'POST');
      throw error;
    }
  }
  
  /**
   * PUT запрос
   */
  async put<T>(endpoint: string, data: any): Promise<T> {
    try {
      const response = await $fetch(`${this.baseUrl}${endpoint}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response as T;
    } catch (error) {
      this.handleError(error, 'PUT');
      throw error;
    }
  }
  
  /**
   * DELETE запрос
   */
  async delete<T>(endpoint: string): Promise<T> {
    try {
      const response = await $fetch(`${this.baseUrl}${endpoint}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response as T;
    } catch (error) {
      this.handleError(error, 'DELETE');
      throw error;
    }
  }
  
  /**
   * Обработка ошибок
   */
  private handleError(error: any, method: string): void {
    console.error(`Ошибка ${method} запроса:`, error);
    if (error instanceof Error) {
      throw new Error(`Ошибка ${method} запроса: ${error.message}`);
    }
    throw new Error(`Неизвестная ошибка ${method} запроса`);
  }
}