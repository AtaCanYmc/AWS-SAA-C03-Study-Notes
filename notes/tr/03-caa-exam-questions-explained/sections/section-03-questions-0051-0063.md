# CAA Sınav Soruları - Resmi Referanslı ve Açıklamalı - Bölüm 03

> **Soru Aralığı:** 51 - 63 / Toplam: 63

[← Modül Ana Sayfası](../README.md) | [📖 Birleştirilmiş Notlar](../notes.md)

---

Soru 51 / 63 ·

Dosya: 51.jpeg · Soru 53 / 65

Bir şirket şu anda bir AWS'deki Amazon S3 klasöründe 500 belge saklıyor
Bölge. Şirket gelecekte yeni belgeler oluşturacak. Yeni belgeler gelecek
Boyutu 5 KB ile 4 GB arasında olmalıdır. Şirket, mevcut ve gelecekteki tüm
belgeler her zaman birden fazla Bölgede saklanır. Hangi çözüm kombinasyonu
Bu gereksinimleri EN AZ operasyonel çabayla karşılıyor musunuz? (İKİ'yi seçin.)

A) S3 Event Notifications tarafından çağrılan bir AWS Lambda işlevi oluşturun. Yapılandır
her belgeyi orijinal S3 klasöründen S3 klasörüne bir saniyede kopyalama işlevi
Bölge.

B) Her 15 dakikada bir çalışan bir AWS Batch işi oluşturun. Toplu iş işini kullanacak şekilde yapılandırın.
Yeni belgeleri ikinci bir Bölgedeki bir S3 klasörüne kopyalamak için S3 CopyObject API.

C) Mevcut belgeleri çoğaltmak için mevcut S3 klasöründe S3 Toplu Çoğaltmayı kullanın
ikinci bir Bölgedeki ikinci bir S3 paketine.

D) Kaynağa bir çoğaltma yapılandırması ekleyerek S3 Bölgeler Arası Çoğaltmayı etkinleştirin
S3 kovası.

E) Mevcut belgeleri bir saniyede bir S3 klasörüyle senkronize etmek için AWS DataSync'i kullanın
Bölge.

Birden fazla şık seçilecek.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Kısa Konu Anlatımı & Gerekçe:** C ve D dogrudur. S3 Cross-Region Replication (D), kaynak bucket'a replikasyon yapilandirmasi eklendiginde yeni nesneleri ikinci Region'a otomatik kopyalar; S3 Batch Replication (C) ise replikasyon yapilandirmasi varken mevcut nesneleri de kopyalar, boylece hem mevcut hem gelecekteki belgeler coklu Region'da tutulur. A, B ve E ozel kod, zamanlanmis isler veya elle senkronizasyon gerektirdigi icin daha fazla operasyonel cabayi gerektirir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-batch-replication-batch.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-batch-replication-batch.html)
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html)

---

---

Soru 52 / 63 · Dosya: 52.jpeg · Soru 54 / 65

Bir hukuk firması müvekkil vaka dosyalarını Amazon EFS'de saklıyor. Hukuk firması dosya sistemini korumalıdır
Yasal gerekliliklere uymak için 7 yıl boyunca yedeklenir. Bunları hangi çözüm karşılayacak?
EN AZ operasyonel gider gerektiren gereksinimler?

A) Dosya sistemini sürekli olarak yedeklemek için Amazon EFS otomatik yedeklemelerini kullanın.

B) Dosya sistemi için yedekleme programları ve saklama politikaları oluşturmak için AWS Backup'ı kullanın.

C) Dosyaları EFS dosya sisteminden Amazon S3'e kopyalamak için bir AWS Lambda işlevi oluşturun
günlük kova. S3 klasörü için bir S3 Yaşam Döngüsü yapılandırması ayarlayın.

D) Bir AWS Lambda işlevini çağıran bir Amazon EventBridge kuralı oluşturun. Yapılandır
EFS yedekleri oluşturmak ve yedekleri Amazon S3'te depolamak için Lambda işlevi
kova. S3 klasörü için bir S3 Yaşam Döngüsü yapılandırması ayarlayın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** B dogrudur: AWS Backup ile yedekleme plani olusturup her yedek icin saklama suresini tanimlamak, yonetilen bir cozumle yedekleme ve saklama yonetimi saglar. A'daki EFS otomatik yedeklemeleri varsayilan olarak 35 gun saklanir, bu nedenle 7 yillik saklama gereksinimini karsilamaz. C ve D, Lambda kodu, zamanlama ve S3 yasam dongusu kurallari gibi ek bilesenler gerektirdigi icin daha fazla operasyonel yuk getirir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html](https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html)

