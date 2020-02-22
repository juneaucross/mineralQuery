"use strict";$(".description-text--more").hide(),$(".main__input-cell--Fe2O3").hide(),$(".main__output-cell--Fe2O3").hide(),$(window).width()<600&&$(".main__output-area").hide();var NA2O_MOL=61.979,K2O_MOL=94.196,AL2O3_MOL=101.961,MGO_MOL=40.304,FEO_MOL=71.846,CAO_MOL=56.077,MNO_MOL=70.938,TIO2_MOL=79.879,SIO2_MOL=60.084,FE2O3_MOL=159.692;const KEYCODES={ENTER:13,SPACE:32};var thirteen=13,fifteen=15,twentyThree=23,fourtySix=46,Na2O=0,K2O=0,Al2O3=0,MgO=0,FeO=0,CaO=0,MnO=0,TiO2=0,SiO2=0;$("#Na2O-input").on("input",(function(){Na2O=this.value})),$("#K2O-input").on("input",(function(){K2O=this.value})),$("#Al2O3-input").on("input",(function(){Al2O3=this.value})),$("#MgO-input").on("input",(function(){MgO=this.value})),$("#FeO-input").on("input",(function(){FeO=this.value})),$("#Fe2O3-input").on("input",(function(){Fe2O3=this.value})),$("#CaO-input").on("input",(function(){CaO=this.value})),$("#MnO-input").on("input",(function(){MnO=this.value})),$("#TiO2-input").on("input",(function(){TiO2=this.value})),$("#SiO2-input").on("input",(function(){SiO2=this.value}));var calculate=function(){var t=function(t,e){return t/e},e=1.1113*FeO,u=t(Na2O,NA2O_MOL),n=t(K2O,K2O_MOL),l=t(Al2O3,AL2O3_MOL),i=t(MgO,MGO_MOL),o=t(FeO,FEO_MOL),a=t(CaO,CAO_MOL),O=t(MnO,MNO_MOL),p=t(TiO2,TIO2_MOL),c=t(SiO2,SIO2_MOL),r=e/FE2O3_MOL,s=2*u,_=2*n,f=2*l,m=i,x=o,M=a,d=O,h=p,F=c,S=u,w=n,v=3*l,g=i,A=o,T=a,L=O,V=2*p,C=2*c,b=function(){return(u+n+l+i+o+a+O+p+c)/fifteen},N=function(t){return t/((S+w+v+g+A+T+L+V+C)/mineralSelectValueX)},K=function(){return 23==mineralSelectValueX?N(m)+N(x)+N(F)+N(f)+N(h):6==mineralSelectValueX||12==mineralSelectValueX?N(s)+N(_)+N(f)+N(m)+N(x)+N(M)+N(d)+N(F)+N(h):(console.log("wrong select value!"),!1)},D=function(){return mineralSelectValueT/K()},E=function(){return 2*mineralSelectValueX*(1-D())},X=N(s),y=N(_),U=N(f),k=N(m),I=N(x),G=N(M),P=N(d),R=N(h),Y=N(F),j=N(r),q=X*D(),z=y*D(),B=U*D(),H=k*D(),J=I*D(),Q=G*D(),W=P*D(),Z=R*D(),tt=Y*D(),et=J-E(),ut=(b(),b(),b(),b(),b(),b(),b(),b(),b(),function(t){return 0===t?t:t.toFixed(2)});K()<=mineralSelectValueT?($(".main__input-cell--Fe2O3").slideUp("fast"),$(".main__output-cell--Fe2O3").slideUp("fast"),console.log("тут апфу! и все охуенно пашет !!"),$("#Na2O-output").text(ut(X)),$("#K2O-output").text(ut(y)),$("#Al2O3-output").text(ut(U)),$("#MgO-output").text(ut(k)),$("#FeO-output").text(ut(I)),$("#CaO-output").text(ut(G)),$("#MnO-output").text(ut(P)),$("#TiO2-output").text(ut(R)),$("#SiO2-output").text(ut(Y))):K()>mineralSelectValueT&&E()>0?$(window).width()>=600?($(".main__input-cell--Fe2O3").slideDown("fast"),$(".main__output-cell--Fe2O3").slideDown("fast"),console.log("тут корр! и все охуенно пашет !!"),$("#Na2O-output").text(ut(q)),$("#K2O-output").text(ut(z)),$("#Al2O3-output").text(ut(B)),$("#MgO-output").text(ut(H)),$("#FeO-output").text(ut(et)),$("#Fe2O3-output").text(ut(E())),$("#CaO-output").text(ut(Q)),$("#MnO-output").text(ut(W)),$("#TiO2-output").text(ut(Z)),$("#SiO2-output").text(ut(tt))):($(".main__output-cell--Fe2O3").slideDown("fast"),console.log("тут корр! и все охуенно пашет !!"),$("#Na2O-output").text(ut(q)),$("#K2O-output").text(ut(z)),$("#Al2O3-output").text(ut(B)),$("#MgO-output").text(ut(H)),$("#FeO-output").text(ut(et)),$("#Fe2O3-output").text(ut(E())),$("#CaO-output").text(ut(Q)),$("#MnO-output").text(ut(W)),$("#TiO2-output").text(ut(Z)),$("#SiO2-output").text(ut(tt))):K()>mineralSelectValueT&&E()<0&&($(window).width()>=600?($(".main__input-cell--Fe2O3").slideDown("fast"),$(".main__output-cell--Fe2O3").slideDown("fast"),console.log("тут ферум"),$("#Na2O-output").text(ut(q)),$("#K2O-output").text(ut(z)),$("#Al2O3-output").text(ut(U)),$("#MgO-output").text(ut(H)),$("#FeO-output").text(ut(j)),$("#Fe2O3-output").text(ut(et)),$("#CaO-output").text(ut(Q)),$("#MnO-output").text(ut(W)),$("#TiO2-output").text(ut(Z)),$("#SiO2-output").text(ut(tt))):($(".main__output-cell--Fe2O3").slideDown("fast"),console.log("тут ферум"),$("#Na2O-output").text(ut(q)),$("#K2O-output").text(ut(z)),$("#Al2O3-output").text(ut(U)),$("#MgO-output").text(ut(H)),$("#FeO-output").text(ut(j)),$("#Fe2O3-output").text(ut(et)),$("#CaO-output").text(ut(Q)),$("#MnO-output").text(ut(W)),$("#TiO2-output").text(ut(Z)),$("#SiO2-output").text(ut(tt)))),$(window).width()<600&&$(".main__output-area").slideDown("fast",(function(){$("html, body").animate({scrollTop:$(document).height()},"fast")}))},mineralSelectValueX=+$("#mineral-select")[0].value,mineralSelectValueT=13;$("#mineral-select").on("change",(function(){23==(mineralSelectValueX=+$("#mineral-select")[0].value)?mineralSelectValueT=13:6==mineralSelectValueX?mineralSelectValueT=4:12==mineralSelectValueX&&(mineralSelectValueT=8)}));var clear=function(){Na2O=0,K2O=0,Al2O3=0,MgO=0,FeO=0,CaO=0,MnO=0,TiO2=0,SiO2=0,$(".main__input").val(""),$(".main__output").text(""),inputsArr.length=0,$(".main__input-cell--Fe2O3").slideUp("fast"),$(".main__output-cell--Fe2O3").slideUp("fast"),$(".button--calculate-ferrum").prop("disabled",!0),$(window).width()<600&&$(".main__output-area").slideUp("fast")};$(document).keydown((function(t){13==t.which&&inputsArr.length>=2&&$(".button--calculate-ferrum").addClass("button--calculate-ferrum-active")})),$(document).keyup((function(t){13==t.which&&inputsArr.length>=2&&($(".button--calculate-ferrum").removeClass("button--calculate-ferrum-active"),calculate())})),$(".button--calculate-ferrum").on("click",(function(){calculate()})),$(".button--clear").on("click",(function(){clear()})),$(".button--calculate-ferrum").prop("disabled",!0);var inputsArr=[];$(".main").on("input",(function(t){t.preventDefault(),(inputsArr=Array.prototype.filter.call($(".main__input"),t=>""!==t.value)).length<2?$(".button--calculate-ferrum").prop("disabled",!0):inputsArr.length>=2&&$(".button--calculate-ferrum").prop("disabled",!1)}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlcnJ1bS5qcyJdLCJuYW1lcyI6WyIkIiwiaGlkZSIsIndpbmRvdyIsIndpZHRoIiwiTkEyT19NT0wiLCJLMk9fTU9MIiwiQUwyTzNfTU9MIiwiTUdPX01PTCIsIkZFT19NT0wiLCJDQU9fTU9MIiwiTU5PX01PTCIsIlRJTzJfTU9MIiwiU0lPMl9NT0wiLCJGRTJPM19NT0wiLCJLRVlDT0RFUyIsIkVOVEVSIiwiU1BBQ0UiLCJ0aGlydGVlbiIsImZpZnRlZW4iLCJ0d2VudHlUaHJlZSIsImZvdXJ0eVNpeCIsIk5hMk8iLCJLMk8iLCJBbDJPMyIsIk1nTyIsIkZlTyIsIkNhTyIsIk1uTyIsIlRpTzIiLCJTaU8yIiwib24iLCJ0aGlzIiwidmFsdWUiLCJGZTJPMyIsImNhbGN1bGF0ZSIsImdldE1vbFJhdGlvIiwiZWxlbSIsIm1vbCIsIkZlM19yYXRpbyIsIk5hMk9fTW9sUmF0aW8iLCJLMk9fTW9sUmF0aW8iLCJBbDJPM19Nb2xSYXRpbyIsIk1nT19Nb2xSYXRpbyIsIkZlT19Nb2xSYXRpbyIsIkNhT19Nb2xSYXRpbyIsIk1uT19Nb2xSYXRpbyIsIlRpTzJfTW9sUmF0aW8iLCJTaU8yX01vbFJhdGlvIiwiRmVPX25lZ01vbFJhdGlvIiwiTmEyT19jYXRpb25SYXRpbyIsIksyT19jYXRpb25SYXRpbyIsIkFsMk8zX2NhdGlvblJhdGlvIiwiTWdPX2NhdGlvblJhdGlvIiwiRmVPX2NhdGlvblJhdGlvIiwiQ2FPX2NhdGlvblJhdGlvIiwiTW5PX2NhdGlvblJhdGlvIiwiVGlPMl9jYXRpb25SYXRpbyIsIlNpTzJfY2F0aW9uUmF0aW8iLCJOYTJPX2FuaW9uUmF0aW8iLCJLMk9fYW5pb25SYXRpbyIsIkFsMk8zX2FuaW9uUmF0aW8iLCJNZ09fYW5pb25SYXRpbyIsIkZlT19hbmlvblJhdGlvIiwiQ2FPX2FuaW9uUmF0aW8iLCJNbk9fYW5pb25SYXRpbyIsIlRpTzJfYW5pb25SYXRpbyIsIlNpTzJfYW5pb25SYXRpbyIsImdldEFtcGhpYm9sZUZhY3RvciIsImdldEFwZnUiLCJtaW5lcmFsIiwibWluZXJhbFNlbGVjdFZhbHVlWCIsImdldEFwZnVTdW1tIiwiY29uc29sZSIsImxvZyIsImdldEFwZnVTdW1tRmFjdG9yIiwibWluZXJhbFNlbGVjdFZhbHVlVCIsImdldEZlcnJpY0ZhY3RvciIsIk5hMk9fYXBmdSIsIksyT19hcGZ1IiwiQWwyTzNfYXBmdSIsIk1nT19hcGZ1IiwiRmVPX2FwZnUiLCJDYU9fYXBmdSIsIk1uT19hcGZ1IiwiVGlPMl9hcGZ1IiwiU2lPMl9hcGZ1IiwiRmVPbmVnX2FwZnUiLCJOYTJPX2NvcnIiLCJLMk9fY29yciIsIkFsMk8zX2NvcnIiLCJNZ09fY29yciIsIkZlT19jb3JyIiwiQ2FPX2NvcnIiLCJNbk9fY29yciIsIlRpTzJfY29yciIsIlNpTzJfY29yciIsIkZlT19mZXJyaWMiLCJzZXRUb0ZpeGVkIiwidG9GaXhlZCIsInNsaWRlVXAiLCJ0ZXh0Iiwic2xpZGVEb3duIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImRvY3VtZW50IiwiaGVpZ2h0IiwiY2xlYXIiLCJ2YWwiLCJpbnB1dHNBcnIiLCJsZW5ndGgiLCJwcm9wIiwia2V5ZG93biIsImUiLCJ3aGljaCIsImFkZENsYXNzIiwia2V5dXAiLCJyZW1vdmVDbGFzcyIsInByZXZlbnREZWZhdWx0IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmaWx0ZXIiLCJjYWxsIiwiaXRlbSJdLCJtYXBwaW5ncyI6IkFBQUEsYUFHQUEsRUFBRSwyQkFBMkJDLE9BQzdCRCxFQUFFLDRCQUE0QkMsT0FDOUJELEVBQUUsNkJBQTZCQyxPQUczQkQsRUFBRUUsUUFBUUMsUUFBVSxLQUN0QkgsRUFBRSxzQkFBc0JDLE9BSTFCLElBQUlHLFNBQVcsT0FDWEMsUUFBVSxPQUNWQyxVQUFZLFFBQ1pDLFFBQVUsT0FDVkMsUUFBVSxPQUNWQyxRQUFVLE9BQ1ZDLFFBQVUsT0FDVkMsU0FBVyxPQUNYQyxTQUFXLE9BRVhDLFVBQVksUUFFaEIsTUFBTUMsU0FBVyxDQUNmQyxNQUFPLEdBQ1BDLE1BQU8sSUFJVCxJQUFJ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TUFBTUMsVUFBVUMsT0FBT0MsS0FBS3pILEVBQUUsZ0JBQWlCMEgsR0FDckMsS0FBZkEsRUFBSzFGLFFBR0E2RSxPQUFTLEVBQ3JCN0csRUFBRSw2QkFBNkI4RyxLQUFLLFlBQVksR0FDdkNGLFVBQVVDLFFBQVUsR0FDN0I3RyxFQUFFLDZCQUE2QjhHLEtBQUssWUFBWSIsImZpbGUiOiJmZXJydW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8vIHZpc2liaWxpdHkgc2V0dGluZ3NcbiQoJy5kZXNjcmlwdGlvbi10ZXh0LS1tb3JlJykuaGlkZSgpO1xuJCgnLm1haW5fX2lucHV0LWNlbGwtLUZlMk8zJykuaGlkZSgpO1xuJCgnLm1haW5fX291dHB1dC1jZWxsLS1GZTJPMycpLmhpZGUoKTtcblxuLy8gbWVkaWEgcXVlcnlzIG9wdGlvbnNcbmlmICgkKHdpbmRvdykud2lkdGgoKSA8IDYwMCkge1xuICAkKCcubWFpbl9fb3V0cHV0LWFyZWEnKS5oaWRlKCk7XG59XG5cbi8vIENPTlNUU1xudmFyIE5BMk9fTU9MID0gNjEuOTc5O1xudmFyIEsyT19NT0wgPSA5NC4xOTY7XG52YXIgQUwyTzNfTU9MID0gMTAxLjk2MTtcbnZhciBNR09fTU9MID0gNDAuMzA0O1xudmFyIEZFT19NT0wgPSA3MS44NDY7XG52YXIgQ0FPX01PTCA9IDU2LjA3NztcbnZhciBNTk9fTU9MID0gNzAuOTM4O1xudmFyIFRJTzJfTU9MID0gNzkuODc5O1xudmFyIFNJTzJfTU9MID0gNjAuMDg0O1xuLy8gdmFyIENMX01PTCA9IDM1LjQ1MztcbnZhciBGRTJPM19NT0wgPSAxNTkuNjkyO1xuXG5jb25zdCBLRVlDT0RFUyA9IHtcbiAgRU5URVI6IDEzLFxuICBTUEFDRTogMzIsXG59O1xuXG4vLyBtYWdpYyBkaXZpc29yIG51bWJlcnNcbnZhciB0aGlydGVlbiA9IDEzOyAvLyBtaW5lcmFsU2VsZWN0VmFsdWVUXG52YXIgZmlmdGVlbiA9IDE1OyAvLyA/Pz9cbnZhciB0d2VudHlUaHJlZSA9IDIzOyAvLyBtaW5lcmFsU2VsZWN0VmFsdWVYXG52YXIgZm91cnR5U2l4ID0gNDY7IC8vIDIgKiBtaW5lcmFsU2VsZWN0VmFsdWVYXG5cbi8vIHNldHRpbmcgZWxlbWVudCB2YWx1ZXNcbnZhciBOYTJPID0gMCwgSzJPID0gMCwgQWwyTzMgPSAwLCBNZ08gPSAwLCBGZU8gPSAwLCBDYU8gPSAwLCBNbk8gPSAwLCBUaU8yID0gMCwgU2lPMiA9IDA7XG4vLyBDbCA9IDA7XG5cbi8vIGdldHRpbmcgaW5wdXRzIHZhbHVlc1xuJCgnI05hMk8taW5wdXQnKS5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgTmEyTyA9IHRoaXMudmFsdWU7XG59KTtcbiQoJyNLMk8taW5wdXQnKS5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgSzJPID0gdGhpcy52YWx1ZTtcbn0pO1xuJCgnI0FsMk8zLWlucHV0Jykub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gIEFsMk8zID0gdGhpcy52YWx1ZTtcbn0pO1xuJCgnI01nTy1pbnB1dCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICBNZ08gPSB0aGlzLnZhbHVlO1xufSk7XG4kKCcjRmVPLWlucHV0Jykub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gIEZlTyA9IHRoaXMudmFsdWU7XG59KTtcbiQoJyNGZTJPMy1pbnB1dCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICBGZTJPMyA9IHRoaXMudmFsdWU7XG59KTtcbiQoJyNDYU8taW5wdXQnKS5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgQ2FPID0gdGhpcy52YWx1ZTtcbn0pO1xuJCgnI01uTy1pbnB1dCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICBNbk8gPSB0aGlzLnZhbHVlO1xufSk7XG4kKCcjVGlPMi1pbnB1dCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICBUaU8yID0gdGhpcy52YWx1ZTtcbn0pO1xuJCgnI1NpTzItaW5wdXQnKS5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgU2lPMiA9IHRoaXMudmFsdWU7XG59KTtcbi8vICQoJyNDbC1pbnB1dCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuLy8gICBDbCA9IHRoaXMudmFsdWU7XG4vLyB9KTtcblxuLy9jYWxjdWxhdGUgZnVuY3Rpb25cbnZhciBjYWxjdWxhdGUgPSBmdW5jdGlvbiAoKSB7XG5cblxuICB2YXIgZ2V0TW9sUmF0aW8gPSBmdW5jdGlvbiAoZWxlbSwgbW9sKSB7XG4gICAgcmV0dXJuIGVsZW0gLyBtb2w7XG4gIH1cblxuXG4gIHZhciBGZTNfcmF0aW8gPSAoRmVPICogMS4xMTEzKTsgLy8gYWxsIGlyb24gaXMgRmUyTzNcblxuICAvLyBtb2wgcmF0aW9zXG4gIHZhciBOYTJPX01vbFJhdGlvID0gZ2V0TW9sUmF0aW8oTmEyTywgTkEyT19NT0wpO1xuICB2YXIgSzJPX01vbFJhdGlvID0gZ2V0TW9sUmF0aW8oSzJPLCBLMk9fTU9MKTtcbiAgdmFyIEFsMk8zX01vbFJhdGlvID0gZ2V0TW9sUmF0aW8oQWwyTzMsIEFMMk8zX01PTCk7XG4gIHZhciBNZ09fTW9sUmF0aW8gPSBnZXRNb2xSYXRpbyhNZ08sIE1HT19NT0wpO1xuICB2YXIgRmVPX01vbFJhdGlvID0gZ2V0TW9sUmF0aW8oRmVPLCBGRU9fTU9MKTtcbiAgdmFyIENhT19Nb2xSYXRpbyA9IGdldE1vbFJhdGlvKENhTywgQ0FPX01PTCk7XG4gIHZhciBNbk9fTW9sUmF0aW8gPSBnZXRNb2xSYXRpbyhNbk8sIE1OT19NT0wpO1xuICB2YXIgVGlPMl9Nb2xSYXRpbyA9IGdldE1vbFJhdGlvKFRpTzIsIFRJTzJfTU9MKTtcbiAgdmFyIFNpTzJfTW9sUmF0aW8gPSBnZXRNb2xSYXRpbyhTaU8yLCBTSU8yX01PTCk7XG4gIC8vIHZhciBDbF9Nb2xSYXRpbyA9IGdldE1vbFJhdGlvKENsLCBDTF9NT0wpO1xuXG4gIHZhciBGZU9fbmVnTW9sUmF0aW8gPSBGZTNfcmF0aW8gLyBGRTJPM19NT0w7XG5cbiAgLy8gY2F0aW9uIHJhdGlvc1xuICB2YXIgTmEyT19jYXRpb25SYXRpbyA9IE5hMk9fTW9sUmF0aW8gKiAyO1xuICB2YXIgSzJPX2NhdGlvblJhdGlvID0gSzJPX01vbFJhdGlvICogMjtcbiAgdmFyIEFsMk8zX2NhdGlvblJhdGlvID0gQWwyTzNfTW9sUmF0aW8gKiAyO1xuICB2YXIgTWdPX2NhdGlvblJhdGlvID0gTWdPX01vbFJhdGlvO1xuICB2YXIgRmVPX2NhdGlvblJhdGlvID0gRmVPX01vbFJhdGlvO1xuICB2YXIgQ2FPX2NhdGlvblJhdGlvID0gQ2FPX01vbFJhdGlvO1xuICB2YXIgTW5PX2NhdGlvblJhdGlvID0gTW5PX01vbFJhdGlvO1xuICB2YXIgVGlPMl9jYXRpb25SYXRpbyA9IFRpTzJfTW9sUmF0aW87XG4gIHZhciBTaU8yX2NhdGlvblJhdGlvID0gU2lPMl9Nb2xSYXRpbztcbiAgLy8gdmFyIENsX2NhdGlvblJhdGlvID0gQ2xfTW9sUmF0aW87XG5cbiAgdmFyIEZlT19uZWdDYXRpb24gPSBGZU9fbmVnTW9sUmF0aW8gKiAyO1xuXG4gIC8vIGFuaW9uIHJhdGlvc1xuICB2YXIgTmEyT19hbmlvblJhdGlvID0gTmEyT19Nb2xSYXRpbztcbiAgdmFyIEsyT19hbmlvblJhdGlvID0gSzJPX01vbFJhdGlvO1xuICB2YXIgQWwyTzNfYW5pb25SYXRpbyA9IEFsMk8zX01vbFJhdGlvICogMztcbiAgdmFyIE1nT19hbmlvblJhdGlvID0gTWdPX01vbFJhdGlvO1xuICB2YXIgRmVPX2FuaW9uUmF0aW8gPSBGZU9fTW9sUmF0aW87XG4gIHZhciBDYU9fYW5pb25SYXRpbyA9IENhT19Nb2xSYXRpbztcbiAgdmFyIE1uT19hbmlvblJhdGlvID0gTW5PX01vbFJhdGlvO1xuICB2YXIgVGlPMl9hbmlvblJhdGlvID0gVGlPMl9Nb2xSYXRpbyAqIDI7XG4gIHZhciBTaU8yX2FuaW9uUmF0aW8gPSBTaU8yX01vbFJhdGlvICogMjtcbiAgLy8gdmFyIENsX2FuaW9uUmF0aW8gPSBDbF9Nb2xSYXRpbztcblxuICB2YXIgRmVPX25lZ0FuaW9uID0gRmVPX25lZ01vbFJhdGlvICogMztcblxuICAvL2NhbGMgdXNpbmcgYW5pb24gc3Vtc1xuICB2YXIgZ2V0QW5pb25SYXRpb0ZhY3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKE5hMk9fYW5pb25SYXRpbyArIEsyT19hbmlvblJhdGlvICsgQWwyTzNfYW5pb25SYXRpbyArIE1nT19hbmlvblJhdGlvICsgRmVPX2FuaW9uUmF0aW8gKyBDYU9fYW5pb25SYXRpbyArIE1uT19hbmlvblJhdGlvICsgVGlPMl9hbmlvblJhdGlvICsgU2lPMl9hbmlvblJhdGlvKSAvIG1pbmVyYWxTZWxlY3RWYWx1ZVg7IC8vIG9yaWdpbmFsbHkgMjNcbiAgICAvLyAgKyBDbF9hbmlvblJhdGlvXG4gIH1cblxuICAvL2NhbGMgdXNpbmcgYW5pb24gc3VtcyB3aXRoIGFsbCBhcmlvbiBGZTJPM1xuICB2YXIgZ2V0QW5pb25GZXJOZWdSYXRpbyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKE5hMk9fYW5pb25SYXRpbyArIEsyT19hbmlvblJhdGlvICsgQWwyTzNfYW5pb25SYXRpbyArIE1nT19hbmlvblJhdGlvICsgRmVPX25lZ0FuaW9uICsgQ2FPX2FuaW9uUmF0aW8gKyBNbk9fYW5pb25SYXRpbyArIFRpTzJfYW5pb25SYXRpbyArIFNpTzJfYW5pb25SYXRpbykgLyBtaW5lcmFsU2VsZWN0VmFsdWVYOyAvLyBvcmlnaW5hbGx5IDIzXG4gICAgLy8gICsgQ2xfYW5pb25SYXRpb1xuICB9XG5cbiAgLy9jYWxjIHVzaW5nIGNhdGlvbiBzdW1zXG4gIHZhciBnZXRBbXBoaWJvbGVGYWN0b3IgPSAgZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIGFtcGhpYm9sZUZhY3RvciA9IChOYTJPX01vbFJhdGlvICsgSzJPX01vbFJhdGlvICsgQWwyTzNfTW9sUmF0aW8gKyBNZ09fTW9sUmF0aW8gKyBGZU9fTW9sUmF0aW8gKyBDYU9fTW9sUmF0aW8gKyBNbk9fTW9sUmF0aW8gKyBUaU8yX01vbFJhdGlvICsgU2lPMl9Nb2xSYXRpbykgLyBmaWZ0ZWVuO1xuICAgIC8vICArIENsX01vbFJhdGlvXG5cbiAgICByZXR1cm4gYW1waGlib2xlRmFjdG9yO1xuICB9XG5cbiAgdmFyIGdldEFwZnUgPSBmdW5jdGlvbiAobWluZXJhbCkge1xuICAgIHJldHVybiBtaW5lcmFsIC8gZ2V0QW5pb25SYXRpb0ZhY3RvcigpO1xuICB9XG5cbiAgdmFyIEZlT19uZWdBcGZ1ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBGZU9fbmVnQ2F0aW9uIC8gZ2V0QW5pb25GZXJOZWdSYXRpbygpO1xuICB9XG5cbiAgLy8gUidzIFMgZnVuY3Rpb25cbiAgdmFyIGdldEFwZnVTdW1tID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChtaW5lcmFsU2VsZWN0VmFsdWVYID09IDIzKSB7XG4gICAgICByZXR1cm4gZ2V0QXBmdShNZ09fY2F0aW9uUmF0aW8pICtcbiAgICAgIGdldEFwZnUoRmVPX2NhdGlvblJhdGlvKSArXG4gICAgICBnZXRBcGZ1KFNpTzJfY2F0aW9uUmF0aW8pICtcbiAgICAgIGdldEFwZnUoQWwyTzNfY2F0aW9uUmF0aW8pICtcbiAgICAgIGdldEFwZnUoVGlPMl9jYXRpb25SYXRpbyk7XG4gICAgfSBlbHNlIGlmIChtaW5lcmFsU2VsZWN0VmFsdWVYID09IDYgfHwgbWluZXJhbFNlbGVjdFZhbHVlWCA9PSAxMikge1xuICAgICAgcmV0dXJuIGdldEFwZnUoTmEyT19jYXRpb25SYXRpbykgK1xuICAgICAgZ2V0QXBmdShLMk9fY2F0aW9uUmF0aW8pICtcbiAgICAgIGdldEFwZnUoQWwyTzNfY2F0aW9uUmF0aW8pICtcbiAgICAgIGdldEFwZnUoTWdPX2NhdGlvblJhdGlvKSArXG4gICAgICBnZXRBcGZ1KEZlT19jYXRpb25SYXRpbykgK1xuICAgICAgZ2V0QXBmdShDYU9fY2F0aW9uUmF0aW8pICtcbiAgICAgIGdldEFwZnUoTW5PX2NhdGlvblJhdGlvKSArXG4gICAgICBnZXRBcGZ1KFNpTzJfY2F0aW9uUmF0aW8pICtcbiAgICAgIGdldEFwZnUoVGlPMl9jYXRpb25SYXRpbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCd3cm9uZyBzZWxlY3QgdmFsdWUhJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdmFyIGdldEFwZnVTdW1tRmFjdG9yID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtaW5lcmFsU2VsZWN0VmFsdWVUIC8gZ2V0QXBmdVN1bW0oKTsgLy9vcmlnaW5hbGx5IDEzXG4gIH1cblxuICAvLyBSJ3MgRiBmdW5jdGlvblxuICB2YXIgZ2V0RmVycmljRmFjdG9yID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAyICogbWluZXJhbFNlbGVjdFZhbHVlWCAqICgxIC0gZ2V0QXBmdVN1bW1GYWN0b3IoKSk7IC8vIG9yaWdpbmFsbHkgNDZcbiAgfVxuXG4gIC8vIGFwZnVcbiAgdmFyIE5hMk9fYXBmdSA9IGdldEFwZnUoTmEyT19jYXRpb25SYXRpbyk7XG4gIHZhciBLMk9fYXBmdSA9IGdldEFwZnUoSzJPX2NhdGlvblJhdGlvKTtcbiAgdmFyIEFsMk8zX2FwZnUgPSBnZXRBcGZ1KEFsMk8zX2NhdGlvblJhdGlvKTtcbiAgdmFyIE1nT19hcGZ1ID0gZ2V0QXBmdShNZ09fY2F0aW9uUmF0aW8pO1xuICB2YXIgRmVPX2FwZnUgPSBnZXRBcGZ1KEZlT19jYXRpb25SYXRpbyk7XG4gIHZhciBDYU9fYXBmdSA9IGdldEFwZnUoQ2FPX2NhdGlvblJhdGlvKTtcbiAgdmFyIE1uT19hcGZ1ID0gZ2V0QXBmdShNbk9fY2F0aW9uUmF0aW8pO1xuICB2YXIgVGlPMl9hcGZ1ID0gZ2V0QXBmdShUaU8yX2NhdGlvblJhdGlvKTtcbiAgdmFyIFNpTzJfYXBmdSA9IGdldEFwZnUoU2lPMl9jYXRpb25SYXRpbyk7XG4gIC8vIHZhciBDbF9hcGZ1ID0gZ2V0QXBmdShDbF9jYXRpb25SYXRpbyk7XG5cbiAgdmFyIEZlT25lZ19hcGZ1ID0gZ2V0QXBmdShGZU9fbmVnTW9sUmF0aW8pO1xuXG4gIC8vIGNvcnJlY3RlZFxuICB2YXIgTmEyT19jb3JyID0gTmEyT19hcGZ1ICogZ2V0QXBmdVN1bW1GYWN0b3IoKTtcbiAgdmFyIEsyT19jb3JyID0gSzJPX2FwZnUgKiBnZXRBcGZ1U3VtbUZhY3RvcigpO1xuICB2YXIgQWwyTzNfY29yciA9IEFsMk8zX2FwZnUgKiBnZXRBcGZ1U3VtbUZhY3RvcigpO1xuICB2YXIgTWdPX2NvcnIgPSBNZ09fYXBmdSAqIGdldEFwZnVTdW1tRmFjdG9yKCk7XG4gIHZhciBGZU9fY29yciA9IEZlT19hcGZ1ICogZ2V0QXBmdVN1bW1GYWN0b3IoKTtcbiAgdmFyIENhT19jb3JyID0gQ2FPX2FwZnUgKiBnZXRBcGZ1U3VtbUZhY3RvcigpO1xuICB2YXIgTW5PX2NvcnIgPSBNbk9fYXBmdSAqIGdldEFwZnVTdW1tRmFjdG9yKCk7XG4gIHZhciBUaU8yX2NvcnIgPSBUaU8yX2FwZnUgKiBnZXRBcGZ1U3VtbUZhY3RvcigpO1xuICB2YXIgU2lPMl9jb3JyID0gU2lPMl9hcGZ1ICogZ2V0QXBmdVN1bW1GYWN0b3IoKTtcbiAgLy8gdmFyIENsX2NvcnIgPSBDbF9hcGZ1ICogZ2V0QXBmdVN1bW1GYWN0b3IoKTtcblxuICAvLyBSJ3MgZmVycmljX21pbmVyYWxfMSRuZWdhdGl2ZV9pcm9uX2NoZWNrIGZ1bmN0aW9uXG4gIHZhciBGZU9fZmVycmljID0gRmVPX2NvcnIgLSBnZXRGZXJyaWNGYWN0b3IoKTtcblxuICAvLyBmaW5hbCB2YWx1ZXMgZm9yIHN0YWdlIG9uZSAoYW1waGlib2xlKVxuICB2YXIgTmEyT19maW5hbCA9IE5hMk9fTW9sUmF0aW8gLyBnZXRBbXBoaWJvbGVGYWN0b3IoKTtcbiAgdmFyIEsyT19maW5hbCA9IEsyT19Nb2xSYXRpbyAvIGdldEFtcGhpYm9sZUZhY3RvcigpO1xuICB2YXIgQWwyTzNfZmluYWwgPSBBbDJPM19Nb2xSYXRpbyAvIGdldEFtcGhpYm9sZUZhY3RvcigpO1xuICB2YXIgTWdPX2ZpbmFsID0gTWdPX01vbFJhdGlvIC8gZ2V0QW1waGlib2xlRmFjdG9yKCk7XG4gIHZhciBGZU9fZmluYWwgPSBGZU9fTW9sUmF0aW8gLyBnZXRBbXBoaWJvbGVGYWN0b3IoKTtcbiAgdmFyIENhT19maW5hbCA9IENhT19Nb2xSYXRpbyAvIGdldEFtcGhpYm9sZUZhY3RvcigpO1xuICB2YXIgTW5PX2ZpbmFsID0gTW5PX01vbFJhdGlvIC8gZ2V0QW1waGlib2xlRmFjdG9yKCk7XG4gIHZhciBUaU8yX2ZpbmFsID0gVGlPMl9Nb2xSYXRpbyAvIGdldEFtcGhpYm9sZUZhY3RvcigpO1xuICB2YXIgU2lPMl9maW5hbCA9IFNpTzJfTW9sUmF0aW8gLyBnZXRBbXBoaWJvbGVGYWN0b3IoKTtcbiAgLy8gdmFyIENsX2ZpbmFsID0gQ2xfTW9sUmF0aW8gLyBnZXRBbXBoaWJvbGVGYWN0b3IoKTtcblxuICB2YXIgc2V0VG9GaXhlZCA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgaWYgKGVsZW0gPT09IDApIHtcbiAgICAgIHJldHVybiBlbGVtO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZWxlbS50b0ZpeGVkKDIpO1xuICAgIH1cbiAgfTtcblxuICAvL291dHB1dCB2aXNpYmlsaXR5XG4gIGlmIChnZXRBcGZ1U3VtbSgpIDw9IG1pbmVyYWxTZWxlY3RWYWx1ZVQpICB7XG5cbiAgICAkKCcubWFpbl9faW5wdXQtY2VsbC0tRmUyTzMnKS5zbGlkZVVwKCdmYXN0Jyk7XG4gICAgJCgnLm1haW5fX291dHB1dC1jZWxsLS1GZTJPMycpLnNsaWRlVXAoJ2Zhc3QnKTtcblxuICAgIGNvbnNvbGUubG9nKCfRgtGD0YIg0LDQv9GE0YMhINC4INCy0YHQtSDQvtGF0YPQtdC90L3QviDQv9Cw0YjQtdGCICEhJyk7XG5cbiAgICAkKCcjTmEyTy1vdXRwdXQnKS50ZXh0KHNldFRvRml4ZWQoTmEyT19hcGZ1KSk7XG4gICAgJCgnI0syTy1vdXRwdXQnKS50ZXh0KHNldFRvRml4ZWQoSzJPX2FwZnUpKTtcbiAgICAkKCcjQWwyTzMtb3V0cHV0JykudGV4dChzZXRUb0ZpeGVkKEFsMk8zX2FwZnUpKTtcbiAgICAkKCcjTWdPLW91dHB1dCcpLnRleHQoc2V0VG9GaXhlZChNZ09fYXBmdSkpO1xuICAgICQoJyNGZU8tb3V0cHV0JykudGV4dChzZXRUb0ZpeGVkKEZlT19hcGZ1KSk7XG4gICAgLy8gJCgnI0ZlMk8zLW91dHB1dCcpLnRleHQoc2V0VG9GaXhlZChGZTJPM19hcGZ1KSk7XG4gICAgJCgnI0NhTy1vdXRwdXQnKS50ZXh0KHNldFRvRml4ZWQoQ2FPX2FwZnUpKTtcbiAgICAkKCcjTW5PLW91dHB1dCcpLnRleHQoc2V0VG9GaXhlZChNbk9fYXBmdSkpO1xuICAgICQoJyNUaU8yLW91dHB1dCcpLnRleHQoc2V0VG9GaXhlZChUaU8yX2FwZnUpKTtcbiAgICAkKCcjU2lPMi1vdXRwdXQnKS50ZXh0KHNldFRvRml4ZWQoU2lPMl9hcGZ1KSk7XG4gICAgLy8gJCgnI0NsLW91dHB1dCcpLnRleHQoc2V0VG9GaXhlZChDbF9hcGZ1KSk7XG5cbiAgfSBlbHNlIGlmIChnZXRBcGZ1U3VtbSgpID4gbWluZXJhbFNlbGVjdFZhbHVlVCAmJiBnZXRGZXJyaWNGYWN0b3IoKSA+IDApIHsgIC8vZ2V0RmVycmljRmFjdG9yKClcblxuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSA2MDApIHtcbiAgICAgICQoJy5tYWluX19pbnB1dC1jZWxsLS1GZTJPMycpLnNsaWRlRG93bignZmFzdCcpO1xuICAgICAgJCgnLm1haW5fX291dHB1dC1jZWxsLS1GZTJPMycpLnNsaWRlRG93bignZmFzdCcpO1xuXG4gICAgICBjb25zb2xlLmxvZygn0YLRg9GCINC60L7RgNGAISDQuCDQstGB0LUg0L7RhdGD0LXQvdC90L4g0L/QsNGI0LXRgiAhIScpO1xuXG4gICAgICAkKCcjTmEyTy1vdXRwdXQnKS50ZXh0KHNldFRvRml4ZWQoTmEyT19jb3JyKSk7XG4gICAgICAkKCcjSzJPLW91dHB1dCcpLnRleHQoc2V0VG9GaXhlZChLMk9fY29ycikpO1xuICAgICAgJCgnI0FsMk8zLW91dHB1dCcpLnRleHQoc2V0VG9GaXhlZChBbDJPM19jb3JyKSk7IC8vXG4gICAgICAkKCcjTWdPLW91dHB1dCcpLnRleHQoc2V0VG9GaXhlZChNZ09fY29ycikpO1xuICAgICAgJCgnI0ZlTy1vdXRwdXQnKS50ZXh0KHNldFRvRml4ZWQoRmVPX2ZlcnJpYykpO1xuICAgICAgJCgnI0ZlMk8zLW91dHB1dCcpLnRleHQoc2V0VG9GaXhlZChnZXRGZXJyaWNGYWN0b3IoKSkpO1xuICAgICAgJCgnI0NhTy1vdXRwdXQnKS50ZXh0KHNldFRvRml4ZWQoQ2FPX2NvcnIpKTtcbiAgICAgICQoJyNNbk8tb3V0cHV0JykudGV4dChzZXRUb0ZpeGVkKE1uT19jb3JyKSk7XG4gICAgICAkKCcjVGlPMi1vdXRwdXQnKS50ZXh0KHNldFRvRml4ZWQoVGlPMl9jb3JyKSk7XG4gICAgICAkKCcjU2lPMi1vdXRwdXQnKS50ZXh0KHNldFRvRml4ZWQoU2lPMl9jb3JyKSk7XG4gICAgICAvLyAkKCcjQ2wtb3V0cHV0JykudGV4dChzZXRUb0ZpeGVkKENsX2NvcnIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gJCgnLm1haW5fX2lucHV0LWNlbGwtLUZlMk8zJykuc2xpZGVEb3duKCdmYXN0Jyk7XG4gICAgICAkKCcubWFpbl9fb3V0cHV0LWNlbGwtLUZlMk8zJykuc2xpZGVEb3duKCdmYXN0Jyk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCfRgtGD0YIg0LrQvtGA0YAhINC4INCy0YHQtSDQvtGF0YPQtdC90L3QviDQv9Cw0YjQtdGCICEhJyk7XG5cbiAgICAgICQoJyNOYTJPLW91dHB1dCcpLnRleHQoc2V0VG9GaXhlZChOYTJPX2NvcnIpKTtcbiAgICAgICQoJyNLMk8tb3V0cHV0JykudGV4dChzZXRUb0ZpeGVkKEsyT19jb3JyKSk7XG4gICAgICAkKCcjQWwyTzMtb3V0cHV0JykudGV4dChzZXRUb0ZpeGVkKEFsMk8zX2NvcnIpKTsgLy9cbiAgICAgICQoJyNNZ08tb3V0cHV0JykudGV4dChzZXRUb0ZpeGVkKE1nT19jb3JyKSk7XG4gICAgICAkKCcjRmVPLW91dHB1dCcpLnRleHQoc2V0VG9GaXhlZChGZU9fZmVycmljKSk7XG4gICAgICAkKCcjRmUyTzMtb3V0cHV0JykudGV4dChzZXRUb0ZpeGVkKGdldEZlcnJpY0ZhY3RvcigpKSk7XG4gICAgICAkKCcjQ2FPLW91dHB1dCcpLnRleHQoc2V0VG9GaXhlZChDYU9fY29ycikpO1xuICAgICAgJCgnI01uTy1vdXRwdXQnKS50ZXh0KHNldFRvRml4ZWQoTW5PX2NvcnIpKTtcbiAgICAgICQoJyNUaU8yLW91dHB1dCcpLnRleHQoc2V0VG9GaXhlZChUaU8yX2NvcnIpKTtcbiAgICAgICQoJyNTaU8yLW91dHB1dCcpLnRleHQoc2V0VG9GaXhlZChTaU8yX2NvcnIpKTtcbiAgICAgIC8vICQoJyNDbC1vdXRwdXQnKS50ZXh0KHNldFRvRml4ZWQoQ2xfY29ycikpO1xuICAgIH1cblxuICB9IGVsc2UgaWYgKGdldEFwZnVTdW1tKCkgPiBtaW5lcmFsU2VsZWN0VmFsdWVUICYmIGdldEZlcnJpY0ZhY3RvcigpIDwgMCkgeyAvL0ZlT19mZXJyaWNcblxuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSA2MDApIHtcbiAgICAgICQoJy5tYWluX19pbnB1dC1jZWxsLS1GZTJPMycpLnNsaWRlRG93bignZmFzdCcpO1xuICAgICAgJCgnLm1haW5fX291dHB1dC1jZWxsLS1GZTJPMycpLnNsaWRlRG93bignZmFzdCcpO1xuXG4gICAgICBjb25zb2xlLmxvZygn0YLRg9GCINGE0LXRgNGD0LwnKTtcblxuICAgICAgJCgnI05hMk8tb3V0cHV0JykudGV4dChzZXRUb0ZpeGVkKE5hMk9fY29ycikpO1xuICAgICAgJCgnI0syTy1vdXRwdXQnKS50ZXh0KHNldFRvRml4ZWQoSzJPX2NvcnIpKTtcbiAgICAgICQoJyNBbDJPMy1vdXRwdXQnKS50ZXh0KHNldFRvRml4ZWQoQWwyTzNfYXBmdSkpO1xuICAgICAgJCgnI01nTy1vdXRwdXQnKS50ZXh0KHNldFRvRml4ZWQoTWdPX2NvcnIpKTtcbiAgICAgICQoJyNGZU8tb3V0cHV0JykudGV4dChzZXRUb0ZpeGVkKEZlT25lZ19hcGZ1KSk7XG4gICAgICAkKCcjRmUyTzMtb3V0cHV0JykudGV4dChzZXRUb0ZpeGVkKEZlT19mZXJyaWMpKTtcbiAgICAgICQoJyNDYU8tb3V0cHV0JykudGV4dChzZXRUb0ZpeGVkKENhT19jb3JyKSk7XG4gICAgICAkKCcjTW5PLW91dHB1dCcpLnRleHQoc2V0VG9GaXhlZChNbk9fY29ycikpO1xuICAgICAgJCgnI1RpTzItb3V0cHV0JykudGV4dChzZXRUb0ZpeGVkKFRpTzJfY29ycikpO1xuICAgICAgJCgnI1NpTzItb3V0cHV0JykudGV4dChzZXRUb0ZpeGVkKFNpTzJfY29ycikpO1xuICAgICAgLy8gJCgnI0NsLW91dHB1dCcpLnRleHQoc2V0VG9GaXhlZChDbF9jb3JyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vICQoJy5tYWluX19pbnB1dC1jZWxsLS1GZTJPMycpLnNsaWRlRG93bignZmFzdCcpO1xuICAgICAgJCgnLm1haW5fX291dHB1dC1jZWxsLS1GZTJPMycpLnNsaWRlRG93bignZmFzdCcpO1xuXG4gICAgICBjb25zb2xlLmxvZygn0YLRg9GCINGE0LXRgNGD0LwnKTtcblxuICAgICAgJCgnI05hMk8tb3V0cHV0JykudGV4dChzZXRUb0ZpeGVkKE5hMk9fY29ycikpO1xuICAgICAgJCgnI0syTy1vdXRwdXQnKS50ZXh0KHNldFRvRml4ZWQoSzJPX2NvcnIpKTtcbiAgICAgICQoJyNBbDJPMy1vdXRwdXQnKS50ZXh0KHNldFRvRml4ZWQoQWwyTzNfYXBmdSkpO1xuICAgICAgJCgnI01nTy1vdXRwdXQnKS50ZXh0KHNldFRvRml4ZWQoTWdPX2NvcnIpKTtcbiAgICAgICQoJyNGZU8tb3V0cHV0JykudGV4dChzZXRUb0ZpeGVkKEZlT25lZ19hcGZ1KSk7XG4gICAgICAkKCcjRmUyTzMtb3V0cHV0JykudGV4dChzZXRUb0ZpeGVkKEZlT19mZXJyaWMpKTtcbiAgICAgICQoJyNDYU8tb3V0cHV0JykudGV4dChzZXRUb0ZpeGVkKENhT19jb3JyKSk7XG4gICAgICAkKCcjTW5PLW91dHB1dCcpLnRleHQoc2V0VG9GaXhlZChNbk9fY29ycikpO1xuICAgICAgJCgnI1RpTzItb3V0cHV0JykudGV4dChzZXRUb0ZpeGVkKFRpTzJfY29ycikpO1xuICAgICAgJCgnI1NpTzItb3V0cHV0JykudGV4dChzZXRUb0ZpeGVkKFNpTzJfY29ycikpO1xuICAgICAgLy8gJCgnI0NsLW91dHB1dCcpLnRleHQoc2V0VG9GaXhlZChDbF9jb3JyKSk7XG4gICAgfVxuICB9XG5cbiAgLy9tZWRpYSBzZXR0aW5nc1xuICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA2MDApIHtcbiAgICAkKCcubWFpbl9fb3V0cHV0LWFyZWEnKS5zbGlkZURvd24oJ2Zhc3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJChkb2N1bWVudCkuaGVpZ2h0KCkgfSwgJ2Zhc3QnKTtcbiAgICB9KTtcbiAgfVxuXG59O1xuXG4vLyBnZXR0aW5nIDxzZWxlY3Q+IHZhbHVlXG52YXIgbWluZXJhbFNlbGVjdFZhbHVlWCA9ICskKCcjbWluZXJhbC1zZWxlY3QnKVswXS52YWx1ZTtcbnZhciBtaW5lcmFsU2VsZWN0VmFsdWVUID0gMTM7XG4kKCcjbWluZXJhbC1zZWxlY3QnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gIG1pbmVyYWxTZWxlY3RWYWx1ZVggPSArJCgnI21pbmVyYWwtc2VsZWN0JylbMF0udmFsdWU7XG4gIGlmIChtaW5lcmFsU2VsZWN0VmFsdWVYID09IDIzKSB7IC8vYW1waGlib2xlXG4gICAgbWluZXJhbFNlbGVjdFZhbHVlVCA9IDEzO1xuICB9IGVsc2UgaWYgKG1pbmVyYWxTZWxlY3RWYWx1ZVggPT0gNikgeyAvL3B5cm94aW5lXG4gICAgbWluZXJhbFNlbGVjdFZhbHVlVCA9IDQ7XG4gIH0gZWxzZSBpZiAobWluZXJhbFNlbGVjdFZhbHVlWCA9PSAxMikgeyAvL2dhcm5ldFxuICAgIG1pbmVyYWxTZWxlY3RWYWx1ZVQgPSA4O1xuICB9XG59KVxuXG52YXIgY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIE5hMk8gPSAwO1xuICBLMk8gPSAwO1xuICBBbDJPMyA9IDA7XG4gIE1nTyA9IDA7XG4gIEZlTyA9IDA7XG4gIC8vIEZlMk8zID0gMDtcbiAgQ2FPID0gMDtcbiAgTW5PID0gMDtcbiAgVGlPMiA9IDA7XG4gIFNpTzIgPSAwO1xuICAvLyBDbCA9IDA7XG4gICQoJy5tYWluX19pbnB1dCcpLnZhbCgnJyk7XG4gICQoJy5tYWluX19vdXRwdXQnKS50ZXh0KCcnKTtcbiAgaW5wdXRzQXJyLmxlbmd0aCA9IDA7XG5cbiAgJCgnLm1haW5fX2lucHV0LWNlbGwtLUZlMk8zJykuc2xpZGVVcCgnZmFzdCcpO1xuICAkKCcubWFpbl9fb3V0cHV0LWNlbGwtLUZlMk8zJykuc2xpZGVVcCgnZmFzdCcpO1xuXG4gICQoJy5idXR0b24tLWNhbGN1bGF0ZS1mZXJydW0nKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gIC8vbWVkaWEgc2V0dGluZ3NcbiAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNjAwKSB7XG4gICAgJCgnLm1haW5fX291dHB1dC1hcmVhJykuc2xpZGVVcCgnZmFzdCcpO1xuICB9XG59O1xuXG4vLyBzZXR0aW5nIGlucHV0cyBrZXlwcmVzcyBldmVudFxuJChkb2N1bWVudCkua2V5ZG93bihmdW5jdGlvbihlKSB7XG4gIGlmIChlLndoaWNoID09IDEzICYmIGlucHV0c0Fyci5sZW5ndGggPj0gMikge1xuICAgICQoJy5idXR0b24tLWNhbGN1bGF0ZS1mZXJydW0nKS5hZGRDbGFzcygnYnV0dG9uLS1jYWxjdWxhdGUtZmVycnVtLWFjdGl2ZScpO1xuICB9XG59KTtcblxuJChkb2N1bWVudCkua2V5dXAoZnVuY3Rpb24oZSkge1xuICBpZiAoZS53aGljaCA9PSAxMyAmJiBpbnB1dHNBcnIubGVuZ3RoID49IDIpIHtcbiAgICAkKCcuYnV0dG9uLS1jYWxjdWxhdGUtZmVycnVtJykucmVtb3ZlQ2xhc3MoJ2J1dHRvbi0tY2FsY3VsYXRlLWZlcnJ1bS1hY3RpdmUnKTtcbiAgICBjYWxjdWxhdGUoKTtcbiAgfVxufSk7XG5cbi8vIHNldCBidXR0b25zIGV2ZW50c1xuJCgnLmJ1dHRvbi0tY2FsY3VsYXRlLWZlcnJ1bScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgY2FsY3VsYXRlKCk7XG59KTtcblxuJCgnLmJ1dHRvbi0tY2xlYXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGNsZWFyKCk7XG59KTtcblxuLy8gJCgnLmJ1dHRvbi0tdG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuLy9cbi8vICAgaWYgKCQoJy5kZXNjcmlwdGlvbi13cmFwJykuaXMoJzpoaWRkZW4nKSlcbi8vICAge1xuLy8gICAgICQoJy5idXR0b24tLXRvZ2dsZScpLnRleHQoJ0hpZGUgZGVzY3JpcHRpb24nKTtcbi8vICAgfSBlbHNlIGlmICgkKCcuZGVzY3JpcHRpb24td3JhcCcpLm5vdCgnOmhpZGRlbicpKSB7XG4vLyAgICAgJCgnLmJ1dHRvbi0tdG9nZ2xlJykudGV4dCgnU2hvdyBkZXNjcmlwdGlvbicpO1xuLy8gICB9XG4vL1xuLy8gICAkKCcuZGVzY3JpcHRpb24td3JhcCcpLnNsaWRlVG9nZ2xlKCdmYXN0Jyk7XG4vLyB9KTtcblxuLy8gZGVzY3JpcHRpb24gdmlzaWJpbGl0eVxuLy8gdmFyIGRlc2NyaXB0aW9uVG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuLy8gICAkKCcuZGVzY3JpcHRpb24tdGV4dC0tbW9yZScpLmZhZGVUb2dnbGUoJ2Zhc3QnLCBmdW5jdGlvbigpIHtcbi8vICAgICBpZiAoJCgnLmRlc2NyaXB0aW9uLXRleHQtLW1vcmUnKS5pcygnOmhpZGRlbicpKVxuLy8gICAgIHtcbi8vICAgICAgICQoJy5kZXNjcmlwdGlvbi10b2dnbGUnKS50ZXh0KCdTaG93IG1vcmUuJyk7XG4vLyAgICAgfSBlbHNlIGlmICgkKCcuZGVzY3JpcHRpb24tdGV4dC0tbW9yZScpLm5vdCgnOmhpZGRlbicpKSB7XG4vLyAgICAgICAkKCcuZGVzY3JpcHRpb24tdG9nZ2xlJykudGV4dCgnU2hvdyBsZXNzLicpO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vLyB9O1xuXG4vLyAkKCcuZGVzY3JpcHRpb24tdG9nZ2xlJykub24oJ2NsaWNrJywgZGVzY3JpcHRpb25Ub2dnbGUpO1xuXG4vLyAkKCcuZGVzY3JpcHRpb24tdG9nZ2xlJykub24oJ2tleXVwJywgZnVuY3Rpb24gKGUpIHtcbi8vICAgaWYgKGUua2V5Q29kZSA9PT0gS0VZQ09ERVMuU1BBQ0UgfHwgZS5rZXlDb2RlID09PSBLRVlDT0RFUy5FTlRFUikge1xuLy8gICAgIGRlc2NyaXB0aW9uVG9nZ2xlKCk7XG4vLyAgIH1cbi8vIH0pO1xuXG4vLyBidXR0b24gZGlzYWJsZSBzZXR0aW5nc1xuJCgnLmJ1dHRvbi0tY2FsY3VsYXRlLWZlcnJ1bScpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbnZhciBpbnB1dHNBcnIgPSBbXTtcbiQoJy5tYWluJykub24oJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpbnB1dHNBcnIgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoJCgnLm1haW5fX2lucHV0JyksIGl0ZW0gPT4ge1xuICByZXR1cm4gaXRlbS52YWx1ZSAhPT0gJyc7XG59KTtcblxuaWYgKGlucHV0c0Fyci5sZW5ndGggPCAyKSB7XG4gICQoJy5idXR0b24tLWNhbGN1bGF0ZS1mZXJydW0nKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xufSBlbHNlIGlmIChpbnB1dHNBcnIubGVuZ3RoID49IDIpIHtcbiAgJCgnLmJ1dHRvbi0tY2FsY3VsYXRlLWZlcnJ1bScpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xufVxuXG59KTtcblxuLy8gdGhhdHMgYWxsLCBmdShsKWNrc1xuIl19
