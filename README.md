# SON - Iniciando com Angular2 - Versão 7 
  Angular é uma plataforma de desenvolvimento para a construção de aplicativos Web e dispositivos móveis usando TypeScript / JavaScript e outros linguagens.
  - Site ```https://angular.io```
  - Documentação ```https://angular.io/api```
  - Repositório ```https://github.com/angular/angular```
  - Repositório Team ```https://github.com/angular/angular```
  - ChangeLo - ```https://github.com/angular/angular/blob/master/CHANGELOG.md```
  - Quick Start ```https://angular.io/start```

## Repositório do projeto
- Repositório GIT ```https://github.com/emiliojva/emiliojva-son-angular2-sete```  
  

## Notas da Versão 
  - Lançada meado de outubro
  - Adição da feature virtual scroll
  - Adição da feature CLI prompts / angular material commands
  - Adição da Drag and Drop feature
  
## Instalação - Criação de novo projeto (Gerando aplicação Angular)
  - Referencia ```https://angular.io/guide/setup-local```
  - Pré-requisitos
    - NodeJS instalado
      * Em nodejs.org/en/download 
      * Windows - Baixar pacote .exe
      * Linux - executar apt get install nodejs -y  
      * Checar versão do node e do gerenciador de pacotes
        ```
        node -v
        npm -v 
        ```
  - Instalação do Angular (via node npm cli / need root user)
    ```
    npm install -g @angular/cli
    ```
  - Checar versão e listar particularidades
    ```
    ng version
    ```
  - Update - Caso esteja com um projeto em uma versão anterior. varre aplicação e lista dependencias legadas
    ```
    ng update --all 
    // em caso de erro rodar novamente
    ```
  - Usando Angular CLI
    ```
    ng new <nome-do-projeto>
    ```
    - irá perguntar ?
      * Trabalhar com Rotas?
      * Qual tipo de folha de estilos trabalhar
  - Testando aplicação (build and run http://localhost:4200)
    ```
    ng serve
    ||
    ng serve --open
    ```


## Conhecimento prévio desejável:
  * TypeScript ```https://www.typescriptlang.org/docs/home.html```
  * Javascript ```https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript```
  * HTML ```https://developer.mozilla.org/docs/Learn/HTML/Introduction_to_HTML```
  * CSS ```https://developer.mozilla.org/docs/Learn/CSS/First_steps```
  * Getstared ```https://angular.io/start```
  
## Componentes
  Um componente controla um pedaço de tela chamado ```view```. Por exemplo, componentes individuais definem e controlam suas próprias views
  - Referência ```https://angular.io/guide/architecture-components```
  - Metadados @Component define uma simples classe como um Componente em angular:
    ```
    @Component({
      selector:    'app-hero-list',
      templateUrl: './hero-list.component.html',
      providers:  [ HeroService ]
    })
    export class HeroListComponent implements OnInit {
    /* . . . */
    }
    ```
  - Angular sempre trabalha com uma hieraquia de componentes:
    ```
      -- AppComponent
        -- EmployeeListComponent
          -- EmployeeAddComponent
        -- NavbarComponent
          (...)
    ```
  
  - Criando um componente (via ng cli) (nome dos Components no kebab-style) (g: generation)
    ```
    ng g component employee-list
    ```
  - View Html do Component Employee-list
    ```
    <section>
      <employee-list>1</employee-list>
      <employee-list>2</employee-list>
      <employee-list>3</employee-list>
      <employee-list>4</employee-list>
    </section>
    ```
  - Dentro do html do component employee-list, edito o html e o mesmo será replicado onde o componente for chamado na forma:
    ```
    <employee-list></employe-list>
    ```
  - O componente Raiz chama-se <app-root></app-root> contido no index.html por default. E pode ser manipulado através do arquivo app.component.(html|scss|ts) na pasta src/app. O app.component é importado e inicializado pelos módulo ```platformBrowserDynamic().bootstrapModule(AppModule)``` que dá sentido a aplicação

## Entendendo melhor os componentes
  - Bootstrap do Angular:
    * Um arquivo typescript importa e carrega os módulos da platformBrowser browser dentro de ```main.ts```
    * Que por sua vez chama o ```app.module``` com o método ````platformBrowserDynamic().bootstrapModule(AppModule```
    * Importa o @decoration ```ngModule``` no package ```@angular/core```
    * Configura e importa o app.module(modulo principal)
    * E no ```@ngModule()``` ele carrega na chave bootstrap o ```AppComponent```

## Data Binding 
  - Ligações entre Model e View
  - Referência ```https://angular.io/guide/architecture-components#data-binding```
  - {{ }} - Interpolação
    * Funciona com document.write() do JS
    * {{ 2+2 }}
  - [] - Data Binding
    * Valores das propriedades do Model podem ser acessadas.
    * <input [value]="modelPropValue">
  - () - Event Binding 
    * Cria um ligação da view para o model. Evento emitidos no html podem chamar métodos do Model
    * <input (click)="callMethodFromModel($event)">
  - [(ngModel)] - Two way data binding (precisa importar FormModule em app.module )
  
## Disparando eventos
  Conhecido como Event Binding. Usa-se a notaçao ```()``` para definir a comunicação com algum método do Model.
  - Para capturar o Handle do evento passa a palavra reservada ```$event``` com paramentro do método chamado no elemennto html
  - Exemplo adicionando empregado e exibindo sem pipe json.
    ```
    // model EmployeeNew
    employees:Array<any> = [];
    addEmployee(event){
      this.employees.push(this.name);
      console.log(this.employees , event.target);
    }

    echo(){
      return JSON.stringify(this.employees);
    }

    // employee-new.component.html
    <input type="text" [(ngModel)]="name"/>
    <button type="button" (click)="addEmployee($event)">adicionar</button>
    {{ echo() }}
    ```
  - No two way data binding poderia se usar uma propriedade com outro nome para capturar o valor do input. Mas fica muito mais fluído e performatico atribuir a propriedade no proprio ngModel. Poderia fazer desta forma também:
    ```
    <input type="text" [value]="name" [(ngModel)]="name"/>
    ```
  
  ## Lidando com coleção de dados

  - Adicionando mockFile para ser compartilhado com dois componentes
    ```
    export interface Employee
    {
      name: string;
      salary: number;
    }
    export const employees: Array<Employee> = [];
    ``` 
  - Importando módulo mock.employees Adicionando novo empregado (EmployeeNew):
    ```
    import {employees as employeesMock, Employee} from '../mocks/employees';
    employees:Array<Employee> = employeesMock;
    addEmployee(event){
      // this.employees.push(this.name);
      this.employees.push({name:this.name, salary:this.salary});
      console.log(this.employees);
    }
    ```
  - Listando dados adicionados na coleção mock.employees (View EmployeeList)
    ```
    <div class="employee-card" *ngFor="let emp of employees">
      <div [innerHTML]=" 'Name:'+ emp.name "></div>
      <div [innerHTML]=" 'Salary:'+ emp.salary "></div>
    </div>

    ```
## Brincando com propriedades reativas
  - Reatividade das propriedades DOM do elemento. Modificando estilos inline
    ```
    [style.color]="getSalaryColor()"
    ```
  - Reatividade das classes html de um elemento. Modificando estilos por critério de classes definidas. ex: .salary-expansive {color:green} 
    ```
    [ngClass]="{
                    'salary-expansive':emp.salary>1000,
                    'salary-cheap':emp.salary<1000
                }"
    ``` 
## Mostrar ou esconder elementos
  - Diretiva ```[hidden]``` aplica um display:none no elemento de acordo com o boolean retornado na expressão
    ```
    <div [hidden]="employee.salary<1000">
      <label for="bonus">Bonus:</label>
      <input type="number" [(ngModel)]="employee.bonus"/>
    </div>
    ```
## Camada de serviços
  Service ou ServiceShare é a abordagem elegante e direta para compartilhar informações entre dois ou mais componentes.
  - Criando um serviço via angular cli
    ```
    npm run ng g service serviceName
    ```
  - Uma classe passa a ser um Service com uso do @decoration @Injectable() acima da classe.
    ```
    /*Service ou ServiceShare*/
    @Injectable({
      providedIn: 'root' // Elimina a necessidade de importar no NgModule no metadados Providers
    })
    export class EmployeeService {}
    ``` 
  - Exemplo de um service provider
    ```
    import { Injectable } from '@angular/core';

    export interface Employee
    {
      name: string;
      salary: number;
      bonus?:number;
    }

    /*Service ou ServiceShare*/
    @Injectable({
      providedIn: 'root' // Elimina a necessidade de importar no NgModule no metadados Providers
    })
    export class EmployeeService {

      private _employees: Array<Employee> = [];

      constructor() { }

      addEmployee(employee: Employee){
        let copy = Object.assign({},employee);
        // this.employees.push(this.name);
        copy.bonus = copy.salary >= 1000 ? 0 : copy.bonus;
        this._employees.push(employee);
      }

      get employees(){
        return this._employees;
      }
    }

    ```

## Gerando aplicação de produção
  - ng serve faz está ação automaticamente.
  - Para publicar a aplicação basta gerar os arquivos .js com o comando:
  ```
  npm run ng build
  ```
  - Após gerar build o bundled fica na pasta dist/ e testar com o pluigin do node http-server
