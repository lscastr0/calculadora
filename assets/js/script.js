function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if (!conta) {
                    alert('conta invalida');
                    return
                }

                this.display.value = conta;
            } catch (e) {
                alert('conta inválida');
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('del')) {
                    this.apagaUm();
                }
                if (el.classList.contains('eq')) {
                    this.realizaConta();
                }

            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        pressionaEnter() {
            document.addEventListener('keypress', (e) => {
                if (e.code === "Enter" || e.code === "NumpadEnter") {
                    this.realizaConta();
                }
            })
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
