export default function SwitchNetworkButton() {
  const onClick = async () => {
    // @ts-ignore
    if (window.ethereum) {
      const params = {
        chainId: "0x696",
        chainName: "Mint Testnet",
        nativeCurrency: {
          name: "Sepolia Ether",
          symbol: "ETH",
          decimals: 18,
        },
        rpcUrls: ["https://testnet-rpc.mintchain.io"],
        blockExplorerUrls: ["https://testnet-explorer.mintchain.io"],
      };

      // @ts-ignore
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [params],
      });
    }
  };

  return (
    <button
      style={{
        fontSize: "16px",
        padding: "12px 24px",
        color: "#ebf5ed",
        fontWeight: "bold",
        background: "#30BF54",
        borderRadius: "24px",
      }}
      onClick={onClick}
    >
      Switch Network
    </button>
  );
}
