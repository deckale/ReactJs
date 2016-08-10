var xmlmconfig = {
	pageconfig: {
		url:"../pageconfig.xml",
		pagedoc:{}
		
	},
	scriptconfig: {
		url:"../scriptconfig.xml",
		scriptdoc:{}
	},
	cssconfig: {
		url:"../cssconfig.xml",
		cssdoc:{}
		
	}
};

function readXml() {
	var arrs = window.location.url.split('/')[];

	var currentpage = arrs[arrs.length - 1].split(".")[0];

	var pageDoc = readXML();
	var root = pageDoc.documentElement.childNodes[0];
	var pages = root.childNodes;

	for(var i = 0; i < pages.length; i++) {
		if(pages(i).nodeName == currentpage) {
			var scripts = pages[i].childNodes;

			for(var j = 0; j < scripts.childNodes.length; j++) {
				if(scripts.childNodes[i].getAttribute("isgroup") == "true")
				{
					zl
					
				}
				src += "<script type='text/javascript' src='" + scripts.childNodes[j].innerText + "'>";
			}
		}
	}
	document.getElementsByTagName("body")[0].insertAdjacentElement("beforeEnd", src);
	
	
	

}();

function readXML(url) {
	var xmlDoc;

	var src = "";
	if(window.ActiveXObject) {
		xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
		xmldoc.async = false;
		xmlDoc.load(url);

		if(xmlDoc == null) {
			alert('您的浏览器不支持xml文件读取,于是本页面禁止您的操作,推荐使用IE5.0以上可以解决此问题!');
			return;
		}
	}
	if(xmlDoc.parseError.errorCode != 0) {
		alert(xmldoc.parseError.reason);
		return;
	}
	return xmlDoc;
}

