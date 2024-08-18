"use client";
import React, { useState, useEffect } from "react";
import { useAccount, useNetwork } from "@starknet-react/core";
import { Contract, RpcProvider, ec, stark } from "starknet";
import * as Abi from "../../../public/abi/burnerWallet.json";
import BurnerWallet from "../components/BurnerWallet/BurnerWallet";
import GenericModal from "../components/ui_components/GenericModal";
import WarnBadge from "svg/WarnBadge";
import Close from "svg/Close";

type Wallet = {
  address: string;
  publicKey: string;
  privateKey: string;
};

export default function Page() {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [burnerWalletLoading, setBurnerWalletLoading] = useState<boolean>(true);
  const { account, address } = useAccount();
  const { chain } = useNetwork();

  let burnerDeployerAddress: string;
  let rpcAddress: string;
  if (chain.network == "sepolia") {
    burnerDeployerAddress =
      "0x2ffc549d472164639366ad0acfbc5fde49fcc0f037fa6bc9b1702161012f5d3";
    rpcAddress = "https://starknet-sepolia.public.blastapi.io";
  } else {
    console.log("burner wallets are not supported on mainnet!");
  }

  let burnerWalletDeployer = new Contract(
    Array.from(Abi),
    burnerDeployerAddress!,
    account,
  );

  const generateWallet = async (
    burnerWalletDeployer: Contract,
  ): Promise<Wallet> => {
    const provider = new RpcProvider({
      nodeUrl: rpcAddress,
    });

    const privateKey = stark.randomAddress();
    const publicKey = ec.starkCurve.getStarkKey(privateKey);

    const TransactionHash =
      await burnerWalletDeployer.deploy_burner_wallet(publicKey);

    const result: any = await provider.waitForTransaction(
      TransactionHash.transaction_hash,
    );

    return {
      privateKey,
      publicKey,
      address: result.events?.at(0).from_address,
    };
  };

  useEffect(() => {
    const loadedWallets = localStorage.getItem("wallets");
    if (loadedWallets) {
      const parsedWallets: Wallet[] = JSON.parse(loadedWallets);
      setWallets(parsedWallets);
      setBurnerWalletLoading(false);
    } else setBurnerWalletLoading(false);
  }, []);

  const handleCreate = async () => {
    if (wallets.length < 5) {
      if (burnerWalletDeployer) {
        try {
          setBurnerWalletLoading(true);
          const newWallet = await generateWallet(burnerWalletDeployer);
          setWallets([...wallets, newWallet]);
          localStorage.setItem(
            "wallets",
            JSON.stringify([...wallets, newWallet]),
          );
          console.log(newWallet);
        } catch (error) {
          console.log(error);
        } finally {
          setBurnerWalletLoading(false);
        }
      } else {
        console.error("Burner wallet deployer is undefined.");
      }
    } else {
      const alertPopover = document.getElementById("alert-popover");
      // @ts-ignore
      alertPopover.showPopover();
      console.log("Maximum of 5 burner accounts are allowed.");
    }
  };

  const clearWallets = () => {
    setWallets([]);
    localStorage.removeItem("wallets");
  };
  return (
    <section className="container mx-auto pb-32 pt-[8rem] md:pt-[clamp(200px,25vh,650px)]">
      <div className="py-8 text-md">
        <p className="mb-4 flex items-center gap-2">
          <span>
            <WarnBadge />
          </span>
          <span>
            NB: Please note that burner wallets are not supported on mainnet.
            Resolve to using a wallet provider instead!
          </span>
        </p>
        <p className="flex items-center gap-2">
          <span>
            <WarnBadge />
          </span>
          Also you can only generate a maximum of 5 burner wallets for each
          session
        </p>
      </div>
      <div className="mx-auto flex w-fit gap-4">
        {!burnerWalletLoading ? (
          wallets.length !== 0 ? (
            <div className="flex flex-col gap-8">
              {wallets.map((wallet, index) => (
                <BurnerWallet
                  walletNumber={index + 1}
                  key={index}
                  wallet={wallet}
                  popoverId={`wallet-${index}`}
                />
              ))}
            </div>
          ) : (
            <div className="grid w-[43rem] max-w-[43rem] place-content-center rounded-[16px] border border-[--borders] bg-[--modal-disconnect-bg] p-8">
              <p>No burner wallets found</p>
            </div>
          )
        ) : (
          <div className="grid w-[43rem] max-w-[43rem] place-content-center rounded-[16px] border border-[--borders] bg-[--modal-disconnect-bg] p-8">
            <span className="inline-block h-[3rem] w-[3rem] animate-spin rounded-full border-[3px] border-[--headings] border-b-transparent"></span>
          </div>
        )}
        <div className="h-fit w-[27rem] rounded-[16px] border border-[--borders] p-8">
          <div className="mb-8 border-b border-b-[#DADADA] pb-8">
            <h2 className="mb-8 text-l text-[--headings]">Burner wallet</h2>
            <div>
              <button className="w-full rounded-[12px] border-[2px] border-solid border-[--borders] bg-[--modal-disconnect-bg] p-4 text-[--headings]">
                Wallet Accounts
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={handleCreate}
              className="w-full rounded-[12px] bg-button-primary px-6 py-3 text-background-primary-light transition-all duration-300 hover:rounded-[30px] md:py-4"
            >
              Generate wallet
            </button>
            <button
              onClick={clearWallets}
              className="w-full rounded-[12px] border-[2px] border-solid border-[--borders] bg-[--modal-disconnect-bg] p-4 text-red-secondary"
            >
              Clear wallets
            </button>
          </div>
        </div>

        <GenericModal style="bg-transparent p-16" popoverId="alert-popover">
          <div className="flex h-[20rem] w-[95vw] max-w-[30rem] flex-col items-center gap-4 rounded-[24px] bg-[--background] p-8 text-[--headings] shadow-popover-shadow">
            <div className="flex w-full justify-end">
              <button
                // @ts-ignore
                popoverTarget="alert-popover"
              >
                <Close />
              </button>
            </div>
            <div>
              <span className="text-[6em] text-red-secondary">
                <WarnBadge />
              </span>
            </div>
            <p className="text-md">Maximum of 5 burner accounts are allowed.</p>
          </div>
        </GenericModal>
      </div>
    </section>
  );
}
