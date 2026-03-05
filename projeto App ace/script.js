// Dados das edificações
const buildings = [
    {
        id: 1,
        name: "Shopping Diamond",
        address: "Av. Olegário Maciel, 2150",
        neighborhood: "Lourdes",
        phone: "(31) 3286-4000",
        icon: "🛒",
        features: {
            rampa: true,
            elevador: true,
            banheiro: true,
            estacionamento: true,
            sinalizacao: true,
            braile: true
        }
    },
    {
        id: 2,
        name: "Museu de Arte da Pampulha",
        address: "Av. Otacílio Negrão de Lima, 16585",
        neighborhood: "Pampulha",
        phone: "(31) 3277-7436",
        icon: "🎨",
        features: {
            rampa: true,
            elevador: false,
            banheiro: true,
            estacionamento: true,
            sinalizacao: true,
            braile: true
        }
    },
    {
        id: 3,
        name: "Teatro Mineirão",
        address: "Av. Antônio Abrahão Caran, 817",
        neighborhood: "Pampulha",
        phone: "(31) 3198-0000",
        icon: "🎭",
        features: {
            rampa: true,
            elevador: true,
            banheiro: true,
            estacionamento: true,
            sinalizacao: true,
            braile: false
        }
    },
    {
        id: 4,
        name: "Praça da Liberdade",
        address: "Praça da Liberdade, s/n",
        neighborhood: "Funcionários",
        phone: "",
        icon: "🌳",
        features: {
            rampa: true,
            elevador: false,
            banheiro: true,
            estacionamento: false,
            sinalizacao: true,
            braile: true
        }
    },
    {
        id: 5,
        name: "Centro de Cultura",
        address: "Av. Afonso Pena, 1537",
        neighborhood: "Centro",
        phone: "(31) 3277-4000",
        icon: "📚",
        features: {
            rampa: true,
            elevador: true,
            banheiro: true,
            estacionamento: true,
            sinalizacao: true,
            braile: true
        }
    },
    {
        id: 6,
        name: "Parque Municipal",
        address: "Av. Afonso Pena, 2000",
        neighborhood: "Centro",
        phone: "(31) 3277-7922",
        icon: "🌿",
        features: {
            rampa: true,
            elevador: false,
            banheiro: true,
            estacionamento: false,
            sinalizacao: true,
            braile: false
        }
    },
    {
        id: 7,
        name: "Biblioteca Pública",
        address: "Av. Amazonas, 115",
        neighborhood: "Centro",
        phone: "(31) 3277-1500",
        icon: "📖",
        features: {
            rampa: true,
            elevador: true,
            banheiro: true,
            estacionamento: false,
            sinalizacao: true,
            braile: true
        }
    },
    {
        id: 8,
        name: "Feira de Artesanato",
        address: "Av. Getúlio Vargas, 800",
        neighborhood: "Funcionários",
        phone: "",
        icon: "🧵",
        features: {
            rampa: true,
            elevador: false,
            banheiro: true,
            estacionamento: true,
            sinalizacao: false,
            braile: false
        }
    }
];

let currentFilter = 'all';
let currentSearch = '';

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderBuildings(buildings);
});

// Renderizar edificações
function renderBuildings(buildingsToRender) {
    const grid = document.getElementById('buildingsGrid');
    const emptyState = document.getElementById('emptyState');
    const resultsCount = document.getElementById('resultsCount');

    if (buildingsToRender.length === 0) {
        grid.style.display = 'none';
        emptyState.style.display = 'block';
        resultsCount.textContent = '0 locais encontrados';
        return;
    }

    grid.style.display = 'grid';
    emptyState.style.display = 'none';
    
    const plural = buildingsToRender.length !== 1 ? 's' : '';
    resultsCount.textContent = `${buildingsToRender.length} local${plural} encontrado${plural}`;

    grid.innerHTML = buildingsToRender.map((building, index) => `
        <div class="building-card" style="animation-delay: ${index * 0.05}s" onclick="openModal(${building.id})">
            <div class="card-image">
                <span class="card-badge">Acessível</span>
                ${building.icon}
            </div>
            <div class="card-content">
                <h3>${building.name}</h3>
                <div class="card-address">
                    <span>📍</span>
                    <span>${building.address} - ${building.neighborhood}</span>
                </div>
                <div class="accessibility-tags">
                    ${getFeatureTags(building.features)}
                </div>
                <button class="view-btn">Ver Detalhes</button>
            </div>
        </div>
    `).join('');
}

