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
import { CatComponent } from './pages/soundcloud/boom/cat/cat.component'; // Yin Yang Cat Boom Tribute
import { SeriouslyComponent } from './pages/tributes/seriously/seriously.component';
// ###################################################################################################### Soundcloud
import { SoundcloudComponent } from './pages/soundcloud/soundcloud.component'; // Sounds Cloud
import { BusinessComponent } from './pages/soundcloud/magic/fantasy/business/business.component';
import { BringyoufireComponent } from './pages/soundcloud/magic/fantasy/bringyoufire/bringyoufire.component'; // Bring You Fire
import { ThreeComponent } from './pages/articles/more/utellme/three/three.component'; // 3 - You Tell Me
import { AbsoluteComponent} from './pages/articles/more/utellme/absolute/absolute.component'; // Absolute
import { DragonComponent } from './pages/soundcloud/path/shields/dragon/dragon.component'; // The Dragon
import { MonkingComponent } from './pages/soundcloud/magic/fantasy/monking/monking.component'; // Sun Wukong
import { WillpowerComponent } from './pages/soundcloud/path/shields/willpower/willpower.component'; // The Possession of Will
import { MetalsoulComponent } from './pages/soundcloud/path/shields/metalsoul/metalsoul.component'; // Metal Soul - Fire Eyes
// ###################################################################################################### Mixcloud
import { MixcloudComponent } from './pages/mixcloud/mixcloud.component'; // // MixCloud
import { RfyinComponent } from './pages/mixcloud/tao/rfyin/rfyin.component'; // Ring of Fire (Yin)
import { RfyangComponent } from './pages/mixcloud/tao/rfyang/rfyang.component'; // Ring of Gire (Yang)
import { DramonkComponent } from './pages/mixcloud/tao/dramonk/dramonk.component'; // Dragon & Monkey  ( Love )
import { SolplexComponent } from './pages/mixcloud/tao/solplex/solplex.component'; // Fire (Base)
import { MonkComponent } from './pages/mixcloud/tao/monk/monk.component'; // (Genius - Monkey Style)
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
import { MwComponent } from './pages/bandcamp/albums/mw/mw.component';// Machine World - Album and Tracks
import { Mw1Component } from './pages/bandcamp/albums/mw/tracks/mw1/mw1.component'; // Control - Free to Ask
import { Mw2Component } from './pages/bandcamp/albums/mw/tracks/mw2/mw2.component'; // Control - Free to Ask
import { Mw3Component } from './pages/bandcamp/albums/mw/tracks/mw3/mw3.component'; // Control - Free to Ask
import { Mw4Component } from './pages/bandcamp/albums/mw/tracks/mw4/mw4.component'; // Control - Free to Ask
import { Mw5Component } from './pages/bandcamp/albums/mw/tracks/mw5/mw5.component'; // Control - Free to Ask
import { Mw6Component } from './pages/bandcamp/albums/mw/tracks/mw6/mw6.component'; // Control - Free to Ask
import { Mw7Component } from './pages/bandcamp/albums/mw/tracks/mw7/mw7.component'; // Control - Free to Ask
import { Mw8Component } from './pages/bandcamp/albums/mw/tracks/mw8/mw8.component'; // Control - Free to Ask
import { Mw9Component } from './pages/bandcamp/albums/mw/tracks/mw9/mw9.component'; // Control - Free to Ask
import { Mw10Component } from './pages/bandcamp/albums/mw/tracks/mw10/mw10.component'; // Control - Free to Ask
// ######################################################################################################
import { StComponent } from './pages/bandcamp/albums/st/st.component'; // Space Trip - Album and Tracks
import { St1Component } from './pages/bandcamp/albums/st/tracks/st1/st1.component'; // anomaly - disconnected function
import { St2Component } from './pages/bandcamp/albums/st/tracks/st2/st2.component';
import { St3Component } from './pages/bandcamp/albums/st/tracks/st3/st3.component';
import { St4Component } from './pages/bandcamp/albums/st/tracks/st4/st4.component';
import { St5Component } from './pages/bandcamp/albums/st/tracks/st5/st5.component';
import { St6Component } from './pages/bandcamp/albums/st/tracks/st6/st6.component';
import { St7Component } from './pages/bandcamp/albums/st/tracks/st7/st7.component';
import { St8Component } from './pages/bandcamp/albums/st/tracks/st8/st8.component';
import { St9Component } from './pages/bandcamp/albums/st/tracks/st9/st9.component';
import { St10Component } from './pages/bandcamp/albums/st/tracks/st10/st10.component';
import { St11Component } from './pages/bandcamp/albums/st/tracks/st11/st11.component';
import { St12Component } from './pages/bandcamp/albums/st/tracks/st12/st12.component';
import { St13Component } from './pages/bandcamp/albums/st/tracks/st13/st13.component';
// ######################################################################################################
import { SkdComponent } from './pages/bandcamp/albums/skd/skd.component';// Shiva and Kali Dance - Album and Tracks
import { Skd1Component } from './pages/bandcamp/albums/skd/tracks/skd1/skd1.component';
import { Skd2Component } from './pages/bandcamp/albums/skd/tracks/skd2/skd2.component';
import { Skd3Component } from './pages/bandcamp/albums/skd/tracks/skd3/skd3.component';
import { Skd4Component } from './pages/bandcamp/albums/skd/tracks/skd4/skd4.component';
import { Skd5Component } from './pages/bandcamp/albums/skd/tracks/skd5/skd5.component';
import { Skd6Component } from './pages/bandcamp/albums/skd/tracks/skd6/skd6.component';
import { Skd7Component } from './pages/bandcamp/albums/skd/tracks/skd7/skd7.component';
import { Skd8Component } from './pages/bandcamp/albums/skd/tracks/skd8/skd8.component';
import { Skd9Component } from './pages/bandcamp/albums/skd/tracks/skd9/skd9.component';
import { Skd10Component } from './pages/bandcamp/albums/skd/tracks/skd10/skd10.component';
import { Skd11Component } from './pages/bandcamp/albums/skd/tracks/skd11/skd11.component';
import { Skd12Component } from './pages/bandcamp/albums/skd/tracks/skd12/skd12.component';
import { Skd13Component } from './pages/bandcamp/albums/skd/tracks/skd13/skd13.component';
import { Skd14Component } from './pages/bandcamp/albums/skd/tracks/skd14/skd14.component';
import { Skd15Component } from './pages/bandcamp/albums/skd/tracks/skd15/skd15.component';
import { Skd16Component } from './pages/bandcamp/albums/skd/tracks/skd16/skd16.component';
import { Skd17Component } from './pages/bandcamp/albums/skd/tracks/skd17/skd17.component';
import { Skd18Component } from './pages/bandcamp/albums/skd/tracks/skd18/skd18.component';
import { Skd19Component } from './pages/bandcamp/albums/skd/tracks/skd19/skd19.component';
import { Skd20Component } from './pages/bandcamp/albums/skd/tracks/skd20/skd20.component';
// ######################################################################################################
import { EtComponent } from './pages/bandcamp/albums/et/et.component'; // Eternal Delay - Album and Tracks
import { Et1Component } from './pages/bandcamp/albums/et/tracks/et1/et1.component';
import { Et2Component } from './pages/bandcamp/albums/et/tracks/et2/et2.component';
import { Et3Component } from './pages/bandcamp/albums/et/tracks/et3/et3.component';
import { Et4Component } from './pages/bandcamp/albums/et/tracks/et4/et4.component';
import { Et5Component } from './pages/bandcamp/albums/et/tracks/et5/et5.component';
import { Et6Component } from './pages/bandcamp/albums/et/tracks/et6/et6.component';
import { Et7Component } from './pages/bandcamp/albums/et/tracks/et7/et7.component';
import { Et8Component } from './pages/bandcamp/albums/et/tracks/et8/et8.component';
import { Et9Component } from './pages/bandcamp/albums/et/tracks/et9/et9.component';
import { Et10Component } from './pages/bandcamp/albums/et/tracks/et10/et10.component';
import { Et11Component } from './pages/bandcamp/albums/et/tracks/et11/et11.component';
// ######################################################################################################
import { NfiComponent } from './pages/bandcamp/albums/nfi/nfi.component'; // Noise Frequency - Impulse - Album and Tracks
import { Nfi1Component } from './pages/bandcamp/albums/nfi/tracks/nfi1/nfi1.component';
import { Nfi2Component } from './pages/bandcamp/albums/nfi/tracks/nfi2/nfi2.component';
import { Nfi3Component } from './pages/bandcamp/albums/nfi/tracks/nfi3/nfi3.component';
import { Nfi4Component } from './pages/bandcamp/albums/nfi/tracks/nfi4/nfi4.component';
import { Nfi5Component } from './pages/bandcamp/albums/nfi/tracks/nfi5/nfi5.component';
import { Nfi6Component } from './pages/bandcamp/albums/nfi/tracks/nfi6/nfi6.component';
import { Nfi7Component } from './pages/bandcamp/albums/nfi/tracks/nfi7/nfi7.component';
import { Nfi8Component } from './pages/bandcamp/albums/nfi/tracks/nfi8/nfi8.component';
import { Nfi9Component } from './pages/bandcamp/albums/nfi/tracks/nfi9/nfi9.component';
import { Nfi10Component } from './pages/bandcamp/albums/nfi/tracks/nfi10/nfi10.component';
import { Nfi11Component } from './pages/bandcamp/albums/nfi/tracks/nfi11/nfi11.component';
import { Nfi12Component } from './pages/bandcamp/albums/nfi/tracks/nfi12/nfi12.component';
// ######################################################################################################
import { EsComponent } from './pages/bandcamp/albums/es/es.component'; // Emotional Signals - Album and Tracks
import { Es1Component } from './pages/bandcamp/albums/es/tracks/es1/es1.component'; // We Came in Peace
import { Es2Component } from './pages/bandcamp/albums/es/tracks/es2/es2.component'; // We Came in Peace
import { Es3Component } from './pages/bandcamp/albums/es/tracks/es3/es3.component'; // We Came in Peace
import { Es4Component } from './pages/bandcamp/albums/es/tracks/es4/es4.component'; // We Came in Peace
import { Es5Component } from './pages/bandcamp/albums/es/tracks/es5/es5.component'; // We Came in Peace
import { Es6Component } from './pages/bandcamp/albums/es/tracks/es6/es6.component'; // We Came in Peace
import { Es7Component } from './pages/bandcamp/albums/es/tracks/es7/es7.component'; // We Came in Peace
import { Es8Component } from './pages/bandcamp/albums/es/tracks/es8/es8.component'; // 
import { Es9Component } from './pages/bandcamp/albums/es/tracks/es9/es9.component'; // shamanic Visions
import { Es10Component } from './pages/bandcamp/albums/es/tracks/es10/es10.component'; // In Fun to Care
import { Es11Component } from './pages/bandcamp/albums/es/tracks/es11/es11.component'; // We Came in Peace
import { Es12Component } from './pages/bandcamp/albums/es/tracks/es12/es12.component'; // We Came in Peace
import { Es13Component } from './pages/bandcamp/albums/es/tracks/es13/es13.component'; // We Came in Peace
// ######################################################################################################
import { OtComponent } from './pages/bandcamp/albums/ot/ot.component'; // Only Tributes - Album and Tracks
import { Ot1Component} from './pages/bandcamp/albums/ot/tracks/ot1/ot1.component'; // Lords - Egocentric Will
import { Ot2Component} from './pages/bandcamp/albums/ot/tracks/ot2/ot2.component'; // Lords - Egocentric Will
import { Ot3Component} from './pages/bandcamp/albums/ot/tracks/ot3/ot3.component'; // Lords - Egocentric Will
import { Ot4Component} from './pages/bandcamp/albums/ot/tracks/ot4/ot4.component'; // Lords - Egocentric Will
import { Ot5Component} from './pages/bandcamp/albums/ot/tracks/ot5/ot5.component'; // Lords - Egocentric Will
import { Ot6Component} from './pages/bandcamp/albums/ot/tracks/ot6/ot6.component'; // Lords - Egocentric Will
import { Ot7Component} from './pages/bandcamp/albums/ot/tracks/ot7/ot7.component'; // Lords - Egocentric Will
import { Ot8Component} from './pages/bandcamp/albums/ot/tracks/ot8/ot8.component'; // Lords - Egocentric Will
import { Ot9Component} from './pages/bandcamp/albums/ot/tracks/ot9/ot9.component'; // Lords - Egocentric Will
import { Ot10Component} from './pages/bandcamp/albums/ot/tracks/ot10/ot10.component'; // Lords - Egocentric Will
import { Ot11Component} from './pages/bandcamp/albums/ot/tracks/ot11/ot11.component'; // Lords - Egocentric Will
import { WhoweareComponent } from './pages/articles/more/whoweare/whoweare.component';
import { UtellmeComponent } from './pages/articles/more/utellme/utellme.component';
import { WaterbloodComponent } from './pages/articles/more/waterblood/waterblood.component';
import { PathshieldsComponent } from './pages/articles/more/pathshields/pathshields.component';
import { BecauseweloveComponent } from './pages/soundcloud/path/shields/becausewelove/becausewelove.component';
import { DarkwarriorComponent } from './pages/soundcloud/path/shields/darkwarrior/darkwarrior.component';
import { MoneynopowerComponent } from './pages/soundcloud/path/shields/moneynopower/moneynopower.component';
import { ExpressionNatureComponent } from './pages/soundcloud/path/shields/expression-nature/expression-nature.component';
import { HipnoticDanceComponent } from './pages/soundcloud/path/shields/hipnotic-dance/hipnotic-dance.component';
import { FirstMinutesComponent } from './pages/soundcloud/path/shields/first-minutes/first-minutes.component';
import { SheNeedHeCreateComponent } from './pages/soundcloud/path/shields/she-need-he-create/she-need-he-create.component';
import { IlusionMythComponent } from './pages/soundcloud/path/shields/ilusion-myth/ilusion-myth.component';
import { DeepThoughtsComponent } from './pages/soundcloud/path/shields/deep-thoughts/deep-thoughts.component';
import { DoDComponent } from './pages/soundcloud/path/shields/do-d/do-d.component';
import { AgainstTheGreedComponent } from './pages/soundcloud/path/shields/against-the-greed/against-the-greed.component';
import { DigitalPerspectiveComponent } from './pages/soundcloud/path/shields/digital-perspective/digital-perspective.component';
import { SixtyNineComponent } from './pages/soundcloud/path/shields/sixty-nine/sixty-nine.component';
import { ICanFeelComponent } from './pages/soundcloud/path/shields/ican-feel/ican-feel.component';
import { UnionPointComponent } from './pages/soundcloud/path/shields/union-point/union-point.component';
import { WeAreToolsComponent } from './pages/soundcloud/path/shields/we-are-tools/we-are-tools.component';
import { EternalMastersComponent } from './pages/soundcloud/path/shields/eternal-masters/eternal-masters.component';
import { WorstMusicComponent } from './pages/soundcloud/path/shields/worst-music/worst-music.component';
import { UniverseComponent } from './pages/soundcloud/path/shields/universe/universe.component';
import { BoobooComponent } from './pages/soundcloud/path/shields/booboo/booboo.component';
import { DoItComponent } from './pages/soundcloud/path/shields/do-it/do-it.component';
import { MysonComponent } from './pages/bandcamp/albums/vot/myson/myson.component';
import { ShivaKaliDanceImageComponent } from './pages/bandcamp/albums/skd/shiva-kali-dance-image/shiva-kali-dance-image.component';
import { WaterBloodImageComponent } from './pages/soundcloud/magic/fantasy/water-blood-image/water-blood-image.component';
import { OscarFmComponent } from './pages/mystic/oscar-fm/oscar-fm.component';
import { MysticPortalComponent } from './pages/mystic/oscar-fm/mystic-portal/mystic-portal.component';
import { TaurosComponent } from './pages/bandcamp/albums/nfi/tauros/tauros.component';
import { WoodFireComponent } from './pages/soundcloud/magic/fantasy/wood-fire/wood-fire.component';
// import { PrivacyComponent } from './pages/wiki/privacy/privacy.component';


