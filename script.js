const projetos = [
    { nome: "Workstation", desc: "Configuração de ambiente Debian 13 para desenvolvimento." },
    { nome: "Home Gym Tracker", desc: "Sistema para controle de treinos e cargas na academia em casa." },
];

const container = document.getElementById('container-projetos');

projetos.forEach(p => {
    container.innerHTML += `
        <div class="card">
            <h3>${p.nome}</h3>
            <p>${p.desc}</p>
        </div>
    `;
});