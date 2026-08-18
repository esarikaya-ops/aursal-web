# aursal.com — çatı site

AURSAL yayıncı sitesi. Statik HTML, derleme adımı yok, GitHub Pages ile yayınlanır.

## Klasör yapısı

    aursal/
    ├── index.html              Ana sayfa (yayındaki + geliştirmedeki uygulamalar)
    ├── hakkimizda.html         AURSAL nedir, yayıncı bilgileri
    ├── iletisim.html           Tek iletişim adresi + uygulamaların mevcut adresleri
    ├── yasal.html              Uygulama başına yasal metin dizini (link listesi)
    ├── style.css               Tüm sayfaların ortak stili
    ├── site.js                 TR/EN dil değiştirici (localStorage)
    ├── app-ads.txt             AdMob doğrulaması — tüm uygulamalar için tek dosya
    ├── CNAME                   aursal.com
    ├── .nojekyll               GitHub Pages: Jekyll işlemeyi kapatır
    ├── logo.jpg                Screen Translate ikonu
    ├── assets/                 AURSAL logosu + uygulama ikonları
    ├── kamera-asistani/        Yasal metinler — ÜRETİLİR, elle düzenlenmez
    ├── Aursal Site.dc.html     Tasarım kaynağı (yayınlanmaz, referans)
    ├── support.js              Tasarım kaynağının çalışma zamanı
    └── github.md               Hangi ekran hangi depodan üretildi

## Yayına alma

1. GitHub'da yeni bir depo aç: **aursal-web** (public).
2. Bu klasörün içeriğini deponun köküne kopyala, push et.
3. Settings → Pages → Source: `main` / `root`.
4. Settings → Pages → Custom domain: `aursal.com` (CNAME dosyası zaten hazır), "Enforce HTTPS" işaretle.
5. DNS (alan adı sağlayıcında):

       A     @      185.199.108.153
       A     @      185.199.109.153
       A     @      185.199.110.153
       A     @      185.199.111.153
       CNAME www    esarikaya-ops.github.io.

## Screen Translate ve PhoneMD — şimdilik taşınmıyor

**Karar (16 Ağustos 2026):** iki alan adının da ödenmiş ~15 ay süresi var ve
yenileme aboneliği kapatıldı. O süre boyunca uygulamalar kendi adreslerinde
kalır; site onlara **dış bağlantı** verir.

- `screentranslate.com` — kendi deposu, kendi `app-ads.txt` dosyası
- `phonemd.net` — aynı

Süre dolduğunda taşıma gündeme gelir: içerik `screentranslate/` ve `phonemd/`
dizinlerine kopyalanır, `index.html` ile `yasal.html` içindeki dış bağlantılar
yerel yollara döner, Play Console'daki gizlilik politikası URL'leri güncellenir.
GitHub Pages 301 üretemediği için eski alan adları ya DNS ile buraya çevrilir ya
da her sayfası `canonical` + `meta refresh` ikilisine indirilir.

### app-ads.txt neyi doğrular

Kökteki dosya, Play kaydında **geliştirici web sitesi olarak bu alan adını
gösteren** uygulamaları doğrular — bugün Kamera Asistanı ve Hane. Yayındaki iki
uygulama kendi alan adlarını gösteriyor, dolayısıyla kendi dosyalarını
koruyorlar. Üç ayrı `app-ads.txt` var ve bu bilinçlidir.

## Kamera Asistanı yasal metinleri — üretilir

`kamera-asistani/` **elle düzenlenmez.** Metinlerin tek kaynağı uygulamanın
deposundaki `docs/legal/`; oradan buraya bir betik taşır:

    cd ../cameraassistant
    python scripts/build_web.py

Metin değişecekse `cameraassistant/docs/legal/*.html` içinde değişir, betik
yeniden çalıştırılır. Elle kopyalanmış üçüncü bir sürüm tutulmaz — `yasal.html`
sayfasının kendi yazdığı kural budur.

⚠️ Sayfalar şu an **hiçbir yerden bağlantılı değil** ve `noindex` taşıyor.
Adresleri kesindir ve Play Console'a bu haliyle verilebilir; bağlantılar
(`yasal.html` bloğu + ana sayfadaki kart) uygulama Play'e yüklenirken açılacak.

## Yeni uygulama eklerken

1. `index.html` içindeki "Geliştirmede" bölümünden kartı al, "Play Store'da yayında"
   bölümüne taşı; Play bağlantısını ve sürüm satırını yaz.
2. `yasal.html` içine o uygulamanın `.lgroup` bloğunu ekle.
3. Uygulamanın sitesini `hane/` veya `kamera-asistani/` dizinine koy.
4. Uygulama ikonunu `assets/` içine at (192×192 veya üstü).

## Uygulama bilgileri

| Uygulama | Sürüm | Paket adı | Durum |
|---|---|---|---|
| Screen Translate | v4.1 | com.esarikaya.screentranslate | Play'de yayında |
| PhoneMD | v6.0.2 (16) | com.esarikaya.phonemd | Play'de yayında |
| Hane | — | — | Geliştirmede |
| Kamera Asistanı | — | — | Geliştirmede |

Minimum Android: 6.0 (API 23) · Kotlin + Jetpack Compose
AdMob yayıncı: pub-4203599298513432

## İletişim

- Çatı: esarikaya@aursal.com
- Screen Translate: info@screentranslate.com (çalışmaya devam ediyor)
- PhoneMD: support@phonemd.app · bugs@phonemd.app

## Dil

Sayfalar TR yazılır, EN karşılığı her metnin `data-en` özniteliğinde durur.
Yeni metin eklerken: `<span class="i18n" data-en="English">Türkçe</span>`.