---

---

Soru 53 / 63 · Dosya: 53.jpeg · Soru 55/65

Bir şirket, tıklama akışı verilerini işleyebilmek için sunucusuz bir uygulama geliştiriyor.
web sitesi. Tıklama akışı verileri Amazon Kinesis Data Streams veri akışına şu adresten gönderilir:
uygulama web sunucuları. Şirket, katılma yoluyla tıklama akışı verilerini zenginleştirmek istiyor
Amazon Aurora Multi-AZ veritabanındaki müşteri profili verilerini içeren tıklama akışı verileri.
Şirket, zenginleştirilmiş verileri analiz etmek için Amazon Redshift'i kullanmak istiyor. Çözüm
yüksek oranda kullanılabilir olmalıdır. Bu gereksinimleri hangi çözüm karşılayacak?

A) Tıklama akışı verilerini işlemek ve zenginleştirmek için bir AWS Lambda işlevini kullanın. Aynısını kullan
Tıklama akışı verilerini Amazon S3'e yazmaya yönelik Lambda işlevi. Amazon Redshift'i kullanın
Amazon S3'te zenginleştirilmiş verileri sorgulamak için Spectrum.

B) Veri akışını yoklamak ve tıklama akışını zenginleştirmek için bir Amazon EC2 Spot bulut sunucusu kullanın
veri. EC2 örneğini, zenginleştirilmiş sonuçları göndermek üzere COPY komutunu kullanacak şekilde yapılandırın
Amazon Kırmızıya Kayma.

C) Veri akışını yoklamak için AWS Fargate Spot kapasitesine sahip bir Amazon ECS görevi kullanın ve
tıklama akışı verilerini zenginleştirin. EC2 örneğini göndermek için COPY komutunu kullanacak şekilde yapılandırın
zenginleştirilmiş sonuçları Amazon Redshift'e aktarın.

D) Tıklama akışı verilerini Kinesis Data Streams'ten yüklemek için Amazon Data Firehose'u kullanın.
Amazon S3. Şemayı çıkarmak ve AWS Glue Verilerini doldurmak için AWS Glue tarayıcılarını kullanın
Katalog. Amazon S3'teki ham verileri sorgulamak için Amazon Athena'yı kullanın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** A dogrudur: AWS Lambda sunucusuz oldugu icin gereksinimle uyumludur; Lambda veriyi zenginlestirip S3'e yazar ve Amazon Redshift Spectrum, zenginlestirilmis veriyi S3 uzerinde yukleme yapmadan sorgular. B ve C, EC2 Spot veya Fargate Spot gibi sunucu tabanli bilesenler ve EC2 instance'ina atifla COPY komutu kullandigi icin sunucusuz sartini karsilamaz. D, Redshift kullanmaz ve Aurora'daki musteri profili verileriyle birlestirme yapmaz; yalnizca Athena ile ham veriyi sorgular.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/redshift/latest/dg/c-using-spectrum.html](https://docs.aws.amazon.com/redshift/latest/dg/c-using-spectrum.html)

---

---

Soru 54 / 63 · Dosya: 54.jpeg · Soru 56 / 65

Bir şirket yakın zamanda web uygulamasını AWS Cloud'a taşıdı. Şirket bir
Uygulamayı barındırmak amacıyla birden fazla işlemi çalıştırmak için Amazon EC2 örneği. Süreçler
statik içerik sunan bir Apache web sunucusu içerir. Apache web sunucusu şunları yapar:
Kullanıcı oturumları için yerel Redis sunucusunu kullanan bir PHP uygulamasına yapılan istekler. şirket
mimariyi yüksek düzeyde kullanılabilir olacak ve AWS tarafından yönetilen kullanacak şekilde yeniden tasarlamak istiyor
çözümler. Bu gereksinimleri hangi çözüm karşılayacak?

A) Statik içeriği ve PHP uygulamasını barındırmak için AWS Elastic Beanstalk'ı kullanın. Yapılandır
Elastic Beanstalk, EC2 örneğini genel bir alt ağa dağıtacak. Genel bir IP adresi atayın.

