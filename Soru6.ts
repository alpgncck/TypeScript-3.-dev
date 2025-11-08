class MemoryCache<K, V> {
  private data = new Map<K, V>();

  set(key: K, value: V): void {
    // veriyi ekler
    this.data.set(key, value);
  }

  get(key: K): V | undefined {
    // veriyi alır
    return this.data.get(key);
  }

  clear(): void {
    // tüm veriyi temizler
    this.data.clear();
  }
}

const cache = new MemoryCache<string, number>();
cache.set("user:1_score", 100);
console.log(cache.get("user:1_score"));
cache.clear();
console.log(cache.get("user:1_score"));

// BEKLENEN ÇIKTI:
// 100
// undefined
