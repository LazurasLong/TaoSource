import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes, Route, provideRoutes } from '@angular/router';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
// import { RecaptchaModule } from 'ng-recaptcha';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -;
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component'; // Visions
import { LicenseComponent } from './pages/license/license.component'; // Eternal License
import { WhoComponent } from './pages/who/who.component'; // Who We Are
// ###################################################################################################### Political Tributes
import { ChangeComponent } from './pages/yinyang/tributes/change/change.component'; // Severn Cullis Suzuki
import { CatComponent } from './pages/yinyang/soundcloud/boom/cat/cat.component'; // Yin Yang Cat Boom Tribute
import { SeriouslyComponent } from './pages/yinyang/tributes/seriously/seriously.component';
// ###################################################################################################### yinyang/soundcloud
// import { yinyang/soundcloudComponent } from './pages/yinyang/soundcloud/yinyang/soundcloud.component'; // Sounds Cloud
import { BusinessComponent } from './pages/yinyang/soundcloud/magic/fantasy/business/business.component';
import { BringyoufireComponent } from './pages/yinyang/soundcloud/magic/fantasy/bringyoufire/bringyoufire.component'; // Bring You Fire
import { ThreeComponent } from './pages/yinyang/soundcloud/path/shields/utellme/three/three.component'; // 3 - You Tell Me
import { AbsoluteComponent} from './pages/yinyang/soundcloud/path/shields/utellme/absolute/absolute.component'; // Absolute
import { DragonComponent } from './pages/yinyang/soundcloud/path/shields/dragon/dragon.component'; // The Dragon
import { MonkingComponent } from './pages/yinyang/soundcloud/magic/fantasy/monking/monking.component'; // Sun Wukong
import { WillpowerComponent } from './pages/yinyang/soundcloud/path/shields/willpower/willpower.component'; // The Possession of Will
import { MetalsoulComponent } from './pages/yinyang/soundcloud/path/shields/metalsoul/metalsoul.component'; // Metal Soul - Fire Eyes
// ###################################################################################################### yinyang/mixcloud
// import { yinyang/mixcloudComponent } from './pages/yinyang/mixcloud/yinyang/mixcloud.component'; // // yinyang/mixcloud
import { RfyinComponent } from './pages/yinyang/mixcloud/tao/rfyin/rfyin.component'; // Ring of Fire (Yin)
import { RfyangComponent } from './pages/yinyang/mixcloud/tao/rfyang/rfyang.component'; // Ring of Gire (Yang)
import { DramonkComponent } from './pages/yinyang/mixcloud/tao/dramonk/dramonk.component'; // Dragon & Monkey  ( Love )
import { SolplexComponent } from './pages/yinyang/mixcloud/tao/solplex/solplex.component'; // Fire (Base)
import { MonkComponent } from './pages/yinyang/mixcloud/tao/monk/monk.component'; // (Genius - Monkey Style)
import { RtComponent } from './pages/yinyang/mixcloud/tao/rt/rt.component'; // Real Time Shamanic Quest
import { MissionComponent } from './pages/yinyang/mixcloud/tao/mission/mission.component'; // World wide target
import { TaoComponent } from './pages/yinyang/mixcloud/tao/tao/tao.component'; // Last Warning
import { DataComponent } from './pages/yinyang/mixcloud/tao/data/data.component'; // Data
// ######################################################################################################
// import { ArticlesComponent } from './pages/articles/articles.component';
// ######################################################################################################
import { WikiComponent } from './pages/license/wiki/wiki.component';
import { IntroComponent } from './pages/license/wiki/intro/intro.component';
import { FirststepsComponent } from './pages/license/wiki/firststeps/firststeps.component';
import { CoreconceptsComponent } from './pages/license/wiki/coreconcepts/coreconcepts.component';
import { IdeaComponent } from './pages/license/wiki/idea/idea.component';
import { ChallengeComponent } from './pages/license/wiki/challenge/challenge.component';
import { DevelopersComponent } from './pages/license/wiki/developers/developers.component';
import { SocialmediaComponent } from './pages/license/wiki/socialmedia/socialmedia.component';
import { PathComponent } from './pages/license/wiki/path/path.component';
// ###################################################################################################### yinyang
import { BandcampComponent } from './pages/yinyang/bandcamp.component';
import { VotComponent } from './pages/yinyang/albums/vot/vot.component'; // Visions of Thor - Album and Tracks
import { Vot1Component } from './pages/yinyang/albums/vot/tracks/vot1/vot1.component';
import { Vot2Component } from './pages/yinyang/albums/vot/tracks/vot2/vot2.component';
import { Vot3Component } from './pages/yinyang/albums/vot/tracks/vot3/vot3.component';
import { Vot4Component } from './pages/yinyang/albums/vot/tracks/vot4/vot4.component';
import { Vot5Component } from './pages/yinyang/albums/vot/tracks/vot5/vot5.component';
import { Vot6Component } from './pages/yinyang/albums/vot/tracks/vot6/vot6.component';
import { Vot7Component } from './pages/yinyang/albums/vot/tracks/vot7/vot7.component';
import { Vot8Component } from './pages/yinyang/albums/vot/tracks/vot8/vot8.component';
import { Vot9Component } from './pages/yinyang/albums/vot/tracks/vot9/vot9.component';
import { Vot10Component } from './pages/yinyang/albums/vot/tracks/vot10/vot10.component';
import { Vot11Component } from './pages/yinyang/albums/vot/tracks/vot11/vot11.component';
// ######################################################################################################
import { MwComponent } from './pages/yinyang/albums/mw/mw.component'; // Machine World - Album and Tracks
import { Mw1Component } from './pages/yinyang/albums/mw/tracks/mw1/mw1.component'; // Control - Free to Ask
import { Mw2Component } from './pages/yinyang/albums/mw/tracks/mw2/mw2.component'; // Control - Free to Ask
import { Mw3Component } from './pages/yinyang/albums/mw/tracks/mw3/mw3.component'; // Control - Free to Ask
import { Mw4Component } from './pages/yinyang/albums/mw/tracks/mw4/mw4.component'; // Control - Free to Ask
import { Mw5Component } from './pages/yinyang/albums/mw/tracks/mw5/mw5.component'; // Control - Free to Ask
import { Mw6Component } from './pages/yinyang/albums/mw/tracks/mw6/mw6.component'; // Control - Free to Ask
import { Mw7Component } from './pages/yinyang/albums/mw/tracks/mw7/mw7.component'; // Control - Free to Ask
import { Mw8Component } from './pages/yinyang/albums/mw/tracks/mw8/mw8.component'; // Control - Free to Ask
import { Mw9Component } from './pages/yinyang/albums/mw/tracks/mw9/mw9.component'; // Control - Free to Ask
import { Mw10Component } from './pages/yinyang/albums/mw/tracks/mw10/mw10.component'; // Control - Free to Ask
// ######################################################################################################
import { StComponent } from './pages/yinyang/albums/st/st.component'; // Space Trip - Album and Tracks
import { St1Component } from './pages/yinyang/albums/st/tracks/st1/st1.component'; // anomaly - disconnected function
import { St2Component } from './pages/yinyang/albums/st/tracks/st2/st2.component';
import { St3Component } from './pages/yinyang/albums/st/tracks/st3/st3.component';
import { St4Component } from './pages/yinyang/albums/st/tracks/st4/st4.component';
import { St5Component } from './pages/yinyang/albums/st/tracks/st5/st5.component';
import { St6Component } from './pages/yinyang/albums/st/tracks/st6/st6.component';
import { St7Component } from './pages/yinyang/albums/st/tracks/st7/st7.component';
import { St8Component } from './pages/yinyang/albums/st/tracks/st8/st8.component';
import { St9Component } from './pages/yinyang/albums/st/tracks/st9/st9.component';
import { St10Component } from './pages/yinyang/albums/st/tracks/st10/st10.component';
import { St11Component } from './pages/yinyang/albums/st/tracks/st11/st11.component';
import { St12Component } from './pages/yinyang/albums/st/tracks/st12/st12.component';
import { St13Component } from './pages/yinyang/albums/st/tracks/st13/st13.component';
// ######################################################################################################
import { SkdComponent } from './pages/yinyang/albums/skd/skd.component'; // Shiva and Kali Dance - Album and Tracks
import { Skd1Component } from './pages/yinyang/albums/skd/tracks/skd1/skd1.component';
import { Skd2Component } from './pages/yinyang/albums/skd/tracks/skd2/skd2.component';
import { Skd3Component } from './pages/yinyang/albums/skd/tracks/skd3/skd3.component';
import { Skd4Component } from './pages/yinyang/albums/skd/tracks/skd4/skd4.component';
import { Skd5Component } from './pages/yinyang/albums/skd/tracks/skd5/skd5.component';
import { Skd6Component } from './pages/yinyang/albums/skd/tracks/skd6/skd6.component';
import { Skd7Component } from './pages/yinyang/albums/skd/tracks/skd7/skd7.component';
import { Skd8Component } from './pages/yinyang/albums/skd/tracks/skd8/skd8.component';
import { Skd9Component } from './pages/yinyang/albums/skd/tracks/skd9/skd9.component';
import { Skd10Component } from './pages/yinyang/albums/skd/tracks/skd10/skd10.component';
import { Skd11Component } from './pages/yinyang/albums/skd/tracks/skd11/skd11.component';
import { Skd12Component } from './pages/yinyang/albums/skd/tracks/skd12/skd12.component';
import { Skd13Component } from './pages/yinyang/albums/skd/tracks/skd13/skd13.component';
import { Skd14Component } from './pages/yinyang/albums/skd/tracks/skd14/skd14.component';
import { Skd15Component } from './pages/yinyang/albums/skd/tracks/skd15/skd15.component';
import { Skd16Component } from './pages/yinyang/albums/skd/tracks/skd16/skd16.component';
import { Skd17Component } from './pages/yinyang/albums/skd/tracks/skd17/skd17.component';
import { Skd18Component } from './pages/yinyang/albums/skd/tracks/skd18/skd18.component';
import { Skd19Component } from './pages/yinyang/albums/skd/tracks/skd19/skd19.component';
import { Skd20Component } from './pages/yinyang/albums/skd/tracks/skd20/skd20.component';
// ######################################################################################################
import { EtComponent } from './pages/yinyang/albums/et/et.component'; // Eternal Delay - Album and Tracks
import { Et1Component } from './pages/yinyang/albums/et/tracks/et1/et1.component';
import { Et2Component } from './pages/yinyang/albums/et/tracks/et2/et2.component';
import { Et3Component } from './pages/yinyang/albums/et/tracks/et3/et3.component';
import { Et4Component } from './pages/yinyang/albums/et/tracks/et4/et4.component';
import { Et5Component } from './pages/yinyang/albums/et/tracks/et5/et5.component';
import { Et6Component } from './pages/yinyang/albums/et/tracks/et6/et6.component';
import { Et7Component } from './pages/yinyang/albums/et/tracks/et7/et7.component';
import { Et8Component } from './pages/yinyang/albums/et/tracks/et8/et8.component';
import { Et9Component } from './pages/yinyang/albums/et/tracks/et9/et9.component';
import { Et10Component } from './pages/yinyang/albums/et/tracks/et10/et10.component';
import { Et11Component } from './pages/yinyang/albums/et/tracks/et11/et11.component';
// ######################################################################################################
import { NfiComponent } from './pages/yinyang/albums/nfi/nfi.component'; // Noise Frequency - Impulse - Album and Tracks
import { Nfi1Component } from './pages/yinyang/albums/nfi/tracks/nfi1/nfi1.component';
import { Nfi2Component } from './pages/yinyang/albums/nfi/tracks/nfi2/nfi2.component';
import { Nfi3Component } from './pages/yinyang/albums/nfi/tracks/nfi3/nfi3.component';
import { Nfi4Component } from './pages/yinyang/albums/nfi/tracks/nfi4/nfi4.component';
import { Nfi5Component } from './pages/yinyang/albums/nfi/tracks/nfi5/nfi5.component';
import { Nfi6Component } from './pages/yinyang/albums/nfi/tracks/nfi6/nfi6.component';
import { Nfi7Component } from './pages/yinyang/albums/nfi/tracks/nfi7/nfi7.component';
import { Nfi8Component } from './pages/yinyang/albums/nfi/tracks/nfi8/nfi8.component';
import { Nfi9Component } from './pages/yinyang/albums/nfi/tracks/nfi9/nfi9.component';
import { Nfi10Component } from './pages/yinyang/albums/nfi/tracks/nfi10/nfi10.component';
import { Nfi11Component } from './pages/yinyang/albums/nfi/tracks/nfi11/nfi11.component';
import { Nfi12Component } from './pages/yinyang/albums/nfi/tracks/nfi12/nfi12.component';
// ######################################################################################################
import { EsComponent } from './pages/yinyang/albums/es/es.component'; // Emotional Signals - Album and Tracks
import { Es1Component } from './pages/yinyang/albums/es/tracks/es1/es1.component'; // We Came in Peace
import { Es2Component } from './pages/yinyang/albums/es/tracks/es2/es2.component'; // We Came in Peace
import { Es3Component } from './pages/yinyang/albums/es/tracks/es3/es3.component'; // We Came in Peace
import { Es4Component } from './pages/yinyang/albums/es/tracks/es4/es4.component'; // We Came in Peace
import { Es5Component } from './pages/yinyang/albums/es/tracks/es5/es5.component'; // We Came in Peace
import { Es6Component } from './pages/yinyang/albums/es/tracks/es6/es6.component'; // We Came in Peace
import { Es7Component } from './pages/yinyang/albums/es/tracks/es7/es7.component'; // We Came in Peace
import { Es8Component } from './pages/yinyang/albums/es/tracks/es8/es8.component'; //
import { Es9Component } from './pages/yinyang/albums/es/tracks/es9/es9.component'; // shamanic Visions
import { Es10Component } from './pages/yinyang/albums/es/tracks/es10/es10.component'; // In Fun to Care
import { Es11Component } from './pages/yinyang/albums/es/tracks/es11/es11.component'; // We Came in Peace
import { Es12Component } from './pages/yinyang/albums/es/tracks/es12/es12.component'; // We Came in Peace
import { Es13Component } from './pages/yinyang/albums/es/tracks/es13/es13.component'; // We Came in Peace
// ######################################################################################################
import { OtComponent } from './pages/yinyang/albums/ot/ot.component'; // Only Tributes - Album and Tracks
import { Ot1Component} from './pages/yinyang/albums/ot/tracks/ot1/ot1.component'; // Lords - Egocentric Will
import { Ot2Component} from './pages/yinyang/albums/ot/tracks/ot2/ot2.component'; // Lords - Egocentric Will
import { Ot3Component} from './pages/yinyang/albums/ot/tracks/ot3/ot3.component'; // Lords - Egocentric Will
import { Ot4Component} from './pages/yinyang/albums/ot/tracks/ot4/ot4.component'; // Lords - Egocentric Will
import { Ot5Component} from './pages/yinyang/albums/ot/tracks/ot5/ot5.component'; // Lords - Egocentric Will
import { Ot6Component} from './pages/yinyang/albums/ot/tracks/ot6/ot6.component'; // Lords - Egocentric Will
import { Ot7Component} from './pages/yinyang/albums/ot/tracks/ot7/ot7.component'; // Lords - Egocentric Will
import { Ot8Component} from './pages/yinyang/albums/ot/tracks/ot8/ot8.component'; // Lords - Egocentric Will
import { Ot9Component} from './pages/yinyang/albums/ot/tracks/ot9/ot9.component'; // Lords - Egocentric Will
import { Ot10Component} from './pages/yinyang/albums/ot/tracks/ot10/ot10.component'; // Lords - Egocentric Will
import { Ot11Component} from './pages/yinyang/albums/ot/tracks/ot11/ot11.component'; // Lords - Egocentric Will
import { WhoweareComponent } from './pages/who/whoweare/whoweare.component';
import { UtellmeComponent } from './pages/yinyang/soundcloud/path/shields/utellme/utellme.component';
import { PathshieldsComponent } from './pages/yinyang/soundcloud/path/shields/pathshields/pathshields.component';
import { BecauseweloveComponent } from './pages/yinyang/soundcloud/path/shields/becausewelove/becausewelove.component';
import { DarkwarriorComponent } from './pages/yinyang/soundcloud/path/shields/darkwarrior/darkwarrior.component';
import { MoneynopowerComponent } from './pages/yinyang/soundcloud/path/shields/moneynopower/moneynopower.component';
import { ExpressionNatureComponent } from './pages/yinyang/soundcloud/path/shields/expression-nature/expression-nature.component';
import { HipnoticDanceComponent } from './pages/yinyang/soundcloud/path/shields/hipnotic-dance/hipnotic-dance.component';
import { FirstMinutesComponent } from './pages/yinyang/soundcloud/path/shields/first-minutes/first-minutes.component';
import { SheNeedHeCreateComponent } from './pages/yinyang/soundcloud/path/shields/she-need-he-create/she-need-he-create.component';
import { IlusionMythComponent } from './pages/yinyang/soundcloud/path/shields/ilusion-myth/ilusion-myth.component';
import { DeepThoughtsComponent } from './pages/yinyang/soundcloud/path/shields/deep-thoughts/deep-thoughts.component';
import { DoDComponent } from './pages/yinyang/soundcloud/path/shields/do-d/do-d.component';
import { AgainstTheGreedComponent } from './pages/yinyang/soundcloud/path/shields/against-the-greed/against-the-greed.component';
import { DigitalPerspectiveComponent } from './pages/yinyang/soundcloud/path/shields/digital-perspective/digital-perspective.component';
import { SixtyNineComponent } from './pages/yinyang/soundcloud/path/shields/sixty-nine/sixty-nine.component';
import { ICanFeelComponent } from './pages/yinyang/soundcloud/path/shields/ican-feel/ican-feel.component';
import { UnionPointComponent } from './pages/yinyang/soundcloud/path/shields/union-point/union-point.component';
import { WeAreToolsComponent } from './pages/yinyang/soundcloud/path/shields/we-are-tools/we-are-tools.component';
import { EternalMastersComponent } from './pages/yinyang/soundcloud/path/shields/eternal-masters/eternal-masters.component';
import { WorstMusicComponent } from './pages/yinyang/soundcloud/path/shields/worst-music/worst-music.component';
import { UniverseComponent } from './pages/yinyang/soundcloud/path/shields/universe/universe.component';
import { BoobooComponent } from './pages/yinyang/soundcloud/path/shields/booboo/booboo.component';
import { DoItComponent } from './pages/yinyang/soundcloud/path/shields/do-it/do-it.component';
import { WaterBloodImageComponent } from './pages/yinyang/soundcloud/magic/fantasy/water-blood-image/water-blood-image.component';
import { OscarFmComponent } from './pages/mystic/oscar-fm/oscar-fm.component';
import { MysticPortalComponent } from './pages/yinyang/soundcloud/boom/mystic-portal/mystic-portal.component';
import { WoodFireComponent } from './pages/yinyang/soundcloud/magic/fantasy/wood-fire/wood-fire.component';
import { FragmentsComponent } from './pages/yinyang/soundcloud/boom/fragments/fragments.component';
import { SimplicityComponent } from './pages/yinyang/soundcloud/signals/simplicity/simplicity.component';
import { DanceOfLoveComponent } from './pages/love/dance-of-love/dance-of-love.component';
import { LetsTalkAboutLoveComponent } from './pages/yinyang/mixcloud/tao/lets-talk-about-love/lets-talk-about-love.component';
import { IAmMusicPerfectBombComponent } from './pages/yinyang/mixcloud/tao/iam-music-perfect-bomb/iam-music-perfect-bomb.component';
// tslint:disable-next-line:max-line-length
import { LetsMakeChangeWeAllNeedComponent } from './pages/yinyang/mixcloud/tao/lets-make-change-we-all-need/lets-make-change-we-all-need.component';
// tslint:disable-next-line:max-line-length
import { MagicTouchInTheShadowsComponent } from './pages/yinyang/mixcloud/tao/magic-touch-in-the-shadows/magic-touch-in-the-shadows.component';
import { OurTryNotOurChoiceComponent } from './pages/yinyang/mixcloud/tao/our-try-not-our-choice/our-try-not-our-choice.component';
import { OurEternalLicenseComponent } from './pages/yinyang/mixcloud/tao/our-eternal-license/our-eternal-license.component';
import { TheChallengeComponent } from './pages/yinyang/mixcloud/tao/the-challenge/the-challenge.component';
import { PrinceOfDarknessComponent } from './pages/yinyang/mixcloud/tao/prince-of-darkness/prince-of-darkness.component';
import { AreYouEvilComponent } from './pages/yinyang/mixcloud/tao/are-you-evil/are-you-evil.component';
import { IWantYouYouWantMeComponent } from './pages/yinyang/mixcloud/tao/iwant-you-you-want-me/iwant-you-you-want-me.component';
import { IWantYouSoBadComponent } from './pages/yinyang/mixcloud/tao/iwant-you-so-bad/iwant-you-so-bad.component';
import { DevelopingunKnownCodeComponent } from './pages/yinyang/mixcloud/tao/developingun-known-code/developingun-known-code.component';
// tslint:disable-next-line:max-line-length
import { IWantToShowYouSomethingComponent } from './pages/yinyang/mixcloud/tao/i-want-to-show-you-something/i-want-to-show-you-something.component';
// tslint:disable-next-line:max-line-length
import { ShareYourVisionsBeSymbolComponent } from './pages/yinyang/mixcloud/tao/share-your-visions-be-symbol/share-your-visions-be-symbol.component';
// tslint:disable-next-line:max-line-length
import { WeDontNeedSecurityButFunctionalityComponent } from './pages/yinyang/mixcloud/tao/we-dont-need-security-but-functionality/we-dont-need-security-but-functionality.component';
import { AllAboutUsComponent } from './pages/yinyang/soundcloud/magic/fantasy/all-about-us/all-about-us.component';
import { PsyJungleComponent } from './pages/yinyang/mixcloud/tao/psy-jungle/psy-jungle.component';
// tslint:disable-next-line:max-line-length
import { LetsDiveIntoTheWorldofJavaScriptComponent } from './pages/yinyang/mixcloud/tao/lets-dive-into-the-worldof-java-script/lets-dive-into-the-worldof-java-script.component';
import { TropicalIgnitionMasterComponent } from './pages/yinyang/mixcloud/tao/tropical-ignition-master/tropical-ignition-master.component';
import { WeWillSoonComponent } from './pages/yinyang/mixcloud/tao/we-will-soon/we-will-soon.component';
import { YouBlowMyMindComponent } from './pages/yinyang/mixcloud/tao/you-blow-my-mind/you-blow-my-mind.component';
import { MysticTheoriesCultComponent } from './pages/yinyang/mixcloud/tao/mystic-theories-cult/mystic-theories-cult.component';
// tslint:disable-next-line:max-line-length
import { CareUsAndWeWillCareYouComponent } from './pages/yinyang/mixcloud/tao/care-us-and-we-will-care-you/care-us-and-we-will-care-you.component';
import { WalkingRiverComponent } from './pages/yinyang/soundcloud/magic/fantasy/walking-river/walking-river.component';
import { LoveDieComponent } from './pages/yinyang/soundcloud/magic/fantasy/love-die/love-die.component';
import { PianoWordsComponent } from './pages/yinyang/soundcloud/magic/fantasy/piano-words/piano-words.component';
import { Press4MonkeyComponent } from './pages/yinyang/soundcloud/magic/fantasy/press4-monkey/press4-monkey.component';
import { NeedActivityComponent } from './pages/yinyang/soundcloud/magic/fantasy/need-activity/need-activity.component';
import { LastdaySacrificeComponent } from './pages/yinyang/soundcloud/magic/fantasy/lastday-sacrifice/lastday-sacrifice.component';
import { FastSignalsComponent } from './pages/yinyang/soundcloud/magic/fantasy/fast-signals/fast-signals.component';
import { BrainChiloutComponent } from './pages/yinyang/soundcloud/magic/fantasy/brain-chilout/brain-chilout.component';
// tslint:disable-next-line:max-line-length
import { DowhateveryoudobestMusicComponent } from './pages/yinyang/soundcloud/magic/fantasy/dowhateveryoudobest-music/dowhateveryoudobest-music.component';
import { ThatSexyFeelingComponent } from './pages/yinyang/soundcloud/magic/fantasy/that-sexy-feeling/that-sexy-feeling.component';
import { ByYourSideComponent } from './pages/yinyang/soundcloud/magic/fantasy/by-your-side/by-your-side.component';
import { DanceLikeWaterComponent } from './pages/yinyang/soundcloud/magic/fantasy/dance-like-water/dance-like-water.component';
import { ThisMyStyleComponent } from './pages/yinyang/soundcloud/magic/fantasy/this-my-style/this-my-style.component';
// tslint:disable-next-line:max-line-length
import { CraftingNewGenerationsComponent } from './pages/yinyang/soundcloud/magic/fantasy/crafting-new-generations/crafting-new-generations.component';
import { MakeitRightComponent } from './pages/yinyang/soundcloud/magic/fantasy/makeit-right/makeit-right.component';
// tslint:disable-next-line:max-line-length
import { NotAloneHolyShadowsComponent } from './pages/yinyang/soundcloud/magic/fantasy/not-alone-holy-shadows/not-alone-holy-shadows.component';
import { SetUsFreeComponent } from './pages/yinyang/soundcloud/magic/fantasy/set-us-free/set-us-free.component';
import { DeedsPath2ParadiseComponent } from './pages/yinyang/soundcloud/magic/fantasy/deeds-path2-paradise/deeds-path2-paradise.component';
// tslint:disable-next-line:max-line-length
import { LeadandWeWillFollowComponent } from './pages/yinyang/soundcloud/magic/fantasy/leadand-we-will-follow/leadand-we-will-follow.component';

