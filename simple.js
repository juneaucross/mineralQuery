'use strict';

// consts
var NA2O_MOL = 61.979;
var K2O_MOL = 94.196;
var AL2O3_MOL = 101.961;
var MGO_MOL = 40.304;
var FEO_MOL = 71.846;
var FE2O3_MOL = 159.692; // new
var CAO_MOL = 56.077;
var MNO_MOL = 70.938;
var TIO2_MOL = 79.879;
var SIO2_MOL = 60.084;
var CL_MOL = 35.453;

var getMolRatio = function (elem, mol) {
  return elem / mol;
}

var buttonCalculate = document.querySelector('.button--calculate');
var buttonClear = document.querySelector('.button--clear');

buttonCalculate.addEventListener('click', function (evt) {

  var Na2O = document.querySelector('#Na2O-input').value;
  var K2O = document.querySelector('#K2O-input').value;
  var Al2O3 = document.querySelector('#Al2O3-input').value;
  var MgO = document.querySelector('#MgO-input').value;
  var FeO = document.querySelector('#FeO-input').value;
  var Fe2O3 = document.querySelector('#Fe2O3-input').value;
  var CaO = document.querySelector('#CaO-input').value;
  var MnO = document.querySelector('#MnO-input').value;
  var TiO2 = document.querySelector('#TiO2-input').value;
  var SiO2 = document.querySelector('#SiO2-input').value;
  var Cl = document.querySelector('#Cl-input').value;

  evt.preventDefault();

  // mol ratios
  var Na2O_MolRatio = getMolRatio(Na2O, NA2O_MOL);
  var K2O_MolRatio = getMolRatio(K2O, K2O_MOL);
  var Al2O3_MolRatio = getMolRatio(Al2O3, AL2O3_MOL);
  var MgO_MolRatio = getMolRatio(MgO, MGO_MOL);
  var FeO_MolRatio = getMolRatio(FeO, FEO_MOL);
  var Fe2O3_MolRatio = getMolRatio(Fe2O3, FE2O3_MOL);
  var CaO_MolRatio = getMolRatio(CaO, CAO_MOL);
  var MnO_MolRatio = getMolRatio(MnO, MNO_MOL);
  var TiO2_MolRatio = getMolRatio(TiO2, TIO2_MOL);
  var SiO2_MolRatio = getMolRatio(SiO2, SIO2_MOL);
  var Cl_MolRatio = getMolRatio(Cl, CL_MOL);

  // anion ratios
  var Na2O_anionRatio = Na2O_MolRatio;
  var K2O_anionRatio = K2O_MolRatio;
  var Al2O3_anionRatio = Al2O3_MolRatio * 3;
  var MgO_anionRatio = MgO_MolRatio;
  var FeO_anionRatio = FeO_MolRatio;
  var Fe2O3_anionRatio = Fe2O3_MolRatio * 3;
  var CaO_anionRatio = CaO_MolRatio;
  var MnO_anionRatio = MnO_MolRatio;
  var TiO2_anionRatio = TiO2_MolRatio * 2;
  var SiO2_anionRatio = SiO2_MolRatio * 2;
  var Cl_anionRatio = Cl_MolRatio;

  var getAnionRatioFactor = function (divisor) {
    // prosto anion rating
    return (Na2O_anionRatio + K2O_anionRatio + Al2O3_anionRatio + MgO_anionRatio + FeO_anionRatio + Fe2O3_anionRatio + CaO_anionRatio + MnO_anionRatio + TiO2_anionRatio + SiO2_anionRatio + Cl_anionRatio) / divisor;
  }

  var getApfu = function (mineral) {
    return mineral / getAnionRatioFactor(8);
  }

  // apfu
  var Na2O_apfu = getApfu(Na2O_anionRatio);
  var K2O_apfu = getApfu(K2O_anionRatio);
  var Al2O3_apfu = getApfu(Al2O3_anionRatio);
  var MgO_apfu = getApfu(MgO_anionRatio);
  var FeO_apfu = getApfu(FeO_anionRatio);
  var Fe2O3_apfu = getApfu(Fe2O3_anionRatio);
  var CaO_apfu = getApfu(CaO_anionRatio);
  var MnO_apfu = getApfu(MnO_anionRatio);
  var TiO2_apfu = getApfu(TiO2_anionRatio);
  var SiO2_apfu = getApfu(SiO2_anionRatio);
  var Cl_apfu = getApfu(Cl_anionRatio);

  var setToFixed = function (elem) {
    if (elem === 0) {
      return elem;
    } else if (elem.toFixed(2) < 0.0001) {
      return 0;
    } else if (isNaN(elem)) {
      return 0;
    } else {
      return elem.toFixed(2);
    }
  }

  // prost outputy dlya prilojeniya
  document.querySelector('#Na2O-output').innerText = setToFixed(Na2O_apfu);
  document.querySelector('#K2O-output').innerText = setToFixed(K2O_apfu);
  document.querySelector('#Al2O3-output').innerText = setToFixed(Al2O3_apfu);
  document.querySelector('#MgO-output').innerText = setToFixed(MgO_apfu);
  document.querySelector('#FeO-output').innerText = setToFixed(FeO_apfu);
  document.querySelector('#Fe2O3-output').innerText = setToFixed(Fe2O3_apfu);
  document.querySelector('#CaO-output').innerText = setToFixed(CaO_apfu);
  document.querySelector('#MnO-output').innerText = setToFixed(MnO_apfu);
  document.querySelector('#TiO2-output').innerText = setToFixed(TiO2_apfu);
  document.querySelector('#SiO2-output').innerText = setToFixed(SiO2_apfu);
  document.querySelector('#Cl-output').innerText = setToFixed(Cl_apfu);

});

buttonClear.addEventListener('click', function (evt) {

  // output clear
  document.querySelector('#Na2O-output').innerText = '';
  document.querySelector('#K2O-output').innerText = '';
  document.querySelector('#Al2O3-output').innerText = '';
  document.querySelector('#MgO-output').innerText = '';
  document.querySelector('#FeO-output').innerText = '';
  document.querySelector('#Fe2O3-output').innerText = '';
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
  document.querySelector('#Fe2O3-input').value = '';
  document.querySelector('#CaO-input').value = '';
  document.querySelector('#MnO-input').value = '';
  document.querySelector('#TiO2-input').value = '';
  document.querySelector('#SiO2-input').value = '';
  document.querySelector('#Cl-input').value = '';

});


// thats all, falks
