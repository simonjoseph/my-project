module.exports = ({ env }) => {
  return {
    upload: {
      config: {
        provider: "strapi-provider-firebase-storage",
        providerOptions: {
          serviceAccount: require("./serviceAccount.json"),
          bucket: env(
            "STORAGE_BUCKET_URL",
            "sencedro-production.appspot.com"
          ),
          sortInStorage: true, // true | false
          debug: false, // true | false
        },
      },
    },
  };
};
