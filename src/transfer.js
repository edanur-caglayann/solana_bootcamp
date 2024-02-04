import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
export async function transfer(from, to, amount) {
  const connection = new Connection("https://api.devnet.solana.com");
  let tx = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: from.publicKey,
      toPubkey: to.publicKey,
      lamports: amount * LAMPORTS_PER_SOL,
    })
  );
  tx.feePayer = from.publicKey; // Komisyon ödeyecek kişiyi belirledi.
  let txhash = await connection.sendTransaction(tx,[from, to]);
  console.log(`txhash: ${txhash}`);
}
