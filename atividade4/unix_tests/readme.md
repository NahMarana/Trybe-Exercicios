Este repositório é referente o curso da Trybe - modulo 1 - Permissões do Unix e Bash utilizando linhas de comando para mudar as permissões de determinada pasta.

## 1º Criar diretório unix_tests
 Comando mkdir `unix_tests` e navegar até a pasta - Comando `cd unix_tests` .
 
 ## 2º Verificar permissões dos arquivos 
  Verificar as permissões dos arquivos contidos na pasta unix_tests - Comando `ls -l`.
  
 ## 3º Mudar permissões
  Mudar a permissão do arquivo bunch_of_things.txt para que todos os usuário possam ter acesso a escrita - Comando `chmod a+rw bunch_of_things.txt` e verificar se está correto - Comando `ls -l` o resultado final ex: - rw-rw-rw- bunch_of_things.txt.
  
 ## 4º Tirar permissões
  Tirar a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários - Comando `chmod a-w bunch_of_things.txt` e verificar se está correto - Comando `ls -l` o resultado final ex: - r-r-r- bunch_of_things.txt.
  
 ## 5º Voltar permissões
  Voltar a permissão de escrita somente para usuário do arquivo bunch_of_things.txt como informado inicialmente - Comando `chmod 644 bunch_of_things.txt`. Resultaod final ex: -rw-r-r- bunch_of_things.txt.
