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

var FE2O3 = 159.692;

// setting element values
var Na2O = 0, K2O = 0, Al2O3 = 0, MgO = 0, FeO = 0, CaO = 0, MnO = 0, TiO2 = 0, SiO2 = 0, Cl = 0;

var getMolRatio = function (elem, mol) {
  return elem / mol;
}

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

  var Fe3_ratio = (FeO * 1.1113); // jelezniy rating chego_to tam

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

  var FeO_negMolRatio = Fe3_ratio / FE2O3;

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

  var FeO_negCation = FeO_negMolRatio * 2;

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

  var FeO_negAnion = FeO_negMolRatio * 3;

  var getAnionRatioFactor = function () {
    return (Na2O_anionRatio + K2O_anionRatio + Al2O3_anionRatio + MgO_anionRatio + FeO_anionRatio + CaO_anionRatio + MnO_anionRatio + TiO2_anionRatio + SiO2_anionRatio + Cl_anionRatio) / 23;
  }

  var getAnionFerNegRatio = function () {
    return (Na2O_anionRatio + K2O_anionRatio + Al2O3_anionRatio + MgO_anionRatio + FeO_negAnion + CaO_anionRatio + MnO_anionRatio + TiO2_anionRatio + SiO2_anionRatio + Cl_anionRatio) / 23;
  }

  var getAmphiboleFactor =  function () {

    var amphiboleFactor = (Na2O_MolRatio + K2O_MolRatio + Al2O3_MolRatio + MgO_MolRatio + FeO_MolRatio + CaO_MolRatio + MnO_MolRatio + TiO2_MolRatio + SiO2_MolRatio + Cl_MolRatio) / 15;

    return amphiboleFactor;
  }

  var getApfu = function (mineral) {
    return mineral / getAnionRatioFactor();
  }

  var FeO_negApfu = function () {
    return FeO_negCation / getAnionFerNegRatio();
  }

  // R's S function
  var getApfuSumm = function () {
    return getApfu(MgO_cationRatio) + getApfu(FeO_cationRatio) + getApfu(SiO2_cationRatio) + getApfu(Al2O3_cationRatio) + getApfu(TiO2_cationRatio);
  }

  var getApfuSummFactor = function () {
    return 13 / getApfuSumm();
  }

  // R's F function
  var getFerricFactor = function () {
    return 46 * (1 - getApfuSummFactor());
  }

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

  var FeOneg_apfu = getApfu(FeO_negMolRatio);

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

  // R's ferric_mineral_1$negative_iron_check function
  var FeO_ferric = FeO_corr - getFerricFactor();

  // final values for stage one (amphibole)
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
      return elem.toFixed(2);
    }
  }

  // amphibole table output
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

  // apfu table output
  var apfuTable = document.querySelector('.apfu-table')

  apfuTable.querySelector('.table__output--apfu-Na2O').innerText = setToFixed(Na2O_apfu);
  apfuTable.querySelector('.table__output--apfu-K2O').innerText = setToFixed(K2O_apfu);
  apfuTable.querySelector('.table__output--apfu-Al2O3').innerText = setToFixed(Al2O3_apfu);
  apfuTable.querySelector('.table__output--apfu-MgO').innerText = setToFixed(MgO_apfu);
  apfuTable.querySelector('.table__output--apfu-FeO').innerText = setToFixed(FeO_apfu);
  apfuTable.querySelector('.table__output--apfu-CaO').innerText = setToFixed(CaO_apfu);
  apfuTable.querySelector('.table__output--apfu-MnO').innerText = setToFixed(MnO_apfu);
  apfuTable.querySelector('.table__output--apfu-TiO2').innerText = setToFixed(TiO2_apfu);
  apfuTable.querySelector('.table__output--apfu-SiO2').innerText = setToFixed(SiO2_apfu);
  apfuTable.querySelector('.table__output--apfu-Cl').innerText = setToFixed(Cl_apfu);

  // corr table output
  var corrTable = document.querySelector('.corr-table')

  corrTable.querySelector('.table__output--corr-Na2O').innerText = setToFixed(Na2O_corr);
  corrTable.querySelector('.table__output--corr-K2O').innerText = setToFixed(K2O_corr);
  corrTable.querySelector('.table__output--corr-Al2O3').innerText = setToFixed(Al2O3_corr);
  corrTable.querySelector('.table__output--corr-MgO').innerText = setToFixed(MgO_corr);
  corrTable.querySelector('.table__output--corr-FeO').innerText = setToFixed(FeO_ferric);
  corrTable.querySelector('.table__output--ferr-FeO').innerText = setToFixed(getFerricFactor());
  corrTable.querySelector('.table__output--corr-CaO').innerText = setToFixed(CaO_corr);
  corrTable.querySelector('.table__output--corr-MnO').innerText = setToFixed(MnO_corr);
  corrTable.querySelector('.table__output--corr-TiO2').innerText = setToFixed(TiO2_corr);
  corrTable.querySelector('.table__output--corr-SiO2').innerText = setToFixed(SiO2_corr);
  corrTable.querySelector('.table__output--corr-Cl').innerText = setToFixed(Cl_corr);

  // ferr table output
  var ferrTable = document.querySelector('.ferr-table');

  ferrTable.querySelector('.table__output--corr-Na2O').innerText = setToFixed(Na2O_corr);
  ferrTable.querySelector('.table__output--corr-K2O').innerText = setToFixed(K2O_corr);
  ferrTable.querySelector('.table__output--corr-Al2O3').innerText = setToFixed(Al2O3_corr);
  ferrTable.querySelector('.table__output--corr-MgO').innerText = setToFixed(MgO_corr);
  ferrTable.querySelector('.table__output--corr-FeO').innerText = setToFixed(FeOneg_apfu);
  // ferrTable.querySelector('.table__output--ferr-FeO').innerText = setToFixed(FeO_ferric);
  ferrTable.querySelector('.table__output--corr-CaO').innerText = setToFixed(CaO_corr);
  ferrTable.querySelector('.table__output--corr-MnO').innerText = setToFixed(MnO_corr);
  ferrTable.querySelector('.table__output--corr-TiO2').innerText = setToFixed(TiO2_corr);
  ferrTable.querySelector('.table__output--corr-SiO2').innerText = setToFixed(SiO2_corr);
  ferrTable.querySelector('.table__output--corr-Cl').innerText = setToFixed(Cl_corr);

  // tables visibility
  if (getApfuSumm() <= 13)  {
    apfuTable.style.display = 'table';
    corrTable.style.display = 'none';
    ferrTable.style.display = 'none';
  } else if (getApfuSumm() > 13 && getFerricFactor() > 0) {
    apfuTable.style.display = 'none';
    corrTable.style.display = 'table';
    ferrTable.style.display = 'none';
  } else if (getApfuSumm() > 13 && getFerricFactor() < 0) {
    apfuTable.style.display = 'none';
    corrTable.style.display = 'none';
    ferrTable.style.display = 'table';
  }

});

// thats all, falks
