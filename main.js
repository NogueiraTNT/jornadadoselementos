let telaInicio_js = document.getElementById("telaInicio");
let btnInicio_js = document.getElementById("btnInicio");
let headerInicio_js = document.getElementById("headerInicio");

let telaMain_js = document.getElementById("main");
let nomePersonagem_js = document.getElementById("nomePersonagem");

nomePersonagem_js.value = " ";
let modelPersonagem = " ";

let rEnigma = "3122534415";

//Function que inicia o game
function iniciarGame() {
    btnInicio_js.style.display = "none";
    telaMain_js.style.display = "block";
}

//Definindo o nome do usuario
function avancar() {

    if (nomePersonagem_js.value == " ") {
        alert('Nçao pode ter nome vasio')
    } else {
        telaMain_js.style.display = "none";
        headerInicio_js.innerHTML = `
            <h1 style="color: #fff; text-align: center; ">Boas-Vindas, ${nomePersonagem_js.value}</h1>
            <p>Em um reino distante, a bela Princesa Isabella foi capturada por um malvado feiticeiro e trancada em uma torre encantada. A notícia de seu sequestro espalhou-se rapidamente, chegando aos ouvidos de um jovem e corajoso aventureiro chamado Leo. Determinado a salvar a princesa e libertar o reino da escuridão, Leo embarcou em uma jornada épica.</p>
    
            <p>Ao iniciar sua busca, Leo se depara com uma floresta mágica cheia de criaturas encantadas e desafios. O jogador assume o controle de Leo, enfrentando escolhas difíceis em cada encruzilhada. Cada caminho escolhido leva a diferentes encontros e obstáculos. O jogador deve decidir se Leo deve enfrentar um grupo de trolls ou encontrar um atalho através de uma caverna escura e misteriosa. As escolhas do jogador moldam a narrativa da história e determinam o destino de Leo e da Princesa Isabella.</p>
            <div class="centerbtn">
                <input type="button" value="Avancar" class="btn" onclick="escolherPersona()">
            </div>
        `
    }
}


//Escolhendo o personagem 
function escolherPersona() {
    headerInicio_js.innerHTML = `
        <h1 style="color: #fff; text-align: center; ">${nomePersonagem_js.value}, Escolha seu personagem</h1>
        <fieldset class="radio-image">
            <label for="person-1">
                <input type="radio" name="Persona" value="person-1" id="person-1">
                <img src="img/persona_1.png" alt="personagem-1">
            </label>
            <label for="person-2">
                <input type="radio" name="Persona" value="person-2" id="person-2">
                <img src="img/persona_2.png" alt="personagem-2">
            </label>
            <label for="person-3">
                <input type="radio" name="Persona" value="person-3" id="person-3">
                <img src="img/persona_3.png" alt="personagem-3">
            </label>
            <label for="person-4">
                <input type="radio" name="Persona" value="person-4" id="person-4">
                <img src="img/persona_4.png" alt="personagem-4">
            </label>    
        </fieldset>
        <div class="centerbtn">
            <input type="button" value="Avancar" class="btn" onclick="finalizarPerso()">
        </div>
    `  
}

