// Model Nilai
class Nilai {
    constructor(nilai) {
        this.nilai = nilai;
    }

    hitungRataRata() {
        if (!Array.isArray(this.nilai) || this.nilai.length === 0) {
            throw new Error("Data nilai tidak valid atau kosong.");
        }
        const total = this.nilai.reduce((acc, curr) => acc + curr, 0);
        return total / this.nilai.length;
    }
}

// View Nilai
class NilaiView {
    render(rataRata) {
        return `Rata-rata nilai: ${rataRata}`;
    }

    renderError(error) {
        return `Error: ${error}`; 
    }
}

// Controller Nilai
class NilaiController {
    constructor(Model, View) {
        this.model = Model;
        this.view = new View(); 
    }

    tampilkanRataRata(nilai) {
        try {
            const modelNilai = new this.model(nilai);
            const rataRata = modelNilai.hitungRataRata();
            console.log(this.view.render(rataRata));
        } catch (error) {
            console.log(this.view.renderError(error.message)); 
        }
    }
}

// Fungsi Pembagian
function bagi(a, b) {
    try {
        if (b === 0) {
            throw new Error("Pembagian dengan nol tidak diperbolehkan.");
        }
        return a / b;
    } catch (error) {
        console.error("Terjadi kesalahan:", error.message);
    } finally {
        console.log("Operasi pembagian selesai.");
    }
}

// Inisialisasi dan Penggunaan
const nilaiController = new NilaiController(Nilai, NilaiView);

// Contoh Penggunaan tampilkanRataRata
nilaiController.tampilkanRataRata([80, 90, 100]); 
nilaiController.tampilkanRataRata([]);          

// Contoh Penggunaan Fungsi bagi
console.log(bagi(10, 2));
console.log(bagi(10, 0));
