# AWS Certified Solutions Architect - Associate (SAA-C03) Çalışma Notları

Bu depo, **AWS SAA-C03** sertifika sınavına hazırlık amacıyla oluşturulmuş çalışma notları ve soru havuzunu içerir. `content/` klasöründeki orijinal kaynak dokümanlar [Microsoft MarkItDown](https://github.com/microsoft/markitdown) ile Markdown (`.md`) formatına dönüştürülmüş ve çalışma modüllerine ayrılmıştır.

---

## 📂 Not Klasörleri

| No | Modül / Not Klasörü | Açıklama | Soru / Konu | Bağlantı |
|:---|:---|:---|:---:|:---:|
| **01** | **AWS SAA-C03 Soru ve Senaryo Notları** | AWS SAA-C03 sınav senaryoları ve soru dökümü | ~684 Soru | [İncele ➔](./notlar/01-aws-certified-solutions-architect-associate-saa-c03/) |
| **02** | **Kapsamlı Soru Bankası (1019 Soru)** | Doğru cevap seçenekleriyle birlikte 1019 soruluk soru havuzu | 1019 Soru | [İncele ➔](./notlar/02-aws-saa-c03-soru-bankasi-1019/) |
| **03** | **Türkçe Açıklamalı Sınav Soruları** | Detaylı Türkçe çözüm gerekçeleri ve resmi AWS dokümantasyon referansları | 63 Soru | [İncele ➔](./notlar/03-caa-sinav-sorulari-turkce-aciklamali/) |

---

## 🚀 Yapı ve Özellikler

- **Klasör Klasör Düzen:** Her kaynak doküman `notlar/` altında bağımsız bir klasör olarak tutulur.
- **Tek Parça & Bölümlü Erişim:** Her klasörde hem tek parça `notlar.md` hem de GitHub/Obsidian performansını artırmak için 25-100'lük gruplar halinde `bolumler/` bulunur.
- **İlerleme Takibi:** Her modülün `README.md` dosyasında tamamlanan bölümleri işaretleyebileceğiniz kontrol listeleri (`- [ ]`) yer alır.

---

## 🛠️ Dönüştürücü Betik (MarkItDown)

`content/` dizinine yeni bir PDF veya ofis belgesi eklendiğinde dönüştürmeyi tekrarlamak için:

```bash
# Sanal ortamı aktifleştirin
source .venv/bin/activate

# Dönüştürücüyü çalıştırın
python convert.py
```

Microsoft MarkItDown komut satırı aracını doğrudan kullanmak isterseniz:
```bash
markitdown "content/dosya_adi.pdf" -o "cikti.md"
```
