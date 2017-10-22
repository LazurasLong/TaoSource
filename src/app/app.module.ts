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
// ###################################################################################################### Political Tributes
import { ChangeComponent } from './pages/tributes/change/change.component'; // Severn Cullis Suzuki 
import { CatComponent } from './pages/bandcamp/boom/cat/cat.component'; // Yin Yang Cat Boom Tribute
// ###################################################################################################### Soundcloud
import { SoundcloudComponent } from './pages/soundcloud/soundcloud.component'; // Sounds Cloud
import { BringyoufireComponent } from './pages/soundcloud/magic/fantasy/bringyoufire/bringyoufire.component'; // Bring You Fire
import { ThreeComponent } from './pages/articles/more/utellme/three/three.component'; // 3 - You Tell Me
import { AbsoluteComponent} from './pages/articles/more/utellme/absolute/absolute.component'; // Absolute
import { DragonComponent } from './pages/soundcloud/path/shields/dragon/dragon.component'; // The Dragon
import { MonkingComponent } from './pages/soundcloud/magic/fantasy/monking/monking.component'; // Sun Wukong
import { WillpowerComponent } from './pages/soundcloud/path/shields/willpower/willpower.component'; // The Possession of Will
// ###################################################################################################### Mixcloud
import { MixcloudComponent } from './pages/mixcloud/mixcloud.component'; // // MixCloud
import { RfyinComponent } from './pages/mixcloud/tao/rfyin/rfyin.component'; // Ring of Fire (Yin)
import { RfyangComponent } from './pages/mixcloud/tao/rfyang/rfyang.component'; // Ring of Gire (Yang)
import { DramonkComponent } from './pages/mixcloud/tao/dramonk/dramonk.component'; // Dragon & Monkey  ( Love )
import { SolplexComponent } from './pages/mixcloud/tao/solplex/solplex.component'; // Fire (Base)
import { MonkComponent } from './pages/mixcloud/tao/monk/monk.component'; // Monk (Black Gold)
import { RtComponent } from './pages/mixcloud/tao/rt/rt.component'; // Real Time Shamanic Quest
import { MissionComponent } from './pages/mixcloud/tao/mission/mission.component'; // World wide target
import { TaoComponent } from './pages/mixcloud/tao/tao/tao.component'; // Last Warning
import { DataComponent } from './pages/mixcloud/tao/data/data.component'; // Data
// ######################################################################################################
import { ArticlesComponent } from './pages/articles/articles.component';
// ######################################################################################################
import { WikiComponent } from './pages/wiki/wiki.component';
import { IntroComponent } from './pages/wiki/intro/intro.component';
import { FirststepsComponent } from './pages/wiki/firststeps/firststeps.component';
import { CoreconceptsComponent } from './pages/wiki/coreconcepts/coreconcepts.component';
import { IdeaComponent } from './pages/wiki/idea/idea.component';
import { ChallengeComponent } from './pages/wiki/challenge/challenge.component';
import { PathComponent } from './pages/wiki/path/path.component';
// ###################################################################################################### BandCamp
import { BandcampComponent } from './pages/bandcamp/bandcamp.component';
import { VotComponent } from './pages/bandcamp/albums/vot/vot.component'; // Visions of Thor - Album and Tracks
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
// ######################################################################################################
// ######################################################################################################
import { MwComponent } from './pages/bandcamp/albums/mw/mw.component';// Machine World - Album and Tracks
import { Mw3Component } from './pages/bandcamp/albums/mw/tracks/mw3/mw3.component'; // Control - Free to Ask
// ######################################################################################################
import { StComponent } from './pages/bandcamp/albums/st/st.component'; // Space Trip - Album and Tracks
import { St5Component } from './pages/bandcamp/albums/st/tracks/st5/st5.component'; // ID - 666
// ######################################################################################################
import { SkdComponent } from './pages/bandcamp/albums/skd/skd.component';// Shiva and Kali Dance - Album and Tracks
// ######################################################################################################
import { EtComponent } from './pages/bandcamp/albums/et/et.component'; // Eternal Delay - Album and Tracks
// ######################################################################################################
import { NfiComponent } from './pages/bandcamp/albums/nfi/nfi.component'; // Noise Frequency - Impulse - Album and Tracks
import { Nfi4Component } from './pages/bandcamp/albums/nfi/tracks/nfi4/nfi4.component';
// ######################################################################################################
import { EsComponent } from './pages/bandcamp/albums/es/es.component'; // Emotional Signals - Album and Tracks
import { Es1Component } from './pages/bandcamp/albums/es/tracks/es1/es1.component'; // We Came in Peace
import { Es8Component } from './pages/bandcamp/albums/es/tracks/es8/es8.component'; // 
import { Es9Component } from './pages/bandcamp/albums/es/tracks/es9/es9.component'; // shamanic Visions
import { Es10Component } from './pages/bandcamp/albums/es/tracks/es10/es10.component'; // In Fun to Care
// ######################################################################################################
import { OtComponent } from './pages/bandcamp/albums/ot/ot.component'; // Only Tributes - Album and Tracks
import { Ot5Component} from './pages/bandcamp/albums/ot/tracks/ot5/ot5.component'; // Lords - Egocentric Will
// import { WwccComponent } from './pages/articles/more/wwcc/wwcc.component';
// import { WwbcComponent } from './pages/articles/more/wwbc/wwbc.component';
import { WhoweareComponent } from './pages/articles/more/whoweare/whoweare.component';
import { UtellmeComponent } from './pages/articles/more/utellme/utellme.component';

