import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Route, provideRoutes } from '@angular/router';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { RecaptchaModule } from 'ng-recaptcha';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LicenseComponent } from './pages/license/license.component';
import { WhoComponent } from './pages/who/who.component';
// import { SoundcloudComponent } from './pages/soundcloud/soundcloud.component';
// import { MixcloudComponent } from './pages/mixcloud/mixcloud.component';
import { BandcampComponent } from './pages/bandcamp/bandcamp.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { WikiComponent } from './pages/wiki/wiki.component';
import { LoginComponent } from './pages/login/login.component';
import { VotComponent } from './pages/bandcamp/albums/vot/vot.component';
import { MwComponent } from './pages/bandcamp/albums/mw/mw.component';
import { StComponent } from './pages/bandcamp/albums/st/st.component';
import { SkdComponent } from './pages/bandcamp/albums/skd/skd.component';
import { EtComponent } from './pages/bandcamp/albums/et/et.component';
import { NfiComponent } from './pages/bandcamp/albums/nfi/nfi.component';
import { EsComponent } from './pages/bandcamp/albums/es/es.component';
import { OtComponent } from './pages/bandcamp/albums/ot/ot.component';
// import { WwccComponent } from './pages/articles/more/wwcc/wwcc.component';
// import { WwbcComponent } from './pages/articles/more/wwbc/wwbc.component';
import { WhoweareComponent } from './pages/articles/more/whoweare/whoweare.component';
import { UtellmeComponent } from './pages/articles/more/utellme/utellme.component';
import { IntroComponent } from './pages/wiki/intro/intro.component';
import { FirststepsComponent } from './pages/wiki/firststeps/firststeps.component';
import { CoreconceptsComponent } from './pages/wiki/coreconcepts/coreconcepts.component';
import { IdeaComponent } from './pages/wiki/idea/idea.component';
import { ChallengeComponent } from './pages/wiki/challenge/challenge.component';
import { PathComponent } from './pages/wiki/path/path.component';
// import { PrivacyComponent } from './pages/wiki/privacy/privacy.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'who', component: WhoComponent },
  { path: 'license', component: LicenseComponent },
//  { path: 'mixcloud', component: MixcloudComponent },
//  { path: 'soundcloud', component: SoundcloudComponent },
  { path: 'bandcamp', component: BandcampComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'wiki', component: WikiComponent },
  { path: 'bc/a/vot', component: VotComponent },
  { path: 'bc/a/mw', component: MwComponent },
  { path: 'bc/a/st', component: StComponent },
  { path: 'bc/a/skd', component: SkdComponent },
  { path: 'bc/a/et', component: EtComponent },
  { path: 'bc/a/nfi', component: NfiComponent },
  { path: 'bc/a/es', component: EsComponent },
  { path: 'bc/a/ot', component: OtComponent },
  { path: 'articles/whoweare', component: WhoweareComponent },
//  { path: 'articles/wwcc', component: WwccComponent },
//  { path: 'articles/wwbc', component: WwbcComponent },
  { path: 'articles/more/utellme', component: UtellmeComponent },
  { path: 'wiki/intro', component: IntroComponent },
  { path: 'wiki/firststeps', component: FirststepsComponent },
  { path: 'wiki/coreconcepts', component: CoreconceptsComponent },
  { path: 'wiki/idea', component: IdeaComponent },
  { path: 'wiki/challenge', component: ChallengeComponent },
  { path: 'wiki/path', component: PathComponent },
//  { path: 'wiki/privacy', component: PrivacyComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LicenseComponent,
    WhoComponent,
//    SoundcloudComponent,
//    MixcloudComponent,
    BandcampComponent,
    ArticlesComponent,
    WikiComponent,
    LoginComponent,
    VotComponent,
    MwComponent,
    StComponent,
    SkdComponent,
    EtComponent,
    NfiComponent,
    EsComponent,
    OtComponent,
//    WwccComponent,
//    WwbcComponent,
    WhoweareComponent,
    UtellmeComponent,
    IntroComponent,
    FirststepsComponent,
    CoreconceptsComponent,
    IdeaComponent,
    ChallengeComponent,
    PathComponent,
//    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
