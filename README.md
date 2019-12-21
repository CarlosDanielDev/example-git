# Git & Github


## Commit

***Quando devemos realizar um commit ?***

Essa é uma pergunta muito importante, os commits não devem ser um conjunto de complementos de uma `feture`,
um commit deve ser feito quando concluímos uma `funcionalidade`.

***Como commitar ?***

Os commits aqui devem seguir um padrão, `prefix: description`, este é o padrão de um commit, abaixo vou listar os prefixos que usaremos para realizar os commits, e logo após, alguns exemplos de commit.

### Prefix

* `chore`
  * `prefix` para commits relacionados a alguma `tarefas`, ou expansão de uma `feature`, que não necessariamente é uma coisa que vai afetar o funcionamento do sistema.
* `feat`
  * `prefix` para commits relacionados à `features`(novas funcionalidades).
* `fix`
  * `prefix` para commits relacionados a resolução de `bugs`.
* `test`
  * `prefix` para commits da criação de novos testes.
  
### Prefix ex:

1 *chore* :
```bash
git commit -m "chore: adiconar campo cpf no cadastro de usuarios"
```
2 *feat* :
```bash
git commit -m "feat: adicionar nova tela de dashboard"
```
3 *fix* :
```bash
git commit -m "fix: cadastrar de usuários"
```
3 *test* :
```bash
git commit -m "test: criar teste cadastro de usuarios"
```

### Description

As decrições de um `commit` devem ser bem claras, se faça 2 perguntas antes de adicionar a descrição de um commit:

* Se eu aplicar esse `commit` ele vai ...
* Se eu utilizar esse `commit` ele vai ...

Tendo em mente essas perguntas fica simples descrever um commit.

## Branch

***Quando devo criar uma nova branch ?***

Devemos sempre cria uma nova `branch` quando vamos trabalhar dentro de uma nova `feature`, quando vamos trabalhar com um conjunto de `commits` ou quando não sabemos quanto tempo vamos levar para concluir a tarefa passada.

***Como eu devo criar uma branch ?***

As `branches` devem seguir quase o mesmo padrão de um commit, porém ao invés de usarmos uma `description`, vamos criar um titulo, abaixo vou dar alguns exemplos de como criar uma `branch` seguindo as boas práticas.

Padrão de nomes de branch: `prefix/title`.

### Branch Ex:

* `features`:
  * `feature/cadastro-usuarios`
```bash
git checkout -b feature/cadastro-usuarios
```
* `chores`:
  * `chore/refatorar-relatorio`
```bash
git checkout -b chore/refatorar-relatorio
```
* `fixes`:
  * `fix/cadastro-usuarios`
```bash
git checkout -b fix/cadastro-usuarios
```
* `tests`:
  * `test/implementacao-servidor-aws`
```bash
git checkout -b test/implementacao-servidor-aws
```

## Push

***Quando devo realizar um push ?***

Um `push` deve ser feito ao término de uma tarefa/feature/fix.

***Como devo enviar um push ?***

Um `push` deve ser enviado com a `branch` do desenvolvimento atual, abaixo segue um exemplo de envio de `push`, mas o padrão de envio de um psuh é `git push <remote-name> <nome-da-branch-atual>`

### Push Ex:

```bash
git push origin feature/cadasto-de-usuarios
```

Assim, temos a comprrensão do que está sendo enviado, e fica masi fácil de reverter caso ocorra algo inesperado.


## Pull Request

A `pull-request` fica muito simples seguindo todos as práticas acima.

Uma `pull-request` só deve ter o nome do `commit` caso só exista um `commit`, caso haja mais de um `commit`,
antes de realizar o `merge` da `pull-request` enviada, é importante desginar um membro da equipe pra fazer o `code-review` da `pull-request`. 

## Conflitos

Essa é uma parte que muitos `devs` sentem medo ou apreensão por não saber o quão simples é de se resolver um conflito utilizando o `VSCode`, abaixo segue alguns prints e cada um deles tem uma descrição.

### 001

![Imagem1](https://i.imgur.com/UNP0zcb.png)

Aqui temos um exemplo de conflitos,
Destacado em verde, temos a atualização da nossa maquina, e destacado em roxo temos o trecho de código como está no repositório oficial.

![Imagem2](https://i.imgur.com/6aQ3vpo.png)

Ao observarmos esta imagem, acima do nome `HEAD`, temos uma opção clicável com o seguinte texto: `Accept Current Change`, se clicarmos nesta opção isso acontecerá:

![Imagem3](https://i.imgur.com/8BQaEii.png)


> Ele aplica as alterações destacadas em verde.

### 002

![Imagem4](https://i.imgur.com/ZdNkCjo.png)

Aqui temos a segunda opção, `Accept Incomming Change`, que significa aceitar as atualizações destacadas em roxo(que é como está no repositório oficial), se clicarmos nessa opção isso acontecerá:

![Imagem5](https://i.imgur.com/WSaZh6z.png)

> Ele aplica as atualizações que vieram do repositório master.


### 003

![Imagem6](https://i.imgur.com/NVpZOF0.png)

A opção `Accept Both Changes` une as duas alterações:

![Imagem6](https://i.imgur.com/oYmkkd9.png)

> Ele aplica as duas mudanças.

### 004

![Imagem7](https://i.imgur.com/mwpmvkN.png)

A opção`Compare Changes` abre uma aba no `VSCode` para que você possa comprar as alterações e decidir o que fazer.

![Imagem8](https://i.imgur.com/zcOZGHR.png)

> Os padrões adotados aqui, não sã necessáriaente obrigatórios, você é livre pra criar seus proprios padrões, mas é importante seguir-los depois de definidos.