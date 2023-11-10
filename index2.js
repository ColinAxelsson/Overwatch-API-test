function genereraSlumptal() {
    var slumpmässigtTal = Math.floor(Math.random() * 101);
  return slumpmässigtTal;
}

function submit(){
    console.log('Submit')
    const mynumber = document.getElementById('number').value
    guessCount++
    document.getElementById('guessCount').innerHTML = `Antal gissningar ${guessCount}`
    console.log(mynumber)
    if (mynumber > slumpmässigtResultat){
        document.getElementById('resultat').innerHTML = 'Gissat nummer är för högt'
    }

    if (mynumber < slumpmässigtResultat){
        document.getElementById('resultat').innerHTML = 'Gissat nummer är för lågt'
    }

    if (mynumber == slumpmässigtResultat){
        document.getElementById('resultat').innerHTML = 'Gissat nummer är korrekt'
        startConfetti()
    }

    document.getElementById('number').focus()
    document.getElementById('number').select()
}

var slumpmässigtResultat = genereraSlumptal();
var guessCount = 0
console.log(slumpmässigtResultat);

