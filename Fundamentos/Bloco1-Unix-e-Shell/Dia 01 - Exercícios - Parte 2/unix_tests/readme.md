Este repositório é referente ao curso da Trybe - Módulo1 - Manipulação e Busca Unix e Bash utilizando linhas de comando no terminal para Buscar/Enumerar linhas e palavras/Mostrar conteúdos por páginas/Manual de comando/Buscar por formato de arquivos determinados de pastas e arquivos.

## 1º Criar diretório unix_tests
 Comando `mkdir unix_tests` e baixar um arquivo curl 
 `curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"`
 
 ## 2º Mostrar conteúdo do arquivo
  Demonstrar todo o conteúdo contido no arquivo de countries.txt - Comando `cat countries.txt`.
  
 ## 3º Mostre conteúdos por pagina
  Listar o conteúdo do arquivo countries.txt de forma paginada até encontrar a Zambia - Comando `less countries.txt` e ir apertando barra de espaço até encontrar o arquivo desejado.
  
 ## 4º Mostrar conteúdos por paginas
  Mas agora usando o comando de buscar para encontrar Zambia - Comando `less countries.txt` ordando assim por paginas e em seguida uso o comando `/Zambia` encontrando o que preciso. Para passar para a próxima página aperte o N do teclado.
  
 ## 5º Buscar por Brazil
  Dentro do arquivo countries.txt buscar pelo nome Brazil - Comando `grep Brazil countries.txt` , esse formato é case sensitive.
  
 ## 6º Buscar por Brazil
  Mas agora utilizando o formato lower case - Comando `grep -i brazil countries.txt`.
  
 ## Criar arquivo phrases.txt
  Criar um arquivo chamado phrases.txt e adicionar frases - Comando `cat > phrases.txt` e adicionar as frases.
 
 ## 7º Buscar por frases
  Buscar por frases no arquivo phrases.txt que não tenha a palavra "fox" - Comando `grep -iv 'fox' phrases.txt` .
  
 ## 8º Números de palavras
  Contar o número de palavras do arquivo phrases.txt - Comando `wc -w phrases.txt` 
 
 ## 9º Números de linhas
  Contar o número de linhas do arquivo phrases.txt - Comando `wc -l phrases.txt`
  
 ## 10º Criar arquivos
  Criar arquivos em formato .tbt e .pdf - Comando touch empty.tbt empty.pdf
  
 ## 11º Listar arquivos do diretório
  Listar todos os arquivos contidos no diretório unix_tests - Comando `ls` .
  
 ## 12º Listar arquivos em formato determinado em diretório
  Listar todos os arquivos em formato .txt do diretório unix_tests - Comando `find *.txt` .
  
 ## 13º Listar arquivos em formato determinado
  Listar todos os arquivos que terminem em formato .txt ou .tbt no computador - Comando `find / -name *.txt` ou `find /-name *.tbt`. Obs: É necessário estar no modo administrador em sua máquina para que possa pesquisar alguns arquivos que necessitam do modo administrador.
  
 ## 14º Acessar manual do comando ls
  Comando `man ls`
