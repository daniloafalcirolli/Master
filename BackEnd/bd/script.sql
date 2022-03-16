drop database if exists senai;
create database senai CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
use senai;

create table usuarios(
    id_usuario  integer primary key not null auto_increment,
    nome varchar(75) not null,
    telefone varchar(20) not null,
	cargo varchar(15) not null,
	email varchar(30) not null,
	senha varchar(20) not null,
	cpf varchar (20) not null,
	foto varchar (longbobl) not null
);

create table reservas(
    id_reserva integer primary key not null auto_increment,
    sala varchar (10) not null,
	data Date not null,
	duracao integer not null,
	constraint id_reserva_fk foreign key (id_reserva) references usuarios (id_usuario)
	
);

insert into usuarios (id, nome, telefone, cargo, email, senha, cpf, foto, resetsenha) values
(DEFAULT,'DANILO FALCIROLI', '(19)9.1122-3344','DIRETOR', 'danilo@senai.com', '123','11122233344', ''),
(DEFAULT,'CARLOS FALCIROLI', '(19)9.1122-3344','PROFESSOR', 'carlos@senai.com', '123','11122233344', ''),
(DEFAULT,'PEPA PIG', '(19)9.1122-3344','PROFESSOR', 'pepa@senai.com', '123','11122233344', '');


insert into reservas(id, data, sala, duracao, id_usuario) values
( 1, curdate(), '5', 60, 1),
( 2, curdate(), '6', 120, 2),
( 3, curdate(), '7', 60, 3);


select * from usuarios;
select * from reservas;


show tables;