const appRoutes: Routes = [ // HTML VIRTUAL PATH
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'who', component: WhoComponent },
  { path: 'oscar/fm', component: OscarFmComponent },
  { path: 'tauros', component: TaurosComponent },
  { path: 'about/me/and/you', component: WhoweareComponent },
  { path: 'you/are/the/wood/i/am/the/fire', component: WoodFireComponent },
  { path: 'license', component: LicenseComponent }, // Eternal License
//  { path: 'articles', component: ArticlesComponent },
//  { path: 'water/vs/blood', component: WaterbloodComponent },
  { path: 'path/of/shields', component: PathshieldsComponent },
// ######################################################################################################
//  { path: 'mixcloud', component: MixcloudComponent }, // Mixcloud
  { path: 'we/must/change/our/ways', component: ChangeComponent }, // Tribute - Severn Cullis Suzuki
  { path: 'ring/of/fire/yin', component: RfyinComponent }, // Tao Ring of Fire (Yin)
  { path: 'ring/of/fire/yang', component: RfyangComponent }, // Tao Ring of Fire (Yang)
  { path: 'eternal/fance/of/love/tao', component: DramonkComponent }, // Dragon & Monkey ( Hope )
  { path: 'firebase/solar/plexus', component: SolplexComponent }, // Firebase (Solar Plexus)
  { path: 'genius/monkey/style', component: MonkComponent }, // Monk (Black Gold)
  { path: 'real/time', component: RtComponent }, // Real Time Shamanic Quest
  { path: 'mission/world/wide/target', component: MissionComponent }, // World wide Target
  { path: 'last/warning/tao/touch', component: TaoComponent }, // Last Warning
  { path: 'data/objects/and/functions', component: DataComponent }, // Data
