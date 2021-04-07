var header=document.querySelector(".header");
window.onscroll=function(){
    var top=window.scrollY;
    if(top >=100){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }
}


for(var i=0;i<24;i++){
    var alerting=document.querySelectorAll(".n-slider img")[i];
    alerting.addEventListener("click",function(){
        alert("This is a clone website of netflix.Just for designing purpose.Thank You -(Prottoy)")
    })
}

document.addEventListener("contextmenu",function(proWeb){
    proWeb.preventDefault();
});
/*var back=document.querySelector(".banner");
var random_num=Math.floor(Math.random()*5)+1;
var arr=["../images/Banner1.jpg","../images/Banner2.jpg","../images/Banner3.jpg","../images/Banner4.jpg","../images/Banner5.jpg"]
var tct='url("../images/Banner'+random_num+'.jpg")';
back.style.backgroundImage='url("'+arr[random_num]+'")';*/

var trailer=document.querySelector(".trailer-video");

for(var j=0;j<=12;j++){
    document.querySelectorAll(".ps-img .cover")[j].addEventListener("click",function(){
        var className=this.classList[1];
        console.log(className);

        switch(className){
            case "c1":
                trailer.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/hfikdvpj228" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                break;
            case "c2":
                trailer.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/3mTh2joPPj8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                break;
            case "c3":
                trailer.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/wtJPe1ksS6E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                break;
            case "c4":
                trailer.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/F0evM-hBlcI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                break;
            case "c5":
                trailer.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/apHChysMgcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                break;
            case "c6":
                trailer.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/dfXRud1AIiw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                break;
            case "c7":
                trailer.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/Xd_vmOFwrt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                break;
            case "c8":
                trailer.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/btDPXi4NiPM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                break;
            case "c9":
                trailer.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/b9EkMc79ZSU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                break;
            case "c10":
                trailer.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/-cA7kwBSUaU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                break;
            case "c11":
                trailer.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/yGgbNCkJqSM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                break;
            case "c12":
                trailer.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/0DAmWHxeoKw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                break;
            }
    })
}

