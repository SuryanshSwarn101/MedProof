export const MEDPROOF_DEPLOYMENT = {
  network: "preprod",
  contractAddress: process.env.NEXT_PUBLIC_MEDPROOF_CONTRACT_ADDRESS?.trim() ?? "489343380103451cd9bd4d84bbdb41234732a4c9e0cb2f261f4e62de432f840d",
  indexerUri: "https://indexer.preprod.midnight.network/api/v4/graphql",
  indexerWsUri: "wss://indexer.preprod.midnight.network/api/v4/graphql/ws",
  zkAssetPath: "/zk/medproof/",
} as const;

const LOCAL_CONTRACT_KEY = "medproof:v2:contract-address";

export function configuredContractAddress() {
  if (MEDPROOF_DEPLOYMENT.contractAddress) return MEDPROOF_DEPLOYMENT.contractAddress;
  if (typeof window !== "undefined") return window.localStorage.getItem(LOCAL_CONTRACT_KEY)?.trim() ?? "";
  return "";
}

export function saveLocalContractAddress(address: string) {
  window.localStorage.setItem(LOCAL_CONTRACT_KEY, address.trim());
}

export function shortContractAddress(address = configuredContractAddress()) {
  if (!address) return "Not configured";
  return `${address.slice(0, 8)}…${address.slice(-8)}`;
}