// Iniciando a historia
function finalizarPerso() {  

    if (document.getElementById("person-1").checked) {
        modelPersonagem =  [nomePersonagem_js, "img/persona_1.png"];

        headerInicio_js.innerHTML = '';
        headerInicio_js.innerHTML = `        
        <h1 style="color: #fff; text-align: center; ">${nomePersonagem_js.value}, escolha com cautela seus caminhos!</h1>
        <div class="centerbtn">
        <img src="${modelPersonagem[1]}">
        <h3 style="color: #fff; text-align: center;">${nomePersonagem_js.value}</h3>
        </div>
        <div class="centerbtn">
           <input type="button" value="Avancar" class="btn" onclick="primeiroCaminho()">
        </div>
        `
      } else if (document.getElementById("person-2").checked) {
        modelPersonagem =  [nomePersonagem_js, "img/persona_2.png"];

        headerInicio_js.innerHTML = '';
        headerInicio_js.innerHTML = `        
        <h1 style="color: #fff; text-align: center; ">${nomePersonagem_js.value}, escolha com cautela seus caminhos!</h1>
        <div class="centerbtn">
        <img src="${modelPersonagem[1]}">
        <h3 style="color: #fff; text-align: center;">${nomePersonagem_js.value}</h3>
        </div>
        <div class="centerbtn">
           <input type="button" value="Avancar" class="btn" onclick="primeiroCaminho()">
        </div>
        `
      } else if (document.getElementById("person-3").checked) {
        modelPersonagem =  [nomePersonagem_js, "img/persona_3.png"];

        headerInicio_js.innerHTML = '';
        headerInicio_js.innerHTML = `        
        <h1 style="color: #fff; text-align: center; ">${nomePersonagem_js.value}, escolha com cautela seus caminhos!</h1>
        <div class="centerbtn">
        <img src="${modelPersonagem[1]}">
        <h3 style="color: #fff; text-align: center;">${nomePersonagem_js.value}</h3>
        </div>
        <div class="centerbtn">
           <input type="button" value="Avancar" class="btn" onclick="primeiroCaminho()">
        </div>
        `
      } else if (document.getElementById("person-4").checked) {
        modelPersonagem =  [nomePersonagem_js, "img/persona_4.png"];

        headerInicio_js.innerHTML = '';
        headerInicio_js.innerHTML = `        
        <h1 style="color: #fff; text-align: center; ">${nomePersonagem_js.value}, escolha com cautela seus caminhos!</h1>
        <div class="centerbtn">
        <img src="${modelPersonagem[1]}">
        <h3 style="color: #fff; text-align: center;">${nomePersonagem_js.value}</h3>
        </div>
        <div class="centerbtn">
           <input type="button" value="Avancar" class="btn" onclick="primeiroCaminho()">
        </div>
        `
      } else {
        alert('nenhum personagem')
      }
}

// Primeiro questionario (Resposta correta FOGO)
function primeiroCaminho(){

    headerInicio_js.innerHTML = '';
    headerInicio_js.innerHTML = `        
    <h1 style="color: #fff; text-align: center; "> O que é capaz de iluminar a escuridão e fornecer calor? </h1>
    <div class="centerbtn">
    <img src="${modelPersonagem[1]}">
    <h3 style="color: #fff; text-align: center;">${nomePersonagem_js.value}</h3>
    </div>
    <fieldset class="radio-image">
            <label for="tipo-1">
                <input type="radio" name="tipo" value="tipo-1" id="tipo-1">
                <img src="img/fogo.png" alt="tipoagem-1" class="redImg">
            </label>
            <label for="tipo-2">
                <input type="radio" name="tipo" value="tipo-2" id="tipo-2">
                <img src="img/agua.png" alt="tipoagem-2" class="redImg">
            </label>
            <label for="tipo-3">
                <input type="radio" name="tipo" value="tipo-3" id="tipo-3">
                <img src="img/pedra.png" alt="tipoagem-3" class="redImg">
            </label>
            <label for="tipo-4">
                <input type="radio" name="tipo" value="tipo-4" id="tipo-4">
                <img src="img/vento.png" alt="tipoagem-4" class="redImg">
            </label>    
        </fieldset>
    <div class="centerbtn">
       <input type="button" value="Avancar" class="btn" onclick="segundoCaminho()">
    </div>
    `

} 

