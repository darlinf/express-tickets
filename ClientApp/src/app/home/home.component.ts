import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('enterState',[
      state('void',style({
        //transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition(':enter',[
        animate(1000, style({
          //transform: 'translateX(0)',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {


  constructor(){
    
  }

  ngOnInit(): void {
    
    
    
    this.text = document.querySelector(".fancy");
    this.strText = this.text.textContent;
    this.splitText = this.strText.split("") ;
    //this.text.textContent = "";

    /*for (let i = 0; i < this.splitText.length; i++) {
      this.text.innerHTML += "<span class='span-text'>" + this.splitText[i] + "</span>";
    }*/

    this.chayr = 0;
    this.timer = setInterval(()=>this.onTick(), 70);

  }

  timer: any
  chayr: any
  text:any
  strText:any
  splitText: any
    

   

    onTick() {
        const span = this.text.querySelectorAll(".span-text")[this.chayr];
        span.classList.add("fade");
        this.chayr++;
        if (this.chayr === this.splitText.length) {
            this.complete();
            return;
        }
    }

    complete() {
        setTimeout(() => {
           var oo = document.querySelector(".eslogan-text")
            oo.classList.add("eslogan-text-show");  
        }, 200);
       
        clearInterval(this.timer);
        this.timer = null;
    }
  }