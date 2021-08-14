import { Client, Network } from '@helium/http'

export const HeliumClient = new Client(Network[ENV.heliumNetwork || 'production'])