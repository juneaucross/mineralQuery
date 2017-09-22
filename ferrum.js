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
  return elem / mol;
  // return molRatio;
}

// var getAmphiboleFactor = function () {
//   var amphiboleFactor = (getMolRatio(Na2O, NA2O_MOL)*2 + getMolRatio(K2O, K2O_MOL)*2 + getMolRatio(Al2O3, AL2O3_MOL)*2 + getMolRatio(MgO, MGO_MOL) + getMolRatio(FeO, FEO_MOL) + getMolRatio(CaO, CAO_MOL) + getMolRatio(MnO, MNO_MOL) + getMolRatio(TiO2, TIO2_MOL) + getMolRatio(SiO2, SIO2_MOL) + getMolRatio(Cl, CL_MOL)) / 15;
//   return amphiboleFactor;
// }

var button = document.querySelector('.form__btn');

button.addEventListener('click', function (evt) {

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

  evt.preventDefault();

  // var getMolRatio = function (elem, mol) {
  //   var molRatio = elem / mol;
  //   return molRatio;
  // }

  // mol ratios
  var Na2O_MolRatio = getMolRatio(Na2O, NA2O_MOL);
  var K2O_MolRatio = getMolRatio(K2O, K2O_MOL);
  var Al2O3_MolRatio = getMolRatio(Al2O3, AL2O3_MOL);
  var MgO_MolRatio = getMolRatio(MgO, MGO_MOL);
  var FeO_MolRatio = getMolRatio(FeO, FEO_MOL);
  var CaO_MolRatio = getMolRatio(CaO, CAO_MOL);
  var MnO_MolRatio = getMolRatio(MnO, MNO_MOL);
  var TiO2_MolRatio = getMolRatio(TiO2, TIO2_MOL);
  var SiO2_MolRatio = getMolRatio(SiO2, SIO2_MOL);
  var Cl_MolRatio = getMolRatio(Cl, CL_MOL);

  // cation ratios
  var Na2O_cationRatio = Na2O_MolRatio * 2;
  var K2O_cationRatio = K2O_MolRatio * 2;
  var Al2O3_cationRatio = Al2O3_MolRatio * 2;
  var MgO_cationRatio = MgO_MolRatio;
  var FeO_cationRatio = FeO_MolRatio;
  var CaO_cationRatio = CaO_MolRatio;
  var MnO_cationRatio = MnO_MolRatio;
  var TiO2_cationRatio = TiO2_MolRatio;
  var SiO2_cationRatio = SiO2_MolRatio;
  var Cl_cationRatio = Cl_MolRatio;

  // anion ratios
  var Na2O_anionRatio = Na2O_MolRatio;
  var K2O_anionRatio = K2O_MolRatio;
  var Al2O3_anionRatio = Al2O3_MolRatio * 3;
  var MgO_anionRatio = MgO_MolRatio;
  var FeO_anionRatio = FeO_MolRatio;
  var CaO_anionRatio = CaO_MolRatio;
  var MnO_anionRatio = MnO_MolRatio;
  var TiO2_anionRatio = TiO2_MolRatio * 2;
  var SiO2_anionRatio = SiO2_MolRatio * 2;
  var Cl_anionRatio = Cl_MolRatio;

  // var getCationRatio = function (elem) {
  //   var cationRatio = elem * 2;
  //   // console.log(elem + ' cationRatio = ' + cationRatio);
  //   return cationRatio;
  // }

  var getAnionRatioFactor = function () {
    return (Na2O_anionRatio + K2O_anionRatio + Al2O3_anionRatio + MgO_anionRatio + FeO_anionRatio + CaO_anionRatio + MnO_anionRatio + TiO2_anionRatio + SiO2_anionRatio + Cl_anionRatio) / 23;
    // return anionRatioFactor;
  }

  // getAnionRatioFactor();

  var getAmphiboleFactor =  function () {

    var amphiboleFactor = (Na2O_MolRatio + K2O_MolRatio + Al2O3_MolRatio + MgO_MolRatio + FeO_MolRatio + CaO_MolRatio + MnO_MolRatio + TiO2_MolRatio + SiO2_MolRatio + Cl_MolRatio) / 15;

    return amphiboleFactor;
  }

  var getApfu = function (mineral) {
    return mineral / getAnionRatioFactor();
  }

  var getApfuSumm = function () {
    return getApfu(MgO_cationRatio) + getApfu(FeO_cationRatio) + getApfu(SiO2_cationRatio) + getApfu(Al2O3_cationRatio) + getApfu(TiO2_cationRatio);
  }

  var getApfuSummFactor = function () {
    return 13 / getApfuSumm();
  }

  var getFerricFactor = function () {
    return 46 * (1 - getApfuSummFactor());
  }

  console.log('ferricFactor = ' + getFerricFactor());

  // apfu
  var Na2O_apfu = getApfu(Na2O_cationRatio);
  var K2O_apfu = getApfu(K2O_cationRatio);
  var Al2O3_apfu = getApfu(Al2O3_cationRatio);
  var MgO_apfu = getApfu(MgO_cationRatio);
  var FeO_apfu = getApfu(FeO_cationRatio);
  var CaO_apfu = getApfu(CaO_cationRatio);
  var MnO_apfu = getApfu(MnO_cationRatio);
  var TiO2_apfu = getApfu(TiO2_cationRatio);
  var SiO2_apfu = getApfu(SiO2_cationRatio);
  var Cl_apfu = getApfu(Cl_cationRatio);

  // corrected
  var Na2O_corr = Na2O_apfu * getApfuSummFactor();
  var K2O_corr = K2O_apfu * getApfuSummFactor();
  var Al2O3_corr = Al2O3_apfu * getApfuSummFactor();
  var MgO_corr = MgO_apfu * getApfuSummFactor();
  var FeO_corr = FeO_apfu * getApfuSummFactor();
  var CaO_corr = CaO_apfu * getApfuSummFactor();
  var MnO_corr = MnO_apfu * getApfuSummFactor();
  var TiO2_corr = TiO2_apfu * getApfuSummFactor();
  var SiO2_corr = SiO2_apfu * getApfuSummFactor();
  var Cl_corr = Cl_apfu * getApfuSummFactor();

  //ferric_mineral_1$negative_iron_check
  var FeO_ferric = FeO_corr - getFerricFactor();

  console.log(Na2O_corr);
  console.log(K2O_corr);
  console.log(Al2O3_corr);
  console.log(MgO_corr);
  console.log(FeO_corr);
  console.log(CaO_corr);
  console.log(MnO_corr);
  console.log(TiO2_corr);
  console.log(SiO2_corr);
  console.log(Cl_corr);

  console.log('ferr = ' + FeO_ferric);

  // console.log(Na2O_apfu);
  // console.log(K2O_apfu);
  // console.log(Al2O3_apfu);
  // console.log(MgO_apfu);
  // console.log(FeO_apfu);
  // console.log(CaO_apfu);
  // console.log(MnO_apfu);
  // console.log(TiO2_apfu);
  // console.log(SiO2_apfu);
  // console.log(Cl_apfu);

  // console.log(getApfu(Na2O_cationRatio));
  // console.log(getApfu(K2O_cationRatio));
  // console.log(getApfu(Al2O3_cationRatio));
  // console.log(getApfu(MgO_cationRatio));
  // console.log(getApfu(FeO_cationRatio));
  // console.log(getApfu(CaO_cationRatio));
  // console.log(getApfu(MnO_cationRatio));
  // console.log(getApfu(TiO2_cationRatio));
  // console.log(getApfu(SiO2_cationRatio));
  // console.log(getApfu(Cl_cationRatio));

  // final values for stage one
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
    } else {
      return elem.toFixed(6);
    }
  }

  document.querySelector('.form__output-cell--Na2O').innerText = setToFixed(Na2O_final);
  document.querySelector('.form__output-cell--K2O').innerText = setToFixed(K2O_final);
  document.querySelector('.form__output-cell--Al2O3').innerText = setToFixed(Al2O3_final);
  document.querySelector('.form__output-cell--MgO').innerText = setToFixed(MgO_final);
  document.querySelector('.form__output-cell--FeO').innerText = setToFixed(FeO_final);
  document.querySelector('.form__output-cell--CaO').innerText = setToFixed(CaO_final);
  document.querySelector('.form__output-cell--MnO').innerText = setToFixed(MnO_final);
  document.querySelector('.form__output-cell--TiO2').innerText = setToFixed(TiO2_final);
  document.querySelector('.form__output-cell--SiO2').innerText = setToFixed(SiO2_final);
  document.querySelector('.form__output-cell--Cl').innerText = setToFixed(Cl_final);
});
