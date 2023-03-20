const log = console.log

function a() {
    log("Executando a()")
}

function b() {
    log("Executando b()")
}

function c() {
    log("Executando c()")
    a()
    b()
}

c()
//leitura sequencia somente isso, de cima para baixa