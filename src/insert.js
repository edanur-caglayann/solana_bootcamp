
import { writeFileSync} from "fs" // Dosyaları senkron kaydetmek için

export async function insertData(data) { // Veriyi wallet.json içine yazıyoruz
    try {
        writeFileSync("wallet.json",data,"utf8");
        console.log("Dosya yazma işlemi başarili 🎉")
    } catch (error) {
        console.log(error)
    }
     
}