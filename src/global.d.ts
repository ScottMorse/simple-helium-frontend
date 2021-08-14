
interface AppEnv {
  envName: string,
  nodeEnv: 'production' | 'development' | 'test',
  heliumNetwork: 'production' | 'staging' | 'testnet',
  buildMetadata: { [key: string]: any }
}

declare const ENV: AppEnv