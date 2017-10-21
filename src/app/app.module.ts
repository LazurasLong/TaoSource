import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Route, provideRoutes } from '@angular/router';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
// import { RecaptchaModule } from 'ng-recaptcha';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -;
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component'; // Visions
import { LicenseComponent } from './pages/license/license.component'; // Eternal License
import { WhoComponent } from './pages/who/who.component'; // Who We Are
// import { SoundcloudComponent } from './pages/soundcloud/soundcloud.component';
import { MixcloudComponent } from './pages/mixcloud/mixcloud.component'; // Tao 
import { RfyinComponent } from './pages/mixcloud/tao/rfyin/rfyin.component'; // Ring of Fire (Yin)
import { RfyangComponent } from './pages/mixcloud/tao/rfyang/rfyang.component'; // Ring of Gire (Yang)
import { DramonkComponent } from './pages/mixcloud/tao/dramonk/dramonk.component'; // Dragon & Monkey  ( Love )
import { SolplexComponent } from './pages/mixcloud/tao/solplex/solplex.component'; // Fire (Base)
import { MonkComponent } from './pages/mixcloud/tao/monk/monk.component'; // Monk (Black Gold)
import { RtComponent } from './pages/mixcloud/tao/rt/rt.component'; // Real Time Shamanic Quest
import { MissionComponent } from './pages/mixcloud/tao/mission/mission.component'; // World wide target
import { TaoComponent } from './pages/mixcloud/tao/tao/tao.component'; // Last Warning
import { DataComponent } from './pages/mixcloud/tao/data/data.component'; // Data
import { ArticlesComponent } from './pages/articles/articles.component';
import { WikiComponent } from './pages/wiki/wiki.component';
import { BandcampComponent } from './pages/bandcamp/bandcamp.component';
// import { LoginComponent } from './pages/login/login.component';
// Visions of Thor - Album and Tracks
import { VotComponent } from './pages/bandcamp/albums/vot/vot.component'; // Album
import { Vot1Component } from './pages/bandcamp/albums/vot/tracks/vot1/vot1.component';
import { Vot2Component } from './pages/bandcamp/albums/vot/tracks/vot2/vot2.component';
import { Vot3Component } from './pages/bandcamp/albums/vot/tracks/vot3/vot3.component';
import { Vot4Component } from './pages/bandcamp/albums/vot/tracks/vot4/vot4.component';
import { Vot5Component } from './pages/bandcamp/albums/vot/tracks/vot5/vot5.component';
import { Vot6Component } from './pages/bandcamp/albums/vot/tracks/vot6/vot6.component';
import { Vot7Component } from './pages/bandcamp/albums/vot/tracks/vot7/vot7.component';
import { Vot8Component } from './pages/bandcamp/albums/vot/tracks/vot8/vot8.component';
import { Vot9Component } from './pages/bandcamp/albums/vot/tracks/vot9/vot9.component';
import { Vot10Component } from './pages/bandcamp/albums/vot/tracks/vot10/vot10.component';
import { Vot11Component } from './pages/bandcamp/albums/vot/tracks/vot11/vot11.component';
// Machine World - Album and Tracks
import { MwComponent } from './pages/bandcamp/albums/mw/mw.component';
// Space Trip - Album and Tracks
import { StComponent } from './pages/bandcamp/albums/st/st.component'; // Space Trip
import { St5Component } from './pages/bandcamp/albums/st/tracks/st5/st5.component'; // ID - 666
// Shiva and Kali Dance - Album and Tracks
import { SkdComponent } from './pages/bandcamp/albums/skd/skd.component';
// Eternal Delay - Album and Tracks
import { EtComponent } from './pages/bandcamp/albums/et/et.component';
// Noise Frequency - Impulse - Album and Tracks
import { NfiComponent } from './pages/bandcamp/albums/nfi/nfi.component';
import { EsComponent } from './pages/bandcamp/albums/es/es.component'; // Emotional Signals - Album and Tracks
import { Es1Component } from './pages/bandcamp/albums/es/tracks/es1/es1.component'; // We Came in Peace
import { Es9Component } from './pages/bandcamp/albums/es/tracks/es9/es9.component'; // shamanic Visions
import { Es10Component } from './pages/bandcamp/albums/es/tracks/es10/es10.component'; // In Fun to Care
import { OtComponent } from './pages/bandcamp/albums/ot/ot.component'; // Only Tributes - Album and Tracks
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