B) Statik içeriği ve PHP uygulamasını barındırmak için AWS Lambda'yı kullanın. Amazon API'si kullanın
Lambda işlevine proxy isteklerini göndermek için Ağ Geçidi REST API'si. API Ağ Geçidi CORS'unu ayarlayın
Alan adına yanıt verecek şekilde yapılandırma. Amazon ElastiCache'i (Redis OSS) şu şekilde yapılandırın:
oturum bilgilerini yönetin.

C) Arka uç kodunu EC2 örneğinde tutun. Amazon ElastiCache (Redis OSS) oluşturun
Multi-AZ'nin etkin olduğu küme. Kümedeki ElastiCache (Redis OSS) kümesini yapılandırma
modu. Ön uç kaynaklarını Amazon S3'e kopyalayın. Referans için arka uç kodunu yapılandırın
EC2 örneği.

D) Amazon S3 uç noktasıyla bir Amazon CloudFront dağıtımını S3'e yapılandırma
Statik içeriği barındıracak şekilde yapılandırılmış paket. Uygulama Yük Dengeleyicisini Yapılandırma
PHP uygulaması için AWS Fargate görevlerini çalıştıran bir Amazon ECS hizmetini hedefleyen.
PHP uygulamasını, çalışan bir Amazon ElastiCache (Redis OSS) kümesini kullanacak şekilde yapılandırma
birden fazla Erişilebilirlik Alanında.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** D dogrudur: statik icerik CloudFront ve S3 uzerinden sunulur, PHP uygulamasi ALB arkasinda Fargate uzerinde calisan bir ECS servisine dagitilir ve oturum verileri birden fazla AZ'de calisan ElastiCache (Redis OSS) kumesinde tutulur. A tek bir public subnet ve public IP'li EC2 orneğine bagli kalir, yuksek erisilebilirlik saglamaz. B, PHP uygulamasinin Lambda'ya tasinmasini gerektirir ve kapsamli bir mimari degisiklik getirir; C ise backend'i tek bir EC2 orneginde birakir ve yuksek erisilebilirligi karsilamaz.

---

---

Soru 55 / 63 · Dosya: 55.jpeg · Soru 57 / 65

Bir şirket, Amazon EKS'de toplu işleme ve raporlama mikro hizmetleri çalıştırıyor. Kullanıcılar
Mikro hizmetlere web tabanlı HTTP uç noktaları aracılığıyla erişin. Şirket istiyor
URL kalıplarına göre trafiği birden fazla arka uç hizmetine dağıtın. Hangi çözüm olacak
Gelen istekleri EN uygun maliyetli mikro hizmetlere yönlendirmek mi istiyorsunuz?

A) Bir Ağ Yük Dengeleyici sağlamak için AWS Yük Dengeleyici Denetleyicisini kullanın.

B) Bir Application Load Balancer sağlamak için AWS Load Balancer Controller’ı kullanın.

C) İstekleri Amazon EKS'ye yönlendirmek için bir AWS Lambda işlevini kullanın.

D) İstekleri Amazon EKS'ye yönlendirmek için Amazon API Gateway'i kullanın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** B dogrudur: AWS Load Balancer Controller ile olusturulan Application Load Balancer, HTTP isteklerini URL yolu ve host kurallarina gore farkli EKS servislerine yonlendirir ve tek bir load balancer ile maliyeti dusuk tutar. A'daki Network Load Balancer 4. katmanda calisir ve URL'ye gore yonlendirme yapamaz. C ve D, istekleri EKS'e ulastirmak icin Lambda veya API Gateway gibi ek bir bilesen ekler; bu da gereksiz maliyet getirir.

---

---

Soru 56 / 63 · Dosya: 56.jpeg · Soru 58 / 65

Bir analiz şirketi özel bir ayıklama, dönüştürme ve yükleme (ETL) çözümü dağıtmak istiyor
AWS'de kapsayıcıya alınmış bir uygulama olarak. Uygulama yüksek performanslı erişim gerektiriyor
merkezi bir depodaki dosyalara. Dosya işlemenin tamamlanması 1 saat kadar sürebilir.
Bu gereksinimleri hangi çözüm karşılayacak?

A) Bir konteyner görüntüsünden bir AWS Lambda işlevini dağıtın. Amazon oluşturun ve ekleyin
EFS dosya sistemini işleve ekleyin.

B) Container'ları Amazon ECS'de Amazon EC2 başlatma türüyle dağıtın. EC2'yi yapılandırma
Örnek deposu birimlerini kullanmak için örnekler.