// ######################################################################################################
//  { path: 'soundcloud', component: SoundcloudComponent }, // SoundCloud
  { path: 'lets/make/business', component: BusinessComponent },
//  { path: 'water/blood', component: WaterBloodComponent },
  { path: 'water/blood/path', component: WaterBloodImageComponent }, 
  { path: 'dont/take/us/seriously/we/are/having/fun', component: SeriouslyComponent },
  { path: 'boom/cat', component: CatComponent }, // Black Cat & White Cat
  { path: 'mystic/portal', component: MysticPortalComponent },
  { path: 'three/you/tell/me', component: ThreeComponent }, // 3 You tell Me!
  { path: 'absolute/everything/and/everyone', component: AbsoluteComponent }, // Absolute
  { path: 'fire', component: BringyoufireComponent }, // Bring You Fire
  { path: 'dragon', component: DragonComponent }, // The Dragon
  { path: 'sun/wukong/the/monkey/king', component: MonkingComponent }, // Sun Wukong
  { path: 'possession/of/will', component: WillpowerComponent }, // the Possession of Will
  { path: 'fire/in/my/eyes/metal/in/my/soul', component: MetalsoulComponent },
  { path: 'because/we/love', component: BecauseweloveComponent },
  { path: 'dark/warrior', component: DarkwarriorComponent },
  { path: 'money/is/no/power', component: MoneynopowerComponent },
  { path: 'expression/nature', component: ExpressionNatureComponent },
  { path: 'hipnotic/dance', component: HipnoticDanceComponent },
  { path: 'the/first/three/minutes', component: FirstMinutesComponent },
  { path: 'she/need/he/create', component: SheNeedHeCreateComponent }, 
  { path: 'myth/illusions/memories', component: IlusionMythComponent }, 
  { path: 'deep/thoughts', component: DeepThoughtsComponent },
  { path: 'd/o/d', component: DoDComponent },
  { path: 'against/the/greed', component: AgainstTheGreedComponent },
  { path: 'digital/perspective', component: DigitalPerspectiveComponent },
  { path: 'sixty/nine', component: SixtyNineComponent },
  { path: 'i/can/feel/i/have/a/body', component: ICanFeelComponent },
  { path: 'we/are/tools/objects/of/expression', component: WeAreToolsComponent },
  { path: 'eternal/masters/of/my/heart', component: EternalMastersComponent },
  { path: 'not/the/worst/music/in/the/world', component: WorstMusicComponent },
  { path: 'feel/the/night/feel/the/universe', component: UniverseComponent },
  { path: 'union/point/synchrozined', component: UnionPointComponent },
  { path: 'boo/the/condition/of/illusion', component:  BoobooComponent },
  { path: 'lets/do/it', component: DoItComponent },