// import { LoginComponent } from './logic/login/login.component';

import { FooterComponent } from './html/footer/footer.component';
import { HeaderComponent } from './html/header/header.component';

import { SetComponent } from './pages/yinyang/albums/es/tracks/es11/set/set.component';
import { NatureCarePathComponent } from './pages/license/wiki/path/nature-care-path/nature-care-path.component';
import { AnimalCarePathComponent } from './pages/license/wiki/path/animal-care-path/animal-care-path.component';
import { HumanCarePathComponent } from './pages/license/wiki/path/human-care-path/human-care-path.component';
import { BusinessCarePathComponent } from './pages/license/wiki/path/business-care-path/business-care-path.component';
import { FoodBusinessComponent } from './pages/license/wiki/path/business-care-path/food-business/food-business.component';
import { ProprietyOwnersComponent } from './pages/license/wiki/path/business-care-path/propriety-owners/propriety-owners.component';
import { ActivismComponent } from './pages/license/wiki/path/nature-care-path/activism/activism.component';
import { WoofingComponent } from './pages/license/wiki/path/nature-care-path/woofing/woofing.component';
import { MagicFireComponent } from './pages/yinyang/soundcloud/magic/magic-fire/magic-fire.component';


const appRoutes: Routes = [ //
  { path: '', redirectTo: '/home', pathMatch: 'full'},
//  { path: '**', component: ErrorComponent },
  { path: 'home', component: HomeComponent },
  { path: 'who', component: WhoComponent },
  { path: 'oscar/fm', component: OscarFmComponent },
  { path: 'about/me/and/you', component: WhoweareComponent },
  { path: 'you/are/the/wood/i/am/the/fire', component: WoodFireComponent },
  { path: 'magic/fire', component: MagicFireComponent },

  // { path: 'logmein', component: LoginComponent },
  { path: 'license', component: LicenseComponent }, // Eternal License
//  { path: 'articles', component: ArticlesComponent },
//  { path: 'water/vs/blood', component: WaterbloodComponent },
  { path: 'path/of/shields', component: PathshieldsComponent }, // path of shields ( image )
  { path: 'simplicity', component: SimplicityComponent }, // simplicity ( signals of time )
  { path: 'my/style', component: ThisMyStyleComponent },
// ######################################################################################################
//  { path: 'yinyang/mixcloud', component: yinyang/mixcloudComponent }, // yinyang/mixcloud
  { path: 'we/must/change/our/ways', component: ChangeComponent }, // Tribute - Severn Cullis Suzuki
  { path: 'lets/talk/about/love', component: LetsTalkAboutLoveComponent },
  { path: 'our/try/not/our/choice', component: OurTryNotOurChoiceComponent },
  { path: 'our/eternal/license', component: OurEternalLicenseComponent },
  { path: 'the/challenge', component: TheChallengeComponent },
  { path: 'are/you/evil', component: AreYouEvilComponent },
  { path: 'share/your/visions/be/symbol/of/our/experience', component: ShareYourVisionsBeSymbolComponent },
  { path: 'i/want/to/show/you/something', component: IWantToShowYouSomethingComponent },
  { path: 'developing/unknown/code', component: DevelopingunKnownCodeComponent },
  { path: 'prince/of/darkness', component: PrinceOfDarknessComponent },
  { path: 'magic/touch/in/the/shadows', component: MagicTouchInTheShadowsComponent },
  { path: 'lets/make/the/change/we/all/need', component: LetsMakeChangeWeAllNeedComponent },
  { path: 'i/am/music/the/perfect/bomb', component: IAmMusicPerfectBombComponent },
  { path: 'i/want/you/so/bad', component: IWantYouSoBadComponent },
  { path: 'psy/jungle', component: PsyJungleComponent },
  { path: 'you/blow/my/mind', component: YouBlowMyMindComponent },
  { path: 'we/will/soon', component: WeWillSoonComponent },
  { path: 'tropical/ignition/master', component: TropicalIgnitionMasterComponent },
  { path: 'lets/dive/into/the/world/of/javascript', component: LetsDiveIntoTheWorldofJavaScriptComponent },
  { path: 'it/is/all/about/us', component: AllAboutUsComponent },
  { path: 'we/dont/need/security/but/functionality', component: WeDontNeedSecurityButFunctionalityComponent },
  { path: 'i/want/you/you/want/me', component: IWantYouYouWantMeComponent },
  { path: 'ring/of/fire/yin', component: RfyinComponent }, // Tao Ring of Fire (Yin)
  { path: 'ring/of/fire/yang', component: RfyangComponent }, // Tao Ring of Fire (Yang)
  { path: 'eternal/fance/of/love/tao', component: DramonkComponent }, // Dragon & Monkey ( Hope )
  { path: 'firebase/solar/plexus', component: SolplexComponent }, // Firebase (Solar Plexus)
  { path: 'black/gold', component: MonkComponent }, // Monk (Black Gold)
  { path: 'dance/of/love', component: DanceOfLoveComponent },
  { path: 'care/us/and/we/will/care/you', component: CareUsAndWeWillCareYouComponent },
  { path: 'real/time', component: RtComponent }, // Real Time Shamanic Quest
  { path: 'mission/world/wide/target', component: MissionComponent }, // World wide Target
  { path: 'last/warning/tao/touch', component: TaoComponent }, // Last Warning
  { path: 'data/objects/and/functions', component: DataComponent }, // Data
// ######################################################################################################
//  { path: 'yinyang/soundcloud', component: yinyang/soundcloudComponent }, // yinyang/soundcloud
  { path: 'lets/make/business', component: BusinessComponent }, // lets make business ( magic of fantasy )
  { path: 'water/blood/path', component: WaterBloodImageComponent },
  { path: 'dont/take/us/seriously/we/are/having/fun', component: SeriouslyComponent },
  { path: 'fragments/you/need/forgotten/past', component: FragmentsComponent },
  { path: 'boom/cat', component: CatComponent }, // Black Cat & White Cat
  { path: 'mystic/portal', component: MysticPortalComponent },
  { path: 'mystic/theories/cult/to/the/self/identification', component: MysticTheoriesCultComponent },
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
  { path: 'emerge/internal/upgrade', component: Vot1Component }, // Emerge
  { path: 'water/horses/woman/free', component: Vot2Component }, // Water Horses - Woman Free
  { path: 'pain/vs/love', component: Vot3Component }, // Pain vs Love
  { path: 'black/birds/red/eyes', component: Vot4Component }, // Black Birds
  { path: 'burned/in/the/hands/of/wind', component: Vot5Component }, // burned in the hand of wind
  { path: 'summer/night/rock/and/roll', component: Vot6Component }, // Summer Night
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
  { path: 'future/cosmic/atraction', component: Skd13Component },
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
  { path: 'show/us/some/respect/warning', component: Et4Component },
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
  { path: 'tool/kit', component: Es11Component },
  { path: 'social', component: SetComponent },
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
  { path: 'wiki/core', component: CoreconceptsComponent },
  { path: 'wiki/idea', component: IdeaComponent },
  { path: 'wiki/challenge', component: ChallengeComponent },
  { path: 'wiki/path', component: PathComponent },
  { path: 'wiki/developers', component: DevelopersComponent },
  { path: 'wiki/socialmedia', component: SocialmediaComponent },
  { path: 'walking/river', component: WalkingRiverComponent },
  { path: 'love/or/die', component: LoveDieComponent },
  { path: 'piano/words', component: PianoWordsComponent },
  { path: 'press/for/monkey', component: Press4MonkeyComponent },
  { path: 'need/activity', component: NeedActivityComponent },
  { path: 'last/days/of/sacrifice', component: LastdaySacrificeComponent },
  { path: 'fast/signals', component: FastSignalsComponent },
  { path: 'brain/chilout', component: BrainChiloutComponent },
  { path: 'do/music', component: DowhateveryoudobestMusicComponent },
  { path: 'sexy/feeling', component: ThatSexyFeelingComponent },
  { path: 'by/your/side', component: ByYourSideComponent },
  { path: 'dance/like/water', component: DanceLikeWaterComponent },
  { path: 'crafting/new/generations', component: CraftingNewGenerationsComponent },
  { path: 'make/it/right', component: MakeitRightComponent },
  { path: 'not/alone/holy/shadows', component: NotAloneHolyShadowsComponent },
  { path: 'set/us/free', component: SetUsFreeComponent },
  { path: 'deeds', component: DeedsPath2ParadiseComponent },
  { path: 'lead/the/way', component: LeadandWeWillFollowComponent },
  // WIKI PAGES
  { path: 'nature/care/path', component: NatureCarePathComponent },
  { path: 'animal/care/path', component: AnimalCarePathComponent },
  { path: 'human/care/path', component: HumanCarePathComponent },
  { path: 'business/care/path', component: BusinessCarePathComponent },
  { path: 'business/care/path/food', component: FoodBusinessComponent },
  { path: 'business/care/path/proprieties', component: ProprietyOwnersComponent },
  { path: 'activism', component: ActivismComponent },
  { path: 'woofing', component: WoofingComponent },



//  { path: 'login', component: LoginComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LicenseComponent,
    WhoComponent,
    WikiComponent,
    DevelopersComponent,
    SocialmediaComponent,
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
//    yinyang/soundcloudComponent, // yinyang/soundcloud
    BusinessComponent,
// ######################################################################################################
//    yinyang/mixcloudComponent, // yinyang/mixcloud
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
    WaterBloodImageComponent,
    OscarFmComponent,
    MysticPortalComponent,
    WoodFireComponent,
    FragmentsComponent,
    SimplicityComponent,
    DanceOfLoveComponent,
    LetsTalkAboutLoveComponent,
    IAmMusicPerfectBombComponent,
    LetsMakeChangeWeAllNeedComponent,
    MagicTouchInTheShadowsComponent,
    OurTryNotOurChoiceComponent,
    OurEternalLicenseComponent,
    TheChallengeComponent,
    PrinceOfDarknessComponent,
    AreYouEvilComponent,
    IWantYouYouWantMeComponent,
    IWantYouSoBadComponent,
    DevelopingunKnownCodeComponent,
    IWantToShowYouSomethingComponent,
    ShareYourVisionsBeSymbolComponent,
    WeDontNeedSecurityButFunctionalityComponent,
    AllAboutUsComponent,
    PsyJungleComponent,
    LetsDiveIntoTheWorldofJavaScriptComponent,
    TropicalIgnitionMasterComponent,
    WeWillSoonComponent,
    YouBlowMyMindComponent,
    MysticTheoriesCultComponent,
    CareUsAndWeWillCareYouComponent,
    WalkingRiverComponent,
    LoveDieComponent,
    PianoWordsComponent,
    Press4MonkeyComponent,
    NeedActivityComponent,
    LastdaySacrificeComponent,
    FastSignalsComponent,
    BrainChiloutComponent,
    DowhateveryoudobestMusicComponent,
    ThatSexyFeelingComponent,
    ByYourSideComponent,
    DanceLikeWaterComponent,
    ThisMyStyleComponent,
    CraftingNewGenerationsComponent,
    MakeitRightComponent,
    NotAloneHolyShadowsComponent,
    SetUsFreeComponent,
    DeedsPath2ParadiseComponent,
    LeadandWeWillFollowComponent,
  //  LoginComponent,
    FooterComponent,
    HeaderComponent,
    SetComponent,
    NatureCarePathComponent,
    AnimalCarePathComponent,
    HumanCarePathComponent,
    BusinessCarePathComponent,
    FoodBusinessComponent,
    ProprietyOwnersComponent,
    ActivismComponent,
    WoofingComponent,
    MagicFireComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
 //   AngularFireModule.initializeApp(environment.firebase),
   // AngularFirestoreModule, // imports firebase/firestore, only needed for database features
   // AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
 //  AngularFireStorageModule, // imports firebase/storage only needed for storage features
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [Location,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
      useValue: '<%= APP_BASE %>'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
