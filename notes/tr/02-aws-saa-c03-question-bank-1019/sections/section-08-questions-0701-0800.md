# AWS SAA-C03 Kapsamlı Soru Bankası (1019 Soru ve Cevap) - Bölüm 08

> **Soru Aralığı:** 701 - 800 / Toplam: 1020

[← Modül Ana Sayfası](../README.md) | [📖 Birleştirilmiş Notlar](../notes.md)

---

Soru #700

Bir oyun şirketi, birden fazla AWS Bölgesinde internete yönelik yeni bir uygulamayı kullanıma sunmak istiyor.
Uygulama iletişim için TCP ve UDP protokollerini kullanacaktır. Şirketin ihtiyacı var
Küresel kullanıcılar için yüksek kullanılabilirlik ve minimum gecikme süresi sağlar.
Bir çözüm mimarının bu gereksinimleri karşılamak için hangi eylem kombinasyonunu gerçekleştirmesi gerekir?
(İki tane seçin.)

A. Her Bölgedeki uygulamanın önünde dahili Ağ Yük Dengeleyicileri oluşturun.

B. Her Bölgedeki uygulamanın önünde harici Application Load Balancer'lar oluşturun.

C. Trafiği her bir ağdaki yük dengeleyicilere yönlendirmek için bir AWS Global Accelerator hızlandırıcı oluşturun.
Bölge.

D. Trafiği dağıtmak için bir coğrafi konum yönlendirme politikası kullanacak şekilde Amazon Route 53'ü yapılandırın.

E. Amazon CloudFront'u trafiği yönetecek ve istekleri her bir sunucuda uygulamaya yönlendirecek şekilde yapılandırın.
Bölge

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C`
> - **Önerilen Çözüm:** Her Bölgede uygulamanın önünde dahili Ağ Yük Dengeleyicileri oluşturun. Trafiği her Bölgedeki yük dengeleyicilere yönlendirmek için bir AWS Global Accelerator hızlandırıcı oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 701
Bir şehir, bir Uygulamanın arkasında Amazon EC2 bulut sunucularında çalışan bir web uygulamasını devreye aldı
Yük Dengeleyici (ALB). Uygulamanın kullanıcıları ara sıra performans bildirdiler;
rastgele IP adreslerinden kaynaklanan DDoS saldırılarıyla ilişkili görünüyor. Şehrin bir ihtiyacı var
Minimum konfigürasyon değişikliği gerektiren ve DDoS için denetim takibi sağlayan çözüm
kaynaklar.
Hangi çözüm bu gereksinimleri karşılıyor?

A. ALB'de bir AWS WAF web ACL'sini etkinleştirin ve bilinmeyenlerden gelen trafiği engellemek için kurallar yapılandırın
kaynaklar.

B. Amazon Inspector'a abone olun. Entegrasyon için AWS DDoS Yanıt Ekibiyle (DRT) iletişime geçin
hizmete ilişkin kontrollerin hafifletilmesi.

C. AWS Shield Advanced'e abone olun. AWS DDoS Yanıt Ekibiyle (DRT) iletişime geçin
Azaltıcı kontrolleri hizmete entegre edin.

D. Uygulama için bir Amazon CloudFront dağıtımı oluşturun ve ALB'yi kaynak olarak ayarlayın.
Dağıtımda bir AWS WAF web ACL'sini etkinleştirin ve gelen trafiği engellemek için kurallar yapılandırın
bilinmeyen kaynaklar

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** AWS Shield Advanced'e abone olun. Azaltıcı kontrolleri hizmete entegre etmek için AWS DDoS Yanıt Ekibiyle (DRT) iletişime geçin.
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 702
Bir şirket, yakın zamanda yapılan bir okyanus araştırmasından elde edilen 200 TB veriyi AWS Snowball Edge Storage'a kopyaladı
Optimize edilmiş cihazlar. Şirketin yüksek performanslı bilgi işlem (HPC) kümesi vardır.
Petrol ve gaz yataklarını aramak için AWS'de barındırılıyor. Bir çözüm mimarı kümeyi sağlamalıdır
tutarlı bir milisaniyenin altında gecikme süresi ve Snowball'daki verilere yüksek verimli erişim ile
Kenar Depolama Optimize Edilmiş cihazlar. Şirket, cihazları AWS'ye geri gönderiyor.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Bir Amazon S3 klasörü oluşturun. Verileri S3 klasörüne aktarın. AWS Depolama Alanı Yapılandırma
S3 paketini kullanmak için ağ geçidi dosya ağ geçidi. Dosya ağ geçidine HPC kümesinden erişme
örnekler.

B. Bir Amazon S3 klasörü oluşturun. Verileri S3 klasörüne aktarın. Bir Amazon FSx'i şunun için yapılandırın:
Lustre dosya sistemi ve onu S3 kovasıyla entegre edin. FSx for Luster dosya sistemine şuradan erişin:
HPC kümesi örnekleri.

C. Bir Amazon S3 klasörü ve bir Amazon Elastic File System (Amazon EFS) dosya sistemi oluşturun.
Verileri S3 klasörüne aktarın. Verileri S3 klasöründen EFS dosya sistemine kopyalayın.
EFS dosya sistemine HPC kümesi örneklerinden erişin.

D. Lustre dosya sistemi için bir Amazon FSx oluşturun. Verileri doğrudan Lustre dosyası için FSx'e aktarın
sistem. HPC kümesi örneklerinden FSx for Lustre dosya sistemine erişin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bir Amazon S3 klasörü oluşturun. Verileri S3 klasörüne aktarın. Amazon FSx for Lustre dosya sistemini yapılandırın ve bunu S3 klasörüyle entegre edin. HPC kümesi örneklerinden FSx for Lustre dosya sistemine erişin.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.

---

---

Soru 703
Bir şirketin şirket içi veri merkezinde periyodik olarak yedeklenmesi gereken NFS sunucuları var
Amazon S3'e küçük miktarlarda veri.
Hangi çözüm bu gereksinimleri karşılıyor ve EN uygun maliyetli?

A. Verileri şirket içi sunuculardan Amazon S3'e kopyalamak için AWS Glue'yu kurun.

B. Şirket içi sunuculara bir AWS DataSync aracısı kurun ve verileri Amazon S3 ile senkronize edin.

C. Verileri şirket içinden Amazon'a senkronize etmek için AWS Transfer for SFTP'yi kullanarak bir SFTP senkronizasyonu ayarlayın
S3.

D. Şirket içi veri merkezi ile VPC arasında bir AWS Direct Connect bağlantısı kurun,
ve verileri Amazon S3'e kopyalayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Şirket içi sunuculara bir AWS DataSync aracısı kurun ve verileri Amazon S3 ile senkronize edin.
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Soru 704
Çevrimiçi bir video oyunu şirketi, oyun sunucuları için ultra düşük gecikme süresini korumalıdır. oyun
sunucular Amazon EC2 bulut sunucularında çalışır. Şirketin milyonları idare edebilecek bir çözüme ihtiyacı var
Saniye başına UDP internet trafiği isteği sayısı.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. İnternet için gerekli protokol ve bağlantı noktalarına sahip bir Application Load Balancer yapılandırın
trafik. EC2 örneklerini hedef olarak belirtin.

B. İnternet trafiği için bir Ağ Geçidi Yük Dengeleyicisi yapılandırın. EC2 örneklerini şu şekilde belirtin:
hedefler.

C. İnternet trafiği için gerekli protokol ve bağlantı noktalarına sahip bir Ağ Yük Dengeleyicisi yapılandırın.
EC2 örneklerini hedef olarak belirtin.

D. Farklı AWS Bölgelerindeki EC2 bulut sunucularında aynı oyun sunucuları grubunu başlatın. Rota
Her iki EC2 bulut sunucusu grubuna yönelik internet trafiği.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** İnternet trafiği için gerekli protokol ve bağlantı noktalarına sahip bir Ağ Yük Dengeleyicisi yapılandırın. EC2 örneklerini hedef olarak belirtin.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.
> - **Network Load Balancer (NLB - Katman 4 Yük Dengeleyici):** Milisaniye altı ultra düşük gecikmeyle saniyede milyonlarca isteği işleyen Katman 4 yük dengeleyicidir; statik/Elastic IP ve yüksek performans gerektiren TCP/UDP yükleri için kullanılır.

---

---

Soru 705
Bir şirket, VPC'de üç katmanlı bir uygulama çalıştırıyor. Veritabanı katmanı aşağıdakiler için bir Amazon RDS kullanır:
MySQL veritabanı örneği.
Şirket, MySQL veritabanı bulut sunucusu için RDS'yi Amazon Aurora'ya taşımayı planlıyor
PostgreSQL Veritabanı kümesi. Şirketin, veri değişikliklerini kopyalayan bir çözüme ihtiyacı var
yeni veritabanına geçiş sırasında meydana gelir.
Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

A. AWS Database Migration Service (AWS DMS) Şema Dönüşümünü kullanarak
veritabanı nesneleri.

B. Aurora oluşturmak için AWS Database Migration Service (AWS DMS) Şema Dönüşümünü kullanın
MySQL veritabanı örneği için RDS'deki PostgreSQL okuma kopyası.

C. MySQL Veritabanı bulut sunucusu için RDS'ye yönelik bir Aurora MySQL okuma kopyası yapılandırın.

D. Değişiklik verileri yakalama (CDC) ile bir AWS Database Migration Service (AWS DMS) görevi tanımlayın
Verileri taşımak için.

E. Aurora PostgreSQL okuma replikasını bağımsız bir Aurora PostgreSQL veritabanı kümesine yükseltin
çoğaltma gecikmesi sıfır olduğunda.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, D`
> - **Önerilen Çözüm:** Veritabanı nesnelerini dönüştürmek için AWS Database Migration Service (AWS DMS) Şema Dönüştürme'yi kullanın. Verileri taşımak için değişiklik verileri yakalama (CDC) ile bir AWS Database Migration Service (AWS DMS) görevi tanımlayın.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 706
Bir şirket, birden fazla sunucuya dağıtılan bir Amazon RDS örneğinde çalışan bir veritabanına ev sahipliği yapıyor
Erişilebilirlik Alanları. Şirket periyodik olarak yeni raporlama yapmak için veri tabanında bir komut dosyası çalıştırıyor.
Veritabanına eklenen girdiler. Veritabanına karşı olumsuz çalışan komut dosyası
kritik bir uygulamanın performansını etkiler. Şirketin uygulamayı geliştirmesi gerekiyor
Minimum maliyetle performans.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. En az etkin bağlantıya sahip örneği belirlemek için betiğe işlevsellik ekleyin.
Toplam yeni girişleri bildirmek için betiği bu örnekten okuyacak şekilde yapılandırın.

B. Veritabanının okuma kopyasını oluşturun. Komut dosyasını yalnızca okuma çoğaltmasını sorgulayacak şekilde yapılandırın
toplam yeni girişleri rapor edin.

C. Geliştirme ekibine, günün yeni girişlerini şu adresteki veritabanına manuel olarak aktarması talimatını verin:
her günün sonu.

D. Komut dosyasının çalıştırdığı ortak sorguları önbelleğe almak için Amazon ElastiCache'i kullanın.
veritabanı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Veritabanının okuma kopyasını oluşturun. Komut dosyasını, toplam yeni girişleri bildirmek için yalnızca okuma kopyasını sorgulayacak şekilde yapılandırın.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.

---

---

Soru 707
Bir şirket, uygulamasını internete sunmak için Application Load Balancer (ALB) kullanıyor.
Şirket, uygulama genelinde anormal trafik erişim kalıpları buluyor. Bir çözüm mimarı
Şirketin bunları anlamasına yardımcı olmak için altyapının görünürlüğünü iyileştirmesi gerekiyor
anormallikler daha iyi.
Bu gereksinimleri karşılayan operasyonel açıdan EN verimli çözüm nedir?

A. AWS CloudTrail günlükleri için Amazon Athena'da bir tablo oluşturun. İlgili için bir sorgu oluşturun
bilgi.

B. Amazon S3'e ALB erişim günlüğünü etkinleştirin. Amazon Athena'da bir tablo oluşturun ve sorgulayın
günlükler.

C. Amazon S3'e ALB erişim günlüğünü etkinleştirin. Her dosyayı bir metin düzenleyicide açın ve her satırda arama yapın
İlgili bilgiler için.

D. ALB'yi doğrudan sorgulamak için özel bir Amazon EC2 bulut sunucusunda Amazon EMR'yi kullanın.
trafik erişim günlüğü bilgileri.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Amazon S3'e ALB erişim günlüğünü etkinleştirin. Amazon Athena'da bir tablo oluşturun ve günlükleri sorgulayın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 708
Bir şirket, AWS ortamında NAT ağ geçitlerini kullanmak istiyor. Şirketin Amazon EC2'si
özel alt ağlardaki örneklerin NAT aracılığıyla genel internete bağlanabilmesi gerekir
ağ geçitleri.
Bu gereksinimleri hangi çözüm karşılayacak?

A. EC2 bulut sunucularıyla aynı özel alt ağlarda genel NAT ağ geçitleri oluşturun.

B. EC2 bulut sunucularıyla aynı özel alt ağlarda özel NAT ağ geçitleri oluşturun.

C. EC2 bulut sunucularıyla aynı VPC'lerdeki genel alt ağlarda genel NAT ağ geçitleri oluşturun.

D. EC2 bulut sunucularıyla aynı VPC'lerdeki genel alt ağlarda özel NAT ağ geçitleri oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** EC2 bulut sunucularıyla aynı VPC'lerdeki genel alt ağlarda genel NAT ağ geçitleri oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 709
Bir şirketin AWS Organizasyonlarında bir organizasyonu var. Şirket Amazon EC2'yi işletiyor
kök kuruluş birimindeki (OU) dört AWS hesabındaki bulut sunucuları. Üç tane var
üretim dışı hesaplar ve bir üretim hesabı. Şirket, kullanıcıların şunları yapmasını yasaklamak istiyor:
Üretim dışı hesaplarda belirli büyüklükteki EC2 bulut sunucularının başlatılması. Şirket
yasaklananları kullanan başlatma örneklerine erişimi reddetmek için bir hizmet kontrol politikası (SCP) oluşturdu
türleri.
SCP'yi dağıtmak için hangi çözümler bu gereksinimleri karşılayacaktır? (İki tane seçin.)

A. SCP'yi kuruluşun kök kuruluş birimine ekleyin.

B. SCP'yi üretim dışı Kuruluşların üç üye hesabına ekleyin.

C. SCP'yi Kuruluşun yönetim hesabına ekleyin.

D. Üretim hesabı için bir kuruluş birimi oluşturun. SCP'yi kuruluş birimine ekleyin. Üretimi taşıyın
üye hesabını yeni kuruluş birimine aktarın.