// ######################################################################################################
// ######################################################################################################
// ######################################################################################################
  { path: 'yin/yang', component: BandcampComponent }, // YinYang Tribute
// ######################################################################################################
// ######################################################################################################
// ######################################################################################################
  { path: 'visions/of/thor', component: VotComponent }, // Visions of Thor Album and Tracks
  { path: 'my/son', component: MysonComponent },
  { path: 'emerge/internal/upgrade', component: Vot1Component }, // Emerge
  { path: 'water/horses/woman/free', component: Vot2Component }, // Water Horses - Woman Free
  { path: 'pain/vs/love', component: Vot3Component }, // Pain vs Love
  { path: 'black/birds/red/eyes', component: Vot4Component }, // Black Birds
  { path: 'burned/in/the/hands/of/wind', component: Vot5Component }, // burned in the hand of wind
  { path: 'summer/time/rock/and/roll', component: Vot6Component }, // Summer Night
  { path: 'v/euclidean/space', component: Vot7Component }, // V - euclidean space
  { path: 'invisible/frequency/you/can/change', component: Vot8Component }, // track 8
  { path: 'ma6nata/evil/inside', component: Vot9Component }, // track 9
  { path: 'shake/my/snakes', component: Vot10Component }, // track 10
  { path: 'we/are/the/ones', component: Vot11Component }, // track 11
