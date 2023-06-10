import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ancoatsoft.strikes',
  appName: 'Strikes Alert',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
