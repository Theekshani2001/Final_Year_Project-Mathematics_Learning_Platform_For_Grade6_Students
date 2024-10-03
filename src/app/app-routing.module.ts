import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavigationComponent} from "./Components/navigation/navigation.component";
import {HomeComponent} from "./Components/navigation/home/home.component";
import {ContactComponent} from "./Components/navigation/contact/contact.component";
import {LessonsComponent} from "./Components/navigation/lessons/lessons.component";
import {GamesComponent} from "./Components/navigation/games/games.component";
import {LoginComponent} from "./Components/auth-context/login/login.component";
import {SignupComponent} from "./Components/auth-context/signup/signup.component";
import {AuthContextComponent} from "./Components/auth-context/auth-context.component";
import {DashboardComponent} from "./Components/dashboard/dashboard.component";
import {WelcomeComponent} from "./Components/dashboard/welcome/welcome.component";
import {GameDashboardComponent} from "./Components/dashboard/game-dashboard/game-dashboard.component";
import {WelcomeGame1Component} from "./Components/dashboard/welcome/welcome-game1/welcome-game1.component";
import {Game1Component} from "./Components/dashboard/game-dashboard/game1/game1.component";
import {WelcomeHomeComponent} from "./Components/dashboard/welcome/welcome-home/welcome-home.component";
import {GameHomeComponent} from "./Components/dashboard/game-dashboard/game-home/game-home.component";
import {LevelsG1Component} from "./Components/dashboard/game-dashboard/game1/levels-g1/levels-g1.component";
import {G1ContentComponent} from "./Components/dashboard/game-dashboard/game1/g1-content/g1-content.component";
import {G1EasyComponent} from "./Components/dashboard/game-dashboard/game1/g1-content/g1-easy/g1-easy.component";
import {G1MediumComponent} from "./Components/dashboard/game-dashboard/game1/g1-content/g1-medium/g1-medium.component";
import {G1HardComponent} from "./Components/dashboard/game-dashboard/game1/g1-content/g1-hard/g1-hard.component";
import {G1EasyContent1Component} from "./Components/dashboard/game-dashboard/game1/g1-content/g1-easy/g1-easy-content1/g1-easy-content1.component";
import {G1EasyContent2Component} from "./Components/dashboard/game-dashboard/game1/g1-content/g1-easy/g1-easy-content2/g1-easy-content2.component";
import {G1EasyContent3Component} from "./Components/dashboard/game-dashboard/game1/g1-content/g1-easy/g1-easy-content3/g1-easy-content3.component";
import {Lesson1Component} from "./Components/dashboard/game-dashboard/game1/lesson1/lesson1.component";
import {G1MediumContent1Component} from "./Components/dashboard/game-dashboard/game1/g1-content/g1-medium/g1-medium-content1/g1-medium-content1.component";
import {G1MediumContent2Component} from "./Components/dashboard/game-dashboard/game1/g1-content/g1-medium/g1-medium-content2/g1-medium-content2.component";
import {Game2Component} from "./Components/dashboard/game-dashboard/game2/game2.component";
import {G2ContentComponent} from "./Components/dashboard/game-dashboard/game2/g2-content/g2-content.component";
import {G2EasyComponent} from "./Components/dashboard/game-dashboard/game2/g2-content/g2-easy/g2-easy.component";
import {G2MediumComponent} from "./Components/dashboard/game-dashboard/game2/g2-content/g2-medium/g2-medium.component";
import {G2HardComponent} from "./Components/dashboard/game-dashboard/game2/g2-content/g2-hard/g2-hard.component";
import {Lesson2Component} from "./Components/dashboard/game-dashboard/game2/lesson2/lesson2.component";
import {LevelsG2Component} from "./Components/dashboard/game-dashboard/game2/levels-g2/levels-g2.component";
import {WelcomeGame2Component} from "./Components/dashboard/welcome/welcome-game2/welcome-game2.component";
import {Game3Component} from "./Components/dashboard/game-dashboard/game3/game3.component";
import {Lesson3Component} from "./Components/dashboard/game-dashboard/game3/lesson3/lesson3.component";
import {LevelsG3Component} from "./Components/dashboard/game-dashboard/game3/levels-g3/levels-g3.component";
import {G3ContentComponent} from "./Components/dashboard/game-dashboard/game3/g3-content/g3-content.component";
import {G3EasyComponent} from "./Components/dashboard/game-dashboard/game3/g3-content/g3-easy/g3-easy.component";
import {G3MediumComponent} from "./Components/dashboard/game-dashboard/game3/g3-content/g3-medium/g3-medium.component";
import {G3HardComponent} from "./Components/dashboard/game-dashboard/game3/g3-content/g3-hard/g3-hard.component";
import {WelcomeGame3Component} from "./Components/dashboard/welcome/welcome-game3/welcome-game3.component";
import {EChooseComponent} from "./Components/dashboard/game-dashboard/game3/g3-content/g3-easy/e-choose/e-choose.component";
import {EAdditionComponent} from "./Components/dashboard/game-dashboard/game3/g3-content/g3-easy/e-addition/e-addition.component";
import {ESubtractionComponent} from "./Components/dashboard/game-dashboard/game3/g3-content/g3-easy/e-subtraction/e-subtraction.component";
import {EMultiplicationComponent} from "./Components/dashboard/game-dashboard/game3/g3-content/g3-easy/e-multiplication/e-multiplication.component";
import {EDivisionComponent} from "./Components/dashboard/game-dashboard/game3/g3-content/g3-easy/e-division/e-division.component";
import {MChooseComponent} from "./Components/dashboard/game-dashboard/game3/g3-content/g3-medium/m-choose/m-choose.component";
import {MAdditionComponent} from "./Components/dashboard/game-dashboard/game3/g3-content/g3-medium/m-addition/m-addition.component";
import {MSubtractionComponent} from "./Components/dashboard/game-dashboard/game3/g3-content/g3-medium/m-subtraction/m-subtraction.component";
import {MMultiplicationComponent} from "./Components/dashboard/game-dashboard/game3/g3-content/g3-medium/m-multiplication/m-multiplication.component";
import {MDivisionComponent} from "./Components/dashboard/game-dashboard/game3/g3-content/g3-medium/m-division/m-division.component";
import {HMultiplicationComponent} from "./Components/dashboard/game-dashboard/game3/g3-content/g3-hard/h-multiplication/h-multiplication.component";
import {HChooseComponent} from "./Components/dashboard/game-dashboard/game3/g3-content/g3-hard/h-choose/h-choose.component";
import {HAdditionComponent} from "./Components/dashboard/game-dashboard/game3/g3-content/g3-hard/h-addition/h-addition.component";
import {HSubtractionComponent} from "./Components/dashboard/game-dashboard/game3/g3-content/g3-hard/h-subtraction/h-subtraction.component";
import {HDivisionComponent} from "./Components/dashboard/game-dashboard/game3/g3-content/g3-hard/h-division/h-division.component";
import {Quiz1Component} from "./Components/dashboard/game-dashboard/game1/quiz1/quiz1.component";
import {Quiz2Component} from "./Components/dashboard/game-dashboard/game2/quiz2/quiz2.component";
import {Quiz3Component} from "./Components/dashboard/game-dashboard/game3/quiz3/quiz3.component";

