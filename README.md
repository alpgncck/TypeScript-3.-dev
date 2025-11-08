## Aşama 1 - Runtime Çıktılı Sorular

Soru 1: 

İki farklı tipte diziyi tek bir dizide topladım. Spread operatörü sayesinde hem diziler birleştirildi hem de tip güvenliği sağlandı.

Soru 2: 

`Car` ve `Truck` sınıflarını union tip olarak kullandım. `in` operatörü ile yalnızca mevcut metotlara erişim sağladım.

 Soru 3: 
`Logger` sınıfında `private` alan tanımladım. Sadece sınıf içerisinden erişilebiliyor, dışarıdan erişim TypeScript ile engellenmiş oldu.

Soru 4: 
`getProperty` fonksiyonunu generic yapıp `keyof` ile property tipi çektim. Bu sayede hangi property seçilirse doğru tip otomatik olarak geliyor.

Soru 5: 
Arama fonksiyonunda parametre tipine göre farklı davranış sağladım. `number` için `find`, `string` için `filter` kullandım.

 Soru 6: 
`MemoryCache<K,V>` adında bir generic sınıf oluşturdum. `Map` ile key-value işlemleri yaptım ve `set`, `get`, `clear` metodlarını ekledim.

Soru 7: 
Kullanıcı verilerini kısmi olarak güncellemek için `Partial` ve `Readonly` kullandım. Spread operatörü ile eski ve yeni verileri birleştirdim.

 Soru 8: 
İstediğimiz kadar parametre alabilen bir fonksiyon yazdım. Rest parametreleri `reduce` ile topladım.

 Soru 9: 
`Shape` abstract sınıfını tanımladım ve `Circle` sınıfıyla kalıtım uyguladım. `getArea` metodunu override ettim.

Soru 10: 
`MathHelper` sınıfında `static` alan ve metodlar tanımladım. Sınıfı new’lemeden direkt kullandım.

## Aşama - 2 Runtime Çıktılı Sorular

 Soru 11: 
`UnwrapPromise<T>` conditional type ile Promise içindeki tipi çıkardım. Eğer tip Promise değilse kendisini döndürüyor.

 Soru 12:
Fonksiyon dönüş tipini almak için `GetReturnType<T>` kullandım. `infer R` ile dönüş tipini çıkarıyoruz.

 Soru 13: 
Objenin tüm property’lerini getter metoduna çevirdim. Template literal ile `get${Capitalize<...>}` formatında metodlar oluşturdum.

Soru 14:
Nested objeler de dahil tüm alanları readonly yaptım. Recursive mapped type ile her seviyeyi salt okunur hale getirdim.

 Soru 15: 
Sadece belirli tipteki property’leri seçmek için `PickByValueType<T,V>` kullandım. Conditional mapped type ile filtreleme yaptım.

Soru 16: 
`UserID` ve `PostID` tiplerini birbirinden ayırmak için `Brand<K,T>` kullandım. Böylece birbirine atanamıyorlar ama string olarak kullanılabiliyor.

Soru 17: 
Union tiplerden belirli değerleri çıkarmak için `FilterUnion<T,U>` tanımladım. T, U’ya uyuyorsa `never` döndürerek çıkardım.

 Soru 18: 
Fonksiyonun son parametresini almak için `infer` ve tuple destructuring kullandım. `LastParameter<T>` ile son parametre tipi çıkarılıyor.

Soru 19: 
Dizi tipinden eleman tipini almak için `Flatten<T>` tanımladım. Dizi değilse tip olduğu gibi dönüyor.

 Soru 20:
Route stringlerinden parametreleri çıkarmak için recursive conditional type kullandım. `/users/:id` → `{ id: string }` dönüşümü yaptım.