// ######################################################################################################
  { path: 'machine/world', component: MwComponent }, // Machine World Album and Tracks
  { path: 'storming/plan/enigmatic/war', component: Mw1Component },
  { path: 'pain/art/illusion/and/expression', component: Mw2Component },
  { path: 'control/free/to/ask', component: Mw3Component }, // Control - Free to Ask
  { path: 'time/to/live/cache/cleaner', component: Mw4Component },
  { path: 'panic/luck', component: Mw5Component },
  { path: 'thunder/with/within/and/without', component: Mw6Component },
  { path: 'forest/jungle/at/night', component: Mw7Component },
  { path: 'have/fun/nothing/wrong/with/you/too', component: Mw8Component },
  { path: 'noise/breaker/lead/the/way', component: Mw9Component },
  { path: 'strang/groove/noise', component: Mw10Component },
// ######################################################################################################
  { path: 'space/trip', component: StComponent }, // Space Trip Album and Tracks
  { path: 'anomaly/disconnected/functions', component: St1Component },
  { path: 'organized/classic/motions', component: St2Component },
  { path: 'brave/new/choice/no/heroes', component: St3Component },
  { path: 'dark/net/mantra/over/flaw', component: St4Component },
  { path: 'id/666', component: St5Component }, // ID - 666
  { path: 'metamorphose/be/quiet/and/learn', component: St6Component },
  { path: 'complex/unknown/value', component: St7Component },
  { path: 'residents/of/love/deep/touch', component: St8Component },
  { path: 'silnuvano/flush', component: St9Component },
  { path: 'spiritual/redemption/odicforce', component: St10Component },
  { path: 'inside/outside', component: St11Component },
  { path: 'running/out/of/time/no/turning/back', component: St12Component },
  { path: 'pagan/cult/to/the/sun', component: St13Component },