const routes: Routes = [
  {path:'',redirectTo:'/navigation/home',pathMatch:'full'},
  {path:'navigation',component:NavigationComponent,children:[
      {path:'home',component:HomeComponent},
      {path:'games',component:GamesComponent},
      {path:'contact',component:ContactComponent},
      {path:'lessons',component:LessonsComponent},
    ]},
  {path: 'auth-context', component: AuthContextComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent}
    ]
  },
  {path: 'dashboard',component:DashboardComponent,children:[
      {path: 'welcome',component: WelcomeComponent,children:[
          {path: 'welcomeHome',component: WelcomeHomeComponent},
          {path: 'welcomeGame1',component:WelcomeGame1Component},
          {path: 'welcomeGame2',component:WelcomeGame2Component},
          {path: 'welcomeGame3',component:WelcomeGame3Component},
        ]},
      {path: 'game-dashboard',component: GameDashboardComponent, children:[
          {path: 'gameHome',component: GameHomeComponent},
          {path: 'game1',component: Game1Component,children:[
              {path: 'quiz1',component:Quiz1Component},
              {path: 'lesson1',component:Lesson1Component},
              {path: 'levels-game1',component:LevelsG1Component},
              {path: 'game1-content',component:G1ContentComponent,children:[
                  {path:'game1-easy',component:G1EasyComponent,children:[
                      {path:'game1-easy-content1',component:G1EasyContent1Component},
                      {path:'game1-easy-content2',component:G1EasyContent2Component},
                      {path:'game1-easy-content3',component:G1EasyContent3Component}
                    ]},
                  {path:'game1-medium',component:G1MediumComponent,children:[
                      {path:'game1-medium-content1',component:G1MediumContent1Component},
                      {path:'game1-medium-content2',component:G1MediumContent2Component}
                    ]},
                  {path:'game1-hard',component:G1HardComponent}
                ]}
            ]},
          {path: 'game2',component: Game2Component,children:[
              {path: 'quiz2',component:Quiz2Component},
              {path: 'g2-content',component: G2ContentComponent,children: [
                  {path: 'g2-easy',component:G2EasyComponent},
                  {path: 'g2-medium',component:G2MediumComponent},
                  {path: 'g2-hard',component:G2HardComponent},
                ]},
              {path: 'lesson2',component: Lesson2Component},
              {path: 'levels-g2',component: LevelsG2Component}
            ]},
          {path: 'game3',component: Game3Component,children:[
              {path: 'quiz3',component:Quiz3Component},
              {path: 'lesson3',component: Lesson3Component},
              {path: 'levels-g3',component: LevelsG3Component},
              {path: 'g3-content',component: G3ContentComponent,children: [
                  {path: 'g3-easy',component: G3EasyComponent,children:[
                      {path: 'e-choose',component: EChooseComponent},
                      {path: 'e-addition',component: EAdditionComponent},
                      {path: 'e-subtraction',component: ESubtractionComponent},
                      {path: 'e-multiplication',component: EMultiplicationComponent},
                      {path: 'e-division',component: EDivisionComponent}
                    ]},
                  {path: 'g3-medium',component: G3MediumComponent,children:[
                      {path: 'm-choose',component: MChooseComponent},
                      {path: 'm-addition',component: MAdditionComponent},
                      {path: 'm-subtraction',component: MSubtractionComponent},
                      {path: 'm-multiplication',component: MMultiplicationComponent},
                      {path: 'm-division',component: MDivisionComponent}
                    ]},
                  {path:'g3-hard',component:G3HardComponent,children:[
                      {path: 'h-choose',component: HChooseComponent},
                      {path: 'h-addition',component: HAdditionComponent},
                      {path: 'h-subtraction',component: HSubtractionComponent},
                      {path: 'h-multiplication',component: HMultiplicationComponent},
                      {path: 'h-division',component: HDivisionComponent}
                    ]}
                ]}
            ]}
        ]}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
