window.onload = function() {
	var oNav = document.querySelector(".nav");
	var oLi = oNav.querySelectorAll("ul li");
	
	var oMain = document.querySelector("#main");
	var oSubmit = oMain.querySelector(".submit");
	var aInp = oMain.querySelectorAll(".submit td");
	var oSpan = oMain.querySelector(".content  .top span");
	var oGpa = oSpan.querySelector(".gpa");
	var oGrade = oMain.querySelectorAll(".grade");

	var oContent = oMain.querySelectorAll("article");

	oMain.style.height = window.screen.height - 58 + "px"; 


	aInp[0].addEventListener("click", function() {
		addTr(oSubmit);
		oMain.style.height = document.body.scrollHeight  - 58 + "px"; 
	}, false);
	aInp[1].addEventListener("click", function() {
		for(var i=0; i<6; i++){
			addTr(oSubmit);
		}
		oMain.style.height = document.body.scrollHeight  - 58 + "px"; 
	}, false);
	aInp[2].addEventListener("click", function() {

		var igpa =  cacleInput(oGrade);
		
		if( !isNaN(igpa.toFixed(4)) ){
			oSpan.style.display  = "block";
			oGpa.innerHTML = igpa;
		}else {
			alert("您的输入有误！");
		}
	}, false);

	for( var i=0; i<oLi.length; i++){
		oLi[i].index = i;
		oLi[i].onclick = function() {
			for(var i = 0;i<oLi.length; i++){
				oLi[i].className = "";
				oContent[i].style.display = "none";
			}
			
			this.className = "active";
			oContent[this.index].style.display = "block";
			
		};
	}

}

function addTr(obj) {
	var oTr = document.createElement("tr");

	oTr.innerHTML = '<td><input type="text" placeholder="填补科目" ></td>	<td><input type="text"  placeholder="输入分数" ></td><td><input type="text"  placeholder="输入学分"></td>';

	obj.parentNode.insertBefore(oTr, obj);
}


function cacleInput (objArr) {
        var sumGrade = 0;
        var sumCredit = 0;

        for(var i = 0; i<objArr.length; i++) {

            var aTd = objArr[i].querySelectorAll("td");
            objArr[i].grade =  Number(aTd[1].firstChild.value);
            objArr[i].credit = Number(aTd[2].firstChild.value);
            
             
            if( isNaN(objArr[i].grade) || isNaN(objArr[i].credit) ) {
                objArr[i].onOff = false;
                alert(false);
            }else{
                
                objArr[i].onOff = true;
               
            }
        }  


        for(var j = 0; j<objArr.length; j++){
            if(objArr[j].onOff){
                sumCredit += objArr[j].credit;
                sumGrade += objArr[j].grade*objArr[j].credit;
            }
        }

       return sumGrade/sumCredit/10;
}

