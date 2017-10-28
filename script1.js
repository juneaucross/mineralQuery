'use strict';

// consts
var NA2O_MOL = 61.979;
var K2O_MOL = 94.196;
var AL2O3_MOL = 101.961;
var MGO_MOL = 40.304;
var FEO_MOL = 71.846;
var CAO_MOL = 56.077;
var MNO_MOL = 70.938;
var TIO2_MOL = 79.879;
var SIO2_MOL = 60.084;
var CL_MOL = 35.453;

var getMolRatio = function (elem, mol) {
  var molRatio = elem / mol;
  return molRatio;
}

var getAmphiboleFactor = function () {
  var amphiboleFactor = (getMolRatio(Na2O, NA2O_MOL)*2 + getMolRatio(K2O, K2O_MOL)*2 + getMolRatio(Al2O3, AL2O3_MOL)*2 + getMolRatio(MgO, MGO_MOL) + getMolRatio(FeO, FEO_MOL) + getMolRatio(CaO, CAO_MOL) + getMolRatio(MnO, MNO_MOL) + getMolRatio(TiO2, TIO2_MOL) + getMolRatio(SiO2, SIO2_MOL) + getMolRatio(Cl, CL_MOL)) / 15;
  return amphiboleFactor;
}

var buttonCalculate = document.querySelector('.button--calculate');

var buttonClear = document.querySelector('.button--clear');

buttonCalculate.addEventListener('click', function (evt) {

  var Na2O = document.querySelector('#Na2O-input').value;
  var K2O = document.querySelector('#K2O-input').value;
  var Al2O3 = document.querySelector('#Al2O3-input').value;
  var MgO = document.querySelector('#MgO-input').value;
  var FeO = document.querySelector('#FeO-input').value;
  var CaO = document.querySelector('#CaO-input').value;
  var MnO = document.querySelector('#MnO-input').value;
  var TiO2 = document.querySelector('#TiO2-input').value;
  var SiO2 = document.querySelector('#SiO2-input').value;
  var Cl = document.querySelector('#Cl-input').value;

  // evt.preventDefault();

  var getMolRatio = function (elem, mol) {
    var molRatio = elem / mol;
    return molRatio;
  }

  var Na2O_MolRatio = getMolRatio(Na2O, NA2O_MOL) * 2;
  var K2O_MolRatio = getMolRatio(K2O, K2O_MOL) * 2;
  var Al2O3_MolRatio = getMolRatio(Al2O3, AL2O3_MOL) * 2;
  var MgO_MolRatio = getMolRatio(MgO, MGO_MOL);
  var FeO_MolRatio = getMolRatio(FeO, FEO_MOL);
  var CaO_MolRatio = getMolRatio(CaO, CAO_MOL);
  var MnO_MolRatio = getMolRatio(MnO, MNO_MOL);
  var TiO2_MolRatio = getMolRatio(TiO2, TIO2_MOL);
  var SiO2_MolRatio = getMolRatio(SiO2, SIO2_MOL);
  var Cl_MolRatio = getMolRatio(Cl, CL_MOL);

  var getAmphiboleFactor =  function () {

    var amphiboleFactor = (Na2O_MolRatio + K2O_MolRatio + Al2O3_MolRatio + MgO_MolRatio + FeO_MolRatio + CaO_MolRatio + MnO_MolRatio + TiO2_MolRatio + SiO2_MolRatio + Cl_MolRatio) / 15;

    return amphiboleFactor;
  }

  var Na2O_final = Na2O_MolRatio / getAmphiboleFactor();
  var K2O_final = K2O_MolRatio / getAmphiboleFactor();
  var Al2O3_final = Al2O3_MolRatio / getAmphiboleFactor();
  var MgO_final = MgO_MolRatio / getAmphiboleFactor();
  var FeO_final = FeO_MolRatio / getAmphiboleFactor();
  var CaO_final = CaO_MolRatio / getAmphiboleFactor();
  var MnO_final = MnO_MolRatio / getAmphiboleFactor();
  var TiO2_final = TiO2_MolRatio / getAmphiboleFactor();
  var SiO2_final = SiO2_MolRatio / getAmphiboleFactor();
  var Cl_final = Cl_MolRatio / getAmphiboleFactor();

  var setToFixed = function (elem) {
    if (elem === 0) {
      return elem;
    } else if (elem === NaN){
      return 0;
    } else {
      return elem.toFixed(2);
    }
  }

  document.querySelector('#Na2O-output').innerText = setToFixed(Na2O_final);
  document.querySelector('#K2O-output').innerText = setToFixed(K2O_final);
  document.querySelector('#Al2O3-output').innerText = setToFixed(Al2O3_final);
  document.querySelector('#MgO-output').innerText = setToFixed(MgO_final);
  document.querySelector('#FeO-output').innerText = setToFixed(FeO_final);
  document.querySelector('#CaO-output').innerText = setToFixed(CaO_final);
  document.querySelector('#MnO-output').innerText = setToFixed(MnO_final);
  document.querySelector('#TiO2-output').innerText = setToFixed(TiO2_final);
  document.querySelector('#SiO2-output').innerText = setToFixed(SiO2_final);
  document.querySelector('#Cl-output').innerText = setToFixed(Cl_final);

});

buttonClear.addEventListener('click', function (evt) {

  // output clear
  document.querySelector('#Na2O-output').innerText = '';
  document.querySelector('#K2O-output').innerText = '';
  document.querySelector('#Al2O3-output').innerText = '';
  document.querySelector('#MgO-output').innerText = '';
  document.querySelector('#FeO-output').innerText = '';
  document.querySelector('#CaO-output').innerText = '';
  document.querySelector('#MnO-output').innerText = '';
  document.querySelector('#TiO2-output').innerText = '';
  document.querySelector('#SiO2-output').innerText = '';
  document.querySelector('#Cl-output').innerText = '';

  // input clear
  document.querySelector('#Na2O-input').value = '';
  document.querySelector('#K2O-input').value = '';
  document.querySelector('#Al2O3-input').value = '';
  document.querySelector('#MgO-input').value = '';
  document.querySelector('#FeO-input').value = '';
  document.querySelector('#CaO-input').value = '';
  document.querySelector('#MnO-input').value = '';
  document.querySelector('#TiO2-input').value = '';
  document.querySelector('#SiO2-input').value = '';
  document.querySelector('#Cl-input').value = '';


});