E. Gerekli hesaplar için bir kuruluş birimi oluşturun. SCP'yi kuruluş birimine ekleyin. Üretim dışını taşı
üye hesaplarını yeni kuruluş birimine aktarın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, E`
> - **Önerilen Çözüm:** SCP'yi üretim dışı Kuruluşların üç üye hesabına ekleyin. Gerekli hesaplar için bir kuruluş birimi oluşturun. SCP'yi kuruluş birimine ekleyin. Üretim dışı üye hesaplarını yeni kuruluş birimine taşıyın.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 710
Bir şirketin Amazon EC2 bulut sunucularında barındırılan web sitesi,
Amazon S3. Güvenlik endişeleri nedeniyle şirket özel ve güvenli bir bağlantıya ihtiyaç duyuyor
EC2 kaynakları ile Amazon S3 arasında.
Hangi çözüm bu gereksinimleri karşılıyor?

A. Bir VPC uç noktasından erişime izin vermek için S3 paket politikalarını ayarlayın.

B. S3 klasörüne okuma-yazma erişimi vermek için bir IAM politikası ayarlayın.

C. Özel alt ağ dışındaki kaynaklara erişmek için bir NAT ağ geçidi kurun.

D. S3 klasörüne erişmek için bir erişim anahtarı kimliği ve gizli bir erişim anahtarı ayarlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Bir VPC uç noktasından erişime izin vermek için S3 paket politikaları ayarlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 711
Bir e-ticaret şirketi, uygulamasını AWS'de çalıştırıyor. Uygulama bir Amazon Aurora kullanıyor
Temel veritabanı için Multi-AZ modunda PostgreSQL kümesi. Yakın zamanda yapılan bir tanıtım sırasında
Kampanya sırasında uygulamada yoğun okuma ve yazma yükü yaşandı. Deneyimli kullanıcılar
uygulamaya erişmeye çalıştıklarında zaman aşımı sorunları.
Bir çözüm mimarının uygulama mimarisini daha ölçeklenebilir ve yüksek düzeyde hale getirmesi gerekir.
mevcut.
Hangi çözüm bu gereksinimleri EN AZ kesinti süresiyle karşılayacak?

A. Aurora kümesini kaynak olarak kullanan bir Amazon EventBridge kuralı oluşturun. Bir AWS oluşturun
Aurora kümesinin durum değişikliği olaylarını günlüğe kaydetmeye yönelik Lambda işlevi. Lambda işlevini şu şekilde ekleyin:
EventBridge kuralı için bir hedef. Yük devredilecek ek okuyucu düğümleri ekleyin.

B. Aurora kümesini değiştirin ve sıfır kesinti süreli yeniden başlatma (ZDR) özelliğini etkinleştirin. Veritabanını Kullan
Küme durumunu izlemek için kümedeki Etkinlik Akışları.

C. Aurora kümesine ek okuyucu örnekleri ekleyin. Amazon RDS Proxy hedefi oluşturma
Aurora kümesi için grup.

D. Redis için bir Amazon ElastiCache önbelleği oluşturun. Aurora kümesindeki verileri çoğaltın
Redis'i, AWS Database Migration Service'i (AWS DMS) kullanarak yazma yaklaşımıyla kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Aurora kümesine ek okuyucu örnekleri ekleyin. Aurora kümesi için bir Amazon RDS Proxy hedef grubu oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 712
Bir şirket AWS'de bir web uygulaması tasarlıyor. Uygulama bir VPN bağlantısı kullanacak
Şirketin mevcut veri merkezleri ile şirketin VPC'leri arasında.
Şirket, DNS hizmeti olarak Amazon Route 53'ü kullanıyor. Uygulama özel DNS kullanmalıdır
Bir VPC'den şirket içi hizmetlerle iletişim kurmak için kayıtlar.
Hangi çözüm bu gereksinimleri EN güvenli şekilde karşılayacak?

A. Route 53 Resolver giden uç noktası oluşturun. Bir çözümleyici kuralı oluşturun. Çözümleyiciyi ilişkilendirin
VPC ile yönetin.

B. Route 53 Resolver gelen uç noktası oluşturun. Bir çözümleyici kuralı oluşturun. Çözümleyiciyi ilişkilendirin
VPC ile yönetin.

C. Route 53 özel barındırılan bölgesi oluşturun. Özel barındırılan bölgeyi VPC ile ilişkilendirin.

D. Route 53'te genel olarak barındırılan bir bölge oluşturun. Hizmete izin vermek için her hizmet için bir kayıt oluşturun
iletişim

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Route 53 Resolver giden uç noktası oluşturun. Bir çözümleyici kuralı oluşturun. Çözümleyici kuralını VPC ile ilişkilendirin.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru 713
Bir şirket, ABD-Doğu-1 Bölgesi'nde fotoğraf barındırma hizmeti yürütmektedir. Hizmet şunları sağlar:
Fotoğraf yüklemek ve görüntülemek için birden fazla ülkedeki kullanıcılar. Bazı fotoğraflar yoğun bir şekilde görüntüleniyor
aylar ve diğerleri bir haftadan daha kısa bir süre boyunca görüntüleniyor. Uygulama 20'ye kadar yüklemeye izin veriyor
Her fotoğraf için MB. Hizmet, hangi fotoğrafların görüntüleneceğini belirlemek için fotoğraf meta verilerini kullanır.
her kullanıcı.
Hangi çözüm uygun kullanıcı erişimini EN uygun maliyetle sağlar?

A. Fotoğrafları Amazon DynamoDB'de saklayın. Önbelleğe almak için DynamoDB Hızlandırıcıyı (DAX) açın
Sık görüntülenen öğeler.

B. Fotoğrafları Amazon S3 Intelligent-Tiering depolama sınıfında saklayın. Fotoğraf meta verilerini saklayın
ve DynamoDB'deki S3 konumu.

C. Fotoğrafları Amazon S3 Standart depolama sınıfında saklayın. Bir S3 Yaşam Döngüsü ilkesi oluşturun
30 günden eski fotoğrafları S3 Standart-Nadir Erişim (S3 Standart-IA) depolama alanına taşıyın
sınıf. Meta verileri takip etmek için nesne etiketlerini kullanın.

D. Fotoğrafları Amazon S3 Glacier depolama sınıfında saklayın. Taşımak için bir S3 Yaşam Döngüsü politikası ayarlayın
30 günden eski fotoğrafları S3 Glacier Deep Archive depolama sınıfına aktarın. Fotoğraf meta verilerini saklayın
ve Amazon OpenSearch Hizmetindeki S3 konumu.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Fotoğrafları Amazon S3 Intelligent-Tiering depolama sınıfında saklayın. Fotoğraf meta verilerini ve S3 konumunu DynamoDB'de saklayın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.

---

---

Soru 714
Bir şirket, Amazon EC2 bulut sunucularında yüksek düzeyde erişilebilir bir web uygulamasını bir
Uygulama Yük Dengeleyici. Şirket, Amazon CloudWatch ölçümlerini kullanıyor.
Web uygulamasının trafiği arttıkça bazı EC2 bulut sunucuları aşırı yükleniyor
birçok olağanüstü talep var. CloudWatch ölçümleri, isteklerin sayısının
işlenir ve bazı EC2 bulut sunucularından yanıt alma süresi daha yüksektir
diğer EC2 örnekleriyle karşılaştırıldığında. Şirket yeni taleplerin iletilmesini istemiyor
Zaten aşırı yüklenmiş olan EC2 bulut sunucuları.
Bu gereksinimleri hangi çözüm karşılayacak?

A.RequestCountPerTarget'ı temel alan yuvarlak robin yönlendirme algoritmasını kullanın ve
ActiveConnectionCount CloudWatch ölçümleri.

B.RequestCountPerTarget'a dayalı olarak en az bekleyen istekler algoritmasını kullanın ve
ActiveConnectionCount CloudWatch ölçümleri.

C.RequestCount ve TargetResponseTime'a dayalı olarak hepsini bir kez deneme yönlendirme algoritmasını kullanın
CloudWatch ölçümleri.

D.RequestCount'a dayalı en az bekleyen istekler algoritmasını kullanın ve
TargetResponseTime CloudWatch ölçümleri.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** requestCountPerTarget ve ActiveConnectionCount CloudWatch ölçümlerini temel alan en az bekleyen istek algoritmasını kullanın.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 715
Bir şirket, birden fazla iş yükünü çalıştırmak için Amazon EC2, AWS Fargate ve AWS Lambda'yı kullanıyor
şirketin AWS hesabı. Şirket, Bilgi İşlem Tasarruf Planlarından tam olarak yararlanmak istiyor.
Şirket, Bilgi İşlem Tasarruf Planlarının kapsamı düştüğünde bildirim almak istiyor.
Hangi çözüm bu gereksinimleri EN yüksek operasyonel verimlilikle karşılayacak?

A. AWS Bütçelerini kullanarak Tasarruf Planları için günlük bir bütçe oluşturun. Bütçeyi şununla yapılandırın:
Uygun e-posta mesajı alıcılarına bildirim göndermek için bir kapsam eşiği.

B. Tasarruf Planlarına göre kapsam raporu çalıştıran bir Lambda işlevi oluşturun. Amazon'u kullanın
Raporu uygun e-posta mesajına e-postayla göndermek için Basit E-posta Hizmeti (Amazon SES)
alıcılar.

C. Tasarruf Planları bütçesi için bir AWS Bütçe raporu oluşturun. Sıklığı günlük olarak ayarlayın.

D. Bir Tasarruf Planları uyarı aboneliği oluşturun. Tüm bildirim seçeneklerini etkinleştirin. Bir e-posta girin
bildirimlerin alınacağı adres.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** AWS Budgets'ı kullanarak Tasarruf Planları için günlük bir bütçe oluşturun. Uygun e-posta mesajı alıcılarına bildirim göndermek için bütçeyi bir kapsam eşiğiyle yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 716
Bir şirket, AWS'de gerçek zamanlı bir veri alımı çözümü çalıştırıyor. Çözüm en çok şunlardan oluşur:
Apache Kafka için Amazon Managed Streaming'in (Amazon MSK) son sürümü. Çözüm şu:
Üç Erişilebilirlik Alanındaki özel alt ağlarda bir VPC'ye dağıtılır.
Bir çözüm mimarının, veri alımı çözümünü halka açık olacak şekilde yeniden tasarlaması gerekir.
internet. Aktarılan verilerin de şifrelenmesi gerekir.
Hangi çözüm bu gereksinimleri EN yüksek operasyonel verimlilikle karşılayacak?

A. Mevcut VPC'de genel alt ağları yapılandırın. Genel alt ağlara bir MSK kümesi dağıtın.
Karşılıklı TLS kimlik doğrulamasını etkinleştirmek için MSK kümesi güvenlik ayarlarını güncelleyin.

B. Genel alt ağlara sahip yeni bir VPC oluşturun. Genel alt ağlara bir MSK kümesi dağıtın.
Karşılıklı TLS kimlik doğrulamasını etkinleştirmek için MSK kümesi güvenlik ayarlarını güncelleyin.

C. Özel alt ağları kullanan bir Application Load Balancer (ALB) dağıtın. ALB'yi yapılandırma
HTTPS protokolü için VPC CIDR bloğundan gelen trafiğe izin veren güvenlik grubu gelen kuralı.

D. Özel alt ağları kullanan bir Ağ Yük Dengeleyicisi (NLB) dağıtın. NLB dinleyicisini yapılandırma
İnternet üzerinden HTTPS iletişimi için.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Mevcut VPC'de genel alt ağları yapılandırın. Genel alt ağlara bir MSK kümesi dağıtın. Karşılıklı TLS kimlik doğrulamasını etkinleştirmek için MSK kümesi güvenlik ayarlarını güncelleyin.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.
> - **Network Load Balancer (NLB - Katman 4 Yük Dengeleyici):** Milisaniye altı ultra düşük gecikmeyle saniyede milyonlarca isteği işleyen Katman 4 yük dengeleyicidir; statik/Elastic IP ve yüksek performans gerektiren TCP/UDP yükleri için kullanılır.

---

---

Soru 717
Bir şirket şirket içi eski bir uygulamayı AWS'ye geçirmek istiyor. Uygulama alıyor
şirket içi kurumsal kaynak planlama (ERP) sisteminden müşteri sipariş dosyaları.
uygulama daha sonra dosyaları bir SFTP sunucusuna yükler. Uygulama zamanlanmış bir iş kullanıyor
Sipariş dosyalarını her saat başı kontrol eder.
Şirketin zaten şirket içi ağa bağlantısı olan bir AWS hesabı var.
AWS'deki yeni uygulamanın mevcut ERP sistemiyle entegrasyonu desteklemesi gerekiyor. Yeni
uygulama güvenli ve dayanıklı olmalı ve siparişleri işlemek için SFTP protokolünü kullanmalıdır.
ERP sistemine hemen.
Bu gereksinimleri hangi çözüm karşılayacak?

A. İki Erişilebilirlik Alanında AWS Transfer Ailesi SFTP internete yönelik bir sunucu oluşturun. Kullanım
Amazon S3 depolama. Sipariş dosyalarını işlemek için bir AWS Lambda işlevi oluşturun. S3 Etkinliğini Kullan
Lambda işlevine s3:ObjectCreated:* olaylarını gönderme bildirimleri.

B. Tek bir Erişilebilirlik Alanında internete yönelik bir AWS Transfer Ailesi SFTP sunucusu oluşturun. Kullanım
Amazon Elastic File System (Amazon EFS) depolama alanı. İşlenecek bir AWS Lambda işlevi oluşturun
dosyaları sipariş edin. Lambda işlevini çağırmak için Aileyi Aktarma tarafından yönetilen bir iş akışı kullanın.

C. İki Erişilebilirlik Alanında bir AWS Transfer Ailesi SFTP dahili sunucusu oluşturun. Amazon'u kullanın
Elastik Dosya Sistemi (Amazon EFS) depolama. Bir AWS Step Functions durum makinesi oluşturun.
sipariş dosyalarını işleyin. Durum makinesini çağırmak için Amazon EventBridge Scheduler'ı kullanın.
Sipariş dosyaları için Amazon EFS'yi düzenli olarak kontrol edin.

D. İki Erişilebilirlik Alanında bir AWS Transfer Ailesi SFTP dahili sunucusu oluşturun. Amazon S3'ü kullanın
depolama. Sipariş dosyalarını işlemek için bir AWS Lambda işlevi oluşturun. Yönetilen bir Aile Aktarımı kullanın
Lambda işlevini çağırmak için iş akışı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** İki Erişilebilirlik Alanında bir AWS Transfer Ailesi SFTP dahili sunucusu oluşturun. Amazon S3 depolama alanını kullanın. Sipariş dosyalarını işlemek için bir AWS Lambda işlevi oluşturun. Lambda işlevini çağırmak için Aileyi Aktarma tarafından yönetilen bir iş akışı kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 718
Bir şirketin uygulamaları, şirket içi verileri işlemek için Apache Hadoop ve Apache Spark'ı kullanıyor.
Mevcut altyapı ölçeklenebilir değildir ve yönetimi karmaşıktır.
Bir çözüm mimarı, operasyonel karmaşıklığı azaltan ölçeklenebilir bir çözüm tasarlamalıdır.
Çözüm, veri işlemeyi şirket içinde tutmalıdır.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Şirket içi Hadoop Dağıtılmış Dosya Sistemine (HDFS) erişmek için AWS Siteden Siteye VPN kullanın
veri ve uygulama. Verileri işlemek için bir Amazon EMR kümesi kullanın.

B. Şirket içi Hadoop Dağıtılmış Dosya Sistemine (HDFS) bağlanmak için AWS DataSync'i kullanın
küme. Verileri işlemek için bir Amazon EMR kümesi oluşturun.

C. Apache Hadoop uygulamasını ve Apache Spark uygulamasını Amazon EMR'ye taşıyın
AWS Outposts'taki kümeler. Verileri işlemek için EMR kümelerini kullanın.

D. Verileri bir Amazon S3 klasörüne taşımak için bir AWS Snowball cihazı kullanın. Bir Amazon oluşturun
Verileri işlemek için EMR kümesi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Apache Hadoop uygulamasını ve Apache Spark uygulamasını AWS Outposts'taki Amazon EMR kümelerine taşıyın. Verileri işlemek için EMR kümelerini kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Soru 719
Bir şirket büyük miktarda veriyi şirket içi depolama alanından AWS'ye taşıyor. Windows,
Aynı AWS Bölgesindeki Mac ve Linux tabanlı Amazon EC2 bulut sunucuları verilere şu şekilde erişecektir:
SMB ve NFS depolama protokollerini kullanma. Şirket, verilerin bir kısmına rutin olarak erişecektir.
Şirket kalan verilere nadiren erişecektir.
Şirketin verileri barındıracak bir çözüm tasarlaması gerekiyor.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. EFS Akıllı Katmanlamayı kullanan bir Amazon Elastic File System (Amazon EFS) birimi oluşturun.
Verileri EFS birimine taşımak için AWS DataSync'i kullanın.

B. ONTAP bulut sunucusu için bir Amazon FSx oluşturun. Kök ile ONTAP dosya sistemi için bir FSx oluşturun
Otomatik katmanlama ilkesini kullanan birim. Verileri ONTAP birimi için FSx'e taşıyın.

C. S3 Intelligent-Tiering'i kullanan bir Amazon S3 klasörü oluşturun. Verileri S3 klasörüne taşıyın
AWS Storage Gateway Amazon S3 File Gateway kullanarak.

D. OpenZFS dosya sistemi için bir Amazon FSx oluşturun. Verileri yeni birime taşıyın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** ONTAP bulut sunucusu için bir Amazon FSx oluşturun. Otomatik katmanlama ilkesini kullanan kök birime sahip ONTAP dosya sistemi için bir FSx oluşturun. Verileri ONTAP birimi için FSx'e taşıyın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.

---

---

Soru 720
Bir üretim şirketi rapor oluşturma uygulamasını AWS'de çalıştırıyor. Uygulama
her raporu yaklaşık 20 dakika içinde oluşturur. Uygulama, bir bilgisayar üzerinde çalışan bir monolit olarak inşa edilmiştir.
tek Amazon EC2 örneği. Uygulama, sıkı bir şekilde bağlı olduğu sürümlerde sık sık güncelleme yapılmasını gerektirir.
modüller. Şirket yeni özellikler ekledikçe uygulamanın bakımı karmaşık hale gelir.
Şirket bir yazılım modülünü her yamaladığında, uygulama kesinti yaşıyor.
Rapor oluşturma işlemi herhangi bir kesintiden sonra en baştan yeniden başlatılmalıdır. Şirket istiyor
Uygulamanın esnek, ölçeklenebilir ve kademeli olarak iyileştirilebilmesi için uygulamayı yeniden tasarlayın.
Şirket, uygulamanın aksama süresini en aza indirmek istiyor.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Uygulamayı AWS Lambda'da maksimum provizyonla tek bir işlev olarak çalıştırın
eşzamanlılık.

B. Uygulamayı Amazon EC2 Spot Bulut Sunucularında Spot Filo varsayılanıyla mikro hizmetler olarak çalıştırın
tahsis stratejisi.

C. Uygulamayı Amazon Elastic Container Service (Amazon ECS) üzerinde mikro hizmetler olarak çalıştırın.
hizmet otomatik ölçeklendirme.

D. Uygulamayı AWS Elastic Beanstalk'ta tek bir uygulama ortamı olarak çalıştırın.
hepsi bir arada dağıtım stratejisi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Uygulamayı Amazon Elastic Container Service'te (Amazon ECS) otomatik hizmet ölçeklendirmeyle mikro hizmetler olarak çalıştırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru 721
Bir şirket büyük ölçekli bir web uygulamasını sunucusuz mikro hizmetlere yeniden tasarlamak istiyor
Mimarlık. Uygulama Amazon EC2 bulut sunucularını kullanır ve Python'da yazılmıştır.
Şirket, mikro hizmet olarak test etmek için web uygulamasının bir bileşenini seçti.
bileşen her saniye yüzlerce isteği destekler. Şirket oluşturmak ve test etmek istiyor
Python'u destekleyen bir AWS çözümündeki mikro hizmet. Çözüm aynı zamanda ölçeklendirilmelidir
otomatik olarak gerçekleşir ve minimum düzeyde altyapı ve minimum düzeyde operasyonel destek gerektirir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. En yeni Amazon Linux'u çalıştıran EC2 bulut sunucularının otomatik ölçeklendirilmesine sahip bir Spot Filosu kullanın
işletim sistemi.

B. Yüksek kullanılabilirliğe sahip yapılandırılmış bir AWS Elastic Beanstalk web sunucusu ortamı kullanın.

C. Amazon Elastic Kubernetes Service'i (Amazon EKS) kullanın. Otomatik Ölçeklendirme gruplarını başlatın:
kendi kendini yöneten EC2 bulut sunucuları.

D. Özel geliştirilmiş kodu çalıştıran bir AWS Lambda işlevini kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Özel geliştirilmiş kodu çalıştıran bir AWS Lambda işlevini kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.

---

---

Soru 722
Bir şirketin şirket içi konumundan bir AWS'ye AWS Direct Connect bağlantısı var
hesap. AWS hesabının aynı AWS Bölgesinde 30 farklı VPC'si vardır. VPC'lerin kullandığı
özel sanal arayüzler (VIF'ler). Her VPC'nin diğer VPC'lerle çakışmayan bir CIDR bloğu vardır.
ağlar şirketin kontrolü altındadır.
Şirket, ağ mimarisini merkezi olarak yönetirken aynı zamanda her birine izin vermek istiyor
Diğer tüm VPC'ler ve şirket içi ağlarla iletişim kurmak için VPC.
Hangi çözüm bu gereksinimleri EN AZ miktarda operasyonel ek yük ile karşılayacak?

A. Bir toplu taşıma ağ geçidi oluşturun ve Direct Connect bağlantısını yeni bir toplu taşıma VIF'si ile ilişkilendirin.
Toplu taşıma ağ geçidinin rota yayılma özelliğini açın.

B. Bir Direct Connect ağ geçidi oluşturun. Yeni ağ geçidini kullanmak için özel VIF'leri yeniden oluşturun. Ortak
yeni sanal özel ağ geçitleri oluşturarak her VPC'yi.

C. Bir toplu taşıma VPC'si oluşturun Doğrudan Bağlantı bağlantısını toplu taşıma VPC'sine bağlayın Bir eşleme oluşturun
Bölgedeki diğer tüm VPC'ler arasındaki bağlantı. Rota tablolarını güncelleyin.

D. Şirket içinden her VPC'ye AWS Siteden Siteye VPN bağlantıları oluşturun. Her ikisinin de olduğundan emin olun
VPN tünelleri her bağlantı için UP'dir. Rota yayılma özelliğini açın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Bir toplu taşıma ağ geçidi oluşturun ve Direct Connect bağlantısını yeni bir toplu taşıma VIF'si ile ilişkilendirin. Toplu taşıma ağ geçidinin rota yayılma özelliğini açın.
>
> **Sınav Konu Özeti:**
> - **AWS Transit Gateway Merkezi Ağ Yönlendiricisi:** Binlerce VPC ve şirket içi ağı merkezi bir hub olarak birbirine bağlar; karmaşık tam-ağ (full-mesh) VPC peering bağlantılarını ortadan kaldırır ve geçişli yönlendirmeyi (transitive routing) destekler.
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru 723
Bir şirketin Amazon EC2 bulut sunucularında çalışan uygulamaları var. EC2 bulut sunucuları şunlara bağlanır:
İlgili ilkelere sahip bir IAM rolünü kullanarak Amazon RDS veritabanları. Şirket istiyor
çalışmayı kesintiye uğratmadan EC2 bulut sunucularına yama uygulamak için AWS Systems Manager'ı kullanmak
uygulamalar.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Yeni bir IAM rolü oluşturun. AmazonSSMManagedInstanceCore politikasını yeni IAM'ye ekleyin
rol. Yeni IAM rolünü EC2 örneklerine ve mevcut IAM rolüne ekleyin.

B. Bir IAM kullanıcısı oluşturun. AmazonSSMManagedInstanceCore politikasını IAM kullanıcısına ekleyin.
EC2 bulut sunucularını yönetmek için Systems Manager'ı IAM kullanıcısını kullanacak şekilde yapılandırın.

C. EC2'yi yönetmek için Sistem Yöneticisinde Varsayılan Ana Bilgisayar Yapılandırma Yönetimini etkinleştirin
örnekler.

D. Mevcut politikaları mevcut IAM rolünden kaldırın. Ekle
AmazonSSMManagedInstanceCore politikasını mevcut IAM rolüne aktarın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** EC2 bulut sunucularını yönetmek için Sistem Yöneticisi'nde Varsayılan Ana Bilgisayar Yapılandırma Yönetimini etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 724
Bir şirket, Amazon Elastic Kubernetes Service'i (Amazon
EKS) ve Kubernetes Yatay Kapsül Otomatik Ölçekleyici. İş yükü baştan sona tutarlı değil
gün. Bir çözüm mimarı, düğüm sayısının otomatik olarak ölçeklendirilmediğini fark eder
mevcut düğümler kümedeki maksimum kapasiteye ulaştığında, bu durum
performans sorunları.
Hangi çözüm bu sorunu EN AZ idari masrafla çözecektir?

A. Bellek kullanımını izleyerek düğümlerin ölçeğini genişletin.

B. Kümedeki düğüm sayısını yönetmek için Kubernetes Cluster Autoscaler'ı kullanın.

C. EKS kümesini otomatik olarak yeniden boyutlandırmak için bir AWS Lambda işlevini kullanın.

D. İş yükünü dağıtmak için bir Amazon EC2 Auto Scaling grubu kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Kümedeki düğüm sayısını yönetmek için Kubernetes Cluster Autoscaler'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 725
Bir şirket her ay Amazon S3 Standard depolama alanında yaklaşık 300 TB'lık depolama alanı tutuyor. S3
nesnelerin her biri tipik olarak yaklaşık 50 GB boyutundadır ve sıklıkla çok parçalı nesnelerle değiştirilir.
küresel uygulamalarıyla yüklenir. S3 nesnelerinin sayısı ve boyutu sabit kalır, ancak
Şirketin S3 depolama maliyetleri her ay artıyor.
Bu durumda bir çözüm mimarı maliyetleri nasıl azaltmalıdır?

A. Çok parçalı yüklemelerden Amazon S3 Transfer Acceleration'a geçiş yapın.

B. Tamamlanmamış çok parçalı yüklemeleri silen bir S3 Yaşam Döngüsü ilkesini etkinleştirin.

C. Nesnelerin çok hızlı arşivlenmesini önlemek için S3 envanterini yapılandırın.

D. Amazon S3'te depolanan nesnelerin sayısını azaltmak için Amazon CloudFront'u yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Tamamlanmamış çok parçalı yüklemeleri silen bir S3 Yaşam Döngüsü ilkesini etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Transfer Acceleration (Aktarım Hızlandırma):** Amazon CloudFront'un küresel olarak dağıtılmış Uç Konumlarını (Edge Locations) kullanarak yüklemeleri AWS'nin optimize edilmiş özel omurga ağı üzerinden yönlendirir ve coğrafi aktarım gecikmesini ciddi oranda azaltır.
> - **S3 Multipart Upload (Çok Parçalı Yükleme):** Büyük dosya yüklemelerini paralel parçalara ayırarak gerçekleştirir. 100 MB üzerindeki nesneler için önerilir, 5 GB üzerindeki nesneler için zorunludur. Ağ kesintilerinde yalnızca başarısız olan parçanın tekrar yüklenmesini sağlar.

---

---

Soru 726
Bir şirket, mobil cihazlar için çok oyunculu bir oyun başlattı. Oyun canlı konum gerektiriyor
Oyuncuların enlem ve boylam bazında takibi. Oyunun veri deposunun desteklemesi gerekir
hızlı güncellemeler ve konumların alınması.
Oyun, verileri depolamak için okuma replikalarına sahip bir Amazon RDS for PostgreSQL veritabanı örneğini kullanıyor.
konum verileri. Kullanımın yoğun olduğu dönemlerde veritabanı performansı sürdüremez
Bu, güncellemeleri okumak ve yazmak için gereklidir. Oyunun kullanıcı kitlesi hızla artıyor.
Bir çözüm mimarı veri katmanının performansını artırmak için ne yapmalıdır?

A. Mevcut veritabanı bulut sunucusunun anlık görüntüsünü alın. Anlık görüntüyü Multi-AZ etkinken geri yükleyin.

B. OpenSearch Kontrol Panelleri ile Amazon RDS'den Amazon OpenSearch Hizmetine geçiş yapın.

C. Amazon DynamoDB Accelerator'ı (DAX) mevcut veritabanı bulut sunucusunun önüne dağıtın. Değiştir
DAX'ı kullanmak için oyun.

D. Mevcut veritabanı bulut sunucusunun önüne bir Amazon ElastiCache for Redis kümesi dağıtın. Değiştir
Redis'i kullanmak için oyun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Mevcut veritabanı bulut sunucusunun önünde bir Amazon ElastiCache for Redis kümesi dağıtın. Oyunu Redis'i kullanacak şekilde değiştirin.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 727
Bir şirket, kritik verileri şirketin AWS hesabındaki Amazon DynamoDB tablolarında saklar. bir
BT yöneticisi yanlışlıkla bir DynamoDB tablosunu sildi. Silme önemli bir kayba neden oldu
Verilerin çalınması şirketin operasyonlarını aksattı. Şirket bu tür olayların önlenmesini istiyor
gelecekte bozulma.
Hangi çözüm bu gereksinimi EN AZ operasyonel ek yük ile karşılayacaktır?

A. AWS CloudTrail'de bir iz yapılandırın. Silme eylemleri için bir Amazon EventBridge kuralı oluşturun.
Silinen DynamoDB tablolarını otomatik olarak geri yüklemek için bir AWS Lambda işlevi oluşturun.

B. DynamoDB tabloları için bir yedekleme ve geri yükleme planı oluşturun. DynamoDB tablolarını kurtarın
manuel olarak.

C. DynamoDB tablolarında silme korumasını yapılandırın.

D. DynamoDB tablolarında belirli bir noktaya kurtarmayı etkinleştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** DynamoDB tablolarında silme korumasını yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 728
Bir şirketin, depolama kapasitesi dolmak üzere olan bir şirket içi veri merkezi vardır. şirket
bant genişliği maliyetlerini en aza indirirken depolama altyapısını AWS'ye taşımak istiyor.
Çözüm, hiçbir ek maliyet olmadan verilerin anında alınmasına olanak sağlamalıdır.
Bu gereksinimler nasıl karşılanabilir?

A. Amazon S3 Glacier Vault'u dağıtın ve hızlı alımı etkinleştirin. Temel hazırlığı yapılmış alımı etkinleştir
iş yüküne uygun kapasite.

B. Önbelleğe alınmış birimleri kullanarak AWS Storage Gateway'i dağıtın. Verileri depolamak için Storage Gateway'i kullanın
Amazon S3, sık erişilen veri alt kümelerinin kopyalarını yerel olarak tutar.

C. Verileri yerel olarak depolamak için depolanan birimleri kullanarak AWS Storage Gateway'i dağıtın. Depolamayı Kullan
Verilerin belirli bir noktaya anlık görüntülerini Amazon S3'e eşzamansız olarak yedeklemeye yönelik ağ geçidi.

D. Şirket içi veri merkezine bağlanmak için AWS Direct Connect'i dağıtın. AWS'yi yapılandırın
Verileri yerel olarak depolamak için Depolama Ağ Geçidi. Eşzamansız yedekleme için Storage Gateway'i kullanın
Verilerin anlık anlık görüntülerini Amazon S3'e aktarın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Önbelleğe alınmış birimleri kullanarak AWS Storage Gateway'i dağıtın. Sık erişilen veri alt kümelerinin kopyalarını yerel olarak saklarken verileri Amazon S3'te depolamak için Storage Gateway'i kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru 729
Bir şirket, birden fazla Erişilebilirlik Alanında bir VPC'de üç katmanlı bir web uygulaması çalıştırıyor.
Amazon EC2 bulut sunucuları, uygulama katmanı için bir Otomatik Ölçeklendirme grubunda çalışır.
Şirketin her kaynağın günlük performansını analiz edecek otomatik bir ölçeklendirme planı yapması gerekiyor.
ve haftalık geçmiş iş yükü eğilimleri. Yapılandırmanın kaynakları uygun şekilde ölçeklendirmesi gerekir
kullanımdaki hem tahminlere hem de canlı değişikliklere göre.
Bir çözüm mimarı bu gereksinimleri karşılamak için hangi ölçeklendirme stratejisini önermelidir?

A. EC2'deki ortalama CPU kullanımına dayalı adım ölçeklendirmeyle dinamik ölçeklendirmeyi uygulayın
örnekler.

B. Tahmin ve ölçeklendirme için tahmine dayalı ölçeklendirmeyi etkinleştirin. Hedef izlemeyle dinamik ölçeklendirmeyi yapılandırma

C. Web'in trafik modellerine dayalı olarak otomatik, zamanlanmış bir ölçeklendirme eylemi oluşturun
uygulama.

D. Basit bir ölçeklendirme politikası oluşturun. EC2 bulut sunucusu başlangıcına bağlı olarak bekleme süresini artırın
zaman.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Tahmin ve ölçeklendirme için tahmine dayalı ölçeklendirmeyi etkinleştirin. Hedef izlemeyle dinamik ölçeklendirmeyi yapılandırma
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru 730
Bir paket teslimat şirketinin Amazon EC2 bulut sunucularını kullanan bir uygulaması ve
Amazon Aurora MySQL Veritabanı kümesi. Uygulama popüler hale geldikçe EC2 örneği
kullanım sadece biraz artar. Veritabanı kümesi kullanımı çok daha hızlı artıyor.
Şirket, veritabanı kümesi kullanımını kısa bir süre için azaltan bir okuma kopyası ekliyor.
Ancak yük artmaya devam ediyor. DB kümesinin artmasına neden olan işlemler
kullanım, teslimat ayrıntılarıyla ilgili tüm tekrarlanan okuma ifadeleridir. Şirketin ihtiyacı var
Tekrarlanan okumaların veritabanı kümesi üzerindeki etkisini hafifletmek için.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Uygulama ile veritabanı arasında bir Amazon ElastiCache for Redis kümesi uygulayın
küme.

B. Veritabanı kümesine ek bir okuma kopyası ekleyin.

C. Aurora okuma replikaları için Aurora Otomatik Ölçeklendirmeyi yapılandırın.

D. Veritabanı kümesini birden fazla yazıcı örneğine sahip olacak şekilde değiştirin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Uygulama ile veritabanı kümesi arasında bir Amazon ElastiCache for Redis kümesi uygulayın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).

---

---

Soru 731
Bir şirketin depolama için Amazon DynamoDB tablosunu kullanan bir uygulaması var. bir çözüm
mimar, tabloya gönderilen birçok isteğin en son verileri döndürmediğini keşfeder.
Şirketin kullanıcıları veritabanı performansıyla ilgili başka herhangi bir sorun bildirmedi. Gecikme süresi var
kabul edilebilir bir aralık.
Çözüm mimarı hangi tasarım değişikliğini önermelidir?

A. Tabloya okuma kopyaları ekleyin.

B. Küresel ikincil indeks (GSI) kullanın.

C. Tablo için son derece tutarlı okumalar talep edin.

D. Sonunda tablo için tutarlı okumalar isteyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Tablo için son derece tutarlı okumalar talep edin.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 732
Bir şirket, uygulamasını Amazon RDS ile Amazon EC2 bulut sunucularına dağıttı
veritabanı. Şirket, veritabanı erişimini yapılandırmak için en az ayrıcalık ilkesini kullandı
kimlik bilgileri. Şirketin güvenlik ekibi uygulamayı ve veritabanını korumak istiyor
SQL enjeksiyonu ve diğer web tabanlı saldırılar.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Veritabanının ve uygulama sunucularının güvenliğini sağlamak için güvenlik gruplarını ve ağ ACL'lerini kullanın.

B. Uygulamayı korumak için AWS WAF'ı kullanın. Güvenliği yapılandırmak için RDS parametre gruplarını kullanın
ayarlar.

C. Uygulamayı ve veritabanını korumak için AWS Ağ Güvenlik Duvarı'nı kullanın.

D. Farklı işlevler için uygulama kodunda farklı veritabanı hesapları kullanın. Vermekten kaçının
veritabanı kullanıcılarına aşırı ayrıcalıklar.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Uygulamayı korumak için AWS WAF'ı kullanın. Güvenlik ayarlarını yapılandırmak için RDS parametre gruplarını kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS WAF Web Uygulama Güvenlik Duvarı:** CloudFront, ALB veya API Gateway üzerindeki web trafiğini Katman 7 düzeyinde denetleyerek SQL Injection, XSS, bot taramaları ve hız tabanlı DDoS saldırılarını engeller.

---

---

Soru 733
Bir e-ticaret şirketi, bir kuruluşun parçası olan AWS hesaplarında uygulamalar çalıştırır.
AWS Kuruluşları. Uygulamalar Amazon Aurora PostgreSQL veritabanlarında çalışır.
hesaplar. Şirketin kötü niyetli faaliyetleri engellemesi ve anormal arızaları tespit etmesi gerekiyor
ve veritabanlarına eksik oturum açma girişimleri.
Hangi çözüm bu gereksinimleri operasyonel açıdan EN verimli şekilde karşılayacak?

A. Başarısız oturum açma işlemini tanımlamak için kuruluşun kök dizinine hizmet kontrol ilkelerini (SCP'ler) ekleyin
denemeler.

B. Üye hesapları için Amazon GuardDuty'de Amazon RDS Koruması özelliğini etkinleştirin
organizasyon.

C. Aurora genel günlüklerini Amazon CloudWatch Logs'daki bir günlük grubunda yayınlayın. Günlüğü dışa aktar
verileri merkezi bir Amazon S3 klasörüne aktarır.

D. AWS CloudTrail'deki tüm Aurora PostgreSQL veritabanı olaylarını merkezi bir Amazon S3'te yayınlayın
kova.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Kuruluşun üye hesapları için Amazon GuardDuty'de Amazon RDS Koruması özelliğini etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 734
Bir şirketin kurumsal veri merkezinden VPC'sine AWS Direct Connect bağlantısı var
ABD-Doğu-1 Bölgesi. Şirket yakın zamanda birden fazla VPC'ye sahip bir şirketi satın aldı.
Şirket içi veri merkezi ile eu-west-2 Bölgesi arasında Direct Connect bağlantısı.
Şirketin ve kurumun VPC'lerine yönelik CIDR blokları çakışmıyor. şirket
iki Bölge ile veri merkezleri arasında bağlantı gerektirir. Şirketin bir çözüme ihtiyacı var
bu, operasyonel yükü azaltırken ölçeklenebilir.
Bir çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. us-east-1'deki VPC ile eu-west-2'deki VPC'ler arasında Bölgeler arası VPC eşlemesi kurun.

B. us-east-1'deki Direct Connect bağlantısından VPC'lere özel sanal arayüzler oluşturun.
ab-batı-2.

C. Amazon EC2 tarafından barındırılan tamamen örgülü bir VPN ağında VPN cihazları kurun. AWS'yi kullanın
Veri merkezleri ve her VPC arasında veri göndermek ve almak için VPN CloudHub.

D. Mevcut Direct Connect bağlantısını bir Direct Connect ağ geçidine bağlayın. Trafiği şuradan yönlendir:
Her Bölgedeki VPC'lerin sanal özel ağ geçitlerini Direct Connect ağ geçidine bağlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Mevcut Direct Connect bağlantısını bir Direct Connect ağ geçidine bağlayın. Trafiği, her Bölgedeki VPC'lerin sanal özel ağ geçitlerinden Direct Connect ağ geçidine yönlendirin.
>
> **Sınav Konu Özeti:**
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru 735
Bir şirket, puan güncellemelerini bir arka uç işlemciye aktaran bir mobil oyun geliştiriyor ve
daha sonra sonuçları bir skor tablosunda yayınlar. Bir çözüm mimarının aşağıdakileri gerçekleştirebilecek bir çözüm tasarlaması gerekir:
Büyük trafik artışlarıyla başa çıkın, mobil oyun güncellemelerini alınış sırasına göre işleyin ve
Yüksek düzeyde kullanılabilir bir veritabanında işlenmiş güncellemeler. Şirket aynı zamanda maliyetleri en aza indirmek istiyor.
Çözümü sürdürmek için gereken yönetim yükü.
Çözüm mimarı bu gereksinimleri karşılamak için ne yapmalıdır?

A. Skor güncellemelerini Amazon Kinesis Data Streams'e iletin. Kinesis Data'daki güncellemeleri işleyin
AWS Lambda ile akışlar. İşlenen güncellemeleri Amazon DynamoDB'de saklayın.

B. Puan güncellemelerini Amazon Kinesis Data Streams'e iletin. Güncellemeleri bir filo ile işleyin
Otomatik Ölçeklendirme için ayarlanmış Amazon EC2 bulut sunucuları. İşlenen güncellemeleri Amazon Redshift'te saklayın.

C. Puan güncellemelerini bir Amazon Simple Notification Service (Amazon SNS) konusuna aktarın. Abone ol
güncellemeleri işlemek için SNS konusuna bir AWS Lambda işlevi. İşlenen güncellemeleri şurada saklayın
Amazon EC2'de çalışan bir SQL veritabanı.

D. Puan güncellemelerini bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna aktarın. Bir filo kullanın
SQS kuyruğundaki güncellemeleri işlemek için Otomatik Ölçeklendirme özelliğine sahip Amazon EC2 bulut sunucuları. Sakla
Amazon RDS Multi-AZ veritabanı bulut sunucusunda işlenmiş güncellemeler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Skor güncellemelerini Amazon Kinesis Data Streams'e aktarın. Kinesis Veri Akışlarındaki güncellemeleri AWS Lambda ile işleyin. İşlenen güncellemeleri Amazon DynamoDB'de saklayın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 736
Bir şirketin us-west-2 Bölgesinde dağıtılan uygulamalara sahip birden fazla AWS hesabı vardır.
Uygulama günlükleri her hesaptaki Amazon S3 klasörlerinde depolanır. Şirket istiyor
Tek bir S3 klasörü kullanan merkezi bir günlük analizi çözümü oluşturun. Günlükler ayrılmamalı
us-west-2 ve şirket minimum operasyonel masrafa katlanmak istiyor.
Hangi çözüm bu gereksinimleri karşılıyor ve EN uygun maliyetli?

A. Nesneleri uygulamanın S3 klasörlerinden birinden kopyalayan bir S3 Yaşam Döngüsü ilkesi oluşturun.
merkezi S3 kovası.

B. Günlükleri S3 klasörlerinden başka bir S3 klasörüne kopyalamak için S3 Aynı Bölge Çoğaltma'yı kullanın.
abd-batı-2. Günlük analizi için bu S3 paketini kullanın.

C. Dosyanın tüm içeriğini kopyalamak için her gün PutObject API işlemini kullanan bir komut dosyası yazın.
kovaları us-west-2'deki başka bir S3 kovasına aktarın. Günlük analizi için bu S3 paketini kullanın.

D. Günlüklerin her tesliminde tetiklenen bu hesaplara AWS Lambda işlevlerini yazın
S3 klasörlerine (s3:ObjectCreated:* olayı). Günlükleri us-west-2'deki başka bir S3 klasörüne kopyalayın.
Günlük analizi için bu S3 paketini kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Günlükleri S3 klasörlerinden us-west-2'deki başka bir S3 klasörüne kopyalamak için S3 Aynı Bölge Çoğaltma'yı kullanın. Günlük analizi için bu S3 paketini kullanın.
>
> **Sınav Konu Özeti:**
> - **S3 Yaşam Döngüsü Yönetimi (Lifecycle Rules):** Nesneleri yaşlarına veya erişim sıklıklarına göre otomatik olarak daha ucuz depolama katmanlarına aktarır veya siler; operasyonel iş yükü olmadan maliyet optimizasyonu sağlar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 737
Bir şirketin, dünya çapındaki öğrencilere isteğe bağlı eğitim videoları sunan bir uygulaması var.
dünya. Uygulama aynı zamanda yetkili içerik geliştiricilerin video yüklemesine de olanak tanıyor. Veriler
ABD-Doğu-2 Bölgesindeki bir Amazon S3 klasöründe depolanır.
Şirket, ab-batı-2 Bölgesi'nde bir S3 klasörü ve AB-Batı-2 Bölgesi'nde bir S3 paketi oluşturdu.
ap-güneydoğu-1 Bölgesi. Şirket, verileri yeni S3 klasörlerine kopyalamak istiyor.
Şirketin, video yükleyen geliştiriciler ve yayın yapan öğrenciler için gecikmeyi en aza indirmesi gerekiyor
eu-west-2 ve ap-southeast-1 yakınındaki videolar.
EN AZ değişiklikle bu gereksinimleri hangi adım kombinasyonu karşılayacaktır?
uygulama? (İki tane seçin.)

A. us-east-2 S3 klasöründen eu-west-2 S3 klasörüne tek yönlü çoğaltmayı yapılandırın.
us-east-2 S3 klasöründen ap-southeast-1 S3 klasörüne tek yönlü çoğaltmayı yapılandırın.

B. us-east-2 S3 klasöründen eu-west-2 S3 klasörüne tek yönlü çoğaltmayı yapılandırın.
eu-west-2 S3 klasöründen ap-southeast-1 S3 klasörüne tek yönlü çoğaltmayı yapılandırın.

C. Üç paketteki S3 klasörleri arasında iki yönlü (çift yönlü) çoğaltmayı yapılandırın
Bölgeler.

D. Bir S3 Çok Bölgeli Erişim Noktası oluşturun. Uygulamayı Amazon Kaynağını kullanacak şekilde değiştirin
Video akışı için Çoklu Bölge Erişim Noktasının adı (ARN). Uygulamayı değiştirmeyin
video yüklemeleri için.

E. Bir S3 Çok Bölgeli Erişim Noktası oluşturun. Uygulamayı Amazon Kaynağını kullanacak şekilde değiştirin
Video akışı ve yüklemeler için Çoklu Bölge Erişim Noktasının adı (ARN).

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C, E`
> - **Önerilen Çözüm:** Üç Bölgenin tamamındaki S3 klasörleri arasında iki yönlü (çift yönlü) çoğaltmayı yapılandırın. Bir S3 Çok Bölgeli Erişim Noktası oluşturun. Uygulamayı, video akışı ve yüklemeler için Çoklu Bölge Erişim Noktasının Amazon Kaynak Adını (ARN) kullanacak şekilde değiştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 738
Bir şirketin yeni bir mobil uygulaması var. Kullanıcılar dünyanın her yerindeki konularla ilgili yerel haberleri görebilir
onlar seçiyorlar. Kullanıcılar ayrıca uygulamanın içinden fotoğraf ve video yayınlayabilir.
Kullanıcılar içeriğe genellikle içerik yayınlandıktan sonraki ilk dakikalarda erişir. Hızlı bir şekilde yeni içerik
eski içeriğin yerini alır ve ardından eski içerik kaybolur. Haberin yerel niteliği
kullanıcıların içeriğin %90'ını yüklendiği AWS Bölgesinde tükettiği anlamına gelir.
İçerik için EN DÜŞÜK gecikmeyi sağlayarak kullanıcı deneyimini optimize edecek çözüm hangisidir?
yüklemeler?

