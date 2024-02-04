import { Connection, LAMPORTS_PER_SOL} from "@solana/web3.js";


  export async function airdrop(keypair){ // airdrop isteğinde bulunuyoruz.
    const connection = new Connection("https://api.devnet.solana.com"); // ağa bağlanıyoruz
    let txhash = await connection.requestAirdrop(keypair.publicKey, LAMPORTS_PER_SOL)
    
    return `airdrop başarili 🥳 \n txhash: ${txhash}`
}