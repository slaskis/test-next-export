module.exports = {
  exportPathMap: async function(defaultPathMap) {
    return {
      "/": { page: "/" },
      "/hello": { page: "/", query: { text: "hello" } }
    };
  }
};