A. İçeriği Amazon S3'e yükleyin ve saklayın. Yüklemeler için Amazon CloudFront'u kullanın.

B. İçeriği Amazon S3'e yükleyin ve saklayın. Yüklemeler için S3 Transfer Acceleration'ı kullanın.

C. İçeriği kullanıcıya en yakın Bölgedeki Amazon EC2 bulut sunucularına yükleyin. Kopyala
verileri Amazon S3'e aktarın.

D. İçeriği kullanıcıya en yakın Bölgede Amazon S3'e yükleyin ve saklayın. Birden fazla kullan
Amazon CloudFront dağıtımları.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** İçeriği Amazon S3'e yükleyin ve saklayın. Yüklemeler için S3 Transfer Acceleration'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Transfer Acceleration (Aktarım Hızlandırma):** Amazon CloudFront'un küresel olarak dağıtılmış Uç Konumlarını (Edge Locations) kullanarak yüklemeleri AWS'nin optimize edilmiş özel omurga ağı üzerinden yönlendirir ve coğrafi aktarım gecikmesini ciddi oranda azaltır.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 739
Bir şirket, sunucusuz mimariyi kullanan yeni bir uygulama geliştiriyor. Mimarlık olacak
gelenleri yönetmek için bir Amazon API Gateway REST API ve AWS Lambda işlevlerinden oluşur
istekler.
Şirket, API Gateway'den alınan mesajları gönderebilecek bir hizmet eklemek istiyor
İşleme için birden fazla hedef Lambda işlevine REST API. Hizmet mesaj sunmalıdır
Hedef Lambda işlevlerine yalnızca gönderilen mesajları alma yeteneği veren filtreleme
işlevlere ihtiyaç duyar.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. API Gateway REST API'sinden gelen istekleri bir Amazon Simple Notification Service'e gönderin
(Amazon SNS) konusu. Amazon Simple Queue Service (Amazon SQS) kuyruklarına abone olun
SNS konusu. Farklı SQS kuyruklarını yoklamak için hedef Lambda işlevlerini yapılandırın.

B. API Gateway REST API'sinden gelen istekleri Amazon EventBridge'e gönderin. Yapılandır
Hedef Lambda işlevlerini çağırmak için EventBridge.

C. API Gateway REST API'sinden gelen istekleri Amazon Managed Streaming'e gönderin.
Apache Kafka (Amazon MSK). Amazon MSK'yı mesajları hedefe yayınlayacak şekilde yapılandırma
Lambda fonksiyonları.

D. API Gateway REST API'sinden gelen istekleri birden fazla Amazon Simple Queue Service'e gönderin
(Amazon SQS) kuyrukları. Farklı SQS kuyruklarını yoklamak için hedef Lambda işlevlerini yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** API Gateway REST API'sinden gelen istekleri bir Amazon Simple Notification Service (Amazon SNS) konusuna gönderin. Amazon Simple Queue Service (Amazon SQS) kuyruklarına SNS konusuna abone olun. Farklı SQS kuyruklarını yoklamak için hedef Lambda işlevlerini yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru 740
Bir şirket milyonlarca arşiv dosyasını Amazon S3'e taşıdı. Bir çözüm mimarının yapması gerekenler
müşteri tarafından sağlanan bir anahtar kullanarak tüm arşiv verilerini şifreleyecek bir çözüm uygulayın.
çözümün mevcut şifrelenmemiş nesneleri ve gelecekteki nesneleri şifrelemesi gerekir.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon S3 Envanter raporunu filtreleyerek şifrelenmemiş nesnelerin bir listesini oluşturun. Bir yapılandırma
Listedeki nesneleri sunucu tarafı şifrelemeyle şifrelemek için S3 Toplu İşlemler işi
müşteri tarafından sağlanan anahtar (SSE-C). Sunucu tarafı bir şifreleme kullanmak için S3 varsayılan şifreleme özelliğini yapılandırın
müşteri tarafından sağlanan bir anahtarla (SSE-C) şifreleme.

