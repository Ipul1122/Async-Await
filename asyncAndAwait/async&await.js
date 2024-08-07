 // MENDEKLARISIKAN FUNCTION berjalanDenganKucing
function berjalanDenganKucing (){
        
    // mengembalikan sebuah promise yang menerima 2 parameter yaitu selesaikan dan tolak
    return new Promise((selesaikan, tolak)=>{
        // mengatur waktu tiap 1500 ms 
        setTimeout(()=>{

            // variabel const kucingJalan = true
            const kucingJalan = true;

            // jika true
            if(kucingJalan){
                selesaikan("KUCING JALAN");
                // jika false
            }else {
                tolak("KUCING TIDAK JALAN");
            }
            
            selesaikan("LU BERJALAN DENGAN KUCING");
        },1500);
    });
}

function bersihkanKamar (){
    
    return new Promise((selesaikan, tolak)=>{
        setTimeout(()=>{
            
            const kamarBersih = true

            if(kamarBersih){
                selesaikan("KAMAR BERSIH");
            }else {
                tolak("KAMAR TIDAK BERSIH");
            }
            
            selesaikan("KAMAR SUDAH DI BERSIHKAN");
        },3000);
    });
}

function buangSampah (){
    
    return new Promise((selesaikan, tolak)=>{
        setTimeout(()=>{
            
            const sampahBuang = true
    
            if(sampahBuang){
                selesaikan("SAMPAH DI BUANG");
            }else {
                tolak("SAMPAH TIDAK DI BUANG");
            }

            selesaikan("SAMPAH SUDAH DI BUANG");
        },1000);
    });
}


// async digunakan untuk mengembalikan nilai promise
// deklarasi sebuah function yaitu lakukanSemua()
async function lakukanSemua(){
    // deklarasi varibael hasilBerjalanDenganKucing = await yaitu menunggu hasil proses promise
    const hasilBerjalanDenganKucing = await berjalanDenganKucing();
    console.log(hasilBerjalanDenganKucing);
    
    // deklarasi varibael hasilBersihkanKamar = await yaitu menunggu hasil proses promise
    const hasilBersihkanKamar = await bersihkanKamar();
    console.log(hasilBersihkanKamar);
    
    // deklarasi varibael hasilBuangSampah = await yaitu menunggu hasil proses promise
    const hasilBuangSampah = await buangSampah();
    console.log(hasilBuangSampah)
    
    // tampilan tugas selesai semua ketika case sudah di selesaikan
    console.log("LU TELAH MENYELESAIKAN TUGAS")

} lakukanSemua()