// ######################################################################################################
  { path: 'shiva/kali', component: ShivaKaliDanceImageComponent }, 
  { path: 'shiva/and/kali/dance', component: SkdComponent }, // Shiva and Kali Dance 
  { path: 'discipline/no/escape', component: Skd1Component }, // Shiva and Kali Dance 
  { path: 'hard/work/deep/concentration', component: Skd2Component },
  { path: 'united/colors/of/skeleton/grow/your/skills', component: Skd3Component },
  { path: 'air/trip/fly/to/me', component: Skd4Component },
  { path: 'yellow/energy/burning/box', component: Skd5Component },
  { path: 'underwater/into/the/sky', component: Skd6Component },
  { path: 'drive/flow/crazy/ghost/train', component: Skd7Component },
  { path: 'first/contact/path/of/shields', component: Skd8Component },
  { path: 'do/not/deny/i/am/the/one', component: Skd9Component },
  { path: 'healing/correction/body/and/mind', component: Skd10Component },
  { path: 'conneted/to/you', component: Skd11Component },
  { path: 'delay/expectative', component: Skd12Component },
  { path: 'future/cosmic/attraction', component: Skd13Component },
  { path: 'call/me/karma', component: Skd14Component },
  { path: 'care/not/focus', component: Skd15Component },
  { path: 'neurotic/path', component: Skd16Component },
  { path: 'you/dare/suck/my/sax', component: Skd17Component },
  { path: 'my/dream/boom/festival', component: Skd18Component },
  { path: 'human/paradox/new/world', component: Skd19Component },
  { path: 'terms/of/living/love/or/die', component: Skd20Component },
