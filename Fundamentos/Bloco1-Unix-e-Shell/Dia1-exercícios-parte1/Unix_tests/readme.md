Este repositório é referente ao curso da Trybe - Módulo1 - Criação de Arquivos e Diretórios Unix e Bash utilizando linhas de comando no terminal para Criar/Mover/Renomear/Apagar/Listar de pastas e arquivos.

## 1º Criar pasta unix_testes
 Comando `mkdir unix_testes` e navegar para dentro da pasta, comando `cd unix_tests`.

## 2º Dentro do ditetório unix-tests
 Criar arquivo trybe.txt: Comando `touch trybe.txt`.

## 3º Criar uma cópia 
 Cópia do arquivo trybe.txt com o nome trybe_backup.txt: Comando `cp trybe.txt trybe_backup.txt` .

## 4º Renomeie o arquivo trybe.txt: 
 Comando `mv trybe.txt trybe_backup.txt` ficando assim somente um arquivo.txt dentro do diretório unix_tests.

## 5º Dentro do diretório unix_tests 
 Criar outro diretório chamado backup: Comando `mkdir backup`.

## 6º Mover o arquio trybe_backup.txt 
 1º Mover o arquivo para o diretório backup - Comando `mv trybe_backup.txt backup`. 
 2º Acessar o diretório backup - Comando `cd backup`, e,  
 3º Mostrar seus arquivos - Comando `ls` .

## 7º Voltando ao diretório anterior
 Voltar para o diretório unix_tests - Comando `cd ..` e,
 criar um novo diretório chamado backup2 - Comando `mkdir backup2`.

## 8º Voltar ao diretório backup 
 Comando `cd backup` e mover o arquivo trybe_backup.txt para o diretório backup2 - Comando `mv trybe_backup.txt /unix_tests/backup2`.

## 9º Apagar o diretório backup
 Comando `rmdir backup`.

## 10º Renomear a pasta backup2 
 Renomear o arquivo com o nome backup: Comando `mv backup2 backup`.

## 11º Mostrar todo path 
 Chegando até seu diretório - Comando `pwd`  /unix_tests/backup e,  mostrar todos seus arquivos - Comando `ls`, cconstando apenas o arquivo trybe_backup.txt

## 12º Apagar o diretório backup 
 Comando `rm -r backup`. OBS: Este comando apaga o diretório com todos os seus conteúdos contidos. 

## 13º Limpar meu terminal 
 Comando `clear` .

## 14º Criar arquivo skills.txt
 Comando `cat > skilss.txt` e escrever seu conteúdo e, mostrando as cinco primeiras skills do arquivo skills.txt - Comando `head -5 skills.txt`.

## 15º Mostrar as quatro últimas skills do arquivo
 Comando `tail -4 skills.txt`.

## 16º Apagar todos os arquivos em formato .txt 
 Comando `rm *.txt`.