B. Şifrelenmemiş S3 klasörlerini belirlemek için S3 Depolama Lensi ölçümlerini kullanın. S3 varsayılanını yapılandırın
AWS KMS anahtarlarıyla (SSE-KMS) sunucu tarafı şifrelemeyi kullanmak için şifreleme özelliği.

C. Amazon S3 için AWS kullanım raporunu filtreleyerek şifrelenmemiş nesnelerin bir listesini oluşturun.
Listedeki nesneleri sunucu tarafı şifrelemeyle şifrelemek için bir AWS Batch işi yapılandırın.
AWS KMS anahtarları (SSE-KMS). Sunucu tarafı bir şifreleme kullanmak için S3 varsayılan şifreleme özelliğini yapılandırın
AWS KMS anahtarlarıyla (SSE-KMS) şifreleme.

D. Amazon S3 için AWS kullanım raporunu filtreleyerek şifrelenmemiş nesnelerin bir listesini oluşturun.
Sunucu tarafı şifrelemesini kullanmak için S3 varsayılan şifreleme özelliğini yapılandırın.
müşteri tarafından sağlanan anahtar (SSE-C).

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon S3 Envanter raporunu filtreleyerek şifrelenmemiş nesnelerin bir listesini oluşturun. Listedeki nesneleri müşteri tarafından sağlanan bir anahtarla (SSE-C) sunucu tarafı şifrelemeyle şifrelemek için bir S3 Toplu İşlemler işi yapılandırın. Müşteri tarafından sağlanan bir anahtarla (SSE-C) sunucu tarafı şifrelemeyi kullanmak için S3 varsayılan şifreleme özelliğini yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 741
Bir şirketin alan adı kayıtlarını barındıran DNS sağlayıcısında kesintiler yaşanıyor
AWS'de çalışan bir web sitesinde hizmet kesintisine neden olabilir. Şirketin bir yere taşınması gerekiyor
daha dayanıklı yönetilen DNS hizmeti ve hizmetin AWS'de çalışmasını istiyor.
Bir çözüm mimarı, DNS barındırma hizmetini hızla taşımak için ne yapmalıdır?

A. Etki alanı adı için bir Amazon Route 53 genel barındırılan bölgesi oluşturun. Bölge dosyasını içe aktar
önceki sağlayıcı tarafından barındırılan alan adı kayıtlarını içerir.

B. Etki alanı adı için bir Amazon Route 53 özel barındırılan bölgesi oluşturun. Bölge dosyasını içe aktar
önceki sağlayıcı tarafından barındırılan alan adı kayıtlarını içerir.

C. AWS'de Basit bir AD dizini oluşturun. DNS sağlayıcısı ile DNS sağlayıcısı arasında bölge aktarımını etkinleştirin
Etki alanı kayıtları için Microsoft Active Directory için AWS Directory Service.

D. VPC'de bir Amazon Route 53 Resolver gelen uç noktası oluşturun. IP adreslerini belirtin
sağlayıcının DNS'sinin DNS sorgularını ileteceği. Sağlayıcının DNS'sini DNS'yi iletecek şekilde yapılandırma
etki alanı sorgularını gelen uç noktada belirtilen IP adreslerine yönlendirir.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Etki alanı adı için bir Amazon Route 53 genel barındırılan bölge oluşturun. Önceki sağlayıcı tarafından barındırılan alan adı kayıtlarını içeren bölge dosyasını içe aktarın.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.

---

---

Soru 742
Bir şirket, AWS üzerinde Amazon RDS veritabanına bağlanan bir uygulama geliştiriyor.
şirket, uygulama yapılandırmasını yönetmek ve güvenli bir şekilde depolamak ve geri almak istiyor
veritabanı ve diğer hizmetler için kimlik bilgileri.
Hangi çözüm bu gereksinimleri EN AZ idari masrafla karşılayacak?

A. Uygulama yapılandırmasını depolamak ve yönetmek için AWS AppConfig'i kullanın. AWS Secrets'ı kullanın
Kimlik bilgilerini saklayan ve alan yönetici.

B. Uygulama yapılandırmasını depolamak ve yönetmek için AWS Lambda'yı kullanın. AWS Sistemlerini Kullanın
Kimlik bilgilerini depolamak ve almak için Yönetici Parametre Deposu.

C. Şifrelenmiş bir uygulama yapılandırma dosyası kullanın. Uygulama için dosyayı Amazon S3'te saklayın
konfigürasyon. Kimlik bilgilerini depolamak ve almak için başka bir S3 dosyası oluşturun.

D. Uygulama yapılandırmasını depolamak ve yönetmek için AWS AppConfig'i kullanın. Amazon RDS'yi kullanarak
kimlik bilgilerini saklayın ve alın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Uygulama yapılandırmasını depolamak ve yönetmek için AWS AppConfig'i kullanın. Kimlik bilgilerini depolamak ve almak için AWS Secrets Manager'ı kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Secrets Manager:** Veritabanı kimlik bilgilerini, API anahtarlarını ve hassas parolaları güvenle saklar; yerleşik Amazon RDS entegrasyonu ile parolaları kesintisiz ve otomatik olarak döndürür (rotation).

---

---

Soru 743
Güvenlik gereksinimlerini karşılamak için bir şirketin tüm uygulama verilerini aktarım sırasında şifrelemesi gerekir
Amazon RDS MySQL veritabanı bulut sunucusuyla iletişim kurarken. Yakın zamanda yapılan bir güvenlik denetimi
kullanımda olmayan şifrelemenin AWS Key Management Service (AWS KMS) kullanılarak etkinleştirildiğini ortaya çıkardı,
ancak aktarılan veriler etkinleştirilmedi.
Bir çözüm mimarı güvenlik gereksinimlerini karşılamak için ne yapmalıdır?

A. Veritabanında IAM veritabanı kimlik doğrulamasını etkinleştirin.

B. Kendinden imzalı sertifikalar sağlayın. RDS örneğine yapılan tüm bağlantılarda sertifikaları kullanın.

C. RDS örneğinin anlık görüntüsünü alın. Anlık görüntüyü şifrelemeyle yeni bir örneğe geri yükleyin
etkinleştirildi.

D. AWS tarafından sağlanan kök sertifikaları indirin. RDS'ye yapılan tüm bağlantılarda sertifikaları sağlayın
örnek.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** AWS tarafından sağlanan kök sertifikaları indirin. RDS örneğine yapılan tüm bağlantılarda sertifikaları sağlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 744
Bir şirket, Amazon EC2 bulut sunucularında bir sunucu arkasında çalışacak yeni bir web hizmeti tasarlıyor.
Elastik Yük Dengeleme (ELB) yük dengeleyici. Ancak web hizmeti istemcilerinin çoğu yalnızca
Güvenlik duvarlarında yetkilendirilen IP adreslerine ulaşın.
Bir çözüm mimarı müşterilerinin ihtiyaçlarını karşılamak için ne önermelidir?

A. İlişkili bir Elastik IP adresine sahip bir Ağ Yük Dengeleyici.

B. İlişkili bir Elastik IP adresine sahip bir Application Load Balancer.

C. Amazon Route 53 barındırılan bölgede bir Elastik IP adresine işaret eden bir A kaydı.

D. Yük dengeleyicinin önünde proxy olarak çalışan genel IP adresine sahip bir EC2 bulut sunucusu.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** İlişkili bir Elastik IP adresine sahip bir Ağ Yük Dengeleyici.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 745
Bir şirket yeni bir AWS hesabı oluşturdu. Hesabın temel hazırlığı yeni yapıldı ve hiçbir
Varsayılan ayarlarda değişiklikler yapıldı. Şirket güvenlik konusunda endişeli
AWS hesabının kök kullanıcısının.
Root kullanıcısının güvenliğini sağlamak için ne yapılmalı?

A. Günlük yönetim görevleri için IAM kullanıcıları oluşturun. Kök kullanıcıyı devre dışı bırakın.

B. Günlük yönetim görevleri için IAM kullanıcıları oluşturun. Kökte çok faktörlü kimlik doğrulamayı etkinleştirin
kullanıcı.

C. Kök kullanıcı için bir erişim anahtarı oluşturun. Günlük yönetim görevleri için erişim anahtarını kullanın
AWS Yönetim Konsolu yerine.

D. Kök kullanıcı kimlik bilgilerini en kıdemli çözüm mimarına sağlayın. Çözümlere sahip olun
Mimar, günlük yönetim görevleri için kök kullanıcıyı kullanır.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Günlük yönetim görevleri için IAM kullanıcıları oluşturun. Kök kullanıcıda çok faktörlü kimlik doğrulamayı etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 746
Bir şirket, akış verilerini neredeyse gerçek zamanlı olarak işleyen bir uygulamayı devreye alıyor.
şirket iş yükü için Amazon EC2 bulut sunucularını kullanmayı planlıyor. Ağ mimarisi mutlaka
düğümler arasında mümkün olan en düşük gecikmeyi sağlayacak şekilde yapılandırılabilir.
Hangi ağ çözümü kombinasyonu bu gereksinimleri karşılayacak? (İki tane seçin.)

A. Her EC2 bulut sunucusunda gelişmiş ağı etkinleştirin ve yapılandırın.

B. EC2 bulut sunucularını ayrı hesaplarda gruplayın.

C. EC2 örneklerini bir küme yerleştirme grubunda çalıştırın.

D. Her EC2 bulut sunucusuna birden çok elastik ağ arabirimi ekleyin.

E. Amazon Elastic Block Store (Amazon EBS) için optimize edilmiş bulut sunucusu türlerini kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C`
> - **Önerilen Çözüm:** Her EC2 bulut sunucusunda gelişmiş ağ iletişimini etkinleştirin ve yapılandırın. EC2 örneklerini bir küme yerleştirme grubunda çalıştırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Yerleşim Grupları (Placement Groups):** Cluster grupları, düşük gecikmeli 10 Gbps ağ iletişimi için sunucuları tek bir AZ içindeki donanımlara yakın yerleştirir; Spread grupları ise yüksek erişilebilirlik için sunucuları kesinlikle farklı fiziksel kabin ve raflara dağıtır.

---

---

Soru 747
Bir finansal hizmetler şirketi iki veri merkezini kapatmak ve 100'den fazla veri merkezini taşımak istiyor
AWS'ye TB'lik veri. Veriler, milyonlarca küçük dosyanın saklandığı karmaşık bir dizin yapısına sahiptir.
alt klasörlerin derin hiyerarşilerinde. Verilerin çoğu yapılandırılmamış ve şirketin dosyası
depolama, birden fazla satıcının SMB tabanlı depolama türlerinden oluşur. Şirket bunu yapmıyor
Geçişten sonra verilere erişmek için uygulamalarını değiştirmek istiyor.
Bir çözüm mimarı bu gereksinimleri EN AZ operasyonel düzeyde karşılamak için ne yapmalıdır?
genel gider mi?

A. Verileri Amazon S3'e taşımak için AWS Direct Connect'i kullanın.

B. Verileri Amazon FSx for Lustre'a taşımak için AWS DataSync'i kullanın.

C. Verileri Amazon FSx for Windows File Server'a taşımak için AWS DataSync'i kullanın.

D. Şirket içi veri depolama alanını bir AWS Storage'a taşımak için AWS Direct Connect'i kullanın
Ağ geçidi birim ağ geçidi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Verileri Amazon FSx for Windows File Server'a taşımak için AWS DataSync'i kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru 748
Bir şirket, aşağıdakileri içeren AWS hesaplarını yönetmek için AWS Organizasyonlarındaki bir kuruluşu kullanıyor:
uygulamalar. Şirket, organizasyonda özel bir izleme üyesi hesabı oluşturur.
Şirket, hesaplardaki gözlemlenebilirlik verilerini sorgulamak ve görselleştirmek istiyor.
Amazon Bulut İzleme.
Bu gereksinimleri hangi çözüm karşılayacak?

A. İzleme hesabı için CloudWatch'un hesaplar arası gözlemlenebilirliğini etkinleştirin. AWS dağıtın
Paylaşmak için her AWS hesabındaki izleme hesabı tarafından sağlanan CloudFormation şablonu
izleme hesabındaki veriler.

B. İzlemede CloudWatch'a erişim sağlamak için hizmet kontrol politikalarını (SCP'ler) ayarlayın
Kuruluşun kök kuruluş birimi (OU) altındaki hesap.

C. İzleme hesabında yeni bir IAM kullanıcısı yapılandırın. Her AWS hesabında bir IAM yapılandırın
hesaptaki CloudWatch verilerini sorgulamak ve görselleştirmek için erişime sahip olma politikası. Yeniyi takın
Yeni IAM kullanıcısına yönelik IAM politikası.

D. İzleme hesabında yeni bir IAM kullanıcısı oluşturun. Her birinde hesaplar arası IAM politikaları oluşturun
AWS hesabı. IAM politikalarını yeni IAM kullanıcısına ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** İzleme hesabı için CloudWatch'un hesaplar arası gözlemlenebilirliğini etkinleştirin. Verileri izleme hesabıyla paylaşmak için her AWS hesabında izleme hesabı tarafından sağlanan bir AWS CloudFormation şablonunu dağıtın.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 749
Bir şirketin web sitesi, ürünleri halka satmak için kullanılır. Site Amazon EC2'de çalışıyor
Application Load Balancer'ın (ALB) arkasındaki Otomatik Ölçeklendirme grubundaki örnekler. Ayrıca bir tane var
Amazon CloudFront dağıtımı ve AWS WAF, SQL enjeksiyonuna karşı koruma sağlamak için kullanılıyor
saldırılar. ALB, CloudFront dağıtımının kaynağıdır. Güvenlik günlüklerinin yakın zamanda gözden geçirilmesi
web sitesine erişimin engellenmesi gereken harici bir kötü amaçlı IP ortaya çıkardı.
Bir çözüm mimarı uygulamayı korumak için ne yapmalıdır?

A. Kötü amaçlı IP'ye yönelik bir reddetme kuralı eklemek için CloudFront dağıtımındaki ağ ACL'sini değiştirin
adresi.

B. Kötü amaçlı IP'yi engellemek amacıyla bir IP eşleşme koşulu eklemek için AWS WAF yapılandırmasını değiştirin
adresi.

C. ALB'nin arkasındaki hedef gruplardaki EC2 bulut sunucuları için ağ ACL'sini değiştirerek
kötü amaçlı IP adresi.

D. Reddetmek için ALB'nin arkasındaki hedef gruplardaki EC2 bulut sunucularının güvenlik gruplarını değiştirin.
kötü amaçlı IP adresi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Kötü amaçlı IP adresini engellemek amacıyla bir IP eşleşme koşulu eklemek için AWS WAF yapılandırmasını değiştirin.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 750
Bir şirket, AWS Organizasyonlarında 10 AWS hesabı içeren bir kuruluş kurar. bir
çözüm mimarı binlerce hesaba erişim sağlayacak bir çözüm tasarlamalıdır
çalışanlar. Şirketin mevcut bir kimlik sağlayıcısı (IdP) var. Şirket bu aracı kullanmak istiyor
AWS'de kimlik doğrulama için mevcut IdP.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Gerekli AWS hesaplarındaki çalışanlar için IAM kullanıcıları oluşturun. IAM kullanıcılarını şuraya bağlayın:
mevcut IdP. IAM kullanıcıları için birleştirilmiş kimlik doğrulamayı yapılandırın.

B. AWS hesabının kök kullanıcılarını, kullanıcı e-posta adresleri ve parolalarıyla ayarlayın.
mevcut IdP'den senkronize edildi.

C. AWS IAM Identity Center'ı (AWS Tek Oturum Açma) yapılandırın. IAM Identity Center'ı şuraya bağlayın:
mevcut IdP. Mevcut IdP'den kullanıcıların ve grupların temel hazırlığını yapın.

D. AWS hesaplarına erişimi paylaşmak için AWS Resource Access Manager'ı (AWS RAM) kullanın.
mevcut IdP'deki kullanıcılar.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** AWS IAM Identity Center'ı (AWS Tek Oturum Açma) yapılandırın. IAM Identity Center'ı mevcut IdP'ye bağlayın. Mevcut IdP'den kullanıcıların ve grupların temel hazırlığını yapın.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 751
Bir çözüm mimarı bir AWS Kimlik ve Erişim Yönetimi (IAM) yetkilendirmesi tasarlıyor
bir şirketin AWS hesabına yönelik model. Şirket beş özel çalışanı görevlendirdi.
AWS hesabındaki AWS hizmetlerine ve kaynaklarına tam erişime sahip olmanız gerekir.
Çözüm mimarı, belirlenen beş çalışanın her biri için bir IAM kullanıcısı oluşturdu ve
bir IAM kullanıcı grubu oluşturdu.
Bu gereksinimleri hangi çözüm karşılayacak?

A. AdministratorAccess kaynak tabanlı politikasını IAM kullanıcı grubuna ekleyin. Her birini yerleştirin
IAM kullanıcı grubunda belirlenmiş beş çalışan IAM kullanıcısı.

B. SystemAdministrator kimlik tabanlı politikasını IAM kullanıcı grubuna ekleyin. Her birini yerleştirin
IAM kullanıcı grubunda belirlenmiş beş çalışan IAM kullanıcısı.

C. AdministratorAccess kimlik tabanlı politikasını IAM kullanıcı grubuna ekleyin. Her birini yerleştirin
IAM kullanıcı grubunda belirlenmiş beş çalışan IAM kullanıcısı.

D. SystemAdministrator kaynak tabanlı politikasını IAM kullanıcı grubuna ekleyin. Her birini yerleştirin
IAM kullanıcı grubunda belirlenmiş beş çalışan IAM kullanıcısı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** AdministratorAccess kimlik tabanlı politikasını IAM kullanıcı grubuna ekleyin. Belirlenen beş çalışan IAM kullanıcısının her birini IAM kullanıcı grubuna yerleştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 752
Bir şirketin sanal makinelere dayanan çok katmanlı bir ödeme işleme uygulaması var
(VM'ler). Katmanlar arasındaki iletişim, bir üçüncü taraf aracılığıyla eşzamansız olarak gerçekleşir.
Tam olarak bir kez teslimatı garanti eden ara yazılım çözümü.
Şirketin en az altyapı yönetimi gerektiren bir çözüme ihtiyacı var.
çözüm, uygulama mesajlaşması için tam olarak bir kez teslimatı garanti etmelidir.
Hangi eylem kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

A. Mimarideki bilgi işlem katmanları için AWS Lambda'yı kullanın.

B. Mimarideki işlem katmanları için Amazon EC2 bulut sunucularını kullanın.

C. Aralarında mesajlaşma bileşeni olarak Amazon Simple Notification Service'ı (Amazon SNS) kullanın.
hesaplama katmanları.

D. Mesajlaşma olarak Amazon Simple Queue Service (Amazon SQS) FIFO kuyruklarını kullanın
bilgi işlem katmanları arasındaki bileşen.

E. Amazon Elastic Kubernetes Service'i (Amazon EKS) temel alan kapsayıcıları kullanın.
mimarideki hesaplama katmanları.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, D`
> - **Önerilen Çözüm:** Mimarideki işlem katmanları için AWS Lambda'yı kullanın. İşlem katmanları arasında mesajlaşma bileşeni olarak Amazon Simple Queue Service (Amazon SQS) FIFO kuyruklarını kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.

---

---

Soru 753
Bir şirketin, şirket içi bir sunucunun hazırladığı rapor dosyalarını analiz eden, gecelik bir toplu işleme rutini vardır.
dosya sistemi günlük olarak SFTP aracılığıyla alır. Şirket çözümü AWS'ye taşımak istiyor
Bulut. Çözümün yüksek oranda kullanılabilir ve dayanıklı olması gerekir. Çözüm aynı zamanda en aza indirilmeli
operasyonel çaba.
Hangi çözüm bu gereksinimleri karşılıyor?

A. SFTP için AWS Transfer'i ve Amazon Elastic File System (Amazon EFS) dosya sistemini dağıtın
depolama için. Planlanmış ölçeklendirmeyle Otomatik Ölçeklendirme grubunda bir Amazon EC2 bulut sunucusu kullanma
Toplu işlemi çalıştırma ilkesi.

B. Linux ve SFTP hizmetini çalıştıran bir Amazon EC2 bulut sunucusunu dağıtın. Amazon Elastic kullanın
Depolama için Blok Mağazası (Amazon EBS) birimi. Minimum değere sahip bir Otomatik Ölçeklendirme grubu kullanın
örnek sayısı ve istenen örnek sayısı 1 olarak ayarlandı.

C. Linux ve SFTP hizmetini çalıştıran bir Amazon EC2 bulut sunucusunu dağıtın. Amazon Elastic kullanın
Depolama için Dosya Sistemi (Amazon EFS) dosya sistemi. Minimum değere sahip bir Otomatik Ölçeklendirme grubu kullanın
örnek sayısı ve istenen örnek sayısı 1 olarak ayarlandı.

D. SFTP için AWS Transfer'i ve depolama için bir Amazon S3 klasörünü dağıtın. Uygulamayı şu şekilde değiştirin:
Toplu iş dosyalarını Amazon S3'ten işlenmek üzere bir Amazon EC2 bulut sunucusuna çekin. EC2 kullanın
toplu işlemi çalıştırmak için zamanlanmış bir ölçeklendirme ilkesine sahip bir Otomatik Ölçeklendirme grubundaki örnek.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** SFTP için AWS Transfer'i ve depolama için bir Amazon Elastic File System (Amazon EFS) dosya sistemini dağıtın. Toplu işlemi çalıştırmak için Otomatik Ölçeklendirme grubunda planlanmış bir ölçeklendirme ilkesine sahip bir Amazon EC2 bulut sunucusu kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.

---

---