// ######################################################################################################
  { path: 'eternal/delay', component: EtComponent }, // Eternal Delay
  { path: 'respect/spiritual/life', component: Et1Component },
  { path: 'organic/fields/all/energy/all/soul', component: Et2Component },
  { path: 'remember/why/you/are/here', component: Et3Component },
  { path: 'show/us/some/respect/warining', component: Et4Component },
  { path: 'human/test/sent', component: Et5Component },
  { path: 'flow/into/darkness/feels/like/water', component: Et6Component },
  { path: 'light/interception/sensitive/and/obscure', component: Et7Component },
  { path: 'you/dont/believe/in/what/you/say', component: Et8Component },
  { path: 'wait/madness/is/no/good', component: Et9Component },
  { path: 'welcome/to/yourself/i/am/your/conscience', component: Et10Component },
  { path: 'ladies/and/gentleman/move/on', component: Et11Component },
// ######################################################################################################
  { path: 'noise/frequency/impulse', component: NfiComponent }, // Noise Frequency Album 
  { path: 'bass/drop/blend', component: Nfi1Component },
  { path: 'between/us/image/and/sound', component: Nfi2Component },
  { path: 'dimensional/party/bit/parity', component: Nfi3Component },
  { path: 'not/bad/wrong', component: Nfi4Component }, // not bad - Wrong
  { path: 'failure/people/dont/care', component: Nfi5Component },
  { path: 'fuck/politic/sex/is/fun/vs/fuck/sex/politic/is/fun', component: Nfi6Component },
  { path: 'extreme/flow/go/deep/into/spiritual/life', component: Nfi7Component },
  { path: 'i/know/myself/i/am/a/free/men', component: Nfi8Component },
  { path: 'minimal/life/another/planet', component: Nfi9Component },
  { path: 'time/code/stealth/mode', component: Nfi10Component },
  { path: 'just/a/technical/skill/set', component: Nfi11Component },
  { path: 'body/answer/common/sense/is/not/intelligence', component: Nfi12Component },
  // ######################################################################################################
  { path: 'emotional/signals', component: EsComponent }, // Emotional Signals Album and Tracks
  { path: 'we/came/in/peace', component: Es1Component }, // We Came in Peace
  { path: 'just/another/open/door', component: Es2Component },
  { path: 'bigger/or/equal/to/zero', component: Es3Component },
  { path: 'tao/yin/yang', component: Es4Component },
  { path: 'magnetic/condition/psy/cats', component: Es5Component },
  { path: 'dominated/by/time/ruled/by/desire', component: Es6Component },
  { path: 'intro/litle/box/universe', component: Es7Component },
  { path: 'little/box/universe', component: Es8Component }, // Little Box - Universe
  { path: 'shamanic/visions', component: Es9Component }, // Shamanic Visions
  { path: 'the/fun/project/is/fun/to/take/care', component: Es10Component }, // Fun to Care
  { path: 'social/tool/kit/world/wide/conscience/cleaner', component: Es11Component },
  { path: 'hacking/into/the/error/festival/patch', component: Es12Component },
  { path: 'trust/the/constant/loop', component: Es13Component },
// ######################################################################################################
  { path: 'only/tributes', component: OtComponent }, // Only Tributes Album and Tracks
  { path: 'cats/like/to/dance/dogs/like/to/watch', component: Ot1Component }, // Dogs and Cats
//  { path: 'emerge/internal/upgrade', component: Ot2Component }, // Lords - Egocentric Will
  { path: 'bruce/lee/advice', component: Ot3Component }, // Bruce Lee
  { path: 'galactic/passion/dragon/fire', component: Ot4Component }, // FCP
  { path: 'lords/egocentric/will', component: Ot5Component }, // Lord or the Rings
  { path: 'matrix/no/limits', component: Ot6Component }, // Lords - Egocentric Will
//  { path: 'V - euclidean Space', component: Ot7Component }, // euclidean space
  { path: 'two/sides/one/force', component: Ot8Component }, // two sides one force ( star wars )
  { path: 'devil/spell/me/and/you', component: Ot9Component }, // Lords - Egocentric Will
  { path: 'vital/manipulation/become/mad', component: Ot10Component }, // Lords - Egocentric Will
  { path: 'parallel/wish/the/mirror', component: Ot11Component }, // Lords - Egocentric Will
  { path: 'tao', component: UtellmeComponent },
  { path: 'wiki', component: WikiComponent },
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
    WaterbloodComponent,
    ArticlesComponent,
    WikiComponent,
    WhoweareComponent,
    UtellmeComponent,
    IntroComponent,
    FirststepsComponent,
    CoreconceptsComponent,
    IdeaComponent,
    ChallengeComponent,
    PathComponent,
    PathshieldsComponent,
