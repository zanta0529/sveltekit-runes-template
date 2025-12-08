import adapter from '@sveltejs/adapter-auto';
export default {
  kit: {
    adapter,
    alias: {
      $components: 'src/lib/components',
      $api: 'src/lib/api',
      $utils: 'src/lib/utils',
      $stores: 'src/lib/stores',
      $types: 'src/lib/types'
    }
  }
};