Soru 754
Bir şirketin dünyanın her yerinden, üzerinde konuşlandırılan HTTP tabanlı uygulamasına erişen kullanıcıları vardır.
Birden fazla AWS Bölgesindeki Amazon EC2 bulut sunucuları. Şirket kullanılabilirliği artırmak istiyor
ve uygulamanın performansı. Şirket ayrıca uygulamayı şunlara karşı da korumak istiyor:
Kullanılabilirliği etkileyebilecek, güvenliği tehlikeye atabilecek veya aşırı miktarda enerji tüketebilecek yaygın web istismarları
kaynaklar. Statik IP adresleri gereklidir.
Bir çözüm mimarı bunu başarmak için ne önermelidir?

A. EC2 bulut sunucularını her Bölgede Ağ Yük Dengeleyicilerinin (NLB'ler) arkasına yerleştirin. AWS'yi dağıtın
NLB'lerde WAF. AWS Global Accelerator'ı kullanarak bir hızlandırıcı oluşturun ve NLB'leri şu şekilde kaydedin:
uç noktalar.

B. EC2 bulut sunucularını her Bölgede Application Load Balancer'ların (ALB'ler) arkasına yerleştirin. AWS'yi dağıtın
ALB'lerde WAF. AWS Global Accelerator'ı kullanarak bir hızlandırıcı oluşturun ve ALB'leri şu şekilde kaydedin:
uç noktalar.

C. EC2 bulut sunucularını her Bölgede Ağ Yük Dengeleyicilerinin (NLB'ler) arkasına yerleştirin. AWS'yi dağıtın
NLB'lerde WAF. Amazon'u kullanan bir kaynağa sahip bir Amazon CloudFront dağıtımı oluşturun
İstekleri NLB'lere yönlendirmek için Route 53 gecikmeye dayalı yönlendirme.

D. EC2 bulut sunucularını her Bölgede Application Load Balancer'ların (ALB'ler) arkasına yerleştirin. Bir oluştur
Amazon Route 53 gecikmeye dayalı yönlendirmeyi kullanan bir kaynağa sahip Amazon CloudFront dağıtımı
istekleri ALB'lere yönlendirmek için. AWS WAF'ı CloudFront dağıtımına dağıtın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** EC2 bulut sunucularını her Bölgede Application Load Balancer'ların (ALB'ler) arkasına yerleştirin. AWS WAF'ı ALB'lere dağıtın. AWS Global Accelerator'ı kullanarak bir hızlandırıcı oluşturun ve ALB'leri uç noktalar olarak kaydedin.
>
> **Sınav Konu Özeti:**
> - **Amazon Route 53 Akıllı DNS Yönlendirme:** Gelişmiş yönlendirme politikaları sunar: Geolocation kullanıcının konumuna göre, Latency en düşük ağ gecikmesine sahip AWS bölgesine göre, Failover ise sağlık kontrolüyle aktif-pasif felaket kurtarma için yönlendirme yapar.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 755
Bir şirketin veri platformu Amazon Aurora MySQL veritabanını kullanıyor. Veritabanı var
farklı Erişilebilirlik Alanlarında birden çok okuma replikası ve birden çok veritabanı örneği. Kullanıcılar
yakın zamanda veritabanından çok fazla bağlantı olduğunu belirten hatalar bildirildi.
şirket, bir okuma kopyası birincil konuma yükseltildiğinde yük devretme süresini %20 azaltmak istiyor
yazar.
Bu gereksinimi hangi çözüm karşılayacak?

A. Multi-AZ küme dağıtımıyla Aurora'dan Amazon RDS'ye geçiş yapın.

B. Aurora veritabanının önünde Amazon RDS Proxy'sini kullanın.

C. Okuma bağlantıları için DynamoDB Accelerator (DAX) özellikli Amazon DynamoDB'ye geçin.

D. Yer değiştirme özelliğine sahip Amazon Redshift'e geçin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Aurora veritabanının önünde Amazon RDS Proxy'yi kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Okuma Replikaları (Read Replicas):** Yoğun okuma trafiği gerektiren raporlama ve analitik yüklerini ana veritabanından almak için asenkron olarak güncellenen salt okunur veritabanı kopyaları sunar (Multi-AZ veya farklı bölgelerde açılabilir).
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 756
Bir şirket metin dosyalarını Amazon S3'te saklıyor. Metin dosyaları müşteri sohbet mesajlarını, tarihi içerir.
ve zaman bilgileri ve müşterinin kişisel olarak tanımlanabilir bilgileri (PII).
Şirketin, harici bir hizmete konuşma örneklerini sağlayacak bir çözüme ihtiyacı var
kalite kontrol sağlayıcısı. Harici hizmet sağlayıcının numuneyi rastgele seçmesi gerekiyor
en son konuşmaya kadar olan konuşmalar. Şirket müşterinin kişisel bilgilerini paylaşmamalıdır
harici servis sağlayıcıyla. Müşteri sayısı arttıkça çözüm ölçeklendirilmelidir.
konuşmalar artıyor.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Bir Nesne Lambda Erişim Noktası oluşturun. PII'yi düzenleyen bir AWS Lambda işlevi oluşturun
fonksiyon dosyayı okuduğunda. Harici servis sağlayıcıya Nesneye erişme talimatını verin
Lambda Erişim Noktası.

B. Amazon EC2 bulut sunucusunda tüm yeni dosyaları düzenli olarak okuyan, düzenleyen bir toplu işlem oluşturun.
dosyalardan PII'yi alır ve düzeltilen dosyaları farklı bir S3 klasörüne yazar. Hariciye talimat ver
Servis sağlayıcının PII.B'yi içermeyen pakete erişmesini sağlayın. Üzerinde bir web uygulaması oluşturun
dosyaların bir listesini sunan, dosyalardan PII'yi çıkaran ve izin veren bir Amazon EC2 bulut sunucusu
PII'nin düzenlendiği dosyaların yeni sürümlerini indirmek için harici servis sağlayıcı.

D. Bir Amazon DynamoDB tablosu oluşturun. Yalnızca verileri okuyan bir AWS Lambda işlevi oluşturun
PII içermeyen dosyalarda. Kişisel bilgiler olmayan verileri depolamak için Lambda işlevini yapılandırın.
Amazon S3'e yeni bir dosya yazıldığında DynamoDB tablosu. Harici servis sağlayıcıya izin verin
DynamoDB tablosuna erişim.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Bir Nesne Lambda Erişim Noktası oluşturun. İşlev dosyayı okuduğunda PII'yi düzelten bir AWS Lambda işlevi oluşturun. Harici servis sağlayıcıya Object Lambda Erişim Noktasına erişmesi talimatını verin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 757
Bir şirket, Amazon EC2 örneğinde eski bir sistemi çalıştırıyor. Uygulama kodu
değiştirilemez ve sistem birden fazla örnekte çalışamaz. Bir çözüm mimarı
sistemin iyileşme süresini artırabilecek dayanıklı bir çözüm tasarlamalıdır.
Çözüm mimarı bu gereksinimleri karşılamak için ne önermelidir?

A. EC2 bulut sunucusu için sonlandırma korumasını etkinleştirin.

B. EC2 örneğini Multi-AZ dağıtımı için yapılandırın.

C. Arıza durumunda EC2 bulut sunucusunu kurtarmak için bir Amazon CloudWatch alarmı oluşturun.

D. EC2 örneğini iki Amazon Elastic Block Store (Amazon EBS) birimiyle başlatın.
depolama yedekliliği için RAID yapılandırmalarını kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Arıza durumunda EC2 bulut sunucusunu kurtarmak için bir Amazon CloudWatch alarmı oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon RDS Multi-AZ Yüksek Erişilebilirlik:** Veritabanını başka bir Kullanılabilirlik Alanındaki (AZ) bekleme örneğine (standby) senkron olarak kopyalar ve otomatik yük devretme (failover) sağlar. Önemli: Standby örneği aktif okuma isteklerine hizmet veremez.

---

---

Soru 758
Bir şirket, konteynerli uygulama iş yüklerini üç platformda bir VPC'ye dağıtmak istiyor
Erişilebilirlik Alanları. Şirketin Erişilebilirlik genelinde yüksek düzeyde kullanılabilirliğe sahip bir çözüme ihtiyacı var
Bölgeler. Çözüm, uygulamada minimum değişiklik gerektirmelidir.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Amazon Elastic Container Service'i (Amazon ECS) kullanın. Amazon ECS Service Auto'yu Yapılandırma
Hedef izleme ölçeklendirmesini kullanmak için ölçeklendirme. Minimum kapasiteyi 3'e ayarlayın. Görev yerleşimini ayarlayın
Erişilebilirlik Alanı özelliğiyle yayılacak strateji türü.

B. Amazon Elastic Kubernetes Service (Amazon EKS) kendi kendini yöneten düğümleri kullanın. Yapılandır
Hedef izleme ölçeklendirmesini kullanmak için Uygulama Otomatik Ölçeklendirme. Minimum kapasiteyi 3'e ayarlayın.

C. Amazon EC2 Rezerve Edilmiş Bulut Sunucularını kullanın. Yaygın bir yerleşimde üç EC2 bulut sunucusu başlatın
grup. Hedef izleme ölçeklendirmesini kullanmak için bir Otomatik Ölçeklendirme grubu yapılandırın. Minimum kapasiteyi ayarlayın
3'e.

D. AWS Lambda işlevini kullanın. Bir VPC'ye bağlanmak için Lambda işlevini yapılandırın. Yapılandır
Lambda'yı ölçeklenebilir bir hedef olarak kullanmak için Uygulama Otomatik Ölçeklendirme. Minimum kapasiteyi 3'e ayarlayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Amazon Elastic Container Service'i (Amazon ECS) kullanın. Hedef izleme ölçeklendirmesini kullanmak için Amazon ECS Service Auto Scaling'i yapılandırın. Minimum kapasiteyi 3'e ayarlayın. Görev yerleştirme stratejisi türünü Erişilebilirlik Alanı özelliğiyle yayılacak şekilde ayarlayın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **EC2 Yerleşim Grupları (Placement Groups):** Cluster grupları, düşük gecikmeli 10 Gbps ağ iletişimi için sunucuları tek bir AZ içindeki donanımlara yakın yerleştirir; Spread grupları ise yüksek erişilebilirlik için sunucuları kesinlikle farklı fiziksel kabin ve raflara dağıtır.

---

---

Soru 759
Bir medya şirketi filmleri Amazon S3'te saklıyor. Her film tek bir video dosyasında saklanır.
Boyutları 1 GB ile 10 GB arasında değişmektedir.
Şirket, bir filmin akış içeriğini 5 dakika içinde sağlayabilmelidir.
kullanıcı satın alma 20 yıldan daha eski olan filmlere olan talep,
20 yıldan eski filmler. Şirket, barındırma hizmeti maliyetlerini en aza indirmek istiyor
talebe dayanmaktadır.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Tüm medya içeriğini Amazon S3'te saklayın. Medya verilerini şuraya taşımak için S3 Yaşam Döngüsü ilkelerini kullanın:
Bir filme olan talep azaldığında Seyrek Erişim katmanı.

B. Daha yeni film video dosyalarını S3 Standard'ta saklayın. Eski film video dosyalarını S3'te saklayın
Standart-seyrek Erişim (S3 Standart-IA). Bir kullanıcı eski bir filmi sipariş ettiğinde,
standart alımı kullanarak video dosyasını

C. Daha yeni film video dosyalarını S3 Intelligent-Tiering'de depolayın. Eski film video dosyalarını S3'te saklayın
Buzul Esnek Erişimi. Bir kullanıcı daha eski bir film sipariş ettiğinde video dosyasını şunu kullanarak alın:
hızlandırılmış geri alma.

D. Daha yeni film video dosyalarını S3 Standard'ta saklayın. Eski film video dosyalarını S3 Glacier'da saklayın
Esnek Alma. Bir kullanıcı eski bir film sipariş ettiğinde video dosyasını toplu kullanarak alın
geri alma.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Daha yeni film video dosyalarını S3 Standard'ta saklayın. Eski film video dosyalarını S3 Standart-seyrek Erişim'de (S3 Standart-IA) depolayın. Kullanıcı eski bir filmi sipariş ettiğinde video dosyasını standart alımı kullanarak alın.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Glacier Depolama Sınıfları:** Glacier Instant Retrieval seyrek erişilen veriler için milisaniyelik erişim sunar; Flexible Retrieval 1-5 dakikalık hızlandırılmış veya 3-5 saatlik standart erişim sağlar; Deep Archive ise 12 saatlik geri getirme süresiyle en düşük maliyetli uzun vadeli arşivleme çözümüdür.

---

---

Soru 760
Bir çözüm mimarının, satıcının sağladığı bir uygulama için mimariyi tasarlaması gerekir.
Docker kapsayıcı görüntüsü. Kapsayıcının geçici dosyalar için 50 GB kullanılabilir depolama alanına ihtiyacı vardır.
Altyapı sunucusuz olmalıdır.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılıyor?

A. Amazon S3 ile Docker konteyner görüntüsünü kullanan bir AWS Lambda işlevi oluşturun
50 GB'den fazla alana sahip takılı birim.

B. Amazon Elastic ile Docker konteyner görüntüsünü kullanan bir AWS Lambda işlevi oluşturun
50 GB'tan fazla alana sahip Blok Mağazası (Amazon EBS) birimi.

C. AWS Fargate'i kullanan bir Amazon Elastic Container Service (Amazon ECS) kümesi oluşturun
başlatma türü. Amazon Elastic File System ile konteyner görüntüsü için bir görev tanımı oluşturun
(Amazon EFS) birimi. Bu görev tanımıyla bir hizmet oluşturun.

D. Amazon EC2'yi kullanan bir Amazon Elastic Container Service (Amazon ECS) kümesi oluşturun
50 GB'tan büyük bir Amazon Elastic Block Store (Amazon EBS) birimiyle başlatma türü
uzay. Kapsayıcı görüntüsü için bir görev tanımı oluşturun. Bu görev tanımıyla bir hizmet oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** AWS Fargate başlatma türünü kullanan bir Amazon Elastic Container Service (Amazon ECS) kümesi oluşturun. Amazon Elastic File System (Amazon EFS) birimiyle konteyner görüntüsü için bir görev tanımı oluşturun. Bu görev tanımıyla bir hizmet oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 761
Bir şirketin, kullanıcılarının kimliğini doğrulamak için şirket içi LDAP dizin hizmetini kullanması gerekir.
AWS Yönetim Konsolu. Dizin hizmeti Güvenlik Onayı ile uyumlu değil
İşaretleme Dili (SAML).
Hangi çözüm bu gereksinimleri karşılıyor?

A. AWS ile şirket içi arasında AWS IAM Identity Center'ı (AWS Tek Oturum Açma) etkinleştirin
LDAP.

B. AWS kimlik bilgilerini kullanan bir IAM politikası oluşturun ve politikayı LDAP'ye entegre edin.

C. LDAP kimlik bilgileri güncellendiğinde IAM kimlik bilgilerini döndüren bir işlem ayarlayın.

D. AWS Güvenliğini kullanan şirket içi özel bir kimlik komisyoncusu uygulaması veya süreci geliştirin
Kısa ömürlü kimlik bilgileri almak için Token Hizmeti (AWS STS).

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Kısa ömürlü kimlik bilgileri almak için AWS Security Token Service'i (AWS STS) kullanan şirket içi özel bir kimlik aracısı uygulaması veya süreci geliştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 762
Bir şirket, kendi hizmetini başlatmak için birden fazla Amazon Machine Image'ı (AMI) bir AWS hesabında saklıyor.
Amazon EC2 bulut sunucuları. AMI'ler, gerekli olan kritik verileri ve konfigürasyonları içerir.
şirketin operasyonları. Şirket, durumu iyileştirecek bir çözüm uygulamak istiyor
AMI'leri yanlışlıkla hızlı ve etkili bir şekilde sildi.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. AMI'lerin Amazon Elastic Block Store (Amazon EBS) anlık görüntülerini oluşturun. Anlık görüntüleri saklayın
ayrı bir AWS hesabında.

B. Tüm AMI'leri periyodik olarak başka bir AWS hesabına kopyalayın.

C. Geri Dönüşüm Kutusu'nda bir saklama kuralı oluşturun.

D. AMI'leri Bölgeler Arası Çoğaltma özelliğine sahip bir Amazon S3 klasörüne yükleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Geri Dönüşüm Kutusu'nda bir saklama kuralı oluşturun.
>
> **Sınav Konu Özeti:**
> - **S3 Bölgeler Arası Çoğaltma (CRR):** Farklı AWS Bölgelerindeki S3 klasörleri arasında nesnelerin asenkron olarak otomatik kopyalanmasını sağlar. Felaket kurtarma (DR) ve düşük gecikmeli küresel erişim için kullanılır (S3 Sürümleme zorunludur).

---

---

Soru 763
Bir şirketin şirket içinde depolanan ve başka bir yere taşınması gereken 150 TB arşivlenmiş görüntü verisi var
AWS Cloud önümüzdeki ay içinde. Şirketin mevcut ağ bağlantısı en fazla
Bu amaçla yalnızca geceleri 100 Mbps yükleme yapılır.
Bu verileri taşımak ve geçiş son tarihini karşılamak için EN uygun maliyetli mekanizma nedir?

A. Verileri AWS'ye göndermek için AWS Snowmobile'ı kullanın.

B. Verileri AWS'ye göndermek için birden fazla AWS Snowball cihazı sipariş edin.

C. Amazon S3 Transfer Acceleration'ı etkinleştirin ve verileri güvenli bir şekilde yükleyin.

D. Bir Amazon S3 VPC uç noktası oluşturun ve verileri yüklemek için bir VPN kurun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Verileri AWS'ye göndermek için birden fazla AWS Snowball cihazı sipariş edin.
>
> **Sınav Konu Özeti:**
> - **Amazon S3 Transfer Acceleration (Aktarım Hızlandırma):** Amazon CloudFront'un küresel olarak dağıtılmış Uç Konumlarını (Edge Locations) kullanarak yüklemeleri AWS'nin optimize edilmiş özel omurga ağı üzerinden yönlendirir ve coğrafi aktarım gecikmesini ciddi oranda azaltır.

---

---