const appRoutes: Routes = [ // HTTP PATH
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'who', component: WhoComponent },
  { path: 'license', component: LicenseComponent },
  { path: 'mixcloud', component: MixcloudComponent }, // Mixcloud
  { path: 'mx/tao/rfyin', component: RfyinComponent }, // Tao Ring of Fire (Yin)
  { path: 'mx/tao/rfyang', component: RfyangComponent }, // Tao Ring of Fire (Yang)
  { path: 'mx/tao/dramonk', component: DramonkComponent }, // Dragon & Monkey ( Hope )
  { path: 'mx/tao/solplex', component: SolplexComponent }, // Firebase (Solar Plexus)
  { path: 'mx/tao/monk', component: MonkComponent }, // Monk (Black Gold)
  { path: 'mx/tao/rt', component: RtComponent }, // Real Time Shamanic Quest
  { path: 'mx/tao/mission', component: MissionComponent }, // World wide Target
  { path: 'mx/tao/tao', component: TaoComponent }, // Last Warning
  { path: 'mx/tao/data', component: DataComponent }, // Data
//  { path: 'soundcloud', component: SoundcloudComponent },
  { path: 'bandcamp', component: BandcampComponent },
  { path: 'articles', component: ArticlesComponent },
//  { path: 'login', component: LoginComponent },
  { path: 'wiki', component: WikiComponent },
  { path: 'bc/a/vot', component: VotComponent }, // Visions of Thor Album and Tracks - HTTP PATH
  { path: 'bc/vot/t/v1', component: Vot1Component }, // track 1
  { path: 'bc/vot/t/v2', component: Vot2Component }, // track 2
  { path: 'bc/vot/t/v3', component: Vot3Component }, // track 3
  { path: 'bc/vot/t/v4', component: Vot4Component }, // track 4
  { path: 'bc/vot/t/v5', component: Vot5Component }, // track 5
  { path: 'bc/vot/t/v6', component: Vot6Component }, // track 6
  { path: 'bc/vot/t/v7', component: Vot7Component }, // track 7
  { path: 'bc/vot/t/v8', component: Vot8Component }, // track 8
  { path: 'bc/vot/t/v9', component: Vot9Component }, // track 9
  { path: 'bc/vot/t/v10', component: Vot10Component }, // track 10
  { path: 'bc/vot/t/v11', component: Vot11Component }, // track 11
  { path: 'bc/a/mw', component: MwComponent },// Machine World Album and Tracks - HTTP PATH
  { path: 'bc/a/st', component: StComponent }, // Space Trip Album and Tracks - HTTP PATH
  { path: 'bc/st/t/st5', component: St5Component }, // ID - 666
  { path: 'bc/a/skd', component: SkdComponent },
  { path: 'bc/a/et', component: EtComponent },
  { path: 'bc/a/nfi', component: NfiComponent },
  { path: 'bc/a/es', component: EsComponent }, // Emotional Signals Album and Tracks - HTTP PATH
  { path: 'bc/a/es/t/es1', component: Es1Component }, // We Came in Peace
  { path: 'bc/a/es/t/es9', component: Es9Component }, // Shamanic Visions
  { path: 'bc/a/es/t/es10', component: Es10Component }, // Fun to Care
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
    MixcloudComponent, // mixcloud
    RfyinComponent, // Ring of Fire (Yin)
    RfyangComponent, // Ring of Fire (Yang)
    DramonkComponent, // Dragon & Monkey (Hope)
    SolplexComponent, // Firebase ( Solar Plexus )
    MonkComponent, // Monk (Black Gold)
    RtComponent, // Real Time Shamanic Quest
    MissionComponent, // World wide Target
    TaoComponent, // Last Warning
    DataComponent, // Data
    BandcampComponent,
    ArticlesComponent,
    WikiComponent,
//    LoginComponent,
    VotComponent, // Album - Visions of Thor - My Son
    Vot1Component, // Track 1 - Visions of Thor
    Vot2Component, // Tracks 2 - Visions of Thor
    Vot3Component, // Track 3 - Visions of Thor
    Vot4Component, // Track 4 - Visions of Thor
    Vot5Component, // Track 5 - Visions of Thor
    Vot6Component, // Track 6 - Visions of Thor
    Vot7Component, // Track 7 - Visions of Thor
    Vot8Component, // Track 8 - Visions of Thor
    Vot9Component, // Track 9 - Visions of Thor
    Vot10Component, // Track 10 - Visions of Thor
    Vot11Component, // Track 11 - Visions of Thor
    MwComponent,
    StComponent, // Album - Space Trip
    St5Component, // Track 5 - ID 666
    SkdComponent,
    EtComponent,
    NfiComponent,
    EsComponent, // Album - Emotional Signals
    Es1Component, // we came in peace - trace zone
    Es9Component, // Shamanic Visions
    Es10Component, // Fun to Care
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