C) Container'ları Amazon ECS'de AWS Fargate başlatma türüyle dağıtın. Amazon Dağı
EFS dosya sistemini kaplara aktarın.

D) Dosyaları depolamak için bir Amazon S3 Express One Zone paketi oluşturun. AWS dağıtın
Bir konteyner görüntüsünden Lambda işlevi. S3 Express One Zone'daki dosyaları işleyin
kova.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Kısa Konu Anlatımı & Gerekçe:** C dogrudur: Fargate uzerindeki ECS gorevleri 1 saate kadar suren isleme icin uygundur ve merkezi depodaki dosyalara paylasilan, yuksek performansli erisim icin Amazon EFS baglanabilir; EFS, Fargate gorevlerinde Linux platform surum 1.4.0 ve sonrasinda desteklenir. A ve D, Lambda'nin en fazla 15 dakika (900 saniye) calisabilmesi nedeniyle 1 saatlik isleme suresini karsilayamaz. B, EC2 instance store kullanir; bu, instance'a yerel ve gecici depolamadir ve merkezi depoya paylasilan erisim saglamaz.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/lambda/latest/dg/configuration-timeout.html](https://docs.aws.amazon.com/lambda/latest/dg/configuration-timeout.html)
>   - [https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html)

---

---

Soru 57 / 63 · Dosya: 57.jpeg · Soru 59/65

Bir şirket, Amazon EC2 bulut sunucularında barındırılacak yeni bir uygulamayı piyasaya sürüyor. bir
çözüm mimarının genel IPv4 erişimine izin vermeyen bir çözüm tasarlaması gerekiyor
internetten kaynaklanmaktadır. Ancak çözüm, EC2 bulut sunucularının
giden IPv4 internet istekleri. İlk tasarım teklifi EC2 bulut sunucularının
iki Erişilebilirlik Alanındaki iki özel alt ağda yer alacaktır. Tamamı
mimarinin yüksek oranda kullanılabilir olması gerekir. Çözüm mimarı durumu nasıl değiştirmeli?
Bu gereksinimleri karşılayacak mimari?

A) Her iki Erişilebilirlik Alanındaki genel alt ağlara bir NAT ağ geçidi dağıtın. Oluşturun ve yapılandırın
her özel alt ağ için bir yönlendirme tablosu.

B) Her iki Erişilebilirlik Alanındaki genel alt ağlara bir internet ağ geçidi dağıtın. Oluşturun ve
özel alt ağlar için paylaşılan bir rota tablosu yapılandırın.

C) Her iki Erişilebilirlik Alanındaki genel alt ağlara bir NAT ağ geçidi dağıtın. Oluşturun ve yapılandırın
özel alt ağlar için paylaşılan bir rota tablosu.

D) Her iki Erişilebilirlik Alanındaki genel alt ağlara yalnızca çıkışa yönelik bir internet ağ geçidi dağıtın.
Her özel alt ağ için bir yönlendirme tablosu oluşturun ve yapılandırın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** A dogrudur: her Availability Zone'da public subnet'e yerlestirilen bir NAT gateway, private subnet'lerdeki EC2 orneklerinin giden IPv4 istekleri yapmasini saglar ve internetten gelen baglantiyi engeller. Her private subnet'in kendi AZ'sindeki NAT gateway'e yonlendiren ayri bir route table'i olmasi, bir AZ arizasinda da erisilebilirligi korur. B internet gateway kullanir ve genel IPv4 erisimine izin verir; C tek bir paylasilan route table ile tek NAT gateway'e bagimlilik yaratir; D egress-only internet gateway yalnizca IPv6 icindir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-scenarios.html](https://docs.aws.amazon.com/vpc/latest/userguide/nat-gateway-scenarios.html)

---

---

Soru 58 / 63 · Dosya: 58.jpeg · Soru 60/65

Bir şirket, binlerce eşzamanlı kullanıcı için bir içerik yönetim sistemi işletiyor
Bir VPC'deki Amazon EC2 bulut sunucuları. Şirketin ek EC2 bulut sunucularını dağıtması gerekiyor
Yeni kullanıcıların artan uygulama katmanı iş yüklerini yönetin. VPC'de yeterli IP yok
yeni örnekler için adresler. Hangi çözüm gerekli kapasiteyi sağlıyor?
EN AZ işletme gideri?

A) VPC'ye yeni, çakışmayan bir IPv4 CIDR bloğu ekleyin. Ek alt ağlar oluşturun
yeni CIDR aralığını kullanın. Yeni alt ağlarda yeni EC2 bulut sunucularını başlatın.