// import { PrivacyComponent } from './pages/wiki/privacy/privacy.component';


const appRoutes: Routes = [ // HTML VIRTUAL PATH
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'who', component: WhoComponent },
  { path: 'license', component: LicenseComponent }, // Eternal License
// ######################################################################################################
//  { path: 'mixcloud', component: MixcloudComponent }, // Mixcloud
  { path: 'we/must/change/our/ways', component: ChangeComponent }, // Tribute - Severn Cullis Suzuki
  { path: 'mx/tao/rfyin', component: RfyinComponent }, // Tao Ring of Fire (Yin)
  { path: 'mx/tao/rfyang', component: RfyangComponent }, // Tao Ring of Fire (Yang)
  { path: 'mx/tao/dramonk', component: DramonkComponent }, // Dragon & Monkey ( Hope )
  { path: 'mx/tao/solplex', component: SolplexComponent }, // Firebase (Solar Plexus)
  { path: 'mx/tao/monk', component: MonkComponent }, // Monk (Black Gold)
  { path: 'mx/tao/rt', component: RtComponent }, // Real Time Shamanic Quest
  { path: 'mx/tao/mission', component: MissionComponent }, // World wide Target
  { path: 'mx/tao/tao', component: TaoComponent }, // Last Warning
  { path: 'mx/tao/data', component: DataComponent }, // Data
