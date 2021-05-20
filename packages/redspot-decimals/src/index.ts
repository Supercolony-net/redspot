import { extendEnvironment } from 'redspot/config';
import { CustomBalance } from './balance';
import { getTypeLength } from './getTypeLength';
import { CustomWeight } from './weight';

extendEnvironment((env) => {
  const api = env.network.api;

  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  api.isReadyOrError
    .then(() => api.rpc.system.properties())
    .then((properties) => {
      const decimals = properties.tokenDecimals
        .unwrapOr([api.registry.createType('u32', 12)])[0]
        .toNumber();

      const Balance = api.registry.getDefinition('Balance');
      const Weight = api.registry.getDefinition('Weight');

      api.registerTypes({
        Weight: CustomWeight.with(decimals, getTypeLength(Weight || 'u64')),
        Balance: CustomBalance.with(
          decimals,
          getTypeLength(Balance || 'UInt<128, Balance>')
        )
      });
    });
});