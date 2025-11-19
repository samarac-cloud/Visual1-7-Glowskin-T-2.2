export default function Menu() {
    return (
      <nav>
        
        {/* LOGO */}
        <div className="logo">
  GLOWSKIN <span className="star">✦✦</span>
</div>
  
        {/* LINKS */}
        <div className="menu-links">
          <a href="/produtos">Produto</a>
          <a href="/estoque">Estoque</a>
          <a href="/feedbacks">Feedback</a>
          <a href="/clientes">Cliente</a>
        </div>
  
        {/* PESQUISA */}
        <div className="search-box">
          <input type="text" placeholder="Procurar Produto" />
          <button>🔍</button>
        </div>
  
      </nav>
    );
  }