// Segundo questionario (Resposta correta VENTO)
function segundoCaminho() {
    if (document.getElementById("tipo-1").checked) {
        headerInicio_js.innerHTML = '';
        headerInicio_js.innerHTML = `        
            <h1 style="color: #fff; text-align: center; "> Qual elemento é associado à energia eólica, uma fonte renovável de energia? </h1>
            <div class="centerbtn">
            <img src="${modelPersonagem[1]}">
            <h3 style="color: #fff; text-align: center;">${nomePersonagem_js.value}</h3>
            </div>
            <fieldset class="radio-image">
                    <label for="tipo-1">
                        <input type="radio" name="tipo" value="tipo-1" id="tipo-1">
                        <img src="img/fogo.png" alt="tipoagem-1" class="redImg">
                    </label>
                    <label for="tipo-2">
                        <input type="radio" name="tipo" value="tipo-2" id="tipo-2">
                        <img src="img/agua.png" alt="tipoagem-2" class="redImg">
                    </label>
                    <label for="tipo-3">
                        <input type="radio" name="tipo" value="tipo-3" id="tipo-3">
                        <img src="img/pedra.png" alt="tipoagem-3" class="redImg">
                    </label>
                    <label for="tipo-4">
                        <input type="radio" name="tipo" value="tipo-4" id="tipo-4">
                        <img src="img/vento.png" alt="tipoagem-4" class="redImg">
                    </label>    
                </fieldset>
            <div class="centerbtn">
            <input type="button" value="Avancar" class="btn" onclick="terceiroCaminho()">
            </div>
        `
      } else if (document.getElementById("tipo-2").checked) {
        alert("Errado");
      } else if (document.getElementById("tipo-3").checked) {
        alert("Errado");
      } else if (document.getElementById("tipo-4").checked) {
        alert("Errado");
      } else {
        alert("Escolha um caminho!")
      }
}

// Terceiro questionario (Resposta correta AGUA)
function terceiroCaminho() {
    if (document.getElementById("tipo-1").checked) {
        alert("Errado");
      } else if (document.getElementById("tipo-2").checked) {
        alert("Errado");
      } else if (document.getElementById("tipo-3").checked) {
        alert("Errado");
      } else if (document.getElementById("tipo-4").checked) {
        headerInicio_js.innerHTML = '';
        headerInicio_js.innerHTML = `        
            <h1 style="color: #fff; text-align: center; "> Qual elemento é vital para a sobrevivência de todos os seres vivos na Terra? </h1>
            <div class="centerbtn">
            <img src="${modelPersonagem[1]}">
            <h3 style="color: #fff; text-align: center;">${nomePersonagem_js.value}</h3>
            </div>
            <fieldset class="radio-image">
                    <label for="tipo-1">
                        <input type="radio" name="tipo" value="tipo-1" id="tipo-1">
                        <img src="img/fogo.png" alt="tipoagem-1" class="redImg">
                    </label>
                    <label for="tipo-2">
                        <input type="radio" name="tipo" value="tipo-2" id="tipo-2">
                        <img src="img/agua.png" alt="tipoagem-2" class="redImg">
                    </label>
                    <label for="tipo-3">
                        <input type="radio" name="tipo" value="tipo-3" id="tipo-3">
                        <img src="img/pedra.png" alt="tipoagem-3" class="redImg">
                    </label>
                    <label for="tipo-4">
                        <input type="radio" name="tipo" value="tipo-4" id="tipo-4">
                        <img src="img/vento.png" alt="tipoagem-4" class="redImg">
                    </label>    
                </fieldset>
            <div class="centerbtn">
            <input type="button" value="Avancar" class="btn" onclick="quartoCaminho()">
            </div>
        `
      } else {
        alert("Escolha um caminho!")
      }
}

