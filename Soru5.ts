type User = { id: number; name: string; email: string };
const users: User[] = [
  { id: 1, name: "Ali", email: "ali@mail.com" },
  { id: 2, name: "Ayşe", email: "ayse@mail.com" },
];

// overload: id için ve isim için
function search(param: number): User | undefined;
function search(param: string): User[];

// implementasyon
function search(param: number | string): User | User[] | undefined {
  // number ise tek kullanıcı bulur
  if (typeof param === "number") return users.find(u => u.id === param);
  // string ise isimle filtreler
  else return users.filter(u => u.name === param);
}

console.log(search(1));
console.log(search("Ayşe"));
