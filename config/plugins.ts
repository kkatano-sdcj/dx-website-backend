export default ({ env }) => ({
    upload: {
      config: {
        provider: 'strapi-provider-upload-azure-sa',
        providerOptions: {
          account: env('AZURE_STORAGE_ACCOUNT'),
          accountKey: env('AZURE_STORAGE_ACCOUNT_KEY'),
          serviceBaseURL: env('AZURE_STORAGE_URL'),
          containerName: env('AZURE_STORAGE_CONTAINER_NAME'),
          defaultPath: 'uploads',
          cdnBaseURL: env('AZURE_STORAGE_CDN_URL'),
          defaultCacheControl: env('AZURE_STORAGE_CACHE_CONTROL') || 'max-age=31536000',
          removeCN: env('AZURE_STORAGE_REMOVE_CN') || false,
        },
      },
    },
    'content-type-builder': {
      enabled: env.bool('CONTENT_TYPE_BUILDER_ENABLED', true),
    },
  });