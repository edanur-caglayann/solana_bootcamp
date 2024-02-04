
import { Connection , LAMPORTS_PER_SOL} from "@solana/web3.js";
export async function getBalance(keypair){
 const connection = new Connection("https://api.devnet.solana.com");
    let balance = await connection.getBalance(keypair.publicKey);
    
    balance = balance / LAMPORTS_PER_SOL
    console.log(`${balance} SOl 💲`);

    return balance;
}