import {
  ChainSlug,
  DeploymentMode,
  IntegrationTypes,
} from "@socket.tech/dl-core";
import { Hooks, ProjectConstants } from "../../../../src";
import { Tokens } from "../../../../src/enums";

export const pc: ProjectConstants = {
  [DeploymentMode.PROD]: {
    [Tokens.LOOKS]: {
      vaultChains: [ChainSlug.MAINNET],
      controllerChains: [ChainSlug.BLAST],
      superTokenInfo: {
        name: "Blast LooksRare Token",
        symbol: "bLOOKS",
        decimals: 18,
        initialSupplyOwner: "0x1d52b7c0EF56141998E99d65eE429a8EC24d23Ea",
        owner: "0x3ab105F0e4A22ec4A96a9b0Ca90c5C534d21f3a7",
        initialSupply: "0",
      },
      hook: {
        hookType: Hooks.LIMIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.MAINNET]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "10000000",
              receivingLimit: "10000000",
            },
          },
          [ChainSlug.BLAST]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "10000000",
              receivingLimit: "10000000",
            },
          },
        },
      },
    },
  },
};
