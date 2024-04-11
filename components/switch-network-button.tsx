import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SwitchNetworkButton() {
  const onClick = async () => {
    // @ts-ignore
    if (window.ethereum) {
      const params = {
        chainId: "0x697",
        chainName: "Mint Sepolia Testnet",
        nativeCurrency: {
          name: "Sepolia Ether",
          symbol: "ETH",
          decimals: 18,
        },
        rpcUrls: ["https://sepolia-testnet-rpc.mintchain.io"],
        blockExplorerUrls: ["https://sepolia-testnet-explorer.mintchain.io"],
      };

      // @ts-ignore
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [params],
      });
      toast.success("Successfully added network to your wallet");
    }
  };

  return (
    <>
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
        Add Network
      </button>
      <ToastContainer />
    </>
  );
}