//    PrivacyComponent
//    LoginComponent,
// ######################################################################################################
    SoundcloudComponent, // Soundcloud
    BusinessComponent,
// ######################################################################################################
    MixcloudComponent, // Mixcloud
    SeriouslyComponent,
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
    MetalsoulComponent,
// ######################################################################################################
    BandcampComponent,
// ######################################################################################################
    VotComponent, // ------------------------------ Album - Visions of Thor - My Son
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
// ######################################################################################################
    MwComponent, // ------------------------------ Album - Machine World
    Mw1Component,
    Mw2Component,
    Mw3Component, // Control - Free to Ask
    Mw4Component,
    Mw5Component,
    Mw6Component,
    Mw7Component,
    Mw8Component,
    Mw8Component,
    Mw9Component,
    Mw10Component,
// ######################################################################################################
    StComponent, // ------------------------------ Album - Space Trip
    St1Component,
    St2Component,
    St3Component,
    St4Component,
    St5Component, // Track 5 - ID 666
    St6Component,
    St7Component,
    St8Component,
    St9Component,
    St10Component,
    St12Component,
    St11Component,
    St13Component,
// ######################################################################################################
    SkdComponent, // ------------------------------ Album - Shiva & kali dance
    Skd1Component,
    Skd2Component,
    Skd3Component,
    Skd4Component,
    Skd5Component,
    Skd6Component,
    Skd7Component,
    Skd8Component,
    Skd9Component,
    Skd10Component,
    Skd11Component,
    Skd12Component,
    Skd13Component,
    Skd14Component,
    Skd15Component,
    Skd16Component,
    Skd17Component,
    Skd18Component,
    Skd19Component,
    Skd20Component,
// ######################################################################################################
    EtComponent, // ------------------------------  Album - Eternal Delay
    Et1Component,
    Et2Component,
    Et3Component,
    Et4Component,
    Et5Component,
    Et6Component,
    Et7Component,
    Et8Component,
    Et9Component,
    Et10Component,
    Et11Component,
// ######################################################################################################
    NfiComponent, // ------------------------------ Album - Noise Frequency
    Nfi1Component,
    Nfi2Component,
    Nfi3Component,
    Nfi4Component, // Not Bad - Wrong
    Nfi5Component,
    Nfi6Component,
    Nfi7Component,
    Nfi8Component,
    Nfi9Component,
    Nfi10Component,
    Nfi11Component,
    Nfi12Component,
// ######################################################################################################
    EsComponent, // ------------------------------ Album - Emotional Signals
    Es1Component, // we came in peace - trace zone
    Es2Component,
    Es3Component,
    Es4Component,
    Es5Component,
    Es6Component,
    Es7Component,
    Es8Component, // Little Box - Universe
    Es9Component, // Shamanic Visions
    Es10Component, // Fun to Care
    Es11Component,
    Es12Component,
    Es13Component,
// ######################################################################################################
    OtComponent, // ------------------------------ Album - Only Tribut
    Ot1Component,
    Ot2Component,
    Ot3Component,
    Ot4Component,
    Ot5Component, // Lords - Egocentric Will
    Ot6Component,
    Ot7Component,
    Ot8Component,
    Ot9Component,
    Ot10Component,
    Ot10Component,
    Ot11Component,
    WaterbloodComponent,
    PathshieldsComponent,
    BecauseweloveComponent,
    DarkwarriorComponent,
    MoneynopowerComponent,
    ExpressionNatureComponent,
    HipnoticDanceComponent,
    FirstMinutesComponent,
    SheNeedHeCreateComponent,
    IlusionMythComponent,
    DeepThoughtsComponent,
    DoDComponent,
    AgainstTheGreedComponent,
    DigitalPerspectiveComponent,
    SixtyNineComponent,
    ICanFeelComponent,
    UnionPointComponent,
    WeAreToolsComponent,
    EternalMastersComponent,
    WorstMusicComponent,
    UniverseComponent,
    BoobooComponent,
    DoItComponent,
    MysonComponent,
    ShivaKaliDanceImageComponent,
    WaterBloodImageComponent,
    OscarFmComponent,
    MysticPortalComponent,
    TaurosComponent,
    WoodFireComponent,

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
