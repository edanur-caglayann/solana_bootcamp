import { Keypair, Connection} from "@solana/web3.js";  // Keypair ve connection sınıflarını import ediyoruz.
import { insertData } from "./insert"; 
import { getBalance } from "./getBalance";
import { airdrop } from "./airdrop";

const keypair = Keypair.generate(); // keypair den public ve private anahtar oluşturuyoruz.

const balance = await getBalance(keypair);

keypair["walletBalance"] = `${balance} SOL`;

let data = JSON.stringify(keypair, null, 2);

//airdrop(keypair);

insertData(data);