#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
TRUNCATE TABLE messages RESTART IDENTITY;

CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  message TEXT NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, message, date) 
VALUES
('Petra-78', 'Hello!', '2025-11-21 14:42'),
('Petra-78', 'Welcome to my Mini Message Board! Write a note, share your thoughts, or just leave a quick hello :)', '2025-11-21 14:42'),
('Muffin', 'Hellooo!', '2025-11-21 16:32'),
('Szaffi', 'Meow!', '2025-11-21 17:13'),
('marun', 'Hi!', '2025-11-21 18:20'),
('Muffin', 'blueberry muffins', '2025-11-21 20:57'),
('Szaffi', 'Mau mo.', '2025-11-22 08:24'),
('Pumpkin', 'Miu?', '2025-11-22 15:16'),
('Loaf', 'Mao', '2025-11-22 15:16'),
('hicham', 'siuuuuuuu', '2025-11-22 20:47'),
('hicham', 'sw', '2025-11-22 23:26'),
('hicham', 'wqd', '2025-11-23 07:35'),
('hicham', 'ziummmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmsssssssssssssssssssssssfffffffffffffffffffffffffffffffff', '2025-11-23 10:40'),
('Kutas Andrea', 'Nagyon szupi lett, ügyes vagy 😍😍😍', '2025-11-24 07:00'),
('Penny', 'Igen, csatlakozom az előttem szólóhoz. Nagyon menő lett 😁😁😁💕', '2025-11-24 07:01'),
('Bogyó', 'Szerintem is jó lett Tesa 😂❤️', '2025-11-24 07:01'),
('Dawood', 'german?', '2025-11-24 17:42');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://petra:Petra2004*@localhost:5432/top_users",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
