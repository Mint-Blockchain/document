import { useMemo } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SwitchNetworkButton({
  type,
}: {
  type: "mainnet" | "testnet";
}) {
  const chainParam = useMemo(() => {
    if (type === "mainnet") {
      return {
        chainId: "0xb9",
        chainName: "Mint Mainnet",
        nativeCurrency: {
          name: "Ether",
          symbol: "ETH",
          decimals: 18,
        },
        rpcUrls: ["https://rpc.mintchain.io"],
        blockExplorerUrls: ["https://explorer.mintchain.io"],
      };
    } else {
      return {
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
    }
  }, [type]);

  const onClick = async () => {
    // @ts-ignore
    if (window.ethereum) {
      // @ts-ignore
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [chainParam],
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
        Add {chainParam.chainName}
      </button>
      <ToastContainer />
    </>
  );
}
