type User = { id: number; name: string; email: string };
const users: User[] = [
  { id: 1, name: "Ali", email: "ali@mail.com" },
  { id: 2, name: "Ayşe", email: "ayse@mail.com" },
];

function updateUser(
  id: number,
  updates: Partial<User>
): Readonly<User> | undefined {
  const user = users.find(u => u.id === id);
  if (!user) return undefined;

  // Object.assign ile güncelleme
  const updatedUser = Object.assign({}, user, updates);

  // users dizisinde eski kullanıcıyı güncelle
  users.forEach((u, i) => {
    if (u.id === id) users[i] = updatedUser;
  });

  return updatedUser;
}

console.log("Eski: ", users[0]);
const updatedUser = updateUser(1, { email: "ali.yeni@mail.com" });
console.log("Yeni: ", updatedUser);

// BEKLENEN ÇIKTI:
// Eski:  { id: 1, name: 'Ali', email: 'ali@mail.com' }
// Yeni:  { id: 1, name: 'Ali', email: 'ali.yeni@mail.com' }
