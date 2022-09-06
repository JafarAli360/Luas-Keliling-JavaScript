
const formPersegi = document.getElementById('formPersegi')
formPersegi.addEventListener("submit", function (event) {
	event.preventDefault();

    hitungKelilingLuasPersegi()
});

const formPersegiPanjang = document.getElementById('formPersegiPanjang')
formPersegiPanjang.addEventListener("submit", function (event) {
	event.preventDefault();

    hitungKelilingLuasPersegiPanjang()
});

function hitungKelilingLuasPersegi(){
    let sisi = formPersegi.elements['sisi'].value
    const keliling = sisi*4
    const luas = sisi*sisi

    document.getElementById('kelilingPersegi').innerHTML = keliling
    document.getElementById('luasPersegi').innerHTML = luas
}

function hitungKelilingLuasPersegiPanjang(){
    let panjang = parseFloat(formPersegiPanjang.elements['panjang'].value) 
    let lebar = parseFloat(formPersegiPanjang.elements['lebar'].value) 
    console.log(panjang, lebar)
    const keliling = 2*(panjang + lebar)
    const luas = panjang * lebar

    document.getElementById('kelilingPersegiPanjang').innerHTML = keliling
    document.getElementById('luasPersegiPanjang').innerHTML = luas
}