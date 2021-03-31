{"version":3,"sources":["script.js"],"names":["BX","namespace","Report","Analytics","Page","options","this","scope","menuScope","changeBoardButtons","querySelectorAll","contentContainer","querySelector","currentItem","currentSelectedContainer","pageTitle","document","pageTitleWrap","pageControlsContainer","defaultBoardKey","defaultBoardTitle","currentPageTitle","top","title","init","prototype","addCustomEvent","sliderCloseHandler","bind","forEach","button","handleItemClick","loader","Loader","size","onpopstate","handlerOnPopState","openBoardWithKey","event","preventDefault","currentTarget","activateButton","isExternal","dataset","openExternalUrl","externalUrl","reportBoardKey","href","url","SidePanel","Instance","open","cacheable","boardKey","urlForHistory","cleanPageContent","showLoader","VC","Core","abortAllRunningRequests","ajaxPost","data","IFRAME","analyticsLabel","onFullSuccess","result","hideLoader","history","pushState","additionalParams","replaceState","changePageTitle","changePageControls","pageControlsParams","html","innerText","cleanNode","Dashboard","BoardRepository","destroyBoards","VisualConstructor","controlsContent","config","_successHandler","style","display","preview","create","attrs","src","height","width","appendChild","hide","item","classList","remove","add","state","undefined"],"mappings":"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","file":"script.map.js"}