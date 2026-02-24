import './App.css';
function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      <header>
        <h1>Gülendam - Portfolyo</h1> 
        <nav aria-label="Ana navigasyon"> 
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <figure>
            <img 
              src="https://www.atlas.edu.tr/muhendislik-ve-doga-bilimleri-fakultesi/yazilim-muhendisligi-ingilizce" 
              alt="Gülendam'ın profil fotoğrafı" 
            />
            <figcaption>Gülendam - Yazılım Mühendisi Adayı</figcaption>
          </figure>
          <p>Web tasarımı ve programlama öğreniyorum.</p>
          
          <h3>Kullandigim Teknolojiler</h3>
          <ul>
            <li>HTML5 & Semantik Web</li>
            <li>React & TypeScript</li>
            <li>Erisilebilirlik (A11y)</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          
          <article>
            <h3>Hava Durumu Uygulaması</h3>
            <img 
              src="https://via.placeholder.com/300x200" 
              alt="Hava durumu uygulamasının güneşli bir günü gösteren ana ekran görüntüsü" 
            />
            <p>React kullanarak geliştirdiğim anlık veri çeken bir uygulama. Teknolojiler: React, API, CSS.</p>
          </article>

          <article>
            <h3>E-Ticaret Sitesi</h3>
            <img 
              src="https://via.placeholder.com/300x200" 
              alt="E-ticaret sitesinin ürün listeleme ve sepete ekle butonlarının bulunduğu sayfa" 
            />
            <p>Modern arayüze sahip, TypeScript ile yazdığım bir alışveriş platformu. Teknolojiler: TypeScript, State Management.</p>
          </article>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>
              
              <div className="form-group">
                <label htmlFor="name">Ad Soyad: </label>
                <input type="text" id="name" name="name" required minLength={2} aria-describedby="name-error" />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta: </label>
                <input type="email" id="email" name="email" required aria-describedby="email-error" />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu: </label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea id="message" name="message" rows={5} required minLength={10} aria-describedby="message-error"></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer> 
        <p>&copy; 2025 Gülendam. Tum haklari saklidir.</p> 
        <ul>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/orlgulendam" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </footer>
    </>
  );
}

export default App;