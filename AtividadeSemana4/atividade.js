function formatarFixo(input) {
    let telefone = input.value.replace(/\D/g, '');
    if (telefone.length <= 10) {
        telefone = telefone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
    input.value = telefone;
}

function formatarCelular(input) {
    let telefone = input.value.replace(/\D/g, '');
    if (telefone.length === 11) {
        telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    input.value = telefone;
}

function formatarData(input) {
    let data = input.value.replace(/\D/g, '');
    if (data.length <= 2) {
        data = data.replace(/(\d{2})/, '$1/');
    } else if (data.length <= 4) {
        data = data.replace(/(\d{2})(\d{2})/, '$1/$2/');
    } else {
        data = data.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    }
    input.value = data;
}

function Pessoa() {
    this.nome = "";
    this.email = "";
    this.data_nas = "";
    this.tel_fixo = "";
    this.tel_cel = "";
    this.matricula = "";

    this.setNome = function (vNome) { this.nome = vNome; }
    this.setEmail = function (vEmail) { this.email = vEmail; }
    this.setData_nas = function (vData_nas) { this.data_nas = vData_nas; }
    this.setTel_fixo = function (vTel_fixo) { this.tel_fixo = vTel_fixo; }
    this.setTel_cel = function (vTel_cel) { this.tel_cel = vTel_cel; }
    this.setMatricula = function (vMatricula) { this.matricula = vMatricula; }
}

function Professor() {
    Pessoa.call(this);
    this.area = "";
    this.setArea = function (vArea) { this.area = vArea; }
    this.lattes = "";
    this.setLattes = function (vLattes) { this.lattes = vLattes; }
}

function Aluno() {
    Pessoa.call(this);
    this.curso = "";
    this.setCurso = function (vCurso) { this.curso = vCurso; }
}

function redefinirFormulario() {
    document.getElementById('cadastroForm').reset();
    document.getElementById('extraFields').innerHTML = "";
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('resultado').innerHTML = "";
}

document.addEventListener("DOMContentLoaded", function () {
    let radioProfessor = document.getElementById('professor');
    let radioAluno = document.getElementById('aluno');
    let extraFields = document.getElementById('extraFields');
    let form = document.getElementById('cadastroForm');

    function adicionarCampos() {
        extraFields.innerHTML = "";

        if (radioProfessor.checked) {
            let div = document.createElement('div');
            div.classList.add("mb-3");
            div.innerHTML = `
                <label for="area" class="form-label">Área:</label>
                <input type="text" id="area" name="area" placeholder="Digite sua área de atuação" class="form-control" required>
            `;
            let div2 = document.createElement('div');
            div2.classList.add("mb-3");
            div2.innerHTML = `
                <label for="lattes" class="form-label">Lattes:</label>
                <input type="text" id="lattes" name="lattes" placeholder="Digite aqui o endereço para seu Lattes" class="form-control" required>
            `;
            extraFields.appendChild(div);
            extraFields.appendChild(div2);
        }

        if (radioAluno.checked) {
            let div = document.createElement('div');
            div.classList.add("mb-3");
            div.innerHTML = `
                <label for="curso" class="form-label">Curso:</label>
                <input id="curso" name="curso" placeholder="Digite seu curso" class="form-control" required>                        
            `;
            extraFields.appendChild(div);
        }
    }

    radioProfessor.addEventListener("change", adicionarCampos);
    radioAluno.addEventListener("change", adicionarCampos);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let resultado = document.getElementById('resultado');
        let pessoa = radioProfessor.checked ? new Professor() : new Aluno();

        pessoa.setNome(document.getElementById('nome').value);
        pessoa.setEmail(document.getElementById('email').value);
        pessoa.setData_nas(document.getElementById('aniversario').value);
        pessoa.setTel_cel(document.getElementById('tel_celular').value);
        pessoa.setTel_fixo(document.getElementById('tel_fixo').value);
        pessoa.setMatricula(document.getElementById('matricula').value);

        if (radioProfessor.checked) pessoa.setArea(document.getElementById('area').value)
        if (radioProfessor.checked) pessoa.setLattes(document.getElementById('lattes').value);
        if (radioAluno.checked) pessoa.setCurso(document.getElementById('curso').value);

        resultado.innerHTML = `
            <div class="resultado-header">Dados do Cadastro</div>
            <div class="resultado-item"><span>Nome:</span> ${pessoa.nome}</div>
            <div class="resultado-item"><span>E-mail:</span> ${pessoa.email}</div>
            <div class="resultado-item" oninput="formatarData(this)"><span>Data de Nascimento:</span> ${pessoa.data_nas}</div>
            <div class="resultado-item" oninput="formatarTelefoneCel(this)"><span>Telefone Celular:</span> ${pessoa.tel_cel}</div>
            <div class="resultado-item"><span>Matrícula:</span> ${pessoa.matricula}</div>
            ${radioProfessor.checked ? `
                <div class="resultado-item"><span>Area:</span> ${pessoa.area}</div>
            ` : ''}
            ${radioProfessor.checked ? `
                <div class="resultado-item"><span>Lattes:</span> ${pessoa.lattes}</div>
            ` : ''}
            ${radioProfessor.checked ? `
                <div class="resultado-item" oninput="formatarTelefoneFixo(this)"><span>Telefone Fixo:</span> ${pessoa.tel_fixo}</div>
            ` : ''}
            ${radioAluno.checked ? `
                <div class="resultado-item"><span>Curso:</span> ${pessoa.curso}</div>
            ` : ''}
            ${radioAluno.checked ? `
                <div class="resultado-item" oninput="formatarTelefoneFixo(this)"><span>Telefone Fixo:</span> ${pessoa.tel_fixo}</div>
            ` : ''}
        `;
        resultado.style.display = 'block'; 
    });
});