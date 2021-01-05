DROP DATABASE IF EXISTS grocerylist2;

CREATE DATABASE grocerylist2;

USE grocerylist2;

create table groceries (
  id int not null auto_increment primary key,
  item varchar(20) not null,
  qty int not null
)