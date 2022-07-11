Este repositório é referente ao curso da Trybe - Módulo1 - Input e Output Unix e Bash utilizando linhas de comando no terminal para Criar/Copiar/Ordenar/Adição de Itens em pastas e arquivos.

## 1º Criar diretório unix_tests
 Comando `mkdir unix_tests` e navegar ate a pasta - comando `cd unix_tests`.
 
## 2º Criar arquivo skills2.txt
 Criar aquivo skills2.txt e adicionar alguns valores dentro dele cada um em uma linha - Comando `cat > skills2.txt` e acrescentar valores e para finalizar apertar no comando `ctrl d`.
 
## 3º Adicionar mais itens
 Adicionar mais cinco itens no arquivo skills2.txt - Comando `cat >> skills2.txt` e incluir os itens, finalizar apertar no comando `ctrl d`, e listar o arquivo de forma ordenada - Comando `sort skills2.txt`.

## 4º Quantidade de linhas
 Mostrar quantas linhas possui no arquivo skills2.txt - Comando `wc -l skills2.txt`.
 
## 5º Criar novo arquivo de ordem alfabética
 Criar um arquivo novo chamado top_skills.txt contendo dentro as três primeiras palavras de forma ordenada do arquivo skills2.txt - Comando `sort <skills2.txt | head -3 > top_skills.txt`.
 
## 6º Criar arquivo 
Criar arquivo chamado phrases2.txt e adicionar frases - Comando `cat > phrases2.txt` e adicionar frases e finalizar apertar no comando `ctrl d`.

## 7º Números de linhas
 Mostrar a quantidade de linhas que contenham as letras "br" - Comando `grep -ic 'br' phrases2.txt`

## 8º Números de linhas
 Mostrar a quantidade de linhas que NÂO contenham as letras "br" no arquivo phrases2.txt - Comando `grep -iv 'br' phrases2.txt | wc -l`
 
## 9º Adicionar países no arquivo
 Adicionar no arquivo phrases2.txt mais dois países no final do arquivo - Comando 'cat >> phrases2.txt` e finalizar apertando no comando `ctrl d` .
 
## 10º Criar arquivo novo com conteúdos de outros arquivos
 Criar um arquivo chamado bunch_of_things.txt contendo os conteúdos dos arquivos phrases2.txt e countries.txt - Comando `cat phrases2.txt countries.txt >> bunch_of_things.txt` .
 
## Ordene o arquivo bunch_of_things.txt
 Comando `sort < bunch_of_things.txt` .