// Obter tags de features
function getFeatureTags(features) {
    const tags = [];
    if (features.rampa) tags.push('<span class="access-tag">♿ Rampa</span>');
    if (features.elevador) tags.push('<span class="access-tag">🛗 Elevador</span>');
    if (features.banheiro) tags.push('<span class="access-tag">🚻 Banheiro</span>');
    if (features.estacionamento) tags.push('<span class="access-tag">🅿️ Estacionamento</span>');
    return tags.join('');
}

// Filtrar edificações
function filterBuildings(filter) {
    currentFilter = filter;
    
    // Atualizar botões ativos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
    });

    applyFilters();
}

// Buscar edificações - opens Google Maps in new tab
function searchBuildings() {
    const searchTerm = document.getElementById('searchInput').value.trim();
    
    if (searchTerm) {
        // Search on Google Maps for the location
        const query = encodeURIComponent(searchTerm + ", Belo Horizonte, MG, Brasil");
        window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
    }
}

// Aplicar filtros
function applyFilters() {
    let filtered = buildings;

    // Aplicar filtro de busca
    if (currentSearch) {
        filtered = filtered.filter(b => 
            b.name.toLowerCase().includes(currentSearch) ||
            b.address.toLowerCase().includes(currentSearch) ||
            b.neighborhood.toLowerCase().includes(currentSearch)
        );
    }

    // Aplicar filtro de feature
    if (currentFilter !== 'all') {
        filtered = filtered.filter(b => b.features[currentFilter]);
    }

    renderBuildings(filtered);
}

// Buscar em tempo real
document.getElementById('searchInput').addEventListener('input', (e) => {
    currentSearch = e.target.value.toLowerCase();
    applyFilters();
});

// Allow pressing Enter to search
document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBuildings();
    }
});

// Abrir modal
function openModal(id) {
    const building = buildings.find(b => b.id === id);
    if (!building) return;

    document.getElementById('modalTitle').textContent = building.name;
    document.getElementById('modalAddress').textContent = building.address;
    document.getElementById('modalNeighborhood').textContent = building.neighborhood;
    document.getElementById('modalPhone').textContent = building.phone || 'Não disponível';
    
    // Google Maps link using place name instead of coordinates
    const mapQuery = encodeURIComponent(building.name + ", " + building.address + ", Belo Horizonte, MG, Brasil");
    const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
    document.getElementById('modalMapLink').href = mapLink;

    const features = [
        { key: 'rampa', label: '♿ Rampa de Acesso' },
        { key: 'elevador', label: '🛗 Elevador' },
        { key: 'banheiro', label: '🚻 Banheiro Adaptado' },
        { key: 'estacionamento', label: '🅿️ Estacionamento Acessível' },
        { key: 'sinalizacao', label: '🟫 Sinalização Tátil' },
        { key: 'braile', label: '🔤 Sinalização em Braille' }
    ];

    document.getElementById('modalFeatures').innerHTML = features.map(f => `
        <div class="feature-item ${building.features[f.key] ? 'available' : ''}">
            <span class="check">${building.features[f.key] ? '✓' : '✗'}</span>
            ${f.label}
        </div>
    `).join('');

    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Fechar modal
function closeModal(event) {
    if (event && event.target !== event.currentTarget) return;
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// Fechar modal com Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Toggle menu mobile
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('active');
}

// Fechar menu ao clicar em link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navMenu').classList.remove('active');
    });
});

