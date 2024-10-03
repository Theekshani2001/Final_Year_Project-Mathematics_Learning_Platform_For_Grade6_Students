import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { ContactComponent } from './Components/navigation/contact/contact.component';
import { GamesComponent } from './Components/navigation/games/games.component';
import { HomeComponent } from './Components/navigation/home/home.component';
import { LessonsComponent } from './Components/navigation/lessons/lessons.component';
import { AuthContextComponent } from './Components/auth-context/auth-context.component';
import { LoginComponent } from './Components/auth-context/login/login.component';
import { SignupComponent } from './Components/auth-context/signup/signup.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { WelcomeComponent } from './Components/dashboard/welcome/welcome.component';
import { GameDashboardComponent } from './Components/dashboard/game-dashboard/game-dashboard.component';
import { Game1Component } from './Components/dashboard/game-dashboard/game1/game1.component';
import { WelcomeGame1Component } from './Components/dashboard/welcome/welcome-game1/welcome-game1.component';
import { GameHomeComponent } from './Components/dashboard/game-dashboard/game-home/game-home.component';
import { WelcomeHomeComponent } from './Components/dashboard/welcome/welcome-home/welcome-home.component';
import { LevelsG1Component } from './Components/dashboard/game-dashboard/game1/levels-g1/levels-g1.component';
import { G1ContentComponent } from './Components/dashboard/game-dashboard/game1/g1-content/g1-content.component';
import { G1EasyComponent } from './Components/dashboard/game-dashboard/game1/g1-content/g1-easy/g1-easy.component';
import { G1MediumComponent } from './Components/dashboard/game-dashboard/game1/g1-content/g1-medium/g1-medium.component';
import { G1HardComponent } from './Components/dashboard/game-dashboard/game1/g1-content/g1-hard/g1-hard.component';
import { G1EasyContent1Component } from './Components/dashboard/game-dashboard/game1/g1-content/g1-easy/g1-easy-content1/g1-easy-content1.component';
import { G1EasyContent2Component } from './Components/dashboard/game-dashboard/game1/g1-content/g1-easy/g1-easy-content2/g1-easy-content2.component';
import { G1EasyContent3Component } from './Components/dashboard/game-dashboard/game1/g1-content/g1-easy/g1-easy-content3/g1-easy-content3.component';
import { Lesson1Component } from './Components/dashboard/game-dashboard/game1/lesson1/lesson1.component';
import { G1MediumContent1Component } from './Components/dashboard/game-dashboard/game1/g1-content/g1-medium/g1-medium-content1/g1-medium-content1.component';
import { G1MediumContent2Component } from './Components/dashboard/game-dashboard/game1/g1-content/g1-medium/g1-medium-content2/g1-medium-content2.component';
import { Game2Component } from './Components/dashboard/game-dashboard/game2/game2.component';
import { G2ContentComponent } from './Components/dashboard/game-dashboard/game2/g2-content/g2-content.component';
import { Lesson2Component } from './Components/dashboard/game-dashboard/game2/lesson2/lesson2.component';
import { LevelsG2Component } from './Components/dashboard/game-dashboard/game2/levels-g2/levels-g2.component';
import { G2EasyComponent } from './Components/dashboard/game-dashboard/game2/g2-content/g2-easy/g2-easy.component';
import { G2MediumComponent } from './Components/dashboard/game-dashboard/game2/g2-content/g2-medium/g2-medium.component';
import { G2HardComponent } from './Components/dashboard/game-dashboard/game2/g2-content/g2-hard/g2-hard.component';
import { WelcomeGame2Component } from './Components/dashboard/welcome/welcome-game2/welcome-game2.component';
import { Game3Component } from './Components/dashboard/game-dashboard/game3/game3.component';
import { WelcomeGame3Component } from './Components/dashboard/welcome/welcome-game3/welcome-game3.component';
import { G3ContentComponent } from './Components/dashboard/game-dashboard/game3/g3-content/g3-content.component';
import { Lesson3Component } from './Components/dashboard/game-dashboard/game3/lesson3/lesson3.component';
import { LevelsG3Component } from './Components/dashboard/game-dashboard/game3/levels-g3/levels-g3.component';
import { G3EasyComponent } from './Components/dashboard/game-dashboard/game3/g3-content/g3-easy/g3-easy.component';
import { G3MediumComponent } from './Components/dashboard/game-dashboard/game3/g3-content/g3-medium/g3-medium.component';
import { G3HardComponent } from './Components/dashboard/game-dashboard/game3/g3-content/g3-hard/g3-hard.component';
import { EAdditionComponent } from './Components/dashboard/game-dashboard/game3/g3-content/g3-easy/e-addition/e-addition.component';
import { ESubtractionComponent } from './Components/dashboard/game-dashboard/game3/g3-content/g3-easy/e-subtraction/e-subtraction.component';
import { EMultiplicationComponent } from './Components/dashboard/game-dashboard/game3/g3-content/g3-easy/e-multiplication/e-multiplication.component';
import { EDivisionComponent } from './Components/dashboard/game-dashboard/game3/g3-content/g3-easy/e-division/e-division.component';
import { EChooseComponent } from './Components/dashboard/game-dashboard/game3/g3-content/g3-easy/e-choose/e-choose.component';
import {FormsModule} from "@angular/forms";
import { MAdditionComponent } from './Components/dashboard/game-dashboard/game3/g3-content/g3-medium/m-addition/m-addition.component';
import { MChooseComponent } from './Components/dashboard/game-dashboard/game3/g3-content/g3-medium/m-choose/m-choose.component';
import { MDivisionComponent } from './Components/dashboard/game-dashboard/game3/g3-content/g3-medium/m-division/m-division.component';
import { MMultiplicationComponent } from './Components/dashboard/game-dashboard/game3/g3-content/g3-medium/m-multiplication/m-multiplication.component';
import { MSubtractionComponent } from './Components/dashboard/game-dashboard/game3/g3-content/g3-medium/m-subtraction/m-subtraction.component';
import { HAdditionComponent } from './Components/dashboard/game-dashboard/game3/g3-content/g3-hard/h-addition/h-addition.component';
import { HChooseComponent } from './Components/dashboard/game-dashboard/game3/g3-content/g3-hard/h-choose/h-choose.component';
import { HDivisionComponent } from './Components/dashboard/game-dashboard/game3/g3-content/g3-hard/h-division/h-division.component';
import { HMultiplicationComponent } from './Components/dashboard/game-dashboard/game3/g3-content/g3-hard/h-multiplication/h-multiplication.component';
import { HSubtractionComponent } from './Components/dashboard/game-dashboard/game3/g3-content/g3-hard/h-subtraction/h-subtraction.component';
import { Quiz1Component } from './Components/dashboard/game-dashboard/game1/quiz1/quiz1.component';
import { Quiz2Component } from './Components/dashboard/game-dashboard/game2/quiz2/quiz2.component';
import { Quiz3Component } from './Components/dashboard/game-dashboard/game3/quiz3/quiz3.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContactComponent,
    GamesComponent,
    HomeComponent,
    LessonsComponent,
    AuthContextComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    WelcomeComponent,
    GameDashboardComponent,
    Game1Component,
    WelcomeGame1Component,
    GameHomeComponent,
    WelcomeHomeComponent,
    LevelsG1Component,
    G1ContentComponent,
    G1EasyComponent,
    G1MediumComponent,
    G1HardComponent,
    G1EasyContent1Component,
    G1EasyContent2Component,
    G1EasyContent3Component,
    Lesson1Component,
    G1MediumContent1Component,
    G1MediumContent2Component,
    Game2Component,
    G2ContentComponent,
    Lesson2Component,
    LevelsG2Component,
    G2EasyComponent,
    G2MediumComponent,
    G2HardComponent,
    WelcomeGame2Component,
    Game3Component,
    WelcomeGame3Component,
    G3ContentComponent,
    Lesson3Component,
    LevelsG3Component,
    G3EasyComponent,
    G3MediumComponent,
    G3HardComponent,
    EAdditionComponent,
    ESubtractionComponent,
    EMultiplicationComponent,
    EDivisionComponent,
    EChooseComponent,
    MAdditionComponent,
    MChooseComponent,
    MDivisionComponent,
    MMultiplicationComponent,
    MSubtractionComponent,
    HAdditionComponent,
    HChooseComponent,
    HDivisionComponent,
    HMultiplicationComponent,
    HSubtractionComponent,
    Quiz1Component,
    Quiz2Component,
    Quiz3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