Soru 764
Bir şirket, üç katmanlı uygulamasını şirket içinden AWS'ye taşımak istiyor. Web katmanı ve
uygulama katmanı üçüncü taraf sanal makinelerde (VM'ler) çalışıyor. Veritabanı katmanı
MySQL'de çalışıyor.
Şirketin, mümkün olan en az değişikliği yaparak uygulamayı taşıması gerekiyor.
Mimarlık. Şirketin ayrıca verileri belirli bir konuma geri yükleyebilecek bir veritabanı çözümüne de ihtiyacı var.
zamanda bir nokta.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Web katmanını ve uygulama katmanını özel alt ağlardaki Amazon EC2 bulut sunucularına taşıyın.
Veritabanı katmanını özel alt ağlarda Amazon RDS for MySQL'e taşıyın.

B. Web katmanını genel alt ağlardaki Amazon EC2 bulut sunucularına taşıyın. Uygulama katmanını şuraya taşıyın:
Özel alt ağlardaki EC2 bulut sunucuları. Veritabanı katmanını özel olarak Amazon Aurora MySQL'e geçirin
alt ağlar.

C. Web katmanını genel alt ağlardaki Amazon EC2 bulut sunucularına taşıyın. Uygulama katmanını şuraya taşıyın:
Özel alt ağlardaki EC2 bulut sunucuları. Veritabanı katmanını MySQL için Amazon RDS'ye gizli olarak geçirin
alt ağlar.

D. Web katmanını ve uygulama katmanını genel alt ağlardaki Amazon EC2 bulut sunucularına taşıyın.
Veritabanı katmanını genel alt ağlarda Amazon Aurora MySQL'e taşıyın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Web katmanını genel alt ağlardaki Amazon EC2 bulut sunucularına taşıyın. Uygulama katmanını özel alt ağlardaki EC2 bulut sunucularına taşıyın. Veritabanı katmanını özel alt ağlarda Amazon Aurora MySQL'e taşıyın.
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 765
Bir geliştirme ekibi, entegre bir ürün yaratmak için başka bir şirketle işbirliği yapıyor.
diğer şirketin bir Amazon Simple Queue Service (Amazon SQS) kuyruğuna erişmesi gerekiyor
geliştirme ekibinin hesabında bulunur. Diğer şirket kuyruğu yoklamak istiyor
Bunu yapmak için kendi hesap izinlerinden vazgeçmeden.
Bir çözüm mimarı SQS kuyruğuna erişimi nasıl sağlamalıdır?

A. Diğer şirketin SQS kuyruğuna erişmesini sağlayan bir örnek profili oluşturun.

B. Diğer şirketin SQS kuyruğuna erişmesini sağlayan bir IAM politikası oluşturun.

C. Diğer şirketin SQS kuyruğuna erişmesini sağlayan bir SQS erişim ilkesi oluşturun.

D. Aşağıdakileri sağlayan bir Amazon Simple Notification Service (Amazon SNS) erişim politikası oluşturun:
diğer şirketin SQS kuyruğuna erişimi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Diğer şirketin SQS kuyruğuna erişmesini sağlayan bir SQS erişim ilkesi oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon SQS Mesaj Kuyruklama Mimarisi:** Uygulama bileşenlerini birbirinden ayırır (decoupling). Standart kuyruklar en az bir kez teslim garantisiyle neredeyse sınırsız verim sunar; FIFO kuyrukları ise tam sıralama ve tekil işlem garantisi (toplu işlemle 3.000 mesaj/sn) sağlar.
> - **Amazon SNS Yayınlama/Abone (Pub/Sub) ve Fanout Deseni:** Yüksek verimli mesaj dağıtım servisidir. Fanout deseni, bir SNS konusuna gönderilen tek bir mesajın paralel ve asenkron işleme amacıyla abone olan birden fazla SQS kuyruğuna aynı anda dağıtılmasını sağlar.

---

---

Soru 766
Bir şirketin geliştiricileri, şirketin Amazon EC2'sine SSH erişimi sağlamanın güvenli bir yolunu istiyor
Amazon Linux'un en son sürümünü çalıştıran bulut sunucuları. Geliştiriciler uzaktan ve
kurumsal ofis.
Şirket, çözümün bir parçası olarak AWS hizmetlerini kullanmak istiyor. EC2 örnekleri şunlardır:
bir VPC özel alt ağında barındırılır ve dağıtılan bir NAT ağ geçidi aracılığıyla internete erişir
genel bir alt ağda.
Bir çözüm mimarı bu gereksinimleri EN uygun maliyetle karşılamak için ne yapmalıdır?

A. EC2 bulut sunucularıyla aynı alt ağda bir savunma ana bilgisayarı oluşturun. Ver
Geliştiricilere ec2:CreateVpnConnection IAM izni. EC2 Instance Connect'i şu şekilde yükleyin:
geliştiricilerin EC2 bulut sunucularına bağlanabilmesini sağlar.

B. Kurumsal ağ ile VPC arasında bir AWS Siteden Siteye VPN bağlantısı oluşturun.
Geliştiricilere, aşağıdaki durumlarda EC2 bulut sunucularına erişmek için Siteden Siteye VPN bağlantısını kullanma talimatını verin:
geliştiriciler kurumsal ağdadır. Geliştiricilere başka bir VPN kurmalarını söyleyin
Uzaktan çalıştıklarında erişim için bağlantı.

C. VP'nin genel alt ağında bir savunma ana bilgisayarı oluşturun Güvenlik gruplarını ve SSH'yi yapılandırın
yalnızca geliştiricilerin bağlantılarına ve SSH kimlik doğrulamasına izin vermek için kale ana bilgisayarının anahtarları
kurumsal ve uzak ağlar. Geliştiricilere kale ana bilgisayarı üzerinden şu şekilde bağlanmalarını söyleyin:
EC2 bulut sunucularına ulaşmak için SSH'yi kullanma.

D. AmazonSSMManagedInstanceCore IAM politikasını aşağıdakilerle ilişkili bir IAM rolüne ekleyin:
EC2 örnekleri. Geliştiricilere AWS Systems Manager Session Manager'ı kullanmaları talimatını verin.
EC2 örneklerine erişin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** AmazonSSMManagedInstanceCore IAM politikasını EC2 bulut sunucularıyla ilişkili bir IAM rolüne ekleyin. Geliştiricilere EC2 bulut sunucularına erişmek için AWS Systems Manager Session Manager'ı kullanmaları talimatını verin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 767
Bir ilaç şirketi yeni bir ilaç geliştiriyor. Şirketin sahip olduğu veri hacmi
son birkaç ayda katlanarak arttı. Şirketin araştırmacıları
düzenli olarak tüm veri kümesinin bir alt kümesinin minimum gecikmeyle anında kullanılabilir olmasını gerektirir.
Ancak veri setinin tamamına günlük olarak erişilmesine gerek yoktur. Şu anda tüm veriler
şirket içi depolama dizilerinde bulunuyor ve şirket devam eden sermayeyi azaltmak istiyor
masraflar.
Bir çözüm mimarı bu gereksinimleri karşılamak için hangi depolama çözümünü önermelidir?

A. Verileri Amazon S3 klasörüne taşımak için AWS DataSync'i planlanmış bir cron işi olarak çalıştırın.
devam eden bir temel.

B. Hedef olarak Amazon S3 klasörüyle bir AWS Storage Gateway dosya ağ geçidi dağıtın
depolama. Verileri Storage Gateway cihazına geçirin.

C. Amazon S3 ile önbelleğe alınmış birimlerle bir AWS Storage Gateway birim ağ geçidi dağıtın
hedef depolama alanı olarak kovayı seçin. Verileri Storage Gateway cihazına geçirin.

D. Şirket içi ortamdan AWS'ye bir AWS Siteden Siteye VPN bağlantısı yapılandırın.
Verileri bir Amazon Elastic File System (Amazon EFS) dosya sistemine taşıyın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Hedef depolama olarak bir Amazon S3 klasörü ile önbelleğe alınmış birimlere sahip bir AWS Storage Gateway birim ağ geçidi dağıtın. Verileri Storage Gateway cihazına geçirin.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.

---

---

Soru 768
Bir şirketin Amazon EC2 bulut sunucularında çalışan, iş açısından kritik bir uygulaması var.
uygulama, verileri bir Amazon DynamoDB tablosunda depolar. Şirketin bu durumu geri alabilmesi gerekiyor
son 24 saat içinde herhangi bir noktaya tablo.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılıyor?

A. Tablo için belirli bir noktaya kurtarmayı yapılandırın.

B. Tablo için AWS Backup'ı kullanın.

C. Tablonun her saat başı isteğe bağlı olarak yedeklenmesini sağlamak için AWS Lambda işlevini kullanın.

D. Son 24 saat içinde tablodaki tüm değişikliklerin günlüğünü yakalamak için tablodaki akışları açın.
Akışın bir kopyasını bir Amazon S3 klasöründe saklayın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Tablo için belirli bir noktaya kurtarmayı yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 769
Bir şirket, dosyaları bir Amazon S3 klasörüne yüklemek için kullanılan bir uygulamayı barındırıyor. Bir kez yüklendikten sonra,
dosyalar, 5 saniyeden kısa süren meta verileri çıkarmak için işlenir. Hacim ve
yüklemelerin sıklığı saatte birkaç dosyadan yüzlerce eşzamanlı yüklemeye kadar değişir.
Şirket, bir çözüm mimarından, uygun maliyetli bir mimari tasarlamasını istedi.
bu gereksinimleri karşılayın.
Çözüm mimarı ne tavsiye etmelidir?

A. S3 API çağrılarını günlüğe kaydetmek için AWS CloudTrail kayıtlarını yapılandırın. Dosyaları işlemek için AWS AppSync'i kullanın.

B. Bir AWS Lambda'yı çağırmak için S3 klasöründe nesne tarafından oluşturulan bir olay bildirimini yapılandırın
dosyaları işlemek için işlev.

C. Verileri işleyip Amazon S3'e göndermek için Amazon Kinesis Data Streams'i yapılandırın. Bir çağrı yapın
Dosyaları işlemek için AWS Lambda işlevi.

D. Dosyaları işlemek için bir Amazon Simple Notification Service (Amazon SNS) konusunu yapılandırın
Amazon S3'e yüklendi. Dosyaları işlemek için bir AWS Lambda işlevini çağırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Dosyaları işlemek üzere bir AWS Lambda işlevini çağırmak için S3 klasöründe nesne tarafından oluşturulan bir olay bildirimi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon SNS Yayınlama/Abone (Pub/Sub) ve Fanout Deseni:** Yüksek verimli mesaj dağıtım servisidir. Fanout deseni, bir SNS konusuna gönderilen tek bir mesajın paralel ve asenkron işleme amacıyla abone olan birden fazla SQS kuyruğuna aynı anda dağıtılmasını sağlar.

---

---

Soru 770
Bir şirketin uygulaması Amazon EC2 bulut sunucularına dağıtılıyor ve AWS Lambda'yı kullanıyor
Olay odaklı bir mimari için işlevler. Şirket üretim dışı geliştirmeyi kullanıyor
şirket yeni özellikleri dağıtmadan önce test etmek için farklı bir AWS hesabındaki ortamları
üretime yönelik özellikler.
Üretim örnekleri, farklı saat dilimlerindeki müşteriler nedeniyle sürekli kullanım gösteriyor.
Şirket, üretim dışı bulut sunucularını yalnızca hafta içi iş saatlerinde kullanıyor.
şirket hafta sonları üretim dışı bulut sunucularını kullanmaz. Şirket istiyor
Uygulamasını AWS'de çalıştırmak için maliyetleri optimize edin.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Üretim örnekleri için İsteğe Bağlı Bulut Sunucularını kullanın. Şunlar için Özel Ana Bilgisayarlar Kullanın:
üretim dışı örnekler yalnızca hafta sonları.

B. Üretim örnekleri ve üretim dışı örnekler için Rezerve Edilmiş Bulut Sunucularını kullanın. Kapat
Kullanılmadığı zaman üretim dışı örneklerin azaltılması.

C. Üretim örnekleri için İşlem Tasarruf Planlarını kullanın. Şunun için İsteğe Bağlı Bulut Sunucularını kullanın:
Üretim dışı örnekler. Kullanılmadığı zaman üretim dışı örnekleri kapatın.

D. Üretim örnekleri için Özel Ana Bilgisayarları kullanın. EC2 Bulut Sunucusu Tasarruf Planlarını kullanın:
Üretim dışı örnekler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Üretim örnekleri için İşlem Tasarruf Planlarını kullanın. Üretim dışı bulut sunucuları için İsteğe Bağlı Bulut Sunucularını kullanın. Kullanılmadığı zaman üretim dışı örnekleri kapatın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 771
Bir şirket, verileri şirket içi Oracle ilişkisel veritabanında saklar. Şirketin ihtiyacı var
Verileri analiz için Amazon Aurora PostgreSQL'de kullanılabilir hale getirin. Şirket bir AWS kullanıyor
Şirket içi ağını AWS'ye bağlamak için Siteden Siteye VPN bağlantısı.
Şirket, geçiş sırasında kaynak veritabanında meydana gelen değişiklikleri yakalamalıdır.
Aurora PostgreSQL'e.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Oracle şemasını Aurora'ya dönüştürmek için AWS Şema Dönüştürme Aracını (AWS SCT) kullanın
PostgreSQL şeması. AWS Database Migration Service (AWS DMS) tam yük geçişini kullanın
verileri taşıma görevi.

B. Verileri bir Amazon S3 klasörüne taşımak için AWS DataSync'i kullanın. S3 verilerini Aurora'ya aktarın
Aurora PostgreSQL aws_s3 uzantısını kullanarak PostgreSQL.

C. Oracle şemasını Aurora'ya dönüştürmek için AWS Şema Dönüştürme Aracını (AWS SCT) kullanın
PostgreSQL şeması. Mevcut veritabanını taşımak için AWS Database Migration Service'i (AWS DMS) kullanın
Verileri güncelleyin ve devam eden değişiklikleri çoğaltın.

D. Verileri bir Amazon S3 klasörüne taşımak için bir AWS Snowball cihazı kullanın. S3 verilerini içe aktar
Aurora PostgreSQL aws_s3 uzantısını kullanarak Aurora PostgreSQL'e.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Oracle şemasını Aurora PostgreSQL şemasına dönüştürmek için AWS Şema Dönüştürme Aracını (AWS SCT) kullanın. Mevcut verileri taşımak ve devam eden değişiklikleri çoğaltmak için AWS Database Migration Service'i (AWS DMS) kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.
> - **AWS DataSync Hızlandırılmış Veri Taşıma:** Şirket içi depolama sistemleri (NFS, SMB, nesne) ile AWS depolama hizmetleri (S3, EFS, FSx) arasında uçtan uca veri bütünlüğü doğrulaması yaparak yüksek hızlı ve otomatik veri aktarımı sağlar.

---

---

Soru 772
Bir şirket Docker konteynerleriyle bir uygulama geliştirdi ve uygulamayı şu adreste çalıştırması gerekiyor:
AWS Bulut. Şirket, uygulamayı barındırmak için yönetilen bir hizmet kullanmak istiyor.
Çözüm, bireysel konteynerdeki talebe göre uygun şekilde ölçeklendirilmeli ve genişletilmelidir.
hizmetler. Çözüm aynı zamanda ilave operasyonel yüke veya altyapıya yol açmamalıdır.
yönet.
Bu gereksinimleri hangi çözümler karşılayacak? (İki tane seçin.)

A. Amazon Elastic Container Service'i (Amazon ECS) AWS Fargate ile kullanın.

B. Amazon Elastic Kubernetes Service'i (Amazon EKS) AWS Fargate ile kullanın.

C. Bir Amazon API Gateway API'si sağlayın. Çalıştırmak için API'yi AWS Lambda'ya bağlayın.
konteynerler.

D. Amazon EC2 çalışan düğümleriyle Amazon Elastic Container Service'i (Amazon ECS) kullanın.

E. Amazon EC2 çalışan düğümleriyle Amazon Elastic Kubernetes Service'i (Amazon EKS) kullanın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, B`
> - **Önerilen Çözüm:** AWS Fargate ile Amazon Elastic Container Service'i (Amazon ECS) kullanın. Amazon Elastic Kubernetes Service'i (Amazon EKS) AWS Fargate ile kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Fargate Sunucusuz Konteyner Motoru:** EC2 sunucularını yönetme, yamalama veya ölçekleme zorunluluğunu ortadan kaldırarak konteynerleri (ECS/EKS) doğrudan sunucusuz olarak çalıştırmayı sağlar; yalnızca tüketilen vCPU ve bellek için ödeme yapılır.

---

---

Soru 773
Bir e-ticaret şirketi sezonluk bir çevrimiçi satış gerçekleştiriyor. Şirket web sitesini şu adreste barındırıyor:
Birden fazla Erişilebilirlik Alanını kapsayan Amazon EC2 bulut sunucuları. Şirket, web sitesinin
İndirim sırasında ani trafik artışlarını yönetin.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Yoğun trafik yükünü kaldırabilecek kadar büyük bir Otomatik Ölçeklendirme grubu oluşturun. Yarısını durdur
Amazon EC2 bulut sunucuları. Durdurulan örnekleri ölçeklendirmek için kullanmak üzere Otomatik Ölçeklendirme grubunu yapılandırma
trafik arttığında dışarı çıkın.

B. Web sitesi için bir Otomatik Ölçeklendirme grubu oluşturun. Otomatik Ölçeklendirme grubunun minimum boyutunu ayarlayın
böylece ölçeği genişletmeye gerek kalmadan yüksek trafik hacimlerini işleyebilir.

C. Dinamik içeriği bir Otomatik ile önbelleğe almak için Amazon CloudFront ve Amazon ElastiCache'i kullanın.
Ölçeklendirme grubu başlangıç noktası olarak ayarlandı. Otomatik Ölçeklendirme grubunu gerekli örneklerle yapılandırın
CloudFront ve ElastiCache'i doldurun. Önbellek tamamen doldurulduktan sonra ölçeklendirin.

D. Trafik arttıkça ölçeği genişletmek için bir Otomatik Ölçeklendirme grubu yapılandırın. Bir lansman şablonu oluşturun
önceden yapılandırılmış bir Amazon Machine Image'dan (AMI) yeni bulut sunucularını başlatın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Trafik arttıkça ölçeği genişletmek için bir Otomatik Ölçeklendirme grubu yapılandırın. Önceden yapılandırılmış bir Amazon Machine Image'dan (AMI) yeni bulut sunucularını başlatmak için bir başlatma şablonu oluşturun.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Amazon ElastiCache Bellek İçi Önbellekleme:** ElastiCache Redis veri kalıcılığı, kümeleme ve çoklu AZ yük devretme ile yüksek performanslı bellek içi önbellek sağlar; Memcached ise çok iş parçacıklı basit nesne önbelleği sunar.

---

---

Soru 774
Bir çözüm mimarı, bir şirketin uyumluluk politikası için otomatikleştirilmiş bir çözüm sağlamalıdır.
güvenlik gruplarının 0.0.0.0/0'dan itibaren SSH'ye izin veren bir kural içeremeyeceğini belirtir. Şirketin ihtiyacı var
Politikada herhangi bir ihlal olması durumunda bilgilendirilmek. En kısa sürede çözüme ihtiyaç var.
Çözüm mimarı bu gereksinimleri EN AZ operasyonel çözümle karşılamak için ne yapmalıdır?
genel gider mi?

A. SSH'nin 0.0.0.0/0'a açık olup olmadığına ilişkin güvenlik gruplarını izleyen bir AWS Lambda komut dosyası yazın
her bulduğunda bir bildirime yanıt verir ve bir bildirim oluşturur.

B. Kısıtlı ssh AWS Config yönetilen kuralını etkinleştirin ve bir Amazon Simple oluşturun
Uyumlu olmayan bir kural oluşturulduğunda Bildirim Hizmeti (Amazon SNS) bildirimi.

C. Güvenlik gruplarını ve ağ ACL'lerini küresel olarak açma izinlerine sahip bir IAM rolü oluşturun.
Bildirim oluşturmak için Amazon Simple Notification Service (Amazon SNS) konusu oluşturun
rol bir kullanıcı tarafından üstlenildiğinde.

D. Yönetici olmayan kullanıcıların oluşturmasını veya oluşturmasını engelleyen bir hizmet kontrol ilkesi (SCP) yapılandırın.
güvenlik gruplarını düzenleme. Bir kullanıcı bir kural istediğinde biletleme sisteminde bir bildirim oluşturun
yönetici izinlerine ihtiyacı var.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Kısıtlı ssh AWS Config yönetilen kuralını etkinleştirin ve uyumlu olmayan bir kural oluşturulduğunda bir Amazon Simple Notification Service (Amazon SNS) bildirimi oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 775
Amazon EC2 çalışan düğümleriyle Amazon Elastic Kubernetes Service'i (Amazon EKS) kullanın.
Bir şirket, bir AWS hesabına bir uygulama dağıttı. Uygulama aşağıdakilerden oluşur:
AWS Lambda ve Amazon Elastic Kubernetes Service (Amazon) üzerinde çalışan mikro hizmetler
EKS). Her mikro hizmeti ayrı bir ekip destekler. Şirketin birden fazla AWS hesabı var
ve her takıma mikro hizmetleri için kendi hesabını vermek istiyor.
Bir çözüm mimarının hizmetten hizmete hizmet sağlayacak bir çözüm tasarlaması gerekir
HTTPS üzerinden iletişim (bağlantı noktası 443). Çözüm aynı zamanda aşağıdakiler için bir hizmet kaydı sağlamalıdır:
hizmet keşfi.
Hangi çözüm bu gereksinimleri EN AZ idari masrafla karşılayacak?

A. Bir inceleme VPC'si oluşturun. İnceleme VPC'sine bir AWS Ağ Güvenlik Duvarı güvenlik duvarı dağıtın.
İnceleme VPC'sini yeni bir geçiş ağ geçidine ekleyin. VPC'den VPC'ye trafiği incelemeye yönlendirin
VPC. Yalnızca HTTPS iletişimine izin vermek için güvenlik duvarı kurallarını uygulayın.

B. Bir VPC Lattice hizmet ağı oluşturun. Mikro hizmetleri hizmet ağıyla ilişkilendirin.
Her hizmet için HTTPS dinleyicilerini tanımlayın. Mikro hizmet bilgi işlem kaynaklarını hedef olarak kaydedin.
Hizmetlerle iletişim kurması gereken VPC'leri belirleyin. Bu VPC'leri hizmetle ilişkilendirin
ağ.

C. Her biri için bir HTTPS dinleyicisi ve hedef grupları olan bir Ağ Yük Dengeleyicisi (NLB) oluşturun
mikro hizmet. Her mikro hizmet için bir AWS PrivateLink uç nokta hizmeti oluşturun. Bir oluştur
Bu mikro hizmeti kullanması gereken her VPC'deki arayüz VPC uç noktası.

D. Mikro hizmetler içeren VPC'ler arasında eşleme bağlantıları oluşturun. Şunun için bir önek listesi oluşturun:
bir istemciyle bağlantı gerektiren her hizmet. Trafiği yönlendirmek için rota tabloları oluşturun
uygun VPC'dir. Yalnızca HTTPS iletişimine izin vermek için güvenlik grupları oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bir VPC Lattice hizmet ağı oluşturun. Mikro hizmetleri hizmet ağıyla ilişkilendirin. Her hizmet için HTTPS dinleyicilerini tanımlayın. Mikro hizmet bilgi işlem kaynaklarını hedef olarak kaydedin. Hizmetlerle iletişim kurması gereken VPC'leri belirleyin. Bu VPC'leri hizmet ağıyla ilişkilendirin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS PrivateLink & Arayüz Uç Noktaları:** Alt ağlar içine özel IP'li Elastik Ağ Arayüzleri (ENI) yerleştirerek VPC iş yüklerinin AWS servislerine veya harici SaaS çözümlerine internete çıkmadan doğrudan özel ağ üzerinden erişmesini sağlar.

---

---

Soru 776
Bir şirketin meta verilerinin çoğunu Amazon RDS veritabanından okuyan bir mobil oyunu var
örnek. Oyunun popülaritesi arttıkça geliştiriciler oyunla ilgili yavaşlamalar fark etti.
oyunun meta veri yükleme süreleri. Performans ölçümleri, veritabanını basitçe ölçeklendirmenin
yardım değil. Bir çözüm mimarı, anlık görüntülere yönelik yetenekleri içeren tüm seçenekleri keşfetmelidir.
çoğaltma ve milisaniyenin altındaki yanıt süreleri.
Çözüm mimarı bu sorunları çözmek için ne önermelidir?

A. Veritabanını Aurora Replikalarıyla Amazon Aurora'ya taşıyın.

B. Veritabanını global tablolarla Amazon DynamoDB'ye taşıyın.

C. Veritabanının önüne bir Amazon ElastiCache for Redis katmanı ekleyin.

