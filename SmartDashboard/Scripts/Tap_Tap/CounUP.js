function _0x1a1d(_0x40aad3,_0x2474f9){const _0x849457=_0x8494();return _0x1a1d=function(_0x1a1d80,_0x3edaa9){_0x1a1d80=_0x1a1d80-0x10a;let _0x3f12db=_0x849457[_0x1a1d80];return _0x3f12db;},_0x1a1d(_0x40aad3,_0x2474f9);}(function(_0xef1b20,_0x4ed41a){const _0x32aa7b=_0x1a1d,_0x1f1366=_0xef1b20();while(!![]){try{const _0x2a3df0=-parseInt(_0x32aa7b(0x113))/0x1+parseInt(_0x32aa7b(0x119))/0x2+-parseInt(_0x32aa7b(0x122))/0x3*(parseInt(_0x32aa7b(0x10e))/0x4)+-parseInt(_0x32aa7b(0x11f))/0x5+-parseInt(_0x32aa7b(0x117))/0x6+-parseInt(_0x32aa7b(0x10c))/0x7*(-parseInt(_0x32aa7b(0x10d))/0x8)+parseInt(_0x32aa7b(0x121))/0x9*(parseInt(_0x32aa7b(0x118))/0xa);if(_0x2a3df0===_0x4ed41a)break;else _0x1f1366['push'](_0x1f1366['shift']());}catch(_0x41e00e){_0x1f1366['push'](_0x1f1366['shift']());}}}(_0x8494,0xc6491));function _0x8494(){const _0x16466d=['setItem','width','#progressbar','attr','toFixed','7495990dTpUvs','css','9DWkxSW','4026oGNoGk','#Current_Counts','#tap','removeAttr','#Max_Limits','CURRENT_COUNTER_DB_VALUE','CURRENT_COUNTED_Value','7cNduQP','4074528EDJUcO','2512TmJRXR','CURRENT_COUNTER','text','#progressbarComplete','REMAINING_COUNT_Value','352468ElQYQp','Max\x20Limit\x20is\x20acheived\x20\x20!!!','CURRENT_COUNTED_ValuePERCENT','onclick','1603494xywVjP','25078220wJhWaB','1513460pqSvmd'];_0x8494=function(){return _0x16466d;};return _0x8494();}function CalculateCount(_0x1a5f48){const _0xc43dcb=_0x1a1d;let _0x4b6586={},{CURRENT_COUNTER:_0x3d93bd,CURRENT_COUNTER_DB_VALUE:_0x1d1781,COUNTER_MAX_VALUE:_0x3819c5}=GetTapSessionData();_0x3d93bd=Boolean(parseInt(_0x3d93bd))?parseInt(_0x3d93bd):0x0,_0x1d1781=Boolean(parseInt(_0x1d1781))?parseInt(_0x1d1781):0x0;parseInt(_0x3d93bd)==0x0&&(sessionStorage['setItem']('CURRENT_COUNTER',_0x1d1781),_0x3d93bd=_0x1d1781);!Boolean(_0x1a5f48)&&(_0x3d93bd<_0x3819c5?(_0x1a5f48=parseInt(_0x3d93bd)+0x1,sessionStorage[_0xc43dcb(0x11a)](_0xc43dcb(0x10f),_0x1a5f48),parseInt(_0x1a5f48)==0x1&&parseInt(_0x1d1781)==0x0&&sessionStorage['setItem'](_0xc43dcb(0x10a),_0x1a5f48)):(alert(_0xc43dcb(0x114)),sessionStorage['setItem'](_0xc43dcb(0x10f),_0x3819c5),$(_0xc43dcb(0x124))['removeAttr'](_0xc43dcb(0x116))));_0x4b6586[_0xc43dcb(0x10b)]=_0x1a5f48,_0x4b6586[_0xc43dcb(0x112)]=parseInt(_0x3819c5)-(parseInt(_0x3d93bd)-parseInt(_0x1d1781)+parseInt(_0x1d1781)),_0x4b6586[_0xc43dcb(0x115)]=parseFloat(_0x1a5f48*0x64/parseInt(_0x3819c5))[_0xc43dcb(0x11e)](0x2),_0x4b6586['COUNTER_MAX_VALUE'];if(_0x1a5f48<=_0x3819c5)UpdateCountsDataOnUI(_0x4b6586),_0x1a5f48==_0x3819c5&&(UpdateScheduler(!![]),$('#tap')[_0xc43dcb(0x125)](_0xc43dcb(0x116)));else return;}function UpdateCountsDataOnUI(_0x5e55cc){const _0x58ae98=_0x1a1d;$(_0x58ae98(0x123))[_0x58ae98(0x110)](_0x5e55cc['CURRENT_COUNTED_Value']),$(_0x58ae98(0x111))[_0x58ae98(0x110)](_0x5e55cc[_0x58ae98(0x115)]+'\x20%\x20Complete'),$('#progressbar')[_0x58ae98(0x11d)]('aria-valuenow',_0x5e55cc['CURRENT_COUNTED_ValuePERCENT']),$(_0x58ae98(0x11c))[_0x58ae98(0x120)](_0x58ae98(0x11b),_0x5e55cc[_0x58ae98(0x115)]+'%'),$(_0x58ae98(0x126))[_0x58ae98(0x110)](_0x5e55cc['COUNTER_MAX_VALUE']);}