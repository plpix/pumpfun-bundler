import bs58 from "bs58";
import fs from "fs";
import path from "path";
import { AnchorProvider } from "@coral-xyz/anchor";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import { openAsBlob, existsSync } from "fs";
import { Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";

const main = async () => {
  const wallet = new NodeWallet(mainKeypair);
  const provider = new AnchorProvider(solanaConnection, wallet, {
    commitment: "finalized",
  });

  const imageName = "coin.png";

  const uploadFolder = path.join(process.cwd(), "/src/image");
  const imagePath = path.join(uploadFolder, imageName);
};

main();