D. Veritabanının önüne bir Amazon ElastiCache for Memcached katmanı ekleyin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Veritabanının önüne bir Amazon ElastiCache for Redis katmanı ekleyin.
>
> **Sınav Konu Özeti:**
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 777
Bir şirket, çok hesaplı AWS kurulumu için AWS Organizasyonlarını kullanıyor. Güvenlik
Şirketin organizasyon biriminin (OU) onaylı Amazon Machine Images'ı paylaşması gerekiyor
(AMI'ler) geliştirme OU'su ile. AMI'ler AWS Key Management Service kullanılarak oluşturulur
(AWS KMS) şifrelenmiş anlık görüntüler.
Bu gereksinimleri hangi çözüm karşılayacak? (İki tane seçin.)

A. Geliştirme ekibinin kuruluş birimi Amazon Kaynak Adını (ARN) başlatma izni listesine ekleyin
AMI'ler için.

B. Kuruluşun kök Amazon Kaynak Adını (ARN) başlatma izni listesine ekleyin.
AMI'ler.

C. Anahtar politikasını, geliştirme ekibinin kuruluş biriminin AWS KMS anahtarlarını kullanmasına izin verecek şekilde güncelleyin.
anlık görüntülerin şifresini çözmek için kullanılır.

D. Geliştirme ekibinin Amazon Resource Name (ARN) hesabını başlatma iznine ekleyin
AMI'lerin listesi.

E. AWS KMS anahtarını yeniden oluşturun. Kuruluşların Amazon'u köklendirmesine izin vermek için önemli bir politika ekleyin
AWS KMS anahtarını kullanmak için Kaynak Adı (ARN).

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A, C`
> - **Önerilen Çözüm:** Geliştirme ekibinin kuruluş birimi Amazon Kaynak Adını (ARN) AMI'lerin başlatma izinleri listesine ekleyin. Geliştirme ekibinin kuruluş biriminin, anlık görüntülerin şifresini çözmek için kullanılan AWS KMS anahtarlarını kullanmasına izin vermek için anahtar politikasını güncelleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 778
Bir veri analitiği şirketinin dünya çapında dağıtılmış 80 ofisi vardır. Her ofis 1 PB barındırır
veri ve 1 ile 2 Gbps arasında internet bant genişliğine sahiptir.
Şirketin büyük miktarda veriyi ofislerinden ofislerine tek seferlik taşıması gerekiyor.
Amazon S3. Şirketin taşıma işlemini 4 hafta içinde tamamlaması gerekiyor.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Her ofise yeni bir 10 Gbps AWS Direct Connect bağlantısı kurun. Verileri şuraya aktarın:
Amazon S3.

B. Verileri depolamak ve aktarmak için birden fazla AWS Snowball Edge depolama için optimize edilmiş cihaz kullanın.
Amazon S3.

C. Verileri depolamak ve Amazon S3'e aktarmak için bir AWS Snowmobile kullanın.

D. Verileri Amazon S3'e aktarmak için bir AWS Storage Gateway Volume Gateway kurun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Verileri depolamak ve Amazon S3'e aktarmak için birden fazla AWS Snowball Edge depolama için optimize edilmiş cihaz kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Storage Gateway:** Şirket içi (on-premises) sistemleri AWS bulut depolamasına bağlar. S3 File Gateway yerel NFS/SMB önbelleği sunar; Volume Gateway ise EBS anlık görüntüleriyle desteklenen iSCSI blok depolama sağlar.
> - **AWS Direct Connect (Özel Fiziksel Bağlantı):** Şirket içi veri merkezinden AWS'ye interneti atlayarak özel ve ayrılmış bir fiber-optik hat kurar; kararlı ağ gecikmesi, daha yüksek güvenlik ve daha düşük veri çıkış maliyeti sağlar.

---

---

Soru 779
Bir şirketin, aşağıdakileri içeren bir Amazon Elastic File System (Amazon EFS) dosya sistemi vardır:
referans veri kümesi. Şirketin Amazon EC2 bulut sunucularında okunması gereken uygulamaları var
veri kümesi. Ancak uygulamaların veri kümesini değiştirememesi gerekir. şirket
uygulamaların değiştirilmesini veya silinmesini önlemek için IAM erişim kontrolünü kullanmak istiyor
veri kümesi.
Bu gereksinimleri hangi çözüm karşılayacak?

A. EFS dosya sistemini EC2 bulut sunucularının içinden salt okunur modda bağlayın.

B. EFS dosya sistemi için elasticfilesystem:ClientWrite'ı reddeden bir kaynak politikası oluşturun
EC2 örneklerine eklenen IAM rollerine yönelik eylem.

C. EFS dosya sistemi için elasticfilesystem:ClientWrite'ı reddeden bir kimlik ilkesi oluşturun
EFS dosya sistemindeki eylem.

D. Her uygulama için bir EFS erişim noktası oluşturun. Taşınabilir İşletim Sistemi Arayüzünü Kullanın
(POSIX) dosya izinleri, kök dizindeki dosyalara salt okunur erişime izin verir.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** EFS dosya sistemi için, EC2 örneklerine eklenen IAM rollerine yönelik elasticfilesystem:ClientWrite eylemini reddeden bir kaynak politikası oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon EFS Paylaşımlı Dosya Sistemi:** Birden fazla Kullanılabilirlik Alanındaki (Multi-AZ) yüzlerce Linux EC2 sunucusunun aynı anda NFS protokolü üzerinden bağlayabildiği, sunucusuz ve otomatik ölçeklenen POSIX uyumlu dosya sistemidir.

---

---

Soru 780
Bir şirket, şirketin AWS hesabında iş yapması için harici bir tedarikçi kiraladı.
satıcı, sahibi olduğu bir AWS hesabında barındırılan otomatik bir araç kullanır.
satıcının şirketin AWS hesabına IAM erişimi yok. Şirketin hibe vermesi gerekiyor
satıcının şirketin AWS hesabına erişimi.
Hangi çözüm bu gereksinimleri EN güvenli şekilde karşılayacak?

A. Satıcının IAM rolüne erişim yetkisi vermek için şirket hesabında bir IAM rolü oluşturun.
Satıcının gerektirdiği izinler için uygun IAM politikalarını role ekleyin.

B. Şirket hesabında, parolaya uygun bir parolayla bir IAM kullanıcısı oluşturun
karmaşıklık gereksinimleri. İzinler için uygun IAM politikalarını kullanıcıya ekleyin.
satıcı gerektirir.

C. Şirketin hesabında bir IAM grubu oluşturun. Otomatik aracın IAM kullanıcısını şuradan ekleyin:
gruba satıcı hesabı. İzinler için uygun IAM politikalarını gruba ekleyin
Satıcının gerektirdiği.

D. Şirketin hesabında izin sınırına sahip bir IAM kullanıcısı oluşturun.
satıcının hesabı. Kullanıcıya, izinler için uygun IAM politikalarını ekleyin.
satıcı gerektirir.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Satıcının IAM rolüne erişim yetkisi vermek için şirket hesabında bir IAM rolü oluşturun. Satıcının gerektirdiği izinler için uygun IAM politikalarını role ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 781
Bir şirket deneysel iş yüklerini AWS Cloud'da çalıştırmak istiyor. Şirketin bir
bulut harcamaları için bütçe. Şirketin CFO'su bulut harcamalarından endişeli
Her departmanın sorumluluğu. CFO harcama yapıldığında bildirim almak istiyor
eşik bütçenin %60'ına ulaşır.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Sahipleri etiketlemek için AWS kaynaklarındaki maliyet tahsis etiketlerini kullanın. AWS'de kullanım bütçeleri oluşturun
Bütçeler. Harcama bütçenin %60'ını aştığında bildirim almak için bir uyarı eşiği ekleyin.

B. Kaynak sahiplerini belirlemek için AWS Cost Explorer tahminlerini kullanın. AWS Maliyet Anomalisini Kullanın
Harcama bütçenin %60'ını aştığında uyarı eşiği bildirimleri oluşturmaya yönelik algılama.

C. Sahipleri etiketlemek için AWS kaynaklarındaki maliyet tahsis etiketlerini kullanın. AWS'de AWS Support API'yi kullanın
Harcama bütçenin %60'ını aştığında uyarı eşiği bildirimleri oluşturan Güvenilir Danışman.

D. Kaynak sahiplerini belirlemek için AWS Cost Explorer tahminlerini kullanın. Kullanım bütçeleri oluşturun
AWS Bütçeleri. Harcama harcamanın %60'ını aştığında bildirim almak için bir uyarı eşiği ekleyin
bütçe.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Sahipleri etiketlemek için AWS kaynaklarındaki maliyet tahsis etiketlerini kullanın. AWS Bütçelerinde kullanım bütçeleri oluşturun. Harcama bütçenin %60'ını aştığında bildirim almak için bir uyarı eşiği ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 782
Bir şirket AWS'de dahili bir web uygulaması dağıtmak istiyor. Web uygulaması olmalı
yalnızca şirketin ofisinden erişilebilir. Şirketin güvenlik yamalarını indirmesi gerekiyor
internetten web uygulaması.
Şirket bir VPC oluşturdu ve AWS Siteden Siteye VPN bağlantısını yapılandırdı.
şirketin ofisi. Bir çözüm mimarı, web uygulaması için güvenli bir mimari tasarlamalıdır.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Web uygulamasını, genel bir ağ arkasındaki genel alt ağlarda bulunan Amazon EC2 bulut sunucularına dağıtın
Uygulama Yük Dengeleyici (ALB). VPC'ye bir internet ağ geçidi ekleyin. Gelen kaynağı ayarlayın
ALB'nin güvenlik grubunun 0.0.0.0/0'a ayarlanması.

B. Web uygulamasını dahili bir ağ arkasındaki özel alt ağlardaki Amazon EC2 bulut sunucularına dağıtın
Uygulama Yük Dengeleyici (ALB). NAT ağ geçitlerini genel alt ağlara dağıtın. İnternet bağlayın
VPC'ye ağ geçidi. ALB'nin güvenlik grubunun gelen kaynağını şirketin ofisine ayarlayın
ağ CIDR bloğu.

C. Web uygulamasını dahili bir ağ arkasındaki genel alt ağlardaki Amazon EC2 bulut sunucularına dağıtın
Uygulama Yük Dengeleyici (ALB). NAT ağ geçitlerini özel alt ağlara dağıtın. İnternet bağlayın
VPSet'e ağ geçidi ALB'nin güvenlik grubunun şirketin ofisine giden varış noktası
ağ CIDR bloğu.

D. Web uygulamasını, genel bir sunucunun arkasındaki özel alt ağlarda bulunan Amazon EC2 bulut sunucularına dağıtın
Uygulama Yük Dengeleyici (ALB). VPC'ye bir internet ağ geçidi ekleyin. Giden ayarı
ALB'nin güvenlik grubunun hedefi 0.0.0.0/0'dır.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Web uygulamasını, dahili bir Application Load Balancer'ın (ALB) arkasındaki özel alt ağlardaki Amazon EC2 bulut sunucularına dağıtın. NAT ağ geçitlerini genel alt ağlara dağıtın. VPC'ye bir internet ağ geçidi ekleyin. ALB'nin güvenlik grubunun gelen kaynağını şirketin ofis ağı CIDR bloğuna ayarlayın.
>
> **Sınav Konu Özeti:**
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 783
Bir şirket muhasebe kayıtlarını Amazon EC2 üzerinde çalışan özel bir uygulamada tutuyor
örnekler. Şirketin, geliştirme için verileri AWS tarafından yönetilen bir hizmete taşıması gerekiyor
ve uygulama verilerinin bakımı. Çözüm minimum düzeyde operasyonel destek gerektirmelidir
ve veri değişikliklerinin değişmez, kriptografik olarak doğrulanabilir günlüklerini sağlar.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Kayıtları uygulamadan bir Amazon Redshift kümesine kopyalayın.

B. Uygulamadaki kayıtları bir Amazon Neptune kümesine kopyalayın.

C. Uygulamadaki kayıtları bir Amazon Timestream veritabanına kopyalayın.

D. Kayıtları uygulamadan bir Amazon Quantum Ledger Database'e (Amazon
QLDB) defteri.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Kayıtları uygulamadan bir Amazon Quantum Ledger Database (Amazon QLDB) defterine kopyalayın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 784
Bir şirketin pazarlama verileri birden fazla kaynaktan bir Amazon S3 klasörüne yüklenir. bir
Bir dizi veri hazırlama işi, raporlama için verileri bir araya getirir. Veri hazırlama işlerinin gerektirdiği
düzenli aralıklarla paralel olarak koşmak. Birkaç işin daha sonra belirli bir sırayla çalıştırılması gerekir.
Şirket, iş hatası işleme, yeniden deneme mantığı ve
devlet yönetimi.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Veriler S3'e yüklenir yüklenmez verileri işlemek için bir AWS Lambda işlevini kullanın
kova. Düzenli olarak planlanmış aralıklarla diğer Lambda işlevlerini çağırın.

B. Verileri işlemek için Amazon Athena'yı kullanın. Çağırmak için Amazon EventBridge Planlayıcı'yı kullanın
Athena normal bir dahiliyede.

C. Verileri işlemek için AWS Glue DataBrew'u kullanın. AWS Step Functions durum makinesini kullanarak
DataBrew veri hazırlama işlerini çalıştırın.

D. Verileri işlemek için AWS Data Pipeline'ı kullanın. Verileri bir kez işleyecek şekilde Veri İşlem Hattını zamanlayın
gece yarısı.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Verileri işlemek için AWS Glue DataBrew'u kullanın. DataBrew veri hazırlama işlerini çalıştırmak için bir AWS Step Functions durum makinesini kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 785
Bir çözüm mimarı, AWS Lambda'da çalışan bir ödeme işleme uygulaması tasarlıyor
birden çok Erişilebilirlik Alanındaki özel alt ağlar. Uygulama birden fazla Lambda kullanıyor
her gün milyonlarca işlemi gerçekleştirir ve gerçekleştirir.
Mimari, uygulamanın mükerrer ödemeleri işlememesini sağlamalıdır.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Vadesi gelen tüm ödemeleri almak için Lambda'yı kullanın. Vadesi gelen ödemeleri bir Amazon S3 klasörüne yayınlayın.
İşlemek üzere başka bir Lambda işlevini çağırmak için S3 paketini bir olay bildirimiyle yapılandırın
vadesi gelen ödemeler.

B. Vadesi gelen tüm ödemeleri almak için Lambda'yı kullanın. Vadesi gelen ödemeleri Amazon Simple'da yayınlayın
Kuyruk Hizmeti (Amazon SQS) kuyruğu. SQS kuyruğunu yoklamak için başka bir Lambda işlevi yapılandırın
ve vadesi gelen ödemeleri işleme koymak.

C. Vadesi gelen tüm ödemeleri almak için Lambda'yı kullanın. Vadesi gelen ödemeleri Amazon Simple'da yayınlayın
Kuyruk Hizmeti (Amazon SQS) FIFO kuyruğu. FIFO'yu yoklamak için başka bir Lambda işlevi yapılandırın
sıraya girmek ve vadesi gelen ödemeleri işleme koymak.

D. Vadesi gelen tüm ödemeleri almak için Lambda'yı kullanın. Vadesi gelen ödemeleri bir Amazon DynamoDB'de saklayın
masa. İşlemek üzere başka bir Lambda işlevini çağırmak için DynamoDB tablosundaki akışları yapılandırın
vadesi gelen ödemeler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** Vadesi gelen tüm ödemeleri almak için Lambda'yı kullanın. Vadesi gelen ödemeleri bir Amazon Simple Queue Service (Amazon SQS) FIFO kuyruğuna yayınlayın. FIFO kuyruğunu yoklamak ve vadesi gelen ödemeleri işlemek için başka bir Lambda işlevi yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.

---

---

Soru 786
Bir şirket, şirket içi veri merkezinde birden fazla iş yükü çalıştırıyor. Şirketin veri merkezi
Şirketin genişleyen iş ihtiyaçlarını karşılayacak kadar hızlı ölçeklenemiyor. şirket
şirket içi sunucular ve iş yükleri hakkında kullanım ve yapılandırma verilerini toplamak istiyor
AWS'ye geçiş planlayın.
Bu gereksinimleri hangi çözüm karşılayacak?

A. AWS Migration Hub'da ana AWS Bölgesini ayarlayın. Veri toplamak için AWS Systems Manager'ı kullanın
şirket içi sunucular hakkında.

B. AWS Geçiş Merkezinde ana AWS Bölgesini ayarlayın. AWS Uygulama Keşif Hizmetini kullanarak şunları yapın:
şirket içi sunucular hakkında veri toplayın.

C. İlgili şablonları oluşturmak için AWS Şema Dönüştürme Aracını (AWS SCT) kullanın. AWS'yi kullanın
Şirket içi sunucular hakkında veri toplamak için Trusted Advisor.

D. İlgili şablonları oluşturmak için AWS Şema Dönüştürme Aracını (AWS SCT) kullanın. AWS'yi kullanın
Şirket içi sunucular hakkında veri toplamak için Veritabanı Geçiş Hizmeti (AWS DMS).

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** AWS Geçiş Merkezinde ana AWS Bölgesini ayarlayın. Şirket içi sunucular hakkında veri toplamak için AWS Application Discovery Service'i kullanın.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 787
Bir şirketin AWS Organizasyonlarında tüm özelliklerin etkin olduğu bir kuruluşu var.
şirket, mevcut veya yeni AWS hesaplarındaki tüm API çağrılarının ve oturum açma işlemlerinin
denetlendi. Şirketin ek işleri önlemek ve maliyetleri en aza indirmek için yönetilen bir çözüme ihtiyacı var
maliyetler. Şirketin ayrıca herhangi bir AWS hesabının AWS ile uyumlu olmadığını bilmesi gerekiyor
Temel Güvenlik En İyi Uygulamaları (FSBP) standardı.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Kuruluşun yönetim hesabında bir AWS Control Tower ortamı dağıtın. Etkinleştir
Ortamda AWS Güvenlik Merkezi ve AWS Kontrol Kulesi Hesap Fabrikası.

B. Özel bir Kuruluşun üye hesabına bir AWS Control Tower ortamı dağıtın.
Ortamda AWS Security Hub'ı ve AWS Control Tower Account Factory'yi etkinleştirin.

C. Çok hesaplı bir giriş bölgesi (MALZ) oluşturmak için AWS Managed Services (AMS) Accelerate'i kullanın.
MALZ'de Amazon GuardDuty'nin self servis tedarikine bir RFC gönderin.

D. Çok hesaplı bir giriş bölgesi (MALZ) oluşturmak için AWS Managed Services (AMS) Accelerate'i kullanın.
MALZ'deki self servis tedarik AWS Güvenlik Merkezi'ne bir RFC gönderin.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Kuruluşun yönetim hesabında bir AWS Control Tower ortamı dağıtın. Ortamda AWS Security Hub'ı ve AWS Control Tower Account Factory'yi etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 788
Bir şirket, Amazon S3 klasöründe Apache Parquet formatında 10 TB günlük dosyası depoladı.
Şirketin zaman zaman günlük dosyalarını analiz etmek için SQL kullanması gerekir.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Amazon Aurora MySQL veritabanı oluşturun. Verileri S3 klasöründen Aurora'ya taşıyın
AWS Database Migration Service'i (AWS DMS) kullanarak. Aurora'ya SQL ifadeleri yayınlama
veritabanı.

B. Bir Amazon Redshift kümesi oluşturun. SQL ifadelerini doğrudan çalıştırmak için Redshift Spectrum'u kullanın
S3 klasöründeki veriler.

C. Tablo meta verilerini depolamak ve S3 klasöründen almak için bir AWS Glue tarayıcısı oluşturun. Kullanım
Amazon Athena, SQL ifadelerini doğrudan S3 klasöründeki veriler üzerinde çalıştıracak.

D. Bir Amazon EMR kümesi oluşturun. SQL ifadelerini doğrudan sunucuda çalıştırmak için Apache Spark SQL'i kullanın.
S3 klasöründeki veriler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** S3 klasöründeki tablo meta verilerini depolamak ve almak için bir AWS Glue tarayıcısı oluşturun. SQL ifadelerini doğrudan S3 klasöründeki veriler üzerinde çalıştırmak için Amazon Athena'yı kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon Athena Sunucusuz Analitik:** Amazon S3'te depolanan yapılandırılmış ve yarı yapılandırılmış veriler üzerinde herhangi bir sunucu kurmadan doğrudan standart SQL ile etkileşimli analiz yapma imkânı sunar.
> - **Amazon Aurora Yüksek Erişilebilirlik ve Global DB:** Verileri varsayılan olarak 3 AZ'ye 6 kopya halinde dağıtır. Aurora Global Database, depolama düzeyinde 1 saniyenin altında gecikmeyle bölgeler arası çoğaltma ve hızlı felaket kurtarma sağlar.

---

---

Soru 789
Bir şirketin AWS CloudFormation yığınlarının AWS dağıtımını engellemek için bir çözüme ihtiyacı var
Satır içi politika veya "*" içeren Kimlik ve Erişim Yönetimi (IAM) kaynakları
beyanı. Çözüm ayrıca Amazon EC2 bulut sunucularının genel IP ile dağıtımını da yasaklamalıdır.
adresler. Şirketin AWS'deki organizasyonunda AWS Control Tower etkinleştirilmiş durumda
Organizasyonlar.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Genel IP'ye sahip EC2 bulut sunucularının dağıtımını engellemek için AWS Control Tower proaktif kontrollerini kullanın
adresler ve satır içi politikalar, yükseltilmiş erişim veya “*” ile.

B. Genel IP'ye sahip EC2 bulut sunucularının dağıtımını engellemek için AWS Control Tower tespit kontrollerini kullanın
adresler ve satır içi politikalar, yükseltilmiş erişim veya “*” ile.

C. EC2 ve IAM uyumluluğuna yönelik kurallar oluşturmak için AWS Config'i kullanın. Çalıştırmak için kuralları yapılandırın
Bir kaynağın silinmediğinde silinmesine yönelik AWS Systems Manager Session Manager otomasyonu
Uyumlu.

D. EC2 bulut sunucularına ve IAM kaynaklarına yönelik eylemleri engellemek için bir hizmet kontrol politikası (SCP) kullanın:
eylemler uyumsuzluğa yol açar.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** EC2 bulut sunucularının genel IP adreslerine ve satır içi politikalara yükseltilmiş erişim veya "*" ile dağıtımını engellemek için AWS Control Tower proaktif kontrollerini kullanın.
>
> **Sınav Konu Özeti:**
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.
> - **AWS Organizations & Hizmet Kontrol Politikaları (SCP):** Çoklu hesap yönetimini, konsolide faturalandırmayı ve denetimi merkezileştirir. SCP'ler, doğrudan izin vermek yerine hesaplar veya Organizasyon Birimleri (OU) için azami izin sınırlarını (permission boundaries) belirler.

---

---

Soru 790
Bir şirketin AWS Cloud'da barındırılan web uygulamasının popülaritesi yakın zamanda arttı.
Web uygulaması şu anda tek bir genel alt ağdaki tek bir Amazon EC2 örneğinde bulunmaktadır.
Web uygulaması artan web trafiği talebini karşılayamıyor.
Şirketin ihtiyaçlarını karşılamak için yüksek kullanılabilirlik ve ölçeklenebilirlik sağlayacak bir çözüme ihtiyacı var.
web uygulamasını yeniden yazmaya gerek kalmadan artan kullanıcı talebi.
Hangi adım kombinasyonu bu gereksinimleri karşılayacaktır? (İki tane seçin.)

A. EC2 bulut sunucusunu daha büyük, işlem açısından optimize edilmiş bir bulut sunucusuyla değiştirin.

B. Amazon EC2 Auto Scaling'i özel alt ağlarda birden fazla Erişilebilirlik Alanıyla yapılandırın.

C. Web isteklerini işlemek için genel bir alt ağda bir NAT ağ geçidi yapılandırın.

D. EC2 bulut sunucusunu, belleği optimize edilmiş daha büyük bir bulut sunucusuyla değiştirin.

E. Web trafiğini dağıtmak için genel bir alt ağda bir Application Load Balancer yapılandırın.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, E`
> - **Önerilen Çözüm:** Amazon EC2 Auto Scaling'i özel alt ağlarda birden fazla Erişilebilirlik Alanıyla yapılandırın. Web trafiğini dağıtmak için genel bir alt ağda bir Application Load Balancer yapılandırın.
>
> **Sınav Konu Özeti:**
> - **EC2 Auto Scaling & Hedef İzleme Politikaları:** Target Tracking politikaları, belirlenen bir metriği (örn. ortalama %50 CPU kullanımı veya hedef başına istek sayısı) sabit tutmak amacıyla Auto Scaling Grubu kapasitesini otomatik ve dinamik olarak ayarlar.
> - **Application Load Balancer (ALB - Katman 7 Yük Dengeleyici):** Gelişmiş Katman 7 yönlendirmesiyle (URL yolu, ana makine, sorgu parametreleri, HTTP başlıkları) HTTP/HTTPS trafiğini dağıtır; AWS WAF entegrasyonu ve konteyner hedef gruplarını destekler.

---

---

Soru 791
Bir şirket, ortam değişkenlerini kullanan AWS Lambda işlevlerine sahiptir. Şirket bunu yapmıyor
geliştiricilerinin ortam değişkenlerini düz metin olarak görmesini istiyor.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Lambda işlevlerini kullanmak yerine kodu Amazon EC2 bulut sunucularına dağıtın.

B. Depolama ve depolama amacıyla AWS CloudHSM'yi kullanmak için Lambda işlevlerinde SSL şifrelemesini yapılandırın.
ortam değişkenlerini şifreleyin.

C. AWS Sertifika Yöneticisi'nde (ACM) bir sertifika oluşturun. Kullanılacak Lambda işlevlerini yapılandırma
ortam değişkenlerini şifrelemek için sertifika.

D. Bir AWS Key Management Service (AWS KMS) anahtarı oluşturun. Şifreleme yardımcılarını etkinleştirin
Lambda, ortam değişkenlerini depolamak ve şifrelemek için KMS anahtarını kullanma işlevi görür.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Önerilen Çözüm:** Bir AWS Key Management Service (AWS KMS) anahtarı oluşturun. Ortam değişkenlerini depolamak ve şifrelemek amacıyla KMS anahtarını kullanmak için Lambda işlevlerinde şifreleme yardımcılarını etkinleştirin.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 792
Bir analiz şirketi, çok katmanlı hizmetlerini yürütmek için Amazon VPC'yi kullanıyor. Şirket istiyor
Milyonlarca kullanıcıya bir web analizi hizmeti sunmak için RESTful API'lerini kullanın. Kullanıcılar tarafından doğrulanmalıdır
API'lere erişmek için bir kimlik doğrulama hizmeti kullanma.
Hangi çözüm bu gereksinimleri EN yüksek operasyonel verimlilikle karşılayacak?

A. Kullanıcı kimlik doğrulaması için bir Amazon Cognito kullanıcı havuzu yapılandırın. Amazon API'sini uygulayın
Cognito yetkilendiricili Ağ Geçidi REST API'leri.

B. Kullanıcı kimlik doğrulaması için bir Amazon Cognito kimlik havuzu yapılandırın. Amazon API'sini uygulayın
Cognito yetkilendiricisine sahip Ağ Geçidi HTTP API'leri.

C. Kullanıcı kimlik doğrulamasını gerçekleştirmek için bir AWS Lambda işlevini yapılandırın. Amazon API'sini uygulayın
Lambda yetkilendiricili Ağ Geçidi REST API'leri.

D. Kullanıcı kimlik doğrulamasını yönetecek bir IAM kullanıcısını yapılandırın. Amazon API Gateway HTTP'yi uygulayın
IAM yetkilendiricisine sahip API'ler.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** Kullanıcı kimlik doğrulaması için bir Amazon Cognito kullanıcı havuzu yapılandırın. Amazon API Gateway REST API'lerini bir Cognito yetkilendiriciyle uygulayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 793
Bir şirketin müşterilere yönelik bir mobil uygulaması vardır. Uygulamanın verileri hassastır ve şifrelenmelidir
dinlenme halinde. Şirket, AWS Key Management Service'i (AWS KMS) kullanıyor.
Şirketin KMS anahtarlarının yanlışlıkla silinmesini önleyecek bir çözüme ihtiyacı var. Çözüm
adresine bir e-posta bildirimi göndermek için Amazon Simple Notification Service'i (Amazon SNS) kullanmalısınız.
Bir kullanıcı bir KMS anahtarını silmeye çalıştığında yöneticiler.
Hangi çözüm bu gereksinimleri EN AZ operasyonel ek yük ile karşılayacak?

A. Kullanıcı bir KMS anahtarını silmeye çalıştığında tepki verecek bir Amazon EventBridge kuralı oluşturun.
KMS anahtarının silinmesini iptal eden bir AWS Config kuralı yapılandırın. AWS Config kuralını ekleyin
EventBridge kuralının hedefi olarak. Yöneticileri bilgilendiren bir SNS konusu oluşturun.

B. KMS anahtarının silinmesini önlemek için özel mantığa sahip bir AWS Lambda işlevi oluşturun. Bir oluştur
Kullanıcı bir KMS anahtarını silmeye çalıştığında etkinleştirilen Amazon CloudWatch alarmı. Bir oluştur
SilKey işlemi gerçekleştirildiğinde Lambda işlevini çağıran Amazon EventBridge kuralı
gerçekleştirildi. Bir SNS konusu oluşturun. EventBridge kuralını, bir SNS mesajı yayınlayacak şekilde yapılandırın.
yöneticilere duyurulur.

C. KMS SilmeKey işlemi gerçekleştirildiğinde tepki verecek bir Amazon EventBridge kuralı oluşturun.
gerçekleştirildi. AWS Systems Manager Automation runbook'unu başlatmak için kuralı yapılandırın.
KMS anahtarının silinmesini iptal etmek için runbook'u yapılandırın. Bir SNS konusu oluşturun. Yapılandır
Yöneticileri bilgilendiren bir SNS mesajı yayınlamak için EventBridge kuralı.

D. Bir AWS CloudTrail izi oluşturun. Günlükleri yeni bir Amazon CloudWatch'a iletmek için izi yapılandırın
günlük grubu. CloudWatch günlük grubuna yönelik ölçüm filtresini temel alan bir CloudWatch alarmı oluşturun.
Alarmı, KMS Sil Anahtarı gönderildiğinde yöneticilere bildirimde bulunmak üzere Amazon SNS'yi kullanacak şekilde yapılandırın.
operasyon gerçekleştirilir.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Önerilen Çözüm:** KMS SilmeKey işlemi gerçekleştirildiğinde tepki veren bir Amazon EventBridge kuralı oluşturun. AWS Systems Manager Automation runbook'unu başlatmak için kuralı yapılandırın. KMS anahtarının silinmesini iptal etmek için runbook'u yapılandırın. Bir SNS konusu oluşturun. Yöneticileri bilgilendiren bir SNS mesajı yayınlamak için EventBridge kuralını yapılandırın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **AWS Anahtar Yönetim Hizmeti (KMS):** Zarf şifreleme (envelope encryption), otomatik yıllık anahtar rotasyonu ve AWS CloudTrail üzerinden ayrıntılı şifreleme denetimi sunan merkezi anahtar yönetim servisidir.

---

---

Soru 794
Bir şirket, mobil uygulamasının kullanımını takip etmek için analiz yapmak ve raporlar oluşturmak istiyor. Uygulama
popülerdir ve küresel bir kullanıcı tabanına sahiptir. Şirket, özel bir rapor oluşturma programı kullanıyor
uygulama kullanımını analiz edin.
Program her ayın son haftasında birden fazla rapor oluşturur. Program şunları alır:
Her raporun hazırlanması 10 dakikadan az sürer. Şirket bu programı nadiren
Şirket her ayın son haftası dışında rapor oluşturmak istiyor.
Raporların talep edildiği en az süre.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. Programı Amazon EC2 İsteğe Bağlı Bulut Sunucularını kullanarak çalıştırın. Bir Amazon oluşturun
Raporlar istendiğinde EC2 bulut sunucularını başlatmak için EventBridge kuralı. EC2 örneklerini çalıştırın
Her ayın son haftasında sürekli olarak.

B. Programı AWS Lambda'da çalıştırın. Lambda çalıştırmak için Amazon EventBridge kuralı oluşturma
Raporlar istendiğinde işlev görür.

C. Programı Amazon Elastic Container Service'te (Amazon ECS) çalıştırın. Amazon ECS'yi planlayın
Raporlar istendiğinde programı çalıştırmak için.

D. Programı Amazon EC2 Spot Bulut Sunucularını kullanarak çalıştırın. Bir Amazon EventBndge kuralı oluşturun
raporlar istendiğinde EC2 bulut sunucularını başlatın. EC2 bulut sunucularını sürekli olarak çalıştırın
her ayın son haftası.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Programı AWS Lambda'da çalıştırın. Raporlar istendiğinde Lambda işlevini çalıştırmak için bir Amazon EventBridge kuralı oluşturun.
>
> **Sınav Konu Özeti:**
> - **Amazon EC2 Spot Bulut Sunucuları:** Kullanılmayan boş EC2 kapasitesinde %90'a varan indirim sağlar. 2 dakikalık sonlandırma uyarısına tolerans gösterebilen durumsuz (stateless), hataya dayanıklı, toplu iş (batch) yükleri için idealdir.
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.

---

---

Soru 795
Bir şirket, sıkı bir şekilde birleştirilmiş yüksek performanslı bilgi işlem (HPC) ortamı tasarlıyor
AWS Bulut. Şirketin HPC ortamını optimize edecek özellikleri içermesi gerekiyor.
ağ ve depolama.
Hangi çözüm kombinasyonu bu gereksinimleri karşılayacak? (İki tane seçin.)

A. AWS Global Accelerator'da bir hızlandırıcı oluşturun. Hızlandırıcı için özel yönlendirmeyi yapılandırın.

B. Lustre dosya sistemi için bir Amazon FSx oluşturun. Dosya sistemini sıfırdan depolama ile yapılandırın.

C. Bir Amazon CloudFront dağıtımı oluşturun. Görüntüleyici protokolü ilkesini HTTP olacak şekilde yapılandırma
ve HTTPS.

D. Amazon EC2 bulut sunucularını başlatın. Örneklere bir Elastik Yapı Adaptörü (EFA) takın.

E. Ortamı yönetmek için bir AWS Elastic Beanstalk dağıtımı oluşturun.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B, D`
> - **Önerilen Çözüm:** Lustre dosya sistemi için bir Amazon FSx oluşturun. Dosya sistemini sıfırdan depolama ile yapılandırın. Amazon EC2 bulut sunucularını başlatın. Örneklere bir Elastik Yapı Adaptörü (EFA) takın.
>
> **Sınav Konu Özeti:**
> - **Amazon FSx Yönetilen Dosya Sistemleri:** FSx for Windows, Active Directory entegrasyonuna sahip tam yönetimli SMB dosya paylaşımları sunar. FSx for Lustre ise yüksek başarımlı bilgi işlem (HPC) ve makine öğrenimi için milisaniye altı gecikmeli ve yüksek veri akışlı depolama sağlar.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 796
Bir şirketin, istenmeyen içeriğe sahip fotoğrafların yüklenmesini engelleyecek bir çözüme ihtiyacı var
Şirketin web uygulaması. Çözüm, makine öğreniminin (ML) eğitilmesini içermemelidir
modeli.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Amazon SageMaker Autopilot'u kullanarak bir model oluşturun ve dağıtın. Gerçek zamanlı bir uç nokta oluşturun
yeni fotoğraflar yüklendiğinde web uygulamasının çağırdığı.

B. İstenmeyen içeriği tespit etmek için Amazon Rekognition'ı kullanan bir AWS Lambda işlevi oluşturun.
Yeni fotoğraflar yüklendiğinde web uygulamasının çağıracağı bir Lambda işlevi URL'si oluşturun.

C. İstenmeyen durumları tespit etmek için Amazon Comprehend'i kullanan bir Amazon CloudFront işlevi oluşturun
içerik. İşlevi web uygulamasıyla ilişkilendirin.

D. İstenmeyen durumları tespit etmek için Amazon Rekognition Video'yu kullanan bir AWS Lambda işlevi oluşturun
içerik. Yeni fotoğraflar eklendiğinde web uygulamasının çağıracağı bir Lambda işlevi URL'si oluşturun.
yüklendi.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** İstenmeyen içerikleri tespit etmek için Amazon Rekognition'ı kullanan bir AWS Lambda işlevi oluşturun. Yeni fotoğraflar yüklendiğinde web uygulamasının çağıracağı bir Lambda işlevi URL'si oluşturun.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon CloudFront & Menşe Erişim Kontrolü (OAC):** İçerikleri uç konumlarda önbelleğe alan küresel İçerik Dağıtım Ağıdır (CDN). Origin Access Control (OAC), S3 klasörlerine doğrudan genel erişimi engelleyerek kullanıcıların yalnızca CloudFront üzerinden gelmesini zorunlu kılar.

---

---

Soru 797
Bir şirket, e-ticaret platformunu çalıştırmak için AWS'yi kullanıyor. Platform şirket açısından kritik önem taşıyor
operasyonlar ve yüksek trafik ve işlem hacmine sahiptir. Şirket bir yapılandırma gerçekleştiriyor
AWS hesabının kök kullanıcı kimlik bilgilerini güvence altına almak için çok faktörlü kimlik doğrulama (MFA) cihazı.
şirket, MFA cihazının devre dışı bırakılması durumunda kök kullanıcı hesabına erişimini kaybetmemesini sağlamak istiyor
kayıp.
Bu gereksinimleri hangi çözüm karşılayacak?

A. Şirketin kaybederse oturum açmak için kullanabileceği bir yedek yönetici hesabı oluşturun.
MFA cihazı.

B. Felaket senaryosunun üstesinden gelmek için kök kullanıcı hesabına birden fazla MFA cihazı ekleyin.

C. Şirket kök hesaba erişemediğinde yeni bir yönetici hesabı oluşturun.

D. Şirket root'a erişemediğinde yönetici politikasını başka bir IAM kullanıcısına ekleyin
hesap.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Felaket senaryosunun üstesinden gelmek için kök kullanıcı hesabına birden fazla MFA cihazı ekleyin.
>
> **Sınav Konu Özeti:**
> - **AWS Mimari En İyi Uygulamaları (Well-Architected):** Yüksek erişilebilirlik ve güvenlik gereksinimlerini karşılarken operasyonel yükü ve maliyeti en aza indiren tam yönetimli (fully managed) ve sunucusuz (serverless) AWS servislerine öncelik verin.

---

---

Soru 798
Bir sosyal medya şirketi, kullanıcıları için bir ödül programı web sitesi oluşturuyor. Şirket veriyor
kullanıcılar video oluşturup web sitesine yüklediğinde kullanıcılar puan verir. Kullanıcılar puanlarını kullanarak
Şirketin bağlı ortaklarından hediyeler veya indirimler. Benzersiz bir kimlik, kullanıcıları tanımlar.
iş ortakları, kullanıcıların ödüllere uygunluğunu doğrulamak için bu kimliğe başvurur.
İş ortakları, bir HTTP uç noktası aracılığıyla kullanıcı kimliklerine ilişkin bildirim almak ister.
şirket kullanıcılara puan veriyor. Yüzlerce satıcı bağlı ortak olmakla ilgileniyor
her gün. Şirket, web sitesine ekleme yeteneği veren bir mimari tasarlamak istiyor
ölçeklenebilir bir şekilde hızla iş ortakları oluşturuyor.
EN AZ uygulama çabasıyla bu gereksinimleri hangi çözüm karşılayacak?

A. Bağlı ortakların listesini tutmak için bir Amazon Timestream veritabanı oluşturun. Bir uygulama yapın
Listeyi okumak için AWS Lambda işlevi. Lambda işlevini her birine kullanıcı kimlikleri gönderecek şekilde yapılandırın
şirket kullanıcılara puan verdiğinde ortak olun.

B. Bir Amazon Simple Notification Service (Amazon SNS) konusu oluşturun. Bir uç nokta seçin
protokol. Ortakları konuya abone olun. Şirket verdiğinde kullanıcı kimliklerini konuya yayınlayın
kullanıcı puanları.

C. Bir AWS Step Functions durum makinesi oluşturun. Her bağlı ortak için bir görev oluşturun. Çağır
şirket kullanıcılara puan verdiğinde giriş olarak kullanıcı kimliklerini içeren durum makinesi.

D. Amazon Kinesis Data Streams'te bir veri akışı oluşturun. Üretici ve tüketiciyi hayata geçirin
uygulamalar. Bağlı ortakların bir listesini veri akışında saklayın. Şirket ne zaman kullanıcı kimliklerini gönder
kullanıcılara puan verir.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Önerilen Çözüm:** Bir Amazon Simple Notification Service (Amazon SNS) konusu oluşturun. Bir uç nokta protokolü seçin. Ortakları konuya abone olun. Şirket kullanıcılara puan verdiğinde kullanıcı kimliklerini konuya yayınlayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon SNS Yayınlama/Abone (Pub/Sub) ve Fanout Deseni:** Yüksek verimli mesaj dağıtım servisidir. Fanout deseni, bir SNS konusuna gönderilen tek bir mesajın paralel ve asenkron işleme amacıyla abone olan birden fazla SQS kuyruğuna aynı anda dağıtılmasını sağlar.

---

---

Soru 799
Bir şirketin, metin olarak saklanan tarif kayıtlarından malzemelerin adlarını çıkarması gerekiyor
Amazon S3 klasöründeki dosyalar. Bir web uygulaması, bir içeriği sorgulamak için içerik adlarını kullanacaktır.
Amazon DynamoDB tablosuna gidin ve bir beslenme puanı belirleyin.
Uygulama gıda dışı kayıtları ve hataları işleyebilir. Şirketin herhangi bir özelliği yok
Bu çözümü geliştirmek için makine öğrenimi bilgisine sahip çalışanlar.
Hangi çözüm bu gereksinimleri EN uygun maliyetle karşılayacaktır?

A. PutObject istekleri gerçekleştiğinde bir AWS Lambda işlevini çağırmak için S3 Olay Bildirimlerini kullanın.
Nesneyi analiz etmek ve bileşen adlarını çıkarmak için Lambda işlevini programlayın.
Amazon Anlamak. Amazon Comprehend çıktısını DynamoDB tablosunda saklayın.

B. PutObject isteğinde bulunduğunda bir AWS Lambda işlevini çağırmak için Amazon EventBridge kuralını kullanın
meydana gelir. Nesneyi ayıklamak için Amazon Forecast'i kullanarak Lambda işlevini analiz edecek şekilde programlayın
bileşen adları. Tahmin çıktısını DynamoDB tablosunda saklayın.

C. PutObject istekleri gerçekleştiğinde bir AWS Lambda işlevini çağırmak için S3 Olay Bildirimlerini kullanın.
Tarif kayıtlarının ses kayıtlarını oluşturmak için Amazon Polly'yi kullanın. Ses dosyalarını S3'e kaydedin
kova. Bir URL'yi mesaj olarak göndermek için Amazon Simple Notification Service'i (Amazon SNS) kullanın.
çalışanlar. Çalışanlara ses dosyalarını dinlemelerini ve beslenme puanını hesaplamalarını söyleyin.
İçerik adlarını DynamoDB tablosunda saklayın.

D. PutObject olduğunda bir AWS Lambda işlevini çağırmak için Amazon EventBridge kuralını kullanın.
istek oluşur. Nesneyi analiz etmek ve içeriği çıkarmak için Lambda işlevini programlayın
Amazon SageMaker'ı kullanarak adları değiştirin. Çıkarım çıktısını SageMaker uç noktasından
DynamoDB tablosu.

> [!NOTE]
> ### 💡 Temel AWS Mimarisi & Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Önerilen Çözüm:** PutObject istekleri gerçekleştiğinde bir AWS Lambda işlevini çağırmak için S3 Olay Bildirimlerini kullanın. Amazon Comprehend'i kullanarak nesneyi analiz etmek ve içerik adlarını çıkarmak için Lambda işlevini programlayın. Amazon Comprehend çıktısını DynamoDB tablosunda saklayın.
>
> **Sınav Konu Özeti:**
> - **AWS Lambda Sunucusuz Kod Yürütme:** Sunucu yönetimi gerektirmeden olay güdümlü (event-driven) çalışan, sıfırdan otomatik ölçeklenen ve milisaniye bazında faturalandırılan kod çalıştırma servisidir. Maksimum çalışma süresi 15 dakikadır.
> - **Amazon DynamoDB NoSQL Veritabanı:** Her ölçekte tek haneli milisaniye gecikmeyle çalışan tam yönetimli NoSQL veritabanıdır. İsteğe bağlı (On-Demand) kapasite ve Global Tables ile çok bölgeli aktif-aktif çoğaltmayı destekler.
