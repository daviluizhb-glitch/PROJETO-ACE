# BH Acessível - Especificação do Projeto

## 1. Visão Geral do Projeto

- **Nome do Projeto**: BH Acessível
- **Tipo**: Website responsivo (PWA-ready)
- **Funcionalidade Principal**: Guia de edificações acessíveis em Belo Horizonte, MG, para pessoas com deficiência
- **Usuários Alvo**: Pessoas com deficiência, familiares, cuidadores e profissionais que buscam locais acessíveis na capital mineira

## 2. Especificação UI/UX

### Estrutura de Layout

- **Header**: Logo + título + botão de menu mobile
- **Hero Section**: Busca principal + mensagem de boas-vindas
- **Filtros**: Categorias de accessibility (rampas, elevadores, banheiros adaptados, etc.)
- **Lista de Edificações**: Cards com informações das edificações acessíveis
- **Footer**: Créditos + links úteis

### Design Visual

**Paleta de Cores**:
- Primary: `#1E3A5F` (Azul escuro - confiança/accessibilidade)
- Secondary: `#2E7D32` (Verde - indicação de acessibilidade)
- Accent: `#FF8F00` (Laranja - destaque/chamadas para ação)
- Background: `#F5F7FA` (Cinza muito claro)
- Cards: `#FFFFFF` (Branco)
- Texto Principal: `#212121`
- Texto Secundário: `#757575`

**Tipografia**:
- Fonte Principal: 'Poppins', sans-serif (moderna e legível)
- Fonte Alternativa: 'Roboto', sans-serif
- Títulos: 700 (bold)
- Corpo: 400 (regular)

**Espaçamento**:
- Container max-width: 1200px
- Padding mobile: 16px
- Padding desktop: 24px
- Gap entre cards: 20px

### Componentes UI

1. **Card de Edificação**:
   - Imagem ilustrativa
   - Nome da edificação
   - Endereço
   - Tags de accessibility (ícones)
   - Botão de "Ver Detalhes"

2. **Filtros por Categoria**:
   - Rampa de acesso
   - Elevador
   - Banheiro adaptado
   - Estacionamento acessível
   - Sinalização tátil
   - Braile/piso tátil

3. **Campo de Busca**:
   - Input com ícone de lupa
   - Busca por nome ou endereço

4. **Menu Mobile**:
   - Hambúrguer que expande
   - Links de navegação

### Responsividade

- **Mobile**: < 768px (layout em coluna única, menu hamburger)
- **Tablet**: 768px - 1024px (grid 2 colunas)
- **Desktop**: > 1024px (grid 3-4 colunas)

## 3. Especificação de Funcionalidades

### Funcionalidades Principais

1. **Listagem de Edificações**:
   - Exibir lista de edificações acessíveis em BH
   - Mostrar foto, nome, endereço e features de acessibilidade

2. **Filtros por Categoria**:
   - Filtrar por tipo de acessibilidade disponível
   - Múltiplos filtros podem ser combinados

3. **Busca por Nome/Endereço**:
   - Busca em tempo real
   - Caso insensitive

4. **Detalhes da Edificação** (Modal):
   - Informações completas
   - Recursos de acessibilidade disponíveis
   - Endereço no mapa (link para Google Maps)

### Dados de Exemplo

O site incluirá dados de exemplo de edificações reais em BH como:
- Shopping Diamond
- Shopping Boulevard
- Museu de Arte da Pampulha
- Teatro Mineiro
- Prédio da PBH
- Etc.

## 4. Critérios de Aceite

- [ ] Site responsivo em dispositivos móveis (320px+)
- [ ] Menu hamburger funcional no mobile
- [ ] Filtros de acessibilidade funcionando
- [ ] Busca por nome/endereço funcionando
- [ ] Cards de edificações exibindo informações corretas
- [ ] Modal de detalhes abrindo corretamente
- [ ] Todas as cores e tipografia conforme especificado
- [ ] Animações suaves em transições
- [ ] Site acessível (contraste adequado, labels)

