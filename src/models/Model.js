import { API_URL } from '../constants';

export default class Model {
  static async fetchTodos() {
    const response = await fetch(API_URL);
    return response.json();
  }

  static async fetchTodoDetail(id) {
    const response = await fetch(API_URL + id);
    return response.json();
  }
}
