import { Connector } from '../types'
import { ConnectorConfigError } from '../errors'

export default async function init(): Promise<Connector> {
  const { MagicConnector } = await import('@web3-react/magic-connector')
  return {
    web3ReactConnector({
      chainId,
      apiKey,
      email,
    }: {
      chainId: number
      apiKey: string
      email: string
    }) {
      if (!apiKey) {
        throw new ConnectorConfigError(
          'The Fortmatic connector requires apiKey to be set.'
        )
      }
      if (!email) {
        throw new ConnectorConfigError(
          'The Magic connector requires email to be set.'
        )
      }
      return new MagicConnector({ apiKey, chainId, email })
    },
  }
}
