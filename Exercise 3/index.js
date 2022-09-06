const form = document.getElementById('form')
form.addEventListener("submit", function (event) {
	event.preventDefault();

    hitungKelilingTrapesium()
    hitungLuasTrapesium()
});

function hitungKelilingTrapesium(){
    let sisiAb = parseFloat(form.elements['sisiAb'].value) 
    let sisiBc = parseFloat(form.elements['sisiBc'].value) 
    let sisiCd = parseFloat(form.elements['sisiCd'].value) 
    let sisiDa = parseFloat(form.elements['sisiDa'].value) 
    const keliling = sisiAb + sisiBc + sisiCd + sisiDa
    // const luas = sisi*sisi

    document.getElementById('keliling').innerHTML = keliling
    // document.getElementById('luasPersegi').innerHTML = luas
}

function hitungLuasTrapesium(){
    let sisiAb = parseFloat(form.elements['sisiAb'].value) 
    let sisiCd = parseFloat(form.elements['sisiCd'].value) 
    let tinggi = parseFloat(form.elements['tinggi'].value) 
    const luas =  (sisiAb + sisiCd)*tinggi / 2

    document.getElementById('luas').innerHTML = luas
}