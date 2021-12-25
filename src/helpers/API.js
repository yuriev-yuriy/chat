export class Backend {
    constructor() {
      this.baseUrl = '';
    }
  
    setBaseUrl(url) {
      this.baseUrl = url;
    }
  
    getBaseUrl() {
      return this.baseUrl;
    }
  
    async get(chat) {
      try {
        const response = await fetch(
          `${this.baseUrl}${chat}`,
        );
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error(error);
      }
    }
  
  }
  
  const API = new Backend();
  API.setBaseUrl('');
  
  export default API;