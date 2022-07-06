const habitos4=[
    {id:"1",name:"Correr",completed:true, type:"morning",calendarDate:"2022-07-06"},
    {id:"2",name:"Estudiar inglés",completed:false, type :"afternoon",calendarDate:"2022-07-05"},
    {id:"3",name:"Estudiar francés",completed:false, type :"evening",calendarDate:"2022-07-06"}
  ]

  export function getHabitos() {
    return habitos4;
  }
  export function addHabitos(habito) {
    habitos4.push(habito);
  }
  export function modHabitos(habitos5) {
    habitos4=[]
    console.log(habitos4)
    habitos4=habitos5
    console.log(habitos4)
    console.log(habitos5)
  }