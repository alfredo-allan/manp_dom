document.addEventListener('DOMContentLoaded', () => {
    // --- 1. LÓGICA DO TEMA CLARO/ESCURO (DOM MANIPULATION) ---
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    // Função para aplicar o tema salvo no localStorage ou o padrão (claro)
    const loadTheme = () => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            themeIcon.classList.remove('bi-sun-fill');
            themeIcon.classList.add('bi-moon-fill');
        } else {
            body.classList.remove('dark-mode');
            themeIcon.classList.remove('bi-moon-fill');
            themeIcon.classList.add('bi-sun-fill');
        }
    };

    // Função para alternar o tema
    const toggleTheme = () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
        loadTheme(); // Recarrega o ícone correto
    };

    // Adiciona o Event Listener ao botão
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Carrega o tema ao iniciar a página
    loadTheme();

    // --- 2. DEMONSTRAÇÃO DE INTERATIVIDADE DOM ---

    // 2.1 Manipulação de Conteúdo
    const manipulateBtn = document.getElementById('manipulateBtn');
    const interactionTitle = document.getElementById('interactionTitle');
    const interactionText = document.getElementById('interactionText');
    let clickCount = 0;

    manipulateBtn.addEventListener('click', () => {
        clickCount++;
        
        // Exemplo de DOM Manipulation: Mudando texto e cor
        interactionTitle.textContent = `Alterado pelo JS (${clickCount}x)`;
        
        if (clickCount % 2 === 1) {
            interactionText.textContent = 'O JavaScript alterou este texto! O DOM foi atualizado.';
            interactionText.style.fontWeight = 'bold';
        } else {
            interactionText.textContent = 'Clique novamente para ver a mudança reverter ou ser diferente.';
            interactionText.style.fontWeight = 'normal';
        }
    });


    // 2.2 Renderização da Tabela (Usando JS para preencher)
    const tableBody = document.getElementById('useCaseTableBody');
    
    const dataRows = [
        { aspecto: "Cor de Fundo", css: "Definida no CSS estático.", js: "Alterada dinamicamente via `body.classList.add('dark-mode')`." },
        { aspecto: "Botão de Ação", css: "Aparência padrão do Bootstrap.", js: "Ação acionada (ex: mudar texto) via `addEventListener`." },
        { aspecto: "Conteúdo Fixo", css: "Estrutura com tags HTML.", js: "Conteúdo inserido ou atualizado com `.textContent` ou `.innerHTML`." }
    ];

    dataRows.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.aspecto}</td>
            <td>${item.css}</td>
            <td>${item.js}</td>
        `;
        tableBody.appendChild(tr);
    });

    // Nota: O Modal de Boas-Vindas está configurado no HTML para ser aberto
    // por um script separado no final do body, utilizando o componente Modal do Bootstrap.
});