B) Yeni alt ağlara sahip yeni bir VPC oluşturun. arasında bir VPC eşleme bağlantısı kurun.
iki VPC. Trafiği eş VPC'nin CIDR'sine yönlendirmek için her iki VPC'deki yönlendirme tablolarını güncelleyin
eşleme bağlantısını engelleyin. Yeni VPC'de yeni EC2 bulut sunucularını başlatın.

C) Bir transit ağ geçidi dağıtın. Mevcut VPC'yi ve yeni bir VPC'yi toplu taşıma ağ geçidine ekleyin.
İki VPC arasındaki trafiği yönlendirmek için geçiş ağ geçidi rota tablolarını yapılandırın. Başlat
yeni VPC'deki yeni EC2 bulut sunucuları.

D) Yeni alt ağlara sahip yeni bir VPC oluşturun. AWS Siteden Siteye VPN bağlantısı dağıtın
VPC'ler arasında. İlk VPC'de EC2 tabanlı bir VPN çözümü ve sanal özel bir sunucu kullanın
yeni VPC'deki ağ geçidi. Trafiği VPN tüneli üzerinden yönlendirmek için rota tablolarını güncelleyin.
Yeni VPC'de yeni EC2 bulut sunucularını başlatın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap A: Mevcut VPC'ye ikincil bir IPv4 CIDR bloğu eklenebilir ve bu blok üzerinde oluşturulan yeni subnet'lere EC2 örnekleri aynı VPC içinde başlatılabilir. B ve C yeni bir VPC ile peering veya transit gateway gibi ek bağlantı katmanları gerektirir. D ise gereksiz bir VPN altyapısı ekler; bu nedenle yalnızca A en az operasyonel yükle kapasiteyi sağlar.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/vpc/latest/userguide/vpc-cidr-blocks.html](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-cidr-blocks.html)
>   - [https://docs.aws.amazon.com/vpc/latest/userguide/add-ipv4-cidr.html](https://docs.aws.amazon.com/vpc/latest/userguide/add-ipv4-cidr.html)

---

---

Soru 59 / 63 · Dosya: 59.jpeg · Soru 61/65

Bir şirketin yeni bir proje için konteyner görsellerini kullanması gerekiyor. Bir geliştirme ekibi gerektirir
yeni bir Amazon ECR deposuna tam erişim. Bir çözüm mimarı ikinci bir ECR oluşturur
mevcut bir havuzu şablon olarak kullanarak depoyu oluşturun. Bir çözüm mimarı,
AmazonEC2ContainerRegistryFullAccess politikasının eklendiği yeni IAM rolü. [?]
Bir geliştirici, yeniyi kullanarak bir liman işçisi görüntüsünü ikinci depoya göndermeye çalıştığında
IAM rolü, komut bir yetkilendirme hatasıyla başarısız oluyor. Olası nedeni nedir
hata mı?

A) Geliştiricinin docker deposunda oturum açmak için şunu kullanarak aldığı belirteç
aws ecr get-login-password komutu 2 saatten eski.

B) Geliştirme ekibine atanan IAM rolünün çekme izni yok
depodan görüntüler.

C) Geliştiricinin çok faktörlü kimlik doğrulaması (MFA) etkin değil.

D) Yeni depo, itmeyi reddeden bir ECR depo politikasından oluşturuldu
görüntüler.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `D`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap D: Yeni depo, mevcut bir deponun repository policy'si kopyalanarak oluşturulmuş ve bu politika push işlemini reddediyor. IAM politikası ile kaynak politikası arasında bir taraf açıkça reddederse işlem engellenir; bu yüzden rolde AmazonEC2ContainerRegistryFullAccess bulunsa bile push başarısız olur. A yanlıştır çünkü ECR giriş token'ı 12 saat geçerlidir; B yanlıştır çünkü hata push sırasında oluşur ve rol zaten tam erişime sahiptir; C yanlıştır çünkü ECR kimlik doğrulaması MFA'ya bağlı değildir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html)
>   - [https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html](https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html)
>   - [https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html)

---

---

Soru 60 / 63 · Dosya: 60.jpeg · Soru 62 / 65

