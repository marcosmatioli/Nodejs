import { green, bgRed } from "chalk"

const nota = 5

if(nota >= 7){
    console.log(green('Parabens você foi aprovado!'))
}else{
    console.log(bgRed('Recuperação'))
}