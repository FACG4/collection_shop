BEGIN;

DROP TABLE IF EXISTS users, goods , userGoods CASCADE ;

CREATE TABLE goods (
  id serial PRIMARY KEY,
  goodsName VARCHAR(50) NOT NULL,
  imgUrl  TEXT NOT NULL,
  price INTEGER NOT NULL,
  description VARCHAR(50) NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  fullName  VARCHAR(50) NOT NULL,
  firstName  VARCHAR(50) NOT NULL,
  lastName  VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  hashpassword VARCHAR(250) NOT NULL
);

CREATE TABLE userGoods (
  userId INTEGER REFERENCES users(id) NOT NULL,
  goodsId INTEGER REFERENCES  goods(id) NOT NULL
);



INSERT INTO goods(goodsName, imgUrl,price, description) VALUES
('Tshirt', 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05491132.png',50, 'have many colers and very smart'),
('hat','https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05491132.png',20,'aproperat for sun and very simple'),
('LapTop','https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05491132.png', 800 , 'have many colers '),
('Tshirt','https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05491132.png', 50,'have many colers and very smart'),
('Tshirt', 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05491132.png',50, 'have many colers and very smart'),
('hat','https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05491132.png',20,'aproperat for sun and very simple'),
('LapTop','https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05491132.png', 800 , 'have many colers '),
('Tshirt','https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05491132.png', 50,'have many colers and very smart'),
('Tshirt', 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05491132.png',50, 'have many colers and very smart'),
('hat','https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05491132.png',20,'aproperat for sun and very simple'),
('LapTop','https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05491132.png', 800 , 'have many colers '),
('Tshirt','https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05491132.png', 50,'have many colers and very smart');



INSERT INTO users ( fullName, firstName,  lastName, email, hashpassword) VALUES
('razan mohamed abu tawaheena','razan','tawaheena','rozamohamed9548@gmail.com','144545'),
('balsem faysal alashi','balsam','alashi','balsam@gmail.com','14741'),
('inas hani tbail','inas','tbail','inas@gmail.com','52525'),
('ishak','ii','ii','ishak@gmail.com','52525');

INSERT INTO userGoods (userId , goodsId) VALUES
(1 , 1),
(1 , 2),
(1 , 3),
(1 , 4),
(2 , 1),
(2 , 2),
(2 , 3),
(2 , 4),
(3 , 1),
(3 , 2),
(3 , 3),
(3 , 4),
(4 , 1),
(4 , 2),
(4 , 3),
(4 , 4);

COMMIT;