Bir şirket, çok sayıda olayı işlemek için sunucusuz bir uygulama tasarlıyor.
bir AWS hesabı. Uygulama, daha fazla bilgi için olayları bir veri ambarına kaydeder.
analiz. Uygulama, gelen olayları bir Amazon SQS kuyruğuna gönderir. Arasındaki trafik
uygulama ve SQS kuyruğu genel IP adreslerini kullanmamalıdır. Hangi çözüm olacak
bu gereksinimleri karşılıyor mu?

A) Amazon SQS için bir VPC uç noktası oluşturun. Sıra politikasını, hariç tüm erişimi reddedecek şekilde ayarlayın.
VPC uç noktasından.

B) Sunucu tarafı şifrelemeyi SQS tarafından yönetilen anahtarlarla (SSE-SQS) yapılandırın.

C) AWS STS'yi, erişim sağlayan kaynaklar için geçici kimlik bilgileri oluşturacak şekilde yapılandırın.
kuyruk.

D) VPC'den ayrılan SQS trafiğini tespit etmek için VPC Akış Günlüklerini yapılandırın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `A`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap A: SQS için bir arayüz VPC endpoint'i kullanıldığında trafik public internete çıkmadan AWS ağı üzerinden gider. Kuyruk politikasında aws:SourceVpce koşulu ile erişim yalnızca bu endpoint'e kısıtlanabilir. B yalnızca veriyi depolamadayken şifreler, ağ yolunu değiştirmez; C geçici kimlik bilgisi üretir ama trafiğin public IP üzerinden gitmesini engellemez; D trafiği yalnızca izler, engellemez.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-internetwork-traffic-privacy.html](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-internetwork-traffic-privacy.html)
>   - [https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-creating-custom-policies-access-p](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-creating-custom-policies-access-p)

---

---

Soru 61 / 63 · Dosya: 61.jpeg · Soru 63 / 65

Bir sağlık şirketinin elektronik sağlık kayıtları (EHR'ler) için bir depolama çözümüne ihtiyacı vardır.
Şirketin mevzuata uyum sağlaması için EHR'leri en az 10 yıl saklaması gerekiyor.
şirket nadiren kayıtlara erişir. Kayıtlar güvenli, değiştirilemez ve
gerektiğinde birkaç saat içinde geri alınabilir. Bu gereksinimleri hangi çözüm karşılayacak?
EN uygun maliyetli şekilde?

A) Kayıtları Amazon S3 Standard'ta saklayın. Amazon ile Sunucu tarafı şifrelemeyi etkinleştirin
S3 yönetilen anahtarlar (SSE-S3) ve S3 Sürüm Oluşturma.

B) Kayıtları Amazon S3 Glacier Esnek Erişim'de saklayın. S3 Nesne Kilidi'ni yapılandırın ve
10 yıllık bir saklama süresi belirledik.

C) Kayıtları Amazon S3 One Zone-Infrequent Access'te (S3 One Zone-IA) saklayın.
Kayıtları 10 yıl sonra kaldırmak için bir S3 Yaşam Döngüsü ilkesi yapılandırın.

D) Kayıtları Amazon S3 Intelligent-Tiering'de saklayın. Otomatik arşivlemeyi yapılandırın
Arşiv Erişimi katmanı.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap B: S3 Glacier Flexible Retrieval düşük saklama maliyeti sunar ve Standard geri getirme 3-5 saat sürer, bu da 'birkaç saat içinde' gereksinimini karşılar. S3 Object Lock, compliance modunda 10 yıllık saklama süresi boyunca kayıtların silinmesini veya üzerine yazılmasını engelleyerek değişmezlik sağlar. A pahalı S3 Standard kullanır ve sürümleme değişmezlik sağlamaz; C tek AZ'de tutar ve süre sonunda kayıt silen bir kurala dayanır; D'de Object Lock olmadığı için değişmezlik gereksinimi karşılanmaz.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/glacier-storage-classes.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/glacier-storage-classes.html)
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects-retrieval-options.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects-retrieval-options.html)
>   - [https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html)

---

---

Soru 62 / 63 · Dosya: 62.jpeg · Soru 64 / 65

Bir araştırma laboratuvarının terabaytlık bir veri kümesini her gün birden çok kez işlemesi gerekir.
Laboratuvar, verileri işlerken milisaniyenin altında bir gecikme gerektirir. Yüzlerce
Amazon EC2 Linux bulut sunucuları, verileri kaynaktan işleyecek ve verileri bir
farklı konum. Bu gereksinimleri hangi çözüm karşılayacak?

