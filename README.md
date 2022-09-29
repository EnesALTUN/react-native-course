# React Native

- Ekranda bir metin göstermek istiyorsak metni Text componenti içerisine, Text componentini ise View componentinin içerisine yerleştirmeliyiz.

## React <> React Native Farkları
| React         | React Native  |
| ------------- |:-------------:|
| onClick       | onPress       |

## Scrollable

Bir listeye scroll özelliği eklemek için **```<ScrollView> … </ScrollView>```** komponenti kullanılır. Fakat bu component lazy loading yapmadığından büyük boyutlu listelerde performans kaybına yol açmaktadır. Bunun önüne geçmek için (Scrool’ a bağlı olarak lazy loading yapabilmek)

```
<FlatList
    data={Liste verisi buraya yazılır}
    renderItem={(itemData) => (
        <View>
            <Text>{itemData.item}</Text>
        </View>
    )}
    alwaysBounceVertical={false}  // Tüm liste görünüyorsa scroll özelliği kapalı
/>

// renderItem içerisindeki itemData propertysi 3 özelliğe (item, index, seperators) sahiptir.

// Burada data içerisine verdiğimiz liste object tipinde olmalı ve key propertysi içermelidir.
// Eğer key propertysi yerine farklı bir isimdeki propertyi işaret etmek istiyorsak bu değer 
// Flatlist componentine keyExtractor propsu içerisinde verilmelidir.

// keyExtractor={(item, index) => item.id}
```

## Touchable & Pressable

Bir view' e tıklama eventi eklemek isteniyorsa react-native kütüphanesinde Touchable veya Pressable komponentleri kullanılır. Fakat touchable komponentinin kullanımı eskide kalmıştır.
> **NOT:** Android ve IOS cihazlarda press style' ında farklılıklar vardır.
