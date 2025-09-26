module.exports = ({ env }) => ({
  'content-type-builder': {
    enabled: true,
  },
  upload: {
    config: {
      provider: 'strapi-provider-upload-azure-sa', // または '@simoesmario/strapi-provider-upload-azure-storage'
      providerOptions: {
        account: env('AZURE_STORAGE_ACCOUNT'),
        accountKey: env('AZURE_STORAGE_ACCOUNT_KEY'),
        serviceBaseURL: env('AZURE_STORAGE_URL'), // optional, e.g. https://<account>.blob.core.windows.net
        containerName: env('AZURE_STORAGE_CONTAINER_NAME'),
        defaultPath: 'uploads',
        cdnBaseURL: env('AZURE_STORAGE_CDN_URL'), // optional CDN URL
        defaultCacheControl: env('AZURE_STORAGE_CACHE_CONTROL') || 'max-age=31536000', // optional cache control
        removeCN: env('AZURE_STORAGE_REMOVE_CN') || false, // optional, if true, content name will not be included in the URL
      },
    },
  },
});