A) NetApp ONTAP dosya sistemi için bir Amazon FSx oluşturun. Her birimin katmanlama politikasını ayarlayın
Herkese. Ham verileri dosya sistemine aktarın. Dosya sistemini EC2 bulut sunucularına bağlayın.

B) Ham verileri depolamak için bir Amazon S3 klasörü oluşturun. Lustre dosyası için Amazon FSx oluşturun
Kalıcı SSD depolama kullanan sistem. İçe aktarılacak Luster dosya sistemi için FSx'i yapılandırma
verileri Amazon S3'e aktarın ve verileri Amazon S3'e aktarın. Dosya sistemini EC2 bulut sunucularına bağlayın.

C) Ham verileri depolamak için bir Amazon S3 klasörü oluşturun. Lustre dosyası için Amazon FSx oluşturun
Kalıcı HDD depolamayı kullanan sistem. İçe aktarılacak Luster dosya sistemi için FSx'i yapılandırma
verileri Amazon S3'e aktarın ve verileri Amazon S3'e aktarın. Dosya sistemini aşağıdakileri kullanarak EC2 bulut sunucularına bağlayın:
Ağ Geçidi Yük Dengeleyici.

D) HDD depolamalı bir Windows Dosya Sunucusu Multi-AZ dosya sistemi için Amazon FSx oluşturun.
Gölge kopyaları etkinleştirin. SMB protokolünü kullanarak dosya sistemini EC2 bulut sunucularına bağlayın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `B`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap B: FSx for Lustre'ün persistent SSD seçeneği alt milisaniye gecikme sunar, Linux EC2 örnekleri Lustre istemcisiyle bağlanabilir ve S3 bağlantısı ham verinin içe aktarılmasını ve sonuçların dışa aktarılmasını sağlar. A yanlıştır çünkü ALL tiering politikası verinin çoğunu kapasite havuzuna taşır ve performansı düşürür; C'deki HDD tek haneli milisaniye gecikme sunar; D Windows ve SMB içindir, HDD kullanır ve Linux iş yükü için uygun değildir.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/fsx/latest/LustreGuide/ssd-storage.html](https://docs.aws.amazon.com/fsx/latest/LustreGuide/ssd-storage.html)
>   - [https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html](https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html)
>   - [https://docs.aws.amazon.com/fsx/latest/LustreGuide/what-is.html](https://docs.aws.amazon.com/fsx/latest/LustreGuide/what-is.html)
>   - [https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/volume-storage-capacity.html](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/volume-storage-capacity.html)

---

---

Soru 63 / 63 · Dosya: 63.jpeg · Soru 65 / 65

Bir şirket, tüm kullanıcılara statik bir web sitesi sağlamak için Amazon EC2 bulut sunucularını kullanmak istiyor
dünya çapında. Şirketin kullanıcılar için gecikmeyi en aza indirmesi gerekiyor. Hangi çözüm
bu gereksinimleri karşılıyor mu?

A) EC2 bulut sunucularını tek bir Erişilebilirlik Alanında kullanın.

B) Aynı AWS Bölgesindeki birden fazla Erişilebilirlik Alanında EC2 bulut sunucularını kullanın.

C) Kaynak olarak yapılandırılmış EC2 bulut sunucularıyla Amazon CloudFront'u kullanın.

D) EC2 bulut sunucularını aynı uç konumunda ve aynı AWS Bölgesinde kullanın.

> [!NOTE]
> ### 💡 Sınav Konusu & Detaylı Çözüm Açıklaması
> - **Doğru Seçenek:** `C`
> - **Kısa Konu Anlatımı & Gerekçe:** Doğru cevap C: CloudFront içeriği dünya genelindeki kenar konumlarında önbelleğe alır ve kullanıcılara daha yakın yerden sunar; EC2 örneği de HTTP(S) orijin olarak kullanılabilir. A tek AZ'de olduğu için hem dayanıklılığı hem de uzak kullanıcılar için gecikmeyi kötüleştirir; B aynı bölgede birden fazla AZ kullanır ama global kullanıcılar için gecikmeyi azaltmaz; D geçersizdir çünkü kenar konumları EC2 örneği barındırmak için kullanılmaz.
> - **Resmi AWS Dokümantasyonu:**
>   - [https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html)
>   - [https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ConfiguringCaching.html](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ConfiguringCaching.html)
