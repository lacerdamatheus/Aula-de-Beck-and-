-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema loja_virtual
-- -----------------------------------------------------
-- Banco de dados feito de teste de aula sobre a loja virtual
DROP SCHEMA IF EXISTS `loja_virtual` ;

-- -----------------------------------------------------
-- Schema loja_virtual
--
-- Banco de dados feito de teste de aula sobre a loja virtual
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `loja_virtual` DEFAULT CHARACTER SET utf8 ;
SHOW WARNINGS;
USE `loja_virtual` ;

-- -----------------------------------------------------
-- Table `idtb_produto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `idtb_produto` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `idtb_produto` (
  `ididtb_produto(4)` INT NOT NULL AUTO_INCREMENT,
  `nome_produto` VARCHAR(45) NOT NULL,
  `descicao_produto` VARCHAR(150) NOT NULL,
  `preco` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ididtb_produto(4)`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `tb_pedido`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tb_pedido` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `tb_pedido` (
  `idtb_pedido` INT NOT NULL AUTO_INCREMENT,
  `data_pedido` DATE NOT NULL,
  `idtb_produto_ididtb_produto(4)` INT NOT NULL,
  PRIMARY KEY (`idtb_pedido`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `tb_cliente`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tb_cliente` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `tb_cliente` (
  `idtb_cliente` INT NOT NULL AUTO_INCREMENT,
  `nome_cliente` VARCHAR(150) NOT NULL,
  `rua` VARCHAR(200) NOT NULL,
  `bairro` VARCHAR(100) NOT NULL,
  `cep` VARCHAR(9) NOT NULL,
  `tel_comercial` VARCHAR(13) NULL,
  `tb_clientecol` VARCHAR(13) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `tb_pedido_idtb_pedido` INT NOT NULL,
  PRIMARY KEY (`idtb_cliente`, `tb_pedido_idtb_pedido`))
ENGINE = InnoDB;

SHOW WARNINGS;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