// Quarto questionario (Resposta correta PEDRA)
function quartoCaminho() {
    if (document.getElementById("tipo-1").checked) {
        alert("Errado");
      } else if (document.getElementById("tipo-2").checked) {
        headerInicio_js.innerHTML = '';
        headerInicio_js.innerHTML = `        
            <h1 style="color: #fff; text-align: center; "> Qual material é frequentemente usado na construção de estruturas sólidas e duráveis? </h1>
            <div class="centerbtn">
            <img src="${modelPersonagem[1]}">
            <h3 style="color: #fff; text-align: center;">${nomePersonagem_js.value}</h3>
            </div>
            <fieldset class="radio-image">
                    <label for="tipo-1">
                        <input type="radio" name="tipo" value="tipo-1" id="tipo-1">
                        <img src="img/fogo.png" alt="tipoagem-1" class="redImg">
                    </label>
                    <label for="tipo-2">
                        <input type="radio" name="tipo" value="tipo-2" id="tipo-2">
                        <img src="img/agua.png" alt="tipoagem-2" class="redImg">
                    </label>
                    <label for="tipo-3">
                        <input type="radio" name="tipo" value="tipo-3" id="tipo-3">
                        <img src="img/pedra.png" alt="tipoagem-3" class="redImg">
                    </label>
                    <label for="tipo-4">
                        <input type="radio" name="tipo" value="tipo-4" id="tipo-4">
                        <img src="img/vento.png" alt="tipoagem-4" class="redImg">
                    </label>    
                </fieldset>
            <div class="centerbtn">
            <input type="button" value="Avancar" class="btn" onclick="quintoCaminho()">
            </div>
        `
      } else if (document.getElementById("tipo-3").checked) {
        alert("Errado");
      } else if (document.getElementById("tipo-4").checked) {
        alert("Errado");
      } else {
        alert("Escolha um caminho!")
      }
}

// Quinto questionario é uma charada (Resposta correta 3122534415)
function quintoCaminho() {
    if (document.getElementById("tipo-1").checked) {
        alert("Errado");
      } else if (document.getElementById("tipo-2").checked) {
        alert("Errado");
      } else if (document.getElementById("tipo-3").checked) {
        headerInicio_js.innerHTML = '';
        headerInicio_js.innerHTML = `        
            <h1 style="color: #fff; text-align: center; "> Resolva o enigma! </h1>
            <div class="centerbtn">
            <img src="${modelPersonagem[1]}">
            <h3 style="color: #fff; text-align: center;">${nomePersonagem_js.value}</h3>
            </div>
            <fieldset class="radio-image">    
                <p>Em um reino onde os elementos dançam e a natureza canta, a senha está oculta nas palavras que foram ditas. As respostas que você procurava, de vento, água e pedra, têm um segredo a revelar. O enigma está nas palavras: a terceira letra da primeira resposta, a segunda letra da segunda resposta, a quinta letra da terceira resposta, a quarta letra da quarta resposta e a primeira letra da quinta resposta. Junte essas letras e você terá a chave para desbloquear o mistério. Qual é a senha numérica que você descobriu?</p>
                <input type="text" id="enigma" class="caixaText">
            </fieldset> 
            <div class="centerbtn">
            <input type="button" value="Avancar" class="btn" onclick="sextoCaminho()">
            </div>
        `  
      } else if (document.getElementById("tipo-4").checked) {
        alert("Errado");
      } else {
        alert("Escolha um caminho!")
      }
}

//  Validando o e parabenizando o usuario 
function sextoCaminho() {       
    let enigma_js = document.getElementById("enigma");   
        
    if (enigma_js.value == rEnigma) {
        headerInicio_js.innerHTML = '';
        headerInicio_js.innerHTML = `        
            <h1 style="color: #fff; text-align: center; "> Você realmente soube escolhes seus caminhos! </h1>
            <div class="centerbtn">
            <img src="${modelPersonagem[1]}">
            <h3 style="color: #fff; text-align: center;">${nomePersonagem_js.value}</h3>
            </div>
            <fieldset class="radio-image">    
                <p>Parabéns! Você resolveu o enigma com sucesso. A senha numérica que você encontrou, 3122534415, é a chave para desbloquear o mistério oculto na charada elemental. Espero que tenha gostado do desafio!</p>
            </fieldset> 
            <div class="centerbtn">
            <input type="button" value="Salvar" class="btn" onclick="salvarPrincesa()">
            </div>
        `  
    } else {
        alert("errado")
    }
 
}

// Salndo a princesa
function salvarPrincesa() {
    
    headerInicio_js.innerHTML = '';
    headerInicio_js.innerHTML = `
    <h1 style="color: #fff; text-align: center; "> PARABÉNS </h1>    
    <img src="img/core.png" class="core">
    <div class="centerbtn">
        <img src="${modelPersonagem[1]}" class="personagem_prin animeUm">
        <img src="img/princesa.png" class="personagem_rainha redPrin">
    </div>
    
    `
}