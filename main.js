//úkol 1 Parsování data

const parseDate = (date) => {
return {
    day: date.slice(0,2),
    month: date.slice(3,5),
    year: date.slice(6),
}
}

//const result = parseDate('25.02.2023')

//úkol 2 Formátování data

const formatDate = ({day, month, year}) => {
   return String(day).padStart(2, '0') + "." + String(month).padStart(2,'0') + "." + String(year)  
 }

//const vysledek = formatDate({day: 2, month: 3, year: 2015})

/*postup, který jsme řešily na Slacku, proto ho dávám do komentáře; 
v zadání bylo "Zkuste také uvnitř těla funkce použít destrukturování." - nepřišlo mi to povinné, ve složitější úloze
by bylo asi potřeba, ale zde mi dával smysl postup výše na dva řádky, versus tento na cca 7.
const formatDate = ({day, month, year}) => {
  const datum = {
      keyDay: String(day).padStart(2, '0'),
      keyMonth: String(month).padStart(2, '0'),
      keyYear: String(year),
  }
  const { keyDay, keyMonth, keyYear } = datum;
  return keyDay + "." + keyMonth + "." + keyYear;
}
console.log(formatDate({ day: 6, month: 4, year: 2021 }))*/

//úkol 3 s bonusem Python zaokrouhlování

const round = (x) => {
  const y = Math.trunc(x)
  const z = x-y
   if(z===0.5){
     if(y % 2 === 0){
       return y
       }else{
       return y + 1
     }
     }
     if(x<0 && y % 2 !== 0){
    return Math.sign(x) * Math.round(Math.abs(x))
    }else{
    return Math.round(x)}
    }

//const cislo = round(-3.5)