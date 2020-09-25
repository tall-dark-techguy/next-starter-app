module.exports = {
  webpack: (config) => {
    config.node = {
      fs: "empty",
    };
    return config;
  },
  env: {
    MONGO_URI:
      "mongodb+srv://techguy:fromsouth@cluster0.shtig.mongodb.net/learn?retryWrites=true&w=majority",
    JWT_SECRET:
      "8e902b9809ecb919f0a965d2d4c68f65e1fb194416b917d36c5e0c0b2e7c6c59c5b7cdb063036dc1d47bede1f8bc10d15a3e823ceee0d7002c1be494f8a3d287",
  },
};
