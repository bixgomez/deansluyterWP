var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var atwIntl=0;
var adsLo;
try {adsLo=top.location.href}
catch(e){}
if (!adsLo||adsLo==null){
try {adsLo=window.location.href}
catch(e){}
}
adsLo=adsLo||"";
var adsUAC=adsLo.search(/atwUAC=/i),adsUACD=adsLo.search(/atwUACD=/i),adsUACH,atwInfo=0;
if (adsLo.search(/atwInfo=/i)>-1)atwInfo=1;
var atwHB=[],atwHBR,pbjs=pbjs||{};
pbjs.que=pbjs.que||[];
function atwHeaderBid(){
	atwUAC.adsFunctions+='atwHeaderBid(),';
	var d=document,w='',cw=970,o=atwPreBid.mns,l=o.length,inv=[];
	if (atwPreBid.file){
		var hs=d.createElement('script');
		hs.type='text/javascript';
		hs.src=atwPreBid.file;
		try {
			var t=d.getElementsByTagName('head')[0];
			t.insertBefore(hs,t.firstChild);
		}
		catch(e){return 0;}
	}
	if (atwPreBid.resizePortrait)po='1'
	else po=adsRePo;
	try{
		if (d&&d.documentElement)cw=d.documentElement.clientWidth;
	}
	catch(e){}
	for (var i=0;i<l;i++){
		atwHB[i]={};
		atwHB[i].code=o[i].mn;
		try {
			if (o[i].width)w=o[i].width.toString().toLowerCase();
			if (w=='rr'){
				atwHB[i].sizes=[[300,250],[300,600],[300,1050]];
			}
			else if (w=='lb'){
				if (po!='1'||cw>=970){
					atwHB[i].sizes=[[728,90],[948,250],[950,252],[940,230],[101,1],[970,66],[970,90],[970,250]];
				}
				else{
					atwHB[i].sizes=[[728,90],[948,250],[950,252],[940,230],[101,1]];
				}
			}
			else if (w=='mm'){
				atwHB[i].sizes=[[300,250],[320,480],[320,50]];
			}
			else if (w){
				atwHB[i].sizes=[];
				atwHB[i].sizes[0]=[];
				atwHB[i].sizes[0][0]=parseInt(w);
				atwHB[i].sizes[0][1]=parseInt(o[i].height);
			}
			else if (o[i].sizes){
				atwHB[i].sizes=[];
				var le=o[i].sizes.length;
				for (j=0;j<le;j++){
					atwHB[i].sizes[j]=[];
					atwHB[i].sizes[j][0]=parseInt(o[i].sizes[j][0]);
					atwHB[i].sizes[j][1]=parseInt(o[i].sizes[j][1]);
				}
			}
		}
		catch(e){}
	} 
	pbjs.que.push(function(){
		try {
		var l=atwHB.length,u;		
		for (var i=0;i<l;i++){		
			u=atwHB[i];
			if (!u.bids)u.bids=[];
			u.code=String(u.code);
			if (pbjs.acPIDsByCode&&u.code in pbjs.acPIDsByCode){
				if (pbjs.mpnwid){
					u.bids=u.bids.concat({bidder:'onedisplay',params:{network:pbjs.mpnwid,placement:pbjs.acPIDsByCode[u.code],alias:u.code}});
				}
				if (pbjs.acBidsByCode&&u.code in pbjs.acBidsByCode){
					u.bids=u.bids.concat(pbjs.acBidsByCode[u.code]);
				}
				if (pbjs.acBidsBySize){
					if (u.sizes){
						if (typeof(u.sizes[0])!="object"){
							u.sizes=[u.sizes]
						}
						var sizeString=String(u.sizes);
						if (sizeString in pbjs.acBidsBySize){
							u.bids=u.bids.concat(pbjs.acBidsBySize[sizeString]);
						}
						var ul=u.sizes.length;
						if (ul>1){
							for (var j=0;j<ul;j++){
								sizeString=String(u.sizes[j]);
								if (sizeString in pbjs.acBidsBySize){
									u.bids=u.bids.concat(pbjs.acBidsBySize[sizeString]);
								}
							}
						}
					}
				}
			}
		}
		}
		catch(e){}
	});	
	pbjs.que.push(function(){
		try {
			pbjs.addAdUnits(atwHB);
			pbjs.requestBids({
				timeout:pbjs.acTimeout,
				bidsBackHandler:atwHBBidComplete
			});
		}
		catch(e){}
	});
	var tO=setTimeout(atwHBBidComplete,1500,'timeout');
}
function atwHBLoaded(m){
	var i,l=adsDivs.length;
	for (i=0;i<l;i++){
		if (adsDivs[i].mn==m){
			return i;
		}
	}
	return -1;
}
function atwHBDivsLoaded(m){
	var i,l=atwHB.length;
	for (i=0;i<l;i++){
		if (atwHB[i].code==m){
			return i;
		}
	}
	return -1;
}
function atwHBRefreshBids(m){
	pbjs.que.push(function(){
		pbjs.requestBids({
			adUnitCodes:m,
			timeout:pbjs.acRefreshTimeout,
			bidsBackHandler:function(bids){}
		});
	});
}
function atwHBPixel(u){
	document.createElement("img").setAttribute("src",u+";cb="+new Date().getTime());
}
function atwHBBidComplete(s){
	var dt=new Date(),l=atwHB.length,d,j;
	atwHBR='c';
	for (j=0;j<l;j++){
		try {
			d=atwHBLoaded(atwHB[j].code);
			if (d>=0&&adsDivs[d].adLoaded==0){
				if (!adsSyncDelay||adsDivs.length==1||adsLoadSync){
					adsDivs[d].LoadAd()
				}
				else{
					adsDivs[d].delayed=1;
					if (!adsSyncTime)adsSyncTime=setTimeout(adsLoadedSync,adsSyncDelay);
				}
			}			
		}
		catch(e){}
	}
} 
function atwPreBidCheck(m){
	var l=atwHB.length;
	for (var i=0;i<l;i++){
		if (atwHB[i].code==m){
			return true;
		}
	}
	return false;
}
function adsLoadUAC(){
	var u,x;
	if (adsUAC>0)x=adsLo.substring(adsUAC+7,adsLo.length).replace(/&.*$/,'').split(/\||;/)
	else if (adsUACD>0)x=adsLo.substring(adsUACD+8,adsLo.length).replace(/&.*$/,'').split(/\||;/);
	adsUACH='https://web.archive.org/web/20200805040540/https://scdn.uc.atwola.com/ads/';
	u=unescape(x[0]);
	if (/^[A-Za-z]+$/.test(unescape(u))){
	 	if (adsUACD>0){
			var z=document.createElement('script');
			z.src=adsUACH+u+'.js';
			document.body.appendChild(z);
		} 
		else if (adsUAC>0){
			document.write('<script type="text/javascript" src="'+adsUACH+u+'.js"></scr','ipt>')
		}
	}	
}
if ((adsUAC>0||adsUACD>0)&&!window.adsUACH)adsLoadUAC()
else{
window.atwUAC=window.atwUAC||{};
atwUAC.adsInfo=atwUAC.adsInfo||{};
atwUAC.adsFunctions='';
if (window.atwPreBid&&window.atwPreBid.mns)atwHeaderBid();
var adsNt='',adsPl='',adsUK,adsLMN=new Array(),adsTacOK=1,adsEAN,adsEANArr={},adsAlias=1,
adsHt="",adsATOth='',adsTp='J',adsD=new Date(),aolAdFdBkStr='',adsAddOn=1,adsAJAXAddOn=0,
adsVal='',adsCp=0,adsMNS,adsExcV='',adsLNm=0,adsKV='',adsSz,adsFileless=0,
adsUA=navigator.userAgent.toLowerCase(),adsIE,adsIELT10=0,
adsTile=1,adsPage='',adsDivs=[],adsCA,adsCF=[],adsCW=[],adsCH=[],adsCAd=[],adsScr=adsD.getTime()%0x3b9aca00,adsRRDevil='',adsRRCalled='',
adsDev=(typeof window.onorientationchange!='undefined')?'1':'0',atwLoaded=0,atwReset=0,atwAdBlock=0;
if (atwIntl==1){
	adsNt='1065.1';
	adsPl='2590140';
	adsUK=1;
	adsEAN=0;
}
else{
	adsNt='5113.1';
	adsPl='221794';
	adsUK='us';
	adsEAN=1;
}
if ((adsUA.indexOf('mobile')>-1)||(/android|iphone|ipad|playbook|hp-tablet|kindle|silk|webos|blackberry|opera mini/i).test(navigator.appVersion))adsDev='1';
atwUAC.browsHid=0;
atwUAC.rSetup=0;
atwUAC.focus=1;
function atwVisCh(){
	if (document[atwUAC.hidden])atwUAC.browsHid=1;
	else atwUAC.browsHid=0;
}
function atwGetVisiblePct(d){
	var nH=d.offsetHeight,
		r=d.getBoundingClientRect(),
		aW=r.right-r.left,
		aH=r.bottom-r.top,
		vH=(r.top>=0&&(Math.min(window.innerHeight,r.bottom)-r.top)),
		vW=(r.left>=0&&(Math.min(window.innerWidth,r.right)-r.left));
	vH=vH||r.bottom;
	vW=vW||r.right;
	if (0>vH||0>vW||0===nH){
		return 0;
	}
	if (aH===0||aW===0){
		return 0;
	}
	return (100*vW*vH)/(aW*aH);
}
function adsReloadServer(dv,hb){
try {
	var ifr=document.getElementById(dv.ifr);
	if (dv.rMN&&atwUAC.browsHid==0&&atwUAC.focus==1&&ifr.mouseIn!=1&&atwGetVisiblePct(dv)>=50){
		var s=dv.adURL;
		if (s){
			var w=adsDevilAd.ad[dv.adNum+1].width,h=adsDevilAd.ad[dv.adNum+1].height;
			if (parseInt(w)>=970||parseInt(h)>=600){dv.rMN=dv.rMNL}
			if (dv.rTimes==1||!dv.origMN){dv.origMN=dv.mn}
			dv.mn=dv.rMN;
			if (dv.rMN){
				if (!hb){
					s=s.replace(/alias=(.*?);/,"alias="+dv.rMN+";").replace(/kvmn=(.*?);/,"kvmn="+dv.rMN+";kvorigmn="+dv.origMN+";");
					if (dv.keepSize&&dv.keepSize!='N'&&dv.keepSize!='n'&&adsDevilAd.ad[dv.adNum+1]&&w&&h){
						if (s.indexOf('allowedSizes=')!=-1){
							s=s.replace(/allowedSizes=.*?;/,"size="+w+"x"+h+";");
						}
						else if (s.indexOf('size=')==-1){
							s=s.replace(/\/0\/-1\//, "\/0\/-1\/size="+w+"x"+h+";");
						}
						dv.w=w;
						dv.h=h;
					}
					dv.rTimes++;
					dv.adURL=s;
					dv.col=0;
					dv.LoadAd();
				}
				else{
					var m=[],l=atwHB.length;
					m[0]=dv.rMN;
					if (dv.rTimes==1){
						atwHB[l]={};
						atwHB[l].code=dv.rMN;
						if (dv.keepSize){
							atwHB[l].sizes={};
							atwHB[l].sizes[0]={};
							atwHB[l].sizes[0][0]=parseInt(w);
							atwHB[l].sizes[0][1]=parseInt(h);
						}
						else{
							var sz=dv.sz.split(","),wh;
							atwHB[l].sizes[j]=[];
							for (var j=0;j<sz.length;j++){
								wh=sz[j].split('x');
								atwHB[l].sizes[j]=[];
								atwHB[i].sizes[j][0]=parseInt(wh[0]);
								atwHB[i].sizes[j][1]=parseInt(wh[1]);
							}
							atwHB[l].sizes=dv.sz.split(",")
						}

					}
					atwHBRefreshBids(m);
				}
			}
		}
	}
	if (dv.rMN&&dv.rTimes<=dv.rMax&&!hb){
		dv.timeout=setTimeout(function(){adsReloadServer(dv)},dv.rTime);
		if (atwPreBidCheck(dv.mn)){
			dv.timeoutHB=setTimeout(function(){adsReloadServer(dv,'hb')},dv.rTime-3000);
		}
	}
}
catch(e){}
}
function adsRotateMult(d,t,m,r){
	var dv=adsGetObj(d);
	if (dv){
		if (adsRotateTime)dv.rTime=parseInt(adsRotateTime)*1000;
		else if (t)dv.rTime=parseInt(t)*1000;
		if (m)dv.rMax=parseInt(m);
		if (r)dv.keepSize=1;
		if (!dv.rTimes)dv.rTimes=1;
		dv.rotate=1;
		if (m||r||t){
			dv.rotateValues='Time='+t+' Max='+m+ ' KeepSize='+r;
		}
		if (dv.timeout){
			clearTimeout(dv.timeout);
			if (dv.rTimes<=dv.rMax){
				dv.timeout=setTimeout(function(){adsReloadServer(dv)},dv.rTime);
				if (atwPreBidCheck(dv.mn)){
					dv.timeoutHB=setTimeout(function(){adsReloadServer(dv,'hb')},dv.rTime-3000);
				}
			}
		}
	}
}
function adsDisableSandbox(){
	atwUAC.adsFunctions+='adsDisableSandbox(),';
	atwUAC.sandbox=0;
}
function adsEnableSandbox(){	
	atwUAC.adsFunctions+='adsEnableSandbox(),';
	atwUAC.sandbox=1;
}
var adsFilelessFlag='';
function adsDisableFileless(v){
	atwUAC.adsFunctions+='adsDisableFileless('+v+'),';
	adsFilelessFlag=v
}
function adSetMOAT(v){
	atwUAC.adsFunctions+='adSetMOAT('+v+'),';
	if (v&&v!='0'&&atwIntl==0){
		var d=document,s=d.createElement("script"),h=d.getElementsByTagName("head")[0];
		s.src='https://web.archive.org/web/20200805040540/https://s.aolcdn.com/ads/moatuac.js';
		h.appendChild(s); 
	}
}
var adsLoadSync=0,adsSyncTime='',adsSyncDelay=0,adsRePo='0';
function adsResizePortrait(v){
	atwUAC.adsFunctions+='adsResizePortrait('+v+'),';
	adsRePo=v;
}
function adSetSpaceId(v){
	if (v)atwUAC.spaceid=v;
}
function adSetSyncDelay(v){
	atwUAC.adsFunctions+='adSetSyncDelay('+v+'),';
	if (v)adsSyncDelay=parseInt(v)
	else adsSyncDelay=200;
} 
function adsLoadedSync(){
	var z=adsDivs.length,v;
	for (var i=0;i<z;i++){
		v=adsGetObj(adsDivs[i]);
		if (v.textAd!=1&&v.iframe!=1&&v.delayed)v.LoadAd();
	}
	adsLoadSync=1;
}
function atwInfoFn(){
try {
var id,ft,sq,st,oth,tt,fw,fh,da,di,c='',td='</td><td>',adId,bId,sp,mm,ccpa,gdpr,rot,rotV,rotAd,rMN,rMNL,rE,rR,rAP;
var s='<style>table,.tableClass{border:solid 1px;}</style><table class="tableClass" width="100%" border=1><tr align="left"><th>Ad #</th><th>Magic Number</th><th>Ad Call Width</th><th>Ad Call Ht</th><th>Creative Width</th><th>Creative Ht</th><th>AdId</th><th>Format</th><th>SeqId</th><th>timeStamp</th><th>Ad Call Type</th><th>Parms Sent</th><th>Space ID</th><th>Div Name</th><th>InView</th><th>Mobile Moments Eligible</th><th>Rotation Allowed Page</th><th>Rotatable Allowed Ad</th><th>Page Rotate Values</th><th>Rotate Time</th><th>Rotate Max</th><th>Keep Size</th><th>Refresh Small</th><th>Refresh Large</th><th>Refresh Exclusive</th><th>Refresh Reserved</th><th>Ad Type Priority</th><th>GDPR</th><th>CCPA</th></tr>';
for (var i=1;i<adsTile;i++){
id='n/a';ft='n/a';sq='n/a';st='n/a';oth='n/a';mn='n/a';
tt='n/a';fw='n/a';fh='n/a',dn='n/a',iv='n/a',rT='n/a',rM='n/a',rK='n/a',sp='n/a',mm='no',ccpa='n/a',gdpr='n/a',rot='no',rotV='n/a',rotAd='n/a',rMN='n/a',rMNL='n/a',rE='n/a',rR='n/a',rAP='n/a';
if (atwUAC.adsInfo[i]){
	di=atwUAC.adsInfo[i];
	if (di.ttype)tt=di.ttype
	if (di.other)oth=di.other
	if (adsDevilAd.ad[i]){
		da=adsDevilAd.ad[i];
		if (da.adId)id=da.adId;
		if (da.aolFormat)ft=da.aolFormat;
		if (da.seqId)sq=da.seqId;
		if (da.timeStamp)st=da.timeStamp;
		if (da.width)fw=da.width;
		if (da.height)fh=da.height;
		if (da.rTime)rT=parseInt(da.rTime)/1000;
		if (da.rMax)rM=da.rMax;
		if (da.keepSize)rK=da.keepSize;
		if (da.rotatable)rot=da.rotatable;
		if (da.rotatableAd)rotAd=da.rotatableAd;
		if (da.rotateValues)rotV=da.rotateValues;
		if (da.refreshSmall)rMN=da.refreshSmall;
		if (da.refreshLarge)rMNL=da.refreshLarge;
		if (da.refreshExclusive)rE=da.refreshExclusive;
		if (da.refreshReserved)rR=da.refreshReserved;
		if (da.adTypePriority)rAP=da.adTypePriority;
 	}
	dn=atwUAC.adsInfo[i].dv;
	var dvObj=adsGetObj(dn);
	if (dvObj.rotate)rot=dvObj.rotate;
	iv=atwUAC.adsInfo[i].inV;
	if (atwUAC.adsInfo[i].mm)mm=atwUAC.adsInfo[i].mm;
	if (atwUAC.spaceid)sp=atwUAC.spaceid;
	if (atwUAC.ccpa)ccpa=atwUAC.ccpa;
	if (atwUAC.gdpr)gdpr=atwUAC.gdpr;
	s+='<tr><td>'+i+td+di.mn+td+di.origW+td+di.origH+td+fw+td+fh+td+id+td+ft+td+sq+td+st+td+tt+td+oth+td+sp+td+dn+td+iv+td+mm+td+rot+td+rotAd+td+rotV+td+rT+td+rM+td+rK+td+rMN+td+rMNL+td+rE+td+rR+td+rAP+td+gdpr+td+ccpa+'</td></tr>';
}
}
s+='</table><div align="left">';
for (var i=1;i<adsTile;i++){
	adId='',bId='';
	if (atwUAC.adsInfo[i]){
		di=atwUAC.adsInfo[i];
		c=di.url.replace(/addyn/,'adiframe');
		if (adsDevilAd.ad[i]){
			da=adsDevilAd.ad[i];
			if (da.adId)adId=da.adId.split('|')[0];
			bId=da.bId;
			if (adId&&bId){
				c=c.replace(/;grp=/,';adid='+adId+';bnid='+bId+';grp=');
			}
		}
		s+='URL for Ad '+i+' '+c+' <a href="'+c+'" target=_blank>Click to View Ad</a><P>';
	}
}
s+='<HR>List of Functions Called By Page: '+atwUAC.adsFunctions;
s+='</div>';
var w=window.open('','atwInfoWin','resizable=yes,status=no,toolbar=no,location=no,menubar=no,status=no,titlebar=no,scrollbar=yes');
w.document.write(s);
}
catch (e){}
}
var atwSizeMsgFn,atwSizeMsgCount=0;
function atwSizeMsg(o){
	var z=0,m,w=0,h=0,x,m;
	if (!o){
		if (atwSizeMsgCount>10){
			clearInterval(atwSizeMsgFn);
		}
		else{
			atwSizeMsgCount++;
			z=1;
		}
	}
	if (o||z==1){
		try{
			if (document&&document.documentElement){
				w=document.documentElement.clientWidth;
				h=document.documentElement.clientHeight;
			}
		}
		catch(e){}
		m='aolResize;width='+w+';height='+h+';counter='+atwSizeMsgCount;
		if (o)m+=';reorient';
		for (var i=0;i<adsTile;i++){
			x=document.getElementById('adsF'+i);
			if (x&&x.width==1200&&x.height==800){
				x=x.contentWindow;
				x.postMessage(m,'*');
			}
		}
	}
}
function adsTacFn(){
atwLoaded=1;
if (adsDev=='1')atwSizeMsgFn=setInterval(atwSizeMsg,1000);
if (atwInfo)x=setTimeout("atwInfoFn()",3000);
if (adsTacOK==1){
	if (atwUAC.gdprRet=='noCall'&&atwUAC.tacFn!='called'){
		atwUAC.tacFn='call';
	}
	else{
		atwUAC.tacFn='called';
		var ua=adsUA,av=navigator.appVersion.toLowerCase(),miV=parseFloat(av),maV=parseInt(miV),mac=(ua.indexOf("mac")!=-1),tridentPos=av.indexOf('trident/'),iePos=av.indexOf('msie');
		if (iePos!=-1){
			if (mac){
				iePos=ua.indexOf('msie');
				miV=parseFloat(ua.substring(iePos+5,ua.indexOf(';',iePos)));
			}
			else {
				miV=parseFloat(av.substring(iePos+5,av.indexOf(';',iePos)));
			}
			maV=parseInt(miV);
		}
		var ie=(((iePos!=-1)||(tridentPos!=-1))&&(ua.indexOf("opera")==-1));
		if (!ie||(ie&&maV!=8)){
			var p='',j=document.createElement('iframe');
			if ((atwUAC.gdprRet.toString().indexOf('noC')==-1)&&(atwUAC.gdpr=='0'||atwUAC.gdpr=='1')){
				p+='&gdpr='+atwUAC.gdpr;
				if (atwUAC.gdprC&&atwUAC.gdprC!=undefined){
					p+='&gdpr_consent='+atwUAC.gdprC;
				}
			}
			try{p+='&referrer='+encodeURIComponent(document.referrer)}
			catch(e){}
			j.setAttribute("itemscope","");
			j.setAttribute("itemtype","https://web.archive.org/web/20200805040540/https://schema.org/WPAdBlock");
			j.style.display="none";
			j.name=j.id="opusFrame";
			j.style.width=j.style.height='0px';
			j.src='https://web.archive.org/web/20200805040540/https://opus.analytics.yahoo.com/tag/opus-frame.html?id=3'+p;
			document.body.appendChild(j);
		}
	}
}
}
function adsDisableTacoda(v){
atwUAC.adsFunctions+='adsDisableTacoda('+v+'),';
if (!v||(v&&v.indexOf('rtb')==-1)){adsTacOK=0}
}
function atwGDPRDelay(v){
	if ((atwUAC.gdpr&&(atwUAC.ccpa||v.indexOf('failCCPA')>0))||((v.indexOf('success')<0)&&(v.indexOf('ccpaFail')<0))){
		clearTimeout(atwUAC.GDPRTimeout);
		if (v&&v.indexOf('timeout')>-1&&atwUAC.gdprRet=='noCall'){
			atwUAC.gdprRet='noCallTimeout';
		}
		if (adsTacOK==1&&atwUAC.tacFn=='call'){
			adsTacFn();
		}
		var z=adsDivs.length,d,gdpr='';
		if ((atwUAC.gdprRet.toString().indexOf('noC')==-1)&&(atwUAC.gdpr=='0'||atwUAC.gdpr=='1')){
			gdpr+='gdpr='+atwUAC.gdpr+';';
			if (atwUAC.gdpr&&atwUAC.gdpr!='0'){
				if (atwUAC.gdprC!=undefined)gdpr+='euconsent='+atwUAC.gdprC+';'
			}
		}
		for (var i=0;i<z;i++){
			d=adsGetObj(adsDivs[i]);
			f=adsGetObj(d.ifr);
			if (d.adURL.indexOf('gdpr=')==-1){
				if (atwUAC.gdpr){
					d.adURL=d.adURL.replace(/noperf=1;/,'noperf=1;'+gdpr);
					if (f)f.adURL=d.adURL;
				}
			}
			if (d.adURL.indexOf('us_privacy=')==-1){
				if (atwUAC.ccpa){
					d.adURL=d.adURL.replace(/noperf=1;/,'noperf=1;us_privacy='+atwUAC.ccpa+';');
					if (f)f.adURL=d.adURL;
				}
			}
			if (d.adLoaded!=1){
				d.LoadAd();
			}
		}
    }
}
function atwGDPRCmp(){
	window.__cmp('getConsentData',null,function(r,s){
		if (s){
			atwUAC.gdpr=r.gdprApplies?'1':'0';
			atwUAC.gdprC=r.consentData;
			atwUAC.gdprRet='success';
			atwGDPRDelay('successGDPR');
		}
		else{
			atwUAC.gdprRet='noCMPFail';
			atwGDPRDelay('failCMP');
		}				
	});
}
function atwGDPR(){
	atwUAC.gdprRet='noCall';
	atwUAC.GDPRTimeout=setTimeout(function(){atwGDPRDelay('timeout')},500);
	try {
		if (window.__tcfapi){
			window.__tcfapi('addEventListener',2,function(r,s){
				if (s===false||r.cmpStatus==='error'){
					atwGDPRCmp();
				}
				else if (r.eventStatus==='tcloaded'||r.eventStatus==='useractioncomplete'){
					atwUAC.gdpr=r.gdprApplies?'1':'0';
					atwUAC.gdprC=r.tcString;
					atwUAC.gdprRet='success';
					atwGDPRDelay('successTCF');
				}
			});
		}
		else if (window.__cmp){
			atwGDPRCmp();
		}
		else{
			atwUAC.gdprRet='noCMP';
			atwGDPRDelay('failCMP');
		}
	}
	catch(e){
		atwUAC.gdprRet='noCMPCatch';
		atwGDPRDelay('failCMP');
	}
	try {
		if (window.__uspapi){
			window.__uspapi('getUSPData',1,function(d,s){
				if (s){
					atwUAC.ccpa=d.uspString;
					atwGDPRDelay('successCCPA');
				}
				else {
					atwGDPRDelay('failCCPA');
				}
			});
		}
		else {
			atwGDPRDelay('failCCPA');
		}
	}
	catch(e){atwGDPRDelay('failCCPA')}
}
function adUACInit(){
var w=window,t;
atwGDPR();
try {
	if (document.readyState&&document.readyState=='complete'){
		adsTacFn();
	}
	else{
		if (w.addEventListener)w.addEventListener("load",adsTacFn,false)
		else if (w.attachEvent)w.attachEvent("onload",adsTacFn);
		t=setTimeout(function(){atwLoaded=1;},4000);
	}
}
catch(e){}
try{
	if (w.addEventListener){
		w.addEventListener("orientationchange",function(){atwSizeMsg('1')},false);
	}
	else if (w.attachEvent){
		w.attachEvent("onorientationchange",function(){atwSizeMsg('1')});
	}
}
catch (e){}
var at=adsLo.search(/atwcrpr=/i),ip,l=adsLo.toLowerCase();
adsIE=((navigator.appName=="Microsoft Internet Explorer")||(adsUA.indexOf("trident/")>-1));
if (adsIE){
	var mo=document.documentMode;
	if (mo&&mo<=9)adsIELT10=1;
}
if (at>0){
	adsCA=adsLo.substr(at+8).split(/\||;|\&/);
	adsCp=1;
	var z=adsCA.length;
	for (var i=0,k=0;i<z;i=i+4,k++){adsCF[k]=adsCA[i];adsCW[k]=adsCA[i+1];adsCH[k]=adsCA[i+2];adsCAd[k]=adsCA[i+3]}
}
adsMNS=(/(\?|&)atwmn=(.*?)(&|$)/.test(l))?(RegExp.$2).split(/\||;/):'';
if (!(/^[0-9A-Za-z,-.]+$/.test(unescape(adsMNS))))adsMNS='';
adsKV=(/(\?|&)atwkv=(.*?)(&|$)/.test(l))?(RegExp.$2):'';
if (adsKV){
		var kvs=unescape(adsKV).split(';'),kv,str='';
		for (var i=0;i<kvs.length;i++){
				kv=kvs[i].split('=');
				var v0=encodeURIComponent(kv[0]),v1=encodeURIComponent(kv[1]);
				v1=v1.replace("%2C",",");
				if (kv.length==2&&(/^[0-9A-Za-z,-_]+$/.test(v0))&&(/^[0-9A-Za-z,-_]+$/.test(v1)))
				{
						if (v0.indexOf('kv')!=0)str+='kv';
						v1=v1.replace(",","%2C");
						str+=v0+'='+v1+';';
				}
		}
		adsKV=str;
}
if (adsKV&&adsKV[adsKV.length-1]!=';')adsKV+=';'
adsExcV=(/(\?|&)atwexc=(.*?)(&|$)/.test(l))?(RegExp.$2):'';
ip=(/(\?|&)atwip=(.*?)(&|$)/.test(l))?(RegExp.$2):'';
if (ip&&(/^[0-9\.]+$/.test(unescape(ip))))adsATOth+='ip='+ip+';';
adsSZ=(/(\?|&)atwsz=(.*?)(&|$)/.test(l))?(RegExp.$2).split(/\||;/):'';
if (!(/^[0-9A-Za-z,]+$/.test(unescape(adsSZ))))adsSZ='';
adsFileless=(/(\?|&)atwfileless=(.*?)(&|$)/.test(l))?1:0;
adsRotateTime=(/(\?|&)atwrotatetime=(.*?)(&|$)/.test(l))?(RegExp.$2):'';
atwUAC.sandbox=(/(\?|&)atwsandbox=(.*?)(&|$)/.test(l))?(RegExp.$2):'';
}
adUACInit();
function adsCkCol(f,d,xx){
try {
	var dv=document.getElementById(f.divName),i=d.getElementById('adDiv').innerHTML,z,nc=0;
	if (xx=='timeout'&&i.indexOf('aolAdId')<0){nc=1}
	var x=((i.indexOf('AOL - HTML - Blank HTML Ad')!=-1)||(i.indexOf('ATCollapse.gif')!=-1)||(i.indexOf('<!-- No Ads -->')!=-1));
	if (adsEAN==1&&!nc&&!x){
		var v=f.parentNode;
		f.comment=1;
		if (f.ean&&f.ean!=2&&!((f.w=='61'&&f.h=='21')||(f.w=='290'&&f.h=='18')||(f.w=='386'&&f.h=='280'))){
			f.ean=2;
			if (!v.keepSize||v.rTimes<=1)adsWriteEAN(v,f,i);
		}
	}
	if (dv&&dv.col){
		if (!nc&&!x){
			f.width=f.w;
			f.height=f.h;
			f.style.display='inline';
			f.style.visibility='visible';
		}
	}
	if (x){
		f.style.width="0px"
		f.style.height="0px"
		dv.width=0
		dv.height=0 
		f.style.display='none'
		adsDevilObj(f.divName,'1','1',f,d,'1');
		return true
	}
	else{
		if (dv.rotate==1&&dv.rCalled!=1)adsGetRotate(dv,i);
		if (!nc&&f.textAd!=1&&dv&&!dv.dynSz)adsDevilObj(f.divName,f.w,f.h,f,d,'0');
		return false
	}
}
catch(e){
	return false;
}
}
function adsGetRotate(v,i){
	var mL='',r=1,m='';
	m=(/RefreshSmall=(.*?)(\n)/i.test(i))?RegExp.$1:'';
	mL=(/RefreshLarge=(.*?)(\n)/i.test(i))?RegExp.$1:'';
	if (!m){
		m=(/RefreshMN=("|')(.*?)("|')/i.test(i))?RegExp.$2:'';
	}
	if (m){
		v.rE=(/RefreshExclusive=(.*?)(\n)/i.test(i))?RegExp.$1:'';
		v.rR=(/RefreshReserved=(.*?)(\n)/i.test(i))?RegExp.$1:'';
		v.rMP=(/var MP=(.*?)(\n)/i.test(i))?RegExp.$1:'';
		v.rAP=(/AdTypePriority=(.*?)(\n)/i.test(i))?parseInt(RegExp.$1):'';
		if ((v.rE=='N'&&v.rMP=='N'&&v.rAP>=493)||(v.rR=='N'&&v.rMP=='N'&&v.rAP>=200&&v.rAP<493)){
			r=0;
		}
		v.rCalled=1;
	}
	else if (!(/RefreshSmall=/i.test(i))){
		var xT=setTimeout(function(){adsGetRotate(v,i);},500);
	}
	if (r&&m){
		v.rotatableAd='yes';		
		v.rMN=m;
		if (mL)v.rMNL=mL;
		if (!v.rTime)v.rTime=(/RefreshTime=(.*?)(\n)/i.test(i))?(parseInt(RegExp.$1)*1000):30000;
		if (!v.rTime)v.rTime=30000;
		if (!v.rMax)v.rMax=(/RefreshMax=(.*?)(\n)/i.test(i))?parseInt(RegExp.$1):'5';
		if (!v.keepSize)v.keepSize=(/RefreshKeepSize=(.*?)(\n)/i.test(i))?RegExp.$1:'';
		if (v.timeout){
			clearTimeout(v.timeout);
			if (v.rTimes<=v.rMax){
				v.timeout=setTimeout(function(){adsReloadServer(v)},v.rTime);
				if (atwPreBidCheck(v.mn)){
					v.timeoutHB=setTimeout(function(){adsReloadServer(v,'hb')},v.rTime-3000);
				}
			}
		}
		else{
			v.timeout=setTimeout(function(){adsReloadServer(v)},v.rTime);
			if (atwPreBidCheck(v.mn)){
				v.timeoutHB=setTimeout(function(){adsReloadServer(v,'hb')},v.rTime-3000);
			}
		}
		if (atwUAC.rSetup==0){
			atwUAC.rSetup=1;
			if (window.addEventListener){
				window.addEventListener('focus',function(){atwUAC.focus=1},false);
				window.addEventListener('blur',function(){atwUAC.focus=0},false);
			}
			if (typeof document.hidden!=="undefined"){ 
				atwUAC.hidden="hidden";
				atwUAC.visCh="visibilitychange";
			}
			else if (typeof document.msHidden!=="undefined"){
				atwUAC.hidden="msHidden";
				atwUAC.visCh="msvisibilitychange";
			}
			else if (typeof document.webkitHidden!=="undefined"){
				atwUAC.hidden="webkitHidden";
				atwUAC.visCh="webkitvisibilitychange";
			}
			if ((typeof document[atwUAC.hidden]!=='undefined')&&document.addEventListener){
				document.addEventListener(atwUAC.visCh,atwVisCh,false);
			}
		}
	}
	else {
		if (!m){v.rotatableAd='no - Missing refresh MN'}
		else if (!r){v.rotatableAd='no - Premium Ad'}
	}
}
function atwDisplayText(dv,t,i){
	var x=adsGetObj(dv),f=x.getElementsByTagName('iframe')[0],d=f.contentWindow.document,z;
	if (!t)t=2
	else t=parseInt(t);
	if (!i)i=100
	else i=parseInt(i);
	t=t*(1000/i);
	if ((d.readyState&&d.readyState=='complete')||(f.textAdDelay>t)){
		f.textAdDelay=0;
		adsDoOnL(f,d,'1');
	}
	else{
		f.textAdDelay++;
		z=setTimeout(function(){return atwDisplayText(dv);},i);
	}
}
function adSetStyle(v){
	atwUAC.adsFunctions+='adSetStyle('+v+'),';
	atwUAC.style=v;
}
function adsDoOnL(f,d,c){
if (f&&(f.textAdDelay==0||c)){
	if (!adsCkCol(f,d)&&f.divName){
		var s=d.getElementById('adDiv').innerHTML,n=s.indexOf('\<\!--'),wi,h,loc='top:0;right:0;';
		if (n>0){
			var x=s.substr(n,s.length);
			var sc,z,re,arr=[],l;
			re=/aolTXT(.*?)[1-9]=["'](.*?)["']/ig;
			while (z=re.exec(x)){
				arr.push(z[1]);
				arr.push(z[2]);
			}
			l=arr.length;
			for (var i=0;i<l;i=i+2){
				if (arr[i+1]){
					if (arr[i]=='js'||arr[i]=='JS'){
						sc=document.createElement('script');
						sc.type='text/javascript';
						sc.src=arr[i+1];
						document.body.appendChild(sc);
					}
					else if (arr[i]=='imp'||arr[i]=='IMP'){
						sc=document.createElement('img');
						sc.src=arr[i+1];
					}
				}
			}
		}
		if (s.indexOf('TextVendor')<0&&s.indexOf('TextCustom')<0){
			if (n>0){
				var x=s.substr(n,s.length),p=document.getElementById(f.divName),z=f.contentWindow.adComRedirect;
				if (z){
					adSetupDiv(f.w,f.h,z,f.divName,f.src,'text',f.mn,'0','0','0',f.fileless);
					adsDivs[adsDivs.length-1].LoadAd();
				}
				else{
					var xx='',ex=0;
					x=x.replace(/\<img src=(.*?)width=\"1px\" height=\"1px\"(.*?)>/ig,'');
					if (adsEAN==1){
						if (f.ean&&!((f.w=='61'&&f.h=='21')||(f.w=='290'&&f.h=='18')||(f.w=='386'&&f.h=='280'))){
							xx+='<div style="position:relative;">';
							ex=1;
						}
						xx+=x;
						if (ex){
							if (adsEANArr[f.divName])loc=adsEANArr[f.divName];
							xx+='<a style="position:absolute;'+loc+'z-index:4999;" href="https://web.archive.org/web/20200805040540/http://adinfo.aol.com/" target="_blank">';
							xx+='<img src="https://web.archive.org/web/20200805040540/https://o.aolcdn.com/ads/adchoicesi.png" style="border:none;margin:0px;width:19px;height:15px;vertical-align:top;" border=0 alt="AdChoices">';
							xx+='</a></div>';
						}
						x=xx;
					}
					p.innerHTML=x;
					adsDevilObj(f.divName,f.w,f.h,f,d,'0');
				}
			}
		}
		else{
			if (/aolsize=[ ]?["']([\d]*?)\|([\d]*)["']/i.test(s)){
				wi=unescape(RegExp.$1);
				h=unescape(RegExp.$2);
			}
			else{
				wi=f.w;
				h=f.h;
			}
			if (s.indexOf('TextCustom')>-1){
				f.style.width=wi+'px';
				f.style.height=h+'px';
				f.style.display='block';
				f.style.visibility='visible';
			}
			adsDevilObj(f.divName,wi,h,f,d,'1');
		}
	}
}
}
function adSetNetId(v){
	atwUAC.adsFunctions+='adSetNetId('+v+'),';
	if (v=='517')v='1065.1'
	adsNt=v;
	if (atwIntl==1&&v!='1065.1'){
		adsUK=0;
		adsAlias=0;
	}
}
function adSetPlId(v){
	atwUAC.adsFunctions+='adSetPlId('+v+'),';
	adsPl=v;
}
function adSetHtNm(v){
	atwUAC.adsFunctions+='adSetHtNm('+v+'),';
	var p='https';
	adsHt=(/^https?/i.test(v))?v:((/^\/\//.test(v))?p+v:p+'//'+v);
	if (adsHt.indexOf('http://')>-1){adsHt=adsHt.replace('http://','https://')}
	if (adsHt.charAt(adsHt.length-1)=='/')adsHt=adsHt.substring(0,adsHt.length-1);
}
function adSetHtNmAT(v){
	atwUAC.adsFunctions+='adSetHtNmAT('+v+'),';
	var p='https:';
	adsHt=(/^https?/i.test(v))?v:((/^\/\//.test(v))?p+v:p+'//'+v);
	if (adsHt.indexOf('http://')>-1){adsHt=adsHt.replace('http://','https://')}
	if (adsHt.charAt(adsHt.length-1)=='/')adsHt=adsHt.substring(0,adsHt.length-1);
}
function adSetOthAT(v,r){
	if (adsUACH&&adsUACD>0)var x=setTimeout(adsATWDelay,3000,arguments.callee.name,arguments)
	else{
		if (r)adsATOth='';
		if (v){
			if (v.charAt(v.length-1)!=';')v+=';'
			var x=v.split(';'),l=x.length,k,y0,y1;
			for (i=0;i<l-1;i++){
				if (x[i].charAt(x[i].length-1)!='='){
					k=x[i].indexOf('=');
					y0=x[i].substring(0,k);
					y1=x[i].substring(k+1,x[i].length);
					if (y0=='kvrefd'){
						if (y1.indexOf('ncid=')>0){
							n=v.match(/(?:.*?)[&#?]ncid=(.*?)(?:[&#\/]|$)/);
							adsATOth+='kvncid='+RegExp.$1+';';
						}
					}
					adsATOth+=encodeURIComponent(y0)+"="+encodeURIComponent(y1)+';'; 
				}
			}
		}
		else if (v=='')adsATOth='';
	}
}
function adSetAddOn(v){
	atwUAC.adsFunctions+='adSetAddOn('+v+'),';
	if (adsAddOn!=2)adsAddOn=parseInt(v);
}
function adSetAJAXAddOn(v){
	atwUAC.adsFunctions+='adSetAJAXAddOn('+v+'),';
	adsAJAXAddOn=v
}
function adSetType(v){
	if (v=='')v='J'
	adsTp=v.toUpperCase()
}
function adSetAdURL(u){
	if (u=='fileless')adsFileless=1
	else if (adsFileless==1)u='fileless';
	adsPage=u;
}
function adsResetPg(){
	atwUAC.adsFunctions+='adsResetPg()';
	adsTile=1;
	adsDivs=[];
	adsD=new Date();
	adsScr=adsD.getTime()%0x3b9aca00;
	adsATOth='';
	adsAddOn=1;
	atwReset=1;
	adsRRDevil='';
	aol_devil_flag='';
	if (atwUAC.scrollF){
		try{
			if(window.removeEventListener)window.removeEventListener('scroll',atwScrollCall,false);
		}
		catch(e){}
		atwUAC.scrollF='';
	}
	atwUAC.scrolled=0;
}
function adsReloadAll(){
	atwUAC.adsFunctions+='adsReloadAll()';
	adsD=new Date()
	var z=adsDivs.length;
	for (var i=0;i<z;i++)adsReloadAd(adsDivs[i],'','all')
}
function adsReloadAd(d,m,a){
	atwUAC.adsFunctions+='adsReloadAd('+d+','+m+','+a+')';
	if (a!='all')adsD=new Date();
	var v=adsGetObj(d),s=v.adURL,dt=adsD.getTime()%0x3b9aca00,max=0;
	try {
		if (v.rTimes&&v.rTimes>v.rMax)max=1;
		if (s&&!max){
			if (m)s=s.replace(/alias=(.*?);/,"alias="+m+";").replace(/kvmn=(.*?);/,"kvmn="+m+";");
			var i=s.indexOf(';grp='),u='';
			if (i==-1)u=s.replace(/ /, "")+" "
			else u=s.substring(0,i+5)+dt;
			u=u.replace(/kvgrp=[0-9]*;/,"kvgrp="+dt+";");
			v.adURL=u;
			v.LoadAd();
			if (v.rTimes)v.rTimes++;
			if (v.timeout){
				clearTimeout(v.timeout);
				v.timeout=setTimeout(function(){adsReloadServer(v)},v.rTime);
				if (atwPreBidCheck(dv.mn)){
					dv.timeoutHB=setTimeout(function(){adsReloadServer(dv,'hb')},dv.rTime-3000);
				}
			}
		}
	}
	catch(e){}
}
function adsReloadIframe(n,m,v){
	atwUAC.adsFunctions+='adsReloadIframe('+n+','+m+','+v+')';
	var f='',s='',r=false,nm1;
	try {
		if (adsIntl==1){
			if (v!='all'&&n.indexOf('adsF')==-1)nm1="adsF"+n
			else nm1=n
			f=document.getElementById(nm1);
		}
		else{
			f=document.getElementById(n);
		}
		if (f){
			if (v!='all')adsD=new Date();
			s=f.src;
			if (s){
				if (m&&adsUK)s=s.replace(/alias=(.*?);/,"alias="+m+";").replace(/kvmn=(.*?);/,"kvmn="+m+";");
				var dt=adsD.getTime()%0x3b9aca00,i=s.indexOf(';grp='),u='';
				if (i==-1)u=s.replace(/ /, "")+" "
				else u=s.substring(0,i+5)+dt;
				u=u.replace(/kvgrp=[0-9]*;/,"kvgrp="+dt+";");
				f.src=u;
				r=true;
			}
		}
	}
	catch(e){}
	if (adsIntl==1){
		return r;
	}
}
function adSetNoAlias(){
	atwUAC.adsFunctions+='adSetNoAlias(),';
	if (!adsUK)adsAlias=0
}
function adSetAlias(v){
	atwUAC.adsFunctions+='adSetAlias('+v+'),';
	if (!adsUK)adsAlias=v
}
function adsGetAdURL(w){
var d=w.frameElement.parentNode;
return d.adURL
}
function adsDevilObj(d,w,h,f,doc,r){
	var dv=document.getElementById(d),n=dv.adNum+1,i='';
	try { 
		i=doc.getElementById('adDiv').innerHTML;
	}
	catch (e){}
	if (!i){
		try{
			var cc=f.contentDocument||f.contentWindow.document;
			i=cc.body.innerHTML;
		}
		catch(e){}
	}
	var m=(/mnum=(.*?)\//i.test(i))?RegExp.$1:'',
		a=(/aolAdId=("|')(.*?)("|')/i.test(i))?RegExp.$2:'|',
		b=(/zMoatBannerID=(.*?)(\n)/i.test(i))?RegExp.$1:'',
		t=(/aolFormat=("|')(.*?)("|')/i.test(i))?RegExp.$2:'',
		gf=(/GoldenFormat=("|')(.*?)("|')/i.test(i))?RegExp.$2:'',
		gu=(/aolGUID=("|')(.*?)("|')/i.test(i))?RegExp.$2:'',
		tx=(f.textAd)?'1':'0',
		st;
	st=gu.split('|');
	if (f.mn)aolAdFdBkStr+=f.mn+'|'+w+'|'+h+'|'+a+'|'+m+';';
	if (a=='|')a='';
	f.setAttribute('banId',a);
	try {
		window.adsDevilAd=window.adsDevilAd||{};
		window.adsDevilAd.ad=window.adsDevilAd.ad||[];
		adsDevilAd.ad[n]={
			divName:f.divName,
			mn:f.mn,
			adId:a,
			aolFormat:t,
			goldenFormat:gf,
			width:w,
			height:h,
			mnum:m,
			sz:f.sz,
			textAd:tx,
			seqId:st[1],
			bId:b,
			timeStamp:st[0]
		};
		if (dv.rotate){
			if (dv.rotatableAd)adsDevilAd.ad[n].rotatableAd=dv.rotatableAd;
			adsDevilAd.ad[n].rotatable='yes';
			adsDevilAd.ad[n].rTime=dv.rTime;
			adsDevilAd.ad[n].rMax=dv.rMax;
			adsDevilAd.ad[n].keepSize=dv.keepSize;
			adsDevilAd.ad[n].refreshSmall=dv.rMN;
			adsDevilAd.ad[n].refreshLarge=dv.rMNL;
			adsDevilAd.ad[n].refreshExclusive=dv.rE;
			adsDevilAd.ad[n].refreshReserved=dv.rR;
			adsDevilAd.ad[n].adTypePriority=dv.rAP;
		}
		else{
			adsDevilAd.ad[n].rotatable='no';
		}
		if (dv.rotateValues){
			adsDevilAd.ad[n].rotateValues=dv.rotateValues;
		}
	}
	catch(e){}
	try {
		adsDevilAd.ad[n].aolDevilFlag=top.aol_devil_flag;
		if (!adsRRDevil){
			if (f.sz=='300x250,300x600,300x1050'&&h!='1050')adsRRDevil='n';
			if (top.aol_devil_flag||(f.sz=='300x250,300x600,300x1050'&&h=='1050')){
				adsRRDevil='y';
				var id,dd,z=adsDivs.length;
				for (var i=0;i<z;i++){
					if (atwAdBlock){
						id="atwFrame"+i;
					}
					else{
						id="atwAdFrame"+i;
					}
					dd=document.getElementById(id);
					if (dd&&dd.inV&&dd.inV=='D'){
						dd.style.width='0px';
						dd.style.height='0px';
						dd.style.display='none';
					}
				}
			}
		}
	}
	catch(e){}
	try {
		if (window.adsDevilAd.hasOwnProperty('resized'))adsDevilAd.resized(d,w,h);
		if (window.adsDevilAd.hasOwnProperty('adinfo'))adsDevilAd.adinfo(n,d,w,h);
		if (window.adsDevilAd.hasOwnProperty('adinfo2'))adsDevilAd.adinfo2(n,d,w,h);
		if (window.adsDevilAd.hasOwnProperty('moat'))adsDevilAd.moat(n,d,w,h,tx);
		if (window.atwUAC.hasOwnProperty('adLoaded'))atwUAC.adLoaded(n,adsDevilAd.ad[n]);
		if (w=='300'){
			adsDevilAd.RRWidth=w;
			adsDevilAd.RRHeight=h;
		}
	}
	catch(e){}
}
var adsWait=0,adsWaitNo=0;
function adsDisableWait(){
	atwUAC.adsFunctions+='adsDisableWait(),';
	adsWaitNo=1;
}
function adsLoadWait(f,v){
	var wi='',h='',z;
	try{
		wi=f.contentWindow.document.body.scrollWidth;
		h=f.contentWindow.document.body.scrollHeight;
		if (wi&&h&&wi>1&&h>1&&!(v.w==wi&&v.h==h)){
			zz=adsFindSize(v,wi,h);
			wi=zz[0];
			h=zz[1];
			f.width=wi;
			f.height=h;
			f.className="uac_"+wi+"x"+h;
			if (adsEAN==1&&document.getElementById(f.id+'EAN')){
				adsMoveEAN(wi,f.id);
			}
		}
		else{
			if (adsWait++<40){
				z=setTimeout(function(){adsLoadWait(f,v);},100);
			}
		}
	}
	catch(e){
		if (adsWait++<40)z=setTimeout(function(){adsLoadWait(f,v);},100);
	}
}
function adsFindSize(v,wi,h){
	var s=v.sz.split(','),l=s.length,x,lD=100,ma=0,di,i,zz;
	for (i=0;i<l;i++){
		x=s[i].split('x');
		di=Math.abs(x[0]-wi)+Math.abs(x[1]-h);
		if (di<lD){
			lD=di;
			ma=i;
		}
	}
	return s[ma].split('x');
}
function adsMatchSize(v,wi,h){
	var s=v.sz.split(','),l=s.length;
	for (i=0;i<l;i++){
		x=s[i].split('x');
		if (x[0]==wi&&x[1]==h){
			return true;
		}
	}
	return false;
}
function adSetMobile(v,s){
	if (v&&v!='0'){
		atwUAC.adsMM=v;
	}
	if (s=='noscroll'){
		atwUAC.noscroll=1;
	}
}
function adsRMIFOnL(w,d,xx){
var f=w.frameElement,v=f.parentNode,wi='',h='',z=0,a=0,cm=0,t,aD1='';
try {
	aD1=d.getElementById('adDiv').innerHTML;
}
catch(e){}
if (!aD1){
	try {
		var inD=f.contentDocument||f.contentWindow.document; 		
		aD1=inD.body.innerHTML;
	}
	catch(e){}
}
if (/GoldenFormat=["']MobileMoments["']/i.test(aD1)){
	if (window.innerWidth<550&&window.innerWidth<window.innerHeight&&v.mm=='1'){
		wi=window.innerWidth;
		h=parseInt((16/9)*wi);
	}
	else{
		wi='300';
		h='533';
	}
}
else{
if (/ACE_AR(.*?)possible_size(.*?)[,}]/i.test(aD1)){
	a=1;
}
else if (/ACE_AR(.*?)Size(.*?)['"](.*?)['"]/i.test(aD1)){
	if (unescape(RegExp.$3).indexOf(',')>0){
		a=1;
	}
}
if ((/aolSize=[ ]?["']([\d]*?)\|([\d]*)["']/i.test(aD1))&&(unescape(RegExp.$2)>1)){
	cm=1;
	wi=unescape(RegExp.$1);
	h=unescape(RegExp.$2);
	if (wi=='6'&&h=='2'){
		wi='300';
		h='250';
	}
}
else{
	if (/ACE_AR(.*?)Size(.*?)[,}]/i.test(aD1)&&!a){
		cm=1;
		var as=unescape(RegExp.$2).replace(/[^\d\+]/g,"");
		wi=parseInt(as.substring(0,3),10);
		h=parseInt(as.substring(3,as.length),10);
	}
	else{
		if (xx!='timeout'){
			try{
				wi=f.contentWindow.document.body.scrollWidth;
				h=f.contentWindow.document.body.scrollHeight;
				if ((wi<1||h<1||(v.w==wi&&v.h==h))&&!a&&v.sz&&!adsWaitNo)t=setTimeout(function(){adsLoadWait(f,v);},100);
			}
			catch(e){
				t=setTimeout(function(){adsLoadWait(f,v);},100);
			}
		}
	}
}
if (wi&&h&&wi>1&&h>1&&!(v.w==wi&&v.h==h)&&v.sz){
	zz=adsFindSize(v,wi,h);
	wi=zz[0];
	h=zz[1];
}
}
if (!a&&wi&&h&&wi>1&&h>1&&!(v.w==wi&&v.h==h)){
	z=1;
	f.width=wi;
	f.height=h;
}
if ((a||cm==1)&&xx=='timeout'){
	f.comment=1;
}
if (cm==1||xx!='timeout'){
	adsDevilObj(v.divName,wi,h,f,d,z);
}
if (wi&&h&&f)f.className="uac_"+wi+"x"+h;
if ((adsEAN==1)&&(!(v.w==wi)&&(document.getElementById(f.id+'EAN')))){
	adsMoveEAN(wi,f.id);
}
}
function adsMoveEAN(wi,id){
	var cw=document.documentElement.clientWidth,wid;
	if (cw<wi)wid=cw
	else wid=wi;
	document.getElementById(id+'EAN').style.width=wid+'px';
	document.getElementById(id+'EANA').style.right=0+'px';
	if (wi>'728'&&adsDev=='1'){
		document.getElementById(id+'EAN').style.width='100%';
		document.getElementById(id +'EAN').style.maxWidth='970px';
		document.getElementById(id+'EAN').style.margin='2px auto';
	}
}
function adsDisableEAN(v){
	if (v=='0'&&atwIntl!=1)adsEAN=1
	else adsEAN=0
}
function adsSetEAN(dv,v){
	if (v=='br')adsEANArr[dv]='right:0;'
	else if (v=='tl')adsEANArr[dv]='top:0;left:0;'
	else if (v=='bl')adsEANArr[dv]='left:0;'
	else if (v=='tr')adsEANArr[dv]='top:0;right:0;'
}
function adsWriteEAN(v,f,i){
	var c=0,wi=f.w,loc='right:0px;';
	if (f.textAd&&(i.indexOf('TextVendor')>0||i.indexOf('TextCustom')>0)){
		c=1;
		if (f.divName){
			wi=document.getElementById(f.divName).offsetWidth;
		}
	}
	if (!f.textAd||c==1){
		var ean=document.createElement('div'),eans;
		ean.style.width=wi+'px';
		ean.style.height='15px';
		ean.style.top='0px';
		ean.style.left='0px';
		ean.style.margin='0 auto';
		ean.id=f.id+'EAN';
		ean.style.position='relative';
		if (adsEANArr[v.divName])loc=adsEANArr[v.divName];
		if (c!=1){
			if (f.w<234||(f.w=='560'&&f.h=='35')){
				eans='<a id="'+f.id+'EANA" style="position:absolute;left:'+(f.w-19)+'px;z-index:4999;margin:0 auto;width:19px;height:15px" href="https://web.archive.org/web/20200805040540/http://adinfo.aol.com/" target="_blank"><img src="https://web.archive.org/web/20200805040540/https://o.aolcdn.com/ads/adchoicesi.png" style="border:none;width:19px;height:15px;vertical-align:top" alt="AdChoices"></a>';
			}
			else{
				eans='<a id="'+f.id+'EANA" style="position:absolute;'+loc+'z-index:4999;margin:0 auto;width:77px;height:15px" href="https://web.archive.org/web/20200805040540/http://adinfo.aol.com/" target="_blank"><img src="https://web.archive.org/web/20200805040540/https://o.aolcdn.com/ads/adchoices.png" style="border:none;width:77px;height:15px;vertical-align:top" alt="AdChoices"></a>';
			}
			if (f.w=='560'&&f.h=='35'){
				ean.style.position='absolute';
				ean.style.width='auto';
			}
			ean.innerHTML=eans;
			v.appendChild(ean);
		}
		else{
			eans='<a id="'+f.id+'EANAT" style="position:absolute;'+loc+'z-index:4999;margin:0 auto;width:19px;height:15px" href="https://web.archive.org/web/20200805040540/http://adinfo.aol.com/" target="_blank"><img src="https://web.archive.org/web/20200805040540/https://o.aolcdn.com/ads/adchoicesi.png" style="border:none;width:19px;height:15px;vertical-align:top" alt="AdChoices"></a>';
			ean.innerHTML=eans;
			v.insertBefore(ean,v.firstChild);
		}
	}
}
function adsRmChildren(o){
	var f=null;
	while (o.childNodes.length>0){
		var c=o.childNodes[0],i=c.id
		if (i){
			if ((i.toString().indexOf("atwFrame")!=-1)||(i.toString().indexOf("atwAdFrame")!=-1)){
				f=c
				f.src="about:blank"
			}
			c.i=""
		}
		if (c.childNodes.length>0)adsRmChildren(c)
		o.removeChild(c)
	}
}
function adsClrDiv(){
	adsRmChildren(this)
}
function adsClrAd(d){
	var o=adsGetObj(d);
	adsRmChildren(o)
}
function adsGetObj(d){
	var o;
	if (typeof(d)!='object')o=document.getElementById(d)
	else o=d
	return o
}
function adsFilelessFn(i,u){
	if (atwPreBidCheck(i.mn)){
		try {
			var dd=atwHBDivsLoaded(i.mn);
			if (dd>=0){
				var tS='',t=pbjs.getAdserverTargetingForAdUnitCode(String(atwHB[dd].code)),adid=t['hb_adid'],allBids=pbjs.getBidResponses()[String(atwHB[dd].code)]['bids'];
				if (adid&&allBids){
					var nB=allBids.length,bid={};
					for (var j=0;j<nB;j++){
						bid=allBids[j];
						if (bid.adId==adid){
							if (!bid.ttl||((new Date).getTime()-bid.requestTimestamp)<bid.ttl*1000){
								for (var key in t){
									tS+="kv"+key+"="+escape(t[key])+";";
								}
								u=u.replace(/kvmn=/,tS+"kvmn=");
							}
							break;
						}
					}
				}
			}
		}
		catch(e){};
	}
	var i2=(i.contentWindow)?i.contentWindow:(i.contentDocument.document)?i.contentDocument.document:i.contentDocument;
	i2.document.open();
	var iStr='<html lang="en"><head><title>Aol Advertisement</title>\n';
	if (i.textAd&&atwUAC.style){
		iStr+='<link rel="stylesheet" href="'+atwUAC.style+'">\n';
	}
	iStr+='<script type="text/javascript">\n';
	iStr+='window.JAC=window.JAC||{};\n';
	iStr+='window.JAC.sandbox=window.JAC.sandbox||{};\n';
	iStr+='JAC.sandbox.init=function(obj){\n';
	iStr+='var f=window.frameElement,v=f.parentNode;\n';
	iStr+='if (parent.adsMatchSize(f,obj.w,obj.h)){\n';
	iStr+='f.sspCB=1;\n';
	iStr+='f.style.visibility="visible";\n';
	iStr+='f.style.display="inline";\n';
	iStr+='f.style.width=obj.w+"px";\n';
	iStr+='f.style.height=obj.h+"px";\n';
	iStr+='f.width=obj.w;\n';
	iStr+='f.height=obj.h;\n';
	iStr+='if (obj.w&&obj.h&&f)f.className="uac_"+obj.w+"x"+obj.h;\n';
	iStr+='if ((parent.adsEAN==1)&&(!(f.w==obj.w)&&(parent.document.getElementById(f.id+"EAN")))){parent.adsMoveEAN(obj.w,f.id);}\n';
	iStr+='else if (parent.adsEAN==1&&f.ean!=2){f.ean=2;parent.adsWriteEAN(v,f,"");}\n';
	iStr+='try{parent.adsDevilObj(f.divName,obj.w,obj.h,f,f.document,"0")}catch(e){};\n';
	iStr+='}}\n';
	iStr+='JAC.sandbox.unload=function(){\n';
	iStr+='var f=window.frameElement,v=f.parentNode;\n';
	iStr+='f.sspCB=1;\n';
	iStr+='f.style.width="0px"\n';
	iStr+='f.style.height="0px"\n';
	iStr+='f.style.display="none";\n';
	iStr+='try{var eanDiv=document.getElementById(f.id+"EAN");if (eanDiv){eanDiv.style.display="none"}}catch(e){}\n';
	iStr+='try{parent.adsDevilObj(f.divName,"1","1",f,f.document,"1");}catch(e){};\n';
	iStr+='}\n';
	iStr+='function adsPageOnL(){adsLoaded=1;adFr=window.frameElement;\n';
	iStr+=' if (adFr){if (adFr.textAd!=1){if (parent&&parent.adsCkCol&&adFr.sspCB!=1){var collapse=parent.adsCkCol(adFr,document);\n';
	iStr+=' if (!collapse&&adFr.divName){var parDiv=parent.document.getElementById(adFr.divName);\n';
	iStr+=' if (parDiv&&(parDiv.dynSz==1)&&parent.adsRMIFOnL){parent.adsRMIFOnL(window,document)}}}}else{parent.adsDoOnL(adFr,document)}}}\n';
	iStr+='function adsPageTimeout(){var adFr=window.frameElement;\n';
	iStr+=' if (!adsLoaded&&adFr&&adFr.comment!=1&&adFr.textAd!=1&&adFr.divName&&adFr.sspCB!=1&&parent&&parent.adsCkCol){\n';
	iStr+=' var collapse=parent.adsCkCol(adFr,document,"timeout");\n';
	iStr+=' if (!collapse){var parDiv=parent.document.getElementById(adFr.divName);\n';
	iStr+=' if (parDiv&&(parDiv.dynSz==1)&&parent.adsRMIFOnL){parent.adsRMIFOnL(window,document,"timeout");\n';
	iStr+=' var z=setTimeout(function(){adsPageTimeout()},500)\n';
	iStr+='}}}\n';
	iStr+='if (adFr&&adFr.textAd==1&&!adsLoaded&&adFr.comment!=1&&adFr.divName&&parent&&parent.adsDoOnL){parent.adsDoOnL(adFr,document)}}\n';
	iStr+='</script></head>\n';
	iStr+='<body onload=\'setTimeout("adsPageOnL()",10)\' style="overflow: visible; border:0; background-color: transparent;">\n';
	iStr+='<div id="adDiv" style="overflow: visible; border:0;">\n';
	iStr+='<script type="text/javascript">\n';
	iStr+='var inDapIF=true,inFIF=true,adsLoaded=0;\n';
	iStr+='var zz=setTimeout(function(){adsPageTimeout()},2000)\n';
	iStr+='</script>\n';
	iStr+="<script type='text/javascript' src='"+u+"'></script>";
	iStr+='</div></body></html>';
	i2.document.write(iStr);
	if (window.atwUAC.hasOwnProperty('adStarted'))atwUAC.adStarted(i.adNum+1,i.divName,i.w,i.h);
	if (adsIELT10)var z=setTimeout(function(){i2.document.close();},1000)
	else i2.document.close();
}
function adSetAdBlock(){
	atwUAC.adsFunctions+='adSetAdBlock(),';
	atwAdBlock=1;
}
function atwIsAdFrame(e)
{
	var r=false;
	if (e&&e.tagName==='IFRAME'&&e.id&&((e.id.indexOf('atwAdFrame')>-1)||(e.id.indexOf('atwFrame')>-1)||(e.id.indexOf('adsF')>-1))){
		r=e.id;
	}
	return r;
}
function atwFocusPrev(){
try {
	atwUAC.focused=document.activeElement;
	atwUAC.focusPlaceholder=document.createElement('span');
	atwUAC.focusPlaceholder.id='uacFocusPlaceholder';
	atwUAC.focusPlaceholder.tabIndex=-1;
	document.body.insertBefore(atwUAC.focusPlaceholder,document.body.firstChild);
	if (window.addEventListener){
		window.addEventListener('focusin',function(e){
			if (e.target.tagName!=='IFRAME'){
				atwUAC.focused=e.target;
			}
		});
		window.addEventListener('blur',function(e){
			setTimeout(function(){
				atwUAC.frameFocus=atwIsAdFrame(document.activeElement);
				if (!atwUAC.frameFocus&&e.target!==window&&atwUAC.focused!==document.activeElement){
					atwUAC.focused=null;
				}
				if (atwUAC.frameFocus&&document.getElementById(atwUAC.frameFocus).mouseIn!=1){
					if (atwUAC.focused&&atwUAC.focused!==window&&atwUAC.focused!==document.body){
						atwUAC.focused.focus();
					}
					else{
						atwUAC.focusPlaceholder.focus();
						window.focus();
					}
				}
			},0);
		},true);
	}
}
catch(e){}
}
function adsLoadAd(){
if (atwUAC.gdprRet!='noCall'){
	this.ClearAd();
	this.adLoaded=1;
	var f=document.createElement('iframe');
	f.setAttribute("itemscope","");
	f.setAttribute("itemtype","https://web.archive.org/web/20200805040540/https://schema.org/WPAdBlock");
	f.setAttribute("tabindex","-1")
	f.textAd=this.textAd;
	f.textAdDelay=this.textAdDelay;
	if ((this.textAd==1)||(this.col)){
		f.style.visibility='hidden';
		if (adSetInV=='0')f.style.display='none';
		f.width=0;  
		f.height=0;
	}
	else{
		f.width=this.w
		f.height=this.h
	}
	f.title="Ad"
	f.marginWidth=0
	f.marginHeight=0
	f.setAttribute('allowtransparency','true')
	f.frameBorder=0
	f.scrolling="no"
	f.w=this.w
	f.h=this.h
	f.mn=this.mn
	f.divName=this.divName
	f.sz=this.sz
	f.inV=this.vis
	f.adNum=this.adNum;
	f.comment=0;
	f.ean=adsEAN;
	f.fileless=this.fileless;
	f.mm=this.mm;
	f.adPage=this.adPage;
	f.mouseIn=0;
	if (f.addEventListener){
		f.addEventListener('mousemove',function(){f.mouseIn=1},false);
		f.addEventListener('mouseover',function(){f.mouseIn=1},false);
		f.addEventListener('mouseout',function(){f.mouseIn=0},false);
	}
	if (atwUAC.sandbox){
		f.setAttribute("sandbox",'allow-forms allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin');
	}
	if (adsTile==1){
		atwFocusPrev();
	}
	this.appendChild(f);
	if (this.iframe){
		f.id="adsF"+this.adNum;
		f.name=f.id;
		if (adsEAN==1)adsWriteEAN(this,f,'');
		if (f.inV=='0'){
			if (window.atwUAC.hasOwnProperty('adStarted'))atwUAC.adStarted(f.adNum+1,f.divName,f.w,f.h);
			f.src=this.adURL;
		}
		else{
 			this.adURL=this.adURL.replace(/kvmn=/,"kvvis=1;kvmn=");
			f.adURL=this.adURL;
 			f.url=this.adURL;
 			var z=setTimeout(function(){adsDelaySonar(f,adsSonarT);},100);
		}
	}
	else{
		if (atwAdBlock){
			f.id="atwFrame"+this.adNum;
		}
		else{
			f.id="atwAdFrame"+this.adNum;
		}
		f.name=f.id;
		if (adsEAN==1){
			try{
				if (this.keepSize&&this.rTimes>1){
					f.ean=2;
					adsWriteEAN(this,f,'');
				}
			}
			catch(e){}
		}
		if ((document.domain!=location.hostname)&&(this.adPage.indexOf('#')==-1))this.adPage=this.adPage+'#'+document.domain
		if (this.adPage||this.fileless==1){
			if (f.mm&&atwUAC.noscroll!=1&&window.innerWidth<550&&window.innerWidth<window.innerHeight){
				f.adURL=this.adURL;
				atwUAC.scrollF=f;
				window.addEventListener('scroll',atwScrollCall,false);
			}
			else{
				if (f.inV=='0'){
					f.adURL=this.adURL;
					if (this.fileless==1)adsFilelessFn(f,this.adURL)
					else{
						if (window.atwUAC.hasOwnProperty('adStarted'))atwUAC.adStarted(f.adNum+1,f.divName,f.w,f.h);
						f.src=this.adPage;
					}
				}
				else{
 					f.url=this.adPage;
 					this.adURL=this.adURL.replace(/kvmn=/,"kvvis=1;kvmn=");
					f.adURL=this.adURL;
 					var z=setTimeout(function(){adsDelaySonar(f,adsSonarT);},100);
				}
			}
		}
	}
	this.ifr=f.id;
}
}
function atwScrollCall(){
	if (atwUAC.scrolled!=1&&atwUAC.scrollF){
		atwUAC.scrolled=1;
		var f=atwUAC.scrollF;
		f.adURL=f.adURL.replace(/kvmn=/,"kvvis=1;kvmn=");
		if (f.fileless==1)adsFilelessFn(f,f.adURL)
		else{
			if (window.atwUAC.hasOwnProperty('adStarted'))atwUAC.adStarted(f.adNum+1,f.divName,f.w,f.h);
			f.src=f.adPage;
		}
	}
}
function adsDelaySonar(f,t){
if (atwLoaded&&(atwReset==0||adsRRDevil!='')){
	if (t){
		setTimeout(function(){adsDelaySonar(f,0);},t);
	}
	else if (f.inV!='D'||adsRRDevil=='n'||!adsRRCalled){
		if (adsSonar(f,function(){},{visibility:adsSonarV})){
			if (f.fileless==1)adsFilelessFn(f,f.adURL)
			else{
				if (window.atwUAC.hasOwnProperty('adStarted'))atwUAC.adStarted(f.adNum+1,f.divName,f.w,f.h);
				f.src=f.url;
			}
		}
		else{ 
			adsSonar(f,function(){
				this.scrollin=false;
				if (f.inV!='D'||adsRRDevil=='n'||!adsRRCalled){
					if (f.fileless==1)adsFilelessFn(f,f.adURL)
					else{
						if (window.atwUAC.hasOwnProperty('adStarted'))atwUAC.adStarted(f.adNum+1,f.divName,f.w,f.h);
						f.src=f.url;
					}
				};
			},
			{visibility:adsSonarV})
		}
 	}
 	else{
		if (adsRRDevil=='')setTimeout(function(){adsDelaySonar(f,t);},100);
	}
}
else{
	setTimeout(function(){adsDelaySonar(f,t);},100);
}
}
function adsShowDiv(d){
	atwUAC.adsFunctions+='adsShowDiv(),';
	var v=adsGetObj(d);
	v.style.display="block";
}
function adsHideDiv(d){
	atwUAC.adsFunctions+='adsHideDiv(),';
	var v=adsGetObj(d);
	v.style.display="none";
}
function adSetupDiv(w,h,u,dv1,pg,ds,m,sz,c,v,f,mm){
	var s,d,t=0;
	if (atwAdBlock){
		s="atwDiv"
	}
	else{
		s="adsDiv"
	}
	s+=adsDivs.length;
	if (ds=='textd'){
		ds='text';
		t=1;
	}
	if (!dv1||dv1==""){
		document.write("<div id='"+s+"'></div>")
		d=document.getElementById(s)
		dv1=s;
		if (ds!='text')d.style.fontSize='0px';
	}
	else d=adsGetObj(dv1)
	if (typeof(dv1)=='object'){
		try {
			if (dv1.id==''){
				d.divName=s;
				d.id=s;
			}
			else d.divName=dv1.id
		}
		catch(e){}
	}
	else{
		d.divName=dv1
	}
	d.LoadAd=adsLoadAd;
	d.adLoaded=0;
	d.ClearAd=adsClrDiv;
	d.mn=m;
	d.origMN='';
	if (ds=='text')d.textAd=1
	else d.textAd=0;
	if (ds&&ds!='text'&&ds!='iframe')d.dynSz=1
	else d.dynSz=0;
	if (sz)d.sz=sz
	else d.sz=0;
	d.w=w;
	d.h=h;
	d.adURL=u;
	d.adPage=pg;
	d.adNum=adsDivs.length;
	d.col=c;
	d.vis=v;
	d.delayed=0;
	d.mm=mm;
	if (t)d.textAdDelay=1
	else d.textAdDelay=0;
	if (ds=='iframe')d.iframe=1
	else d.iframe=0;
	if (f==1)d.fileless=1
	else d.fileless=0;
	d.rTimes=1;
	adsDivs[adsDivs.length]=d;
}
function atwLR(v,b){return (v<<b)|(v>>>(32-b))}
function atwGB(s){
	var o=[],p=0;
	for (var i=0; i<s.length;i++){
		var c=s.charCodeAt(i);
		if (c<128){
			o[p++]=c;
		} else if (c<2048){
			o[p++]=(c>>6)|192; 
			o[p++]=(c&63)|128;
		} else if (((c&0xFC00)==0xD800)&&(i+1)<s.length&&((s.charCodeAt(i+1)&0xFC00)==0xDC00)){
			c=0x10000+((c&0x03FF)<<10)+(s.charCodeAt(++i)&0x03FF);
			o[p++]=(c>>18)|240;
			o[p++]=((c>>12)&63)|128;
			o[p++]=((c>>6)&63)|128;
			o[p++]=(c&63)|128;
		} 
		else{
			o[p++]=(c>>12)|224;
			o[p++]=((c>>6)&63)|128;
			o[p++]=(c&63)|128;
		}
	}
	return o;
}
function atwUTF(s){
	var b=atwGB(s),r="";
	for (var i=0;i<b.length;i++){r+=String.fromCharCode(b[i]);}
	return r;
}
function atwSHA1(t){
	var h=[0x67452301,0xEFCDAB89,0x98BADCFE,0x10325476,0xC3D2E1F0];
	t=atwUTF(t);
	var ml=t.length;
	t+=String.fromCharCode(0x80);
	var wl=t.length/4+2,nck=Math.ceil((32*wl)/512),ck=new Array(nck);
	for (var i=0;i<nck;i++){
		var ci=i*64;ck[i]=new Array(16);
		for (var j=0;j<16;j++){
			var idx=ci+j*4;
			ck[i][j]=0;
			if (t.length>=(idx+1)){
				ck[i][j]=(t.charCodeAt(idx)<<24)|(t.charCodeAt(idx+1)<<16)|(t.charCodeAt(idx+2)<<8)|t.charCodeAt(idx+3);
			}
		}
	}
	ck[nck-1][14]=ml>>>29;
	ck[nck-1][15]=ml<<3;
	for (var i=0;i<ck.length;i++){
		var w=new Array(80);
		for (var j=0;j<16;j++){w[j]=ck[i][j];}
		for (var j=16;j<w.length;j++){
			w[j]=atwLR((w[j-3]^w[j-8]^w[j-14]^w[j-16]),1);
		}
		var a=h[0],b=h[1],c=h[2],d=h[3],e=h[4];
		for (var j=0;j<80;j++){
			var f,kk;
			if (j<=19){
				f=(b&c)|((~b)&d);kk=0x5A827999;
			}
			else if (j>19&&j<=39){
				f=b^c^d;kk=0x6ED9EBA1;
			}
			else if (j>39&&j<=59){
				f=(b&c)|(b&d)|(c&d); kk=0x8F1BBCDC;
			}
			else{
				f=b^c^d;kk=0xCA62C1D6;
			}
			var tm=atwLR(a,5)+f+e+kk+w[j];
			e=d;d=c;c=atwLR(b,30);b=a;a=tm;    		
		}
		h[0]=(h[0]+a)>>>0;
		h[1]=(h[1]+b)>>>0;
		h[2]=(h[2]+c)>>>0;
		h[3]=(h[3]+d)>>>0; 
		h[4]=(h[4]+e)>>>0;
	}
	for (var i=0;i<h.length;i++){var hx=("00000000"+h[i].toString(16)).substr(-8);h[i]=hx;}
	return h[0]+h[1]+h[2]+h[3]+h[4];   
}
function atwCutURL(v){
	var r='',p,u,n;
	try {
		u=document.referrer;
	}
	catch(e){}
	if (v.indexOf('ncid=')>-1){
		n=v.match(/(?:.*?)[&#?]ncid=(.*?)(?:[&#\/]|$)/);
		r+='kvncid='+escape(RegExp.$1)+';';
	}
	else if (u&&u.indexOf('ncid=')>-1){
		n=u.match(/(?:.*?)[&#?]ncid=(.*?)(?:[&#\/]|$)/);
		r+='kvncid='+escape(RegExp.$1)+';';
	}
	n=v.match(/(?:https?\:){0,1}\/\/(.*?)(?:[?#]|$)/);
	p=RegExp.$1;
	if (p.length>150)p=p.substr(0,150);
	p=escape(p.replace(/\/$/,''));
	r+='kvpg='+p+';';
	if (atwIntl!=1&&u){
		n=u.match(/(?:https?\:){0,1}\/\/(.*?)(?:[?#]|$)/);
		p=RegExp.$1;
		if (p.length>150)p=p.substr(0,150);
		p=escape(p.replace(/\/$/,''));
		r+='kvrefd='+p+';';
	}
	r=r.replace(/\//g,'%2F');
	return r;
}
function adsGetValues(){
var p='',t='',bx='',n,pg='',dom,pg1,lo=window.location;
n=(/(\?|&)atw[Nn][Tt]=(.*?)(&|$)/.test(adsLo))?(RegExp.$2):'';
if (!(/^[0-9.]+$/.test(unescape(n))))n='';
if (n){
	adsNt=n;
	if (n=='5113.1')adsHt='https://web.archive.org/web/20200805040540/https://at.atwola.com'
	else if (n=='1065.1')adsHt='https://web.archive.org/web/20200805040540/https://uk.at.atwola.com'
	else if (atwIntl==1){
		adsUK=0;
		adsAlias=0;
	}
}
dom=lo.hostname;
pg1=decodeURIComponent(dom+lo.pathname);
if (dom.length>48)dom=atwSHA1(dom);
if (pg1.charAt(pg1.length-1)=='/')pg1=pg1.substring(0,pg1.length-1);
pg1=atwSHA1(pg1);
pg='kvdom='+dom+';kvpage='+pg1+';';
p=atwCutURL(adsLo.toLowerCase());
try {
	if (/(^|;)?UNAUTHID=(.*?)[.](.*?)[.]/i.test(document.cookie)){
		var t1=unescape(RegExp.$3);
		if ((/^[0-9A-Za-z,-._]+$/.test(t1))){
			t='kvui='+t1+';';
		}
	}
}
catch(e){}
try {
	if (/(^|;)?BX=(.*?)(;|$)/i.test(document.cookie)){
		var bx1=unescape(RegExp.$2);
		if ((/^[0-9A-Za-z,-._&=]+$/.test(bx1))){
			bx='kvbxcookie='+bx1+';';
		}
	}
}
catch(e){}
return p+t+bx+pg;
}
!function(e,t,o){"use strict";
	function n(t,n){var r;return function(){function l(){r=o,t.call(this)}r||(r=e.setTimeout(l,n))}}
	function r(t,o){return e.getComputedStyle?e.getComputedStyle(t).getPropertyValue(o):t.currentStyle?t.currentStyle[o]:void 0}
	function l(t,o,l){"object"==typeof o?l=o:"function"==typeof o&&(l?l.scrollin=o:l={scrollin:o});var a=l.parent;if(!a){for(var f,d=t;(d=d.parentNode)&&1===d.nodeType;)if(f=r(d,"overflow"),"auto"===f||"scroll"===f){a=d;break}a=a||e}if(l.parent=a===e?c:a,l.scrollin||l.scrollout){l.elem=t,u.push(l),s();var p=l.delay||13;a.sonarBound||(a.addEventListener?(a.addEventListener("scroll",n(s,p),!1),a.addEventListener("resize",n(s,p),!1)):e.attachEvent&&(a.attachEvent("onscroll",n(s,p)),a.attachEvent("onresize",n(s,p))),a.sonarBound=!0)}
	try {
		if (window.addEventListener){
			window.addEventListener("scroll",n(s,p),!1);
			window.addEventListener("resize",n(s,p),!1);
		}
		else if (window.attachEvent){
			window.attachEvent("onscroll",n(s,p),!1);
			window.attachEvent("onresize",n(s,p),!1);
		}
	}
	catch(e){}
	return i(t,l.distance,l.visibility,l.parent)}
	function i(e,n,r,l){
		var dv=adsGetObj(e.divName),
			rV=(atwGetVisiblePct(dv)>1);
		return rV;
	}
	function ff(){u=[]}
	function s(){var e,t,o;for(e in u)u.hasOwnProperty(e)&&(t=u[e],(t.scrollin||t.scrollout)&&(o=i(t.elem,t.distance,t.visibility,t.parent),o!==t.detected&&(o?t.scrollin&&t.scrollin.call(t,t.elem):t.scrollout&&t.scrollout.call(t,t.elem),t.detected=o)))}var a,c=t.documentElement,u=[];l.poll=s,e.adsSonar=l;e.adsSonarClear=ff;
}(window,document);
var adSetInV='0',adsSonarT=0,adsSonarV=0;
function adSetInView(o,v,t){
if (o)adSetInV=o; 
if (v)adsSonarV=parseFloat(v);
if (t)adsSonarT=parseInt(t);
}
function adsATWDelay(z,a){
adsUACH='';
switch(z){
	case 'htmlAdWH':
		htmlAdWH(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]);
		break;
	case 'adSetOthAT':
		adSetOthAT(a[0]);
		break;
}
}
function adsDisableGUID(){}
function adSetAddOnPl(){}
function adSetTarget(){}
function adSetSN(){}
function adSetCo(){}
function adSendTerms(){}
function adSetOthDclk(v){}
function adSetDelay(){}
function adSetSticky(){}
function adSetIgnoreFlash(){}
function htmlAdWHDyn(m,s,t,dv,fn,ds){htmlAdWH(m,'','',t,dv,fn,ds,s.toString())}
function htmlAdWH(m,w,h,t,dv,fn,ds,sz){
if (!t&&adsTp=='J'){t='f'}
if (adsUACH&&adsUACD>0){
	var ti=setTimeout(adsATWDelay,3000,arguments.callee.name,arguments)
}
else{
if (m)m=m.toString()
else return 0;
var d=document,inc='',s,r=0,st="<script type='text/javascript' src='",sp1,ye=0,c=0,f=0,rr=0,wi=window,ow=w,oh=h,osz=(sz)?sz:'',cw=970,txt='text',gdpr='',ccpa='';
if (!adsVal)adsVal=adsGetValues();
if (t){
	t=t.toLowerCase();
	if (t.indexOf('c')>0){c=1;t=t.substr(0,t.length-1)}
	if (t=='textd'){txt+='d';t='text'}
	else if (t=='filelesstext'){t='text';adsFileless=1;}
	else if (t=='filelessajax'){t='ajax';adsFileless=1;}
	else if (t=='filelesstextd'){t='text';txt+='d';adsFileless=1;}
}
if (t=='fileless')adsFileless=1;
if (adsTp=='F'||t=='ajax'||t=='f'||t=='fileless')f=1;
try{if (document&&document.documentElement)cw=document.documentElement.clientWidth;}
catch(e){}
if (sz){
	sp1=sz.split(',')[0].split('x');
	w=sp1[0];
	h=sp1[1];
	if (f)ds='r';
	if (adsRePo=='1'&&cw<970&&t!='text'){
		var ss2,ss3,ss4='',ssL;
		ss2=sz.split(',');
		ssL=ss2.length;
		for (var i=0;i<ssL;i++){
			ss3=ss2[i].split('x');
			if (parseInt(ss3[0])<970)ss4+=ss2[i]+',';
		}
		if (ss4=='')return 0
		else sz=ss4.substring(0,ss4.length-1);
	}
}
else sz='';
if (adsSZ){
	var sL=adsSZ.length,ss;
	for (var i=0;i<sL;i=i+2){
		if (adsTile==adsSZ[i+1]){
			ss=adsSZ[i].split('x');
			w=ss[0];
			h=ss[1];
			break;
		}
	}
}
if (w=='RR'||w=='rr'){
	w=300;h=250;
	if (f)ds='r';
	sz='300x250,300x600,300x1050';
	rr=1;
	if (adSetInV=='0')adsRRCalled='1';
}
else if (w=='LB'||w=='lb'){
	w=728,h=90;
	if (f)ds='r';
	sz='728x90,948x250,950x252,940x230,101x1';
	if (adsRePo!='1'||cw>=970)sz+=',970x66,970x90,970x250';
}
else if (w=='MM'||w=='mm'){
	w=300,h=250;
	if (f)ds='r';
	sz='300x250,320x480,320x50';
}
else if (w>=970&&cw<970&&adsRePo=='1'&&t!='text'){
	return 0;
}
if (adsCp){
	var cl=adsCF.length;
	for (var i=0;i<cl;i++){
		if ((/^https:\/(\/ibw\.aol\.com\/|\/ibw\-qai\.aol\.com\/|\/sales\.oath\.com\/|\/sales\-qa\.oath\.com\/|\/scdn\.uc\.atwola\.com\/)(.*?)/.test(adsCF[i]))&&(/^[0-9A-Za-z\/.:_\-]+$/.test(unescape(adsCF[i])))||(/^\d+$/.test(unescape(adsCF[i])))){
			if (sz){
				var sp2=sz.split(','),le=sp2.length,sp3;
				for (var j=0;j<le;j++){
					sp3=sp2[j].split('x');
					if (adsCW[i]==sp3[0]&&adsCH[i]==sp3[1]){
						ye=1;
					}
				}
			}
			if (ye||(adsCW[i]==w&&adsCH[i]==h)||(adsCAd[i]==adsTile)){
				if (/^\d+$/.test(adsCF[i])){
					var qa=(/(\?|&)atwcrprqa=(.*?)(&|$)/.test(adsLo.toLowerCase()))?'-qa':'';
					adsCF[i]='https://web.archive.org/web/20200805040540/https://sales'+qa+'.oath.com/store-creative-api/v2/preview/creative/'+adsCF[i]+'/index'
				}
				if (adsTp=='I'||t=='iframe')s=adsCF[i]+'.html'
				else s=adsCF[i]+'.js';
				if (adsCAd[i]!='a')adsCW[i]=0;
				r=1;
				break; 
			}
		}
	}
}
if (adsMNS){
	var mL=adsMNS.length,wxh=w+'x'+h,num,all=0,mnye=0;
	for (var i=0;i<mL;i=i+2){
		num=adsMNS[i+1];
		if (num.indexOf('a')>0){
			num=num.replace('a','');
			all=1;
		}
		else{
			all=0;
		}
		if (num.indexOf('only')>-1){
			num=num.replace('only','');
			only=1;
		}
		else{
			only=0;
		}
		if (sz){
			var mnsp=sz.split(','),mnl=mnsp.length;
			for (var k=0;k<mnl;k++){
				if (num==mnsp[k]){
					mnye=1;
				}
			}
		}
		if (mnye==1||(adsTile==num)||(wxh==num)||(num=='RRxRR'&&rr==1)){
			m=adsMNS[i];
			if (!all)adsMNS[i+1]='';
			if (only)adsMNS[i+1]='only';
		}
		else if (only){
			m='0';
		}
	}
}
if (m=='0'){
		adsTile++;
		return 0;
}
if (r==0){
	var s1='',s2='';
	if (sz&&!rr)s2="allowedSizes="+sz+";"
	else if (ds!='r')s2="size="+w+"x"+h+";"
	s2+="noperf=1;";
		if ((t=='ajax'&&!adsAJAXAddOn)||adsAddOn==2){
		s2+="noaddonpl=y;";
		adsAddOn=2;
	}
	else{
		if (adsTile==1){
			if (adsAddOn==1)adsAddOn=2;
			else s2+="noaddonpl=y;";
		}
		else{
			if (adsAddOn!=1)s2+="noaddonpl=y;";
			else adsAddOn=2;
		}
	}
	if (adsExcV=='blank')inc='artexc=all;';
	if ((atwUAC.gdprRet.toString().indexOf('noC')==-1)&&(atwUAC.gdpr=='0'||atwUAC.gdpr=='1')){
		gdpr='gdpr='+atwUAC.gdpr+';';
		if (atwUAC.gdpr&&atwUAC.gdpr!='0'){
			if (atwUAC.gdprC!=undefined)gdpr+='euconsent='+atwUAC.gdprC+';'
		}
		}
		if (atwUAC.spaceid){
				s1='spaceid='+atwUAC.spaceid+';';
		}
		else{
			if (window.rapidConfig&&window.rapidConfig.spaceid)s1=window.rapidConfig.spaceid
			if (s1!=''){
				atwUAC.spaceid=s1;
				s1='spaceid='+s1+';'
				}
	}
	if (atwUAC.ccpa){ccpa='us_privacy='+atwUAC.ccpa+';'}
	s1+=ccpa+gdpr+adsATOth.toLowerCase()+adsVal+adsKV+'kvmn='+m+';kvgrp='+adsScr+';extmirroring=0;kvtile='+adsTile+";target=_blank;aduho="+(-1*adsD.getTimezoneOffset())+";";
	if (atwIntl==0||adsUK==1)s2+=inc
	s2+=s1+"grp="+adsScr;
	if (atwIntl==1&&!adsAlias)adsPl=m
	if (adsHt)s=adsHt
	else{
		if (atwIntl==0)s='https://web.archive.org/web/20200805040540/https://at.atwola.com'
		else s='https://web.archive.org/web/20200805040540/https://uk.at.atwola.com'
	}
	s+="/addyn/3.0/"+adsNt+"/"+adsPl+"/0/-1/";
	s+=s2;
	if (atwIntl==0||adsAlias==1)s=s.replace(/noperf=1;/,'noperf=1;alias='+m+';');
}
if (t=='return'){
	adsTile++;
	return s;
}
if (t!='text' && t!='ajax' && t!='f' && t!='iframe' && t!='fileless' && adsTp)t=adsTp
var ttype=''
if (t)ttype=t
else t=adsTp;
atwUAC.adsInfo[adsTile]={
 mn:m,
 url:s,
 origW:ow,
 origH:oh,
 sz:osz,
 other:adsATOth,
 ttype:t,
 dv:dv,
 inV:adSetInV,
 mm:atwUAC.adsMM
}
if ((!adsFilelessFlag||adsFilelessFlag=='text')&&(t=='ajax'||t=='f'||t=='fileless'||adsTp=='F')){adsFileless=1;}
else if (adsFilelessFlag!='text'&&t=='text'){adsFileless=1;}
else {adsFileless=0;}
if (t=='text'||f){
	if (!fn||fn=='')fn=adsPage;
	if (adsPage=='fileless'||t=='fileless')adsFileless=1;
	if ((fn==''&&adsFileless!=1)){adsTp='J';t='',f='';}
}
if (t=='text'){
	adSetupDiv(w,h,s,dv,fn,txt,m,sz,c,adSetInV,adsFileless);
	adsDivs[adsDivs.length-1].LoadAd();
}
else if (t=='iframe'){
	adSetupDiv(w,h,s.replace(/addyn\/3.0/,"adiframe/3.0"),dv,fn,'iframe',m,sz,c,adSetInV,'0');
	adsDivs[adsDivs.length-1].LoadAd();
}
else if (adsTp=='F'||t=='f'||t=='fileless'||t=='ajax'){
	adSetupDiv(w,h,s,dv,fn,ds,m,sz,c,adSetInV,adsFileless,atwUAC.adsMM);
	if (atwPreBidCheck(m)){
		if (atwHBR){
			if (!adsSyncDelay||adsDivs.length==1||adsLoadSync)adsDivs[adsDivs.length-1].LoadAd()
			else{
				adsDivs[adsDivs.length-1].delayed=1;
				if (!adsSyncTime)adsSyncTime=setTimeout(adsLoadedSync,adsSyncDelay);
			}
		}
	}
	else{
		if (!adsSyncDelay||adsDivs.length==1||adsLoadSync)adsDivs[adsDivs.length-1].LoadAd()
		else{
			adsDivs[adsDivs.length-1].delayed=1;
			if (!adsSyncTime)adsSyncTime=setTimeout(adsLoadedSync,adsSyncDelay);
		}
	}
}
else if (adsTp!='J'){
	if (atwIntl==0){
		d.write("<iframe title='Ad' name='adsF"+adsLNm+"' id='adsF"+adsLNm+"' src='"+s.replace(/addyn\/3.0/,"adiframe/3.0")+"' width='"+w+"' height='"+h+"'  scrolling=no frameborder=0 marginheight=0 marginwidth=0></iframe>");
		var xx=document.getElementById('adsF'+adsLNm);
		if (xx){
			xx.setAttribute("itemscope","");
			xx.setAttribute("itemtype","https://web.archive.org/web/20200805040540/https://schema.org/WPAdBlock");
		}
		if (adsEAN==1){
			if (w<234){
				d.write('<BR><a id="adsF'+adsLNm+'EANA" style="position:absolute;left:'+(w-19)+'px;z-index:4999;margin:0 auto;width:19px;height:15px" href="https://web.archive.org/web/20200805040540/http://adinfo.aol.com/" target="_blank"><img src="https://web.archive.org/web/20200805040540/https://o.aolcdn.com/ads/adchoicesi.png" style="border:none;width:19px;height:15px;vertical-align:top" alt="AdChoices"></a>');
			}
			else{
				d.write('<BR><a id="adsF'+adsLNm+'EANA" style="position:absolute;left:'+(w-77)+'px;z-index:4999;margin:0 auto;width:77px;height:15px" href="https://web.archive.org/web/20200805040540/http://adinfo.aol.com/" target="_blank"><img src="https://web.archive.org/web/20200805040540/https://o.aolcdn.com/ads/adchoices.png" style="border:none;width:77px;height:15px;vertical-align:top" alt="AdChoices"></a>');
			}
		}
	}
	else{
		var s1=s.replace(/addyn\/3.0/,"adiframe/3.0");
		d.write("<iframe title='Ad' name='adsF"+m+"' id='adsF"+m+"' src='"+s1+"' width='"+w+"' height='"+h+"' scrolling=no frameborder=0 marginheight=0 marginwidth=0></iframe>")
		adsLMN[adsLNm]="adsF"+m+"|"+s1
	}
	adsLNm++;
}
adsTile++;
atwUAC.adsMM='';
}
}
}

}
/*
     FILE ARCHIVED ON 04:05:40 Aug 05, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:14:47 Jan 12, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  load_resource: 1284.953 (2)
  RedisCDXSource: 2.302
  exclusion.robots.policy: 163.049
  LoadShardBlock: 384.068 (3)
  CDXLines.iter: 133.109 (3)
  exclusion.robots: 163.068
  PetaboxLoader3.resolve: 146.86
  captures_list: 2076.805
  esindex: 0.019
  xauthn.identify: 84.155
  PetaboxLoader3.datanode: 1170.203 (5)
  xauthn.chkprivs: 78.445
*/