//9)
//날짜를 표현하는 박스 정의
class DateBox{
    constructor(container, width, height, x, y, num, src, text){
        this.container=container;
        this.div; //날짜 전체 박스
        this.span; //날짜 숫자를 담을 컨테이너(위치 지정을 위함)
        this.detail; //텍스트div
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.num=num; //날짜 숫자 표기
        this.icon; //아이콘 표기
        this.src=src; //아이콘 이미지 경로
        this.text=text; //상세내용 표기

        this.div=document.createElement("div");
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

        this.span=document.createElement("span");
        this.span.style.position="absolute";
        this.span.style.left=10+"px";
        this.span.style.top=10+"px";
        this.span.innerText=this.num; //날짜 텍스트 적용
        
        this.icon=document.createElement("img");
        this.icon.src=this.src;
        this.icon.style.width=25+"px";
        this.icon.style.position="absolute";
        this.icon.style.left=10+"px";
        this.icon.style.top=45+"px";
        
        this.detail=document.createElement("div");
        this.detail.style.width=80+"px";
        this.detail.style.height=28+"px";
        this.detail.style.left=10+"px";
        this.detail.style.top=70+"px"
        this.detail.innerText=this.text; //내용대입
        this.detail.style.position="absolute";

        //박스 테두리
        this.div.style.border="2px solid lightgray";
        this.div.style.boxSizing="border-box";
        
        //부착
        this.container.appendChild(this.div); //날짜 사각형 부착
        this.div.appendChild(this.span); //숫자 출력부 부탁
        this.div.appendChild(this.icon); //아이콘 부착
        this.div.appendChild(this.detail); //상세내용 부착


    }
}