Este repositório é referente o curso da Trybe - modulo 1 - Processos e Jobs do Unix e Bash utilizando linhas de comando aprendendo a usar sleep/background/kill de determinada pasta.

## 1º Liste todos os processos
 Comando `ps`.
 
## 2º Comando sleep &
 Criar um comando sleep 30 em background - Comando sleep 30 &
 
## 3º PID e Fim de execução
 Use a listagem para encontrar o PID - Comando `ps` ex: PID 15956 e terminar sua execução - Comando `kill 15956`.
 
## 4º Comando sleep
 Criar um sleep 30 - Comando `sleep 30` e agora faça que ele execute em background - 1º Tenho que suspenpender o sleep 30 com o comando `ctrl z` e em seguida voltamos a executalo  - Comando `bg` assim executando o comando sleep 30 agora em background.
 
## 5º Criar processo em background sleep 300
 Comando `sleep 300 &` .
 
## 6º Criar mais processos
 Criar mais dois processos rodando o comando sleep por 200 e 100 segundos respectivamente, mas agora em foreground e em seguida suspender - Comando `sleep 200` quando executar apertar o comando `ctrl z` para suspender o processo em seguida criar outro pocesso `sleep 100` e assim que executar apertar o comando `ctrl z` para suspender.

## 7º Verificar processos em jobs
 Verificar os processos em execução com o comando `jobs` ex:[10] e em seguida transformalo em foreground com o comando `fg %10` e suspendê-lo com o comando `ctrl z`.
 
 ## 8º Retornando a execução 
  Retornar a execução do processo sleep 100 em background - Comando `bg %9`
  
 ## 9º Finalizando processos
  Finalizandos todos os processos sleep - Comando `kill -9 %8` `kill -9 %9` e `kill -9 %10` um por vez, finalizando todos os processos sleep.