// ######################################################################################################
//  { path: 'soundcloud', component: SoundcloudComponent }, // SoundCloud
  {path: 'boom/cat', component: CatComponent },
  { path: 'three', component: ThreeComponent }, // 3 You tell Me!
  { path: 'absolute', component: AbsoluteComponent }, // Absolute
  { path: 'fire', component: BringyoufireComponent }, // Bring You Fire
  { path: 'dragon', component: DragonComponent }, // The Dragon
  { path: 'king', component: MonkingComponent }, // Sun Wukong
  { path: 'will', component: WillpowerComponent }, // the Possession of Will
  { path: 'articles', component: ArticlesComponent },
  { path: 'wiki', component: WikiComponent },
  { path: 'bandcamp', component: BandcampComponent },
  { path: 'bc/a/vot', component: VotComponent }, // Visions of Thor Album and Tracks - HTML  PATH
  { path: 'bc/vot/t/v1', component: Vot1Component }, // Emerge
  { path: 'bc/vot/t/v2', component: Vot2Component }, // Water Horses - Woman Free
  { path: 'bc/vot/t/v3', component: Vot3Component }, // Pain vs Love
  { path: 'black/birds/red/eyes', component: Vot4Component }, // Black Birds
  { path: 'bc/vot/t/v5', component: Vot5Component }, // Summer Night
  { path: 'bc/vot/t/v6', component: Vot6Component }, //
  { path: 'bc/vot/t/v7', component: Vot7Component }, // track 7
  { path: 'bc/vot/t/v8', component: Vot8Component }, // track 8
  { path: 'bc/vot/t/v9', component: Vot9Component }, // track 9
  { path: 'bc/vot/t/v10', component: Vot10Component }, // track 10
  { path: 'bc/vot/t/v11', component: Vot11Component }, // track 11
  { path: 'bc/a/mw', component: MwComponent },// Machine World Album and Tracks - HTML  PATH
  { path: 'bc/mw/t/mw3', component: Mw3Component }, // Control - Free to Ask
  { path: 'bc/a/st', component: StComponent }, // Space Trip Album and Tracks - HTML  PATH
  { path: 'bc/st/t/st5', component: St5Component }, // ID - 666
  { path: 'bc/a/skd', component: SkdComponent },
  { path: 'bc/a/et', component: EtComponent },
  { path: 'bc/a/nfi', component: NfiComponent }, // Noise Frequency Album and Traks - HTML  PATH
  { path: 'bc/a/t/nfi4', component: Nfi4Component },
  { path: 'bc/a/es', component: EsComponent }, // Emotional Signals Album and Tracks - HTML  PATH
  { path: 'bc/a/es/t/es1', component: Es1Component }, // We Came in Peace
  { path: 'bc/a/es/t/es9', component: Es9Component }, // Shamanic Visions
  { path: 'little/box/universe', component: Es8Component }, // Little Box - Universe
  { path: 'bc/a/es/t/es10', component: Es10Component }, // Fun to Care
  { path: 'bc/a/ot', component: OtComponent }, // Only Tributes Album and Tracks
  { path: 'bc/a/ot/t/ot5', component: Ot5Component }, // Lords - Egocentric Will
  { path: 'articles/whoweare', component: WhoweareComponent },
//  { path: 'articles/wwcc', component: WwccComponent },
//  { path: 'articles/wwbc', component: WwbcComponent },
  { path: 'tao', component: UtellmeComponent },
  { path: 'wiki/intro', component: IntroComponent },
  { path: 'wiki/firststeps', component: FirststepsComponent },
  { path: 'wiki/coreconcepts', component: CoreconceptsComponent },
  { path: 'wiki/idea', component: IdeaComponent },
  { path: 'wiki/challenge', component: ChallengeComponent },
  { path: 'wiki/path', component: PathComponent },
//  { path: 'login', component: LoginComponent },
//  { path: 'wiki/privacy', component: PrivacyComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LicenseComponent,
    WhoComponent,
    SoundcloudComponent, // Soundcloud
    MixcloudComponent, // Mixcloud
    ChangeComponent, // Tribute to Severn Cullis Suzuki
    CatComponent, // Yin Yang Tao Tribute - Boom Festival Shamanism - 2016
    RfyinComponent, // Ring of Fire (Yin)
    RfyangComponent, // Ring of Fire (Yang)
    DramonkComponent, // Dragon & Monkey (Hope)
    SolplexComponent, // Firebase ( Solar Plexus )
    MonkComponent, // Monk (Black Gold)
    RtComponent, // Real Time Shamanic Quest
    MissionComponent, // World wide Target
    TaoComponent, // Last Warning
    DataComponent, // Data
    ThreeComponent, // 3 You tell me
    AbsoluteComponent, // Absolute
    BringyoufireComponent, // Bring You Fire
    DragonComponent, // The Dragon
    MonkingComponent, // Sun Wukong
    WillpowerComponent, // The possession of Wlll
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
    MwComponent, // Album - Machine World
    Mw3Component, // Control - Free to Ask
    StComponent, // Album - Space Trip
    St5Component, // Track 5 - ID 666
    SkdComponent,
    EtComponent,
    NfiComponent, // Album - Noise Frequency
    Nfi4Component, // Not Bad - Wrong
    EsComponent, // Album - Emotional Signals
    Es1Component, // we came in peace - trace zone
    Es9Component, // Shamanic Visions
    Es10Component, // Fun to Care
    Es8Component, // Little Box - Universe
    OtComponent, // Album - Only Tributes
    Ot5Component, // Lords - Egocentric Will
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
