export enum Chain {
  Ethereum = 1,
  Bitcoin,
}

export interface ChainIconProps {
  chain: Chain;
  text?: boolean;
}
