import axios from "axios";

export default {
  // Gets all characters
  getBooks: function() {
    return axios.get("/api/characters");
  }
};
