import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SalesOverviewComponent } from './sales-overview/sales-overview.component';
import { ChartModule } from 'angular-highcharts';
import { HarvestiveComponent } from './harvestive/harvestive.component';
import { AboutUsiComponent } from './about-usi/about-usi.component';
import { ChartsComponent } from './charts/charts.component';
import { ExpertsComponent } from './experts/experts.component';
import {MatTabsModule} from '@angular/material/tabs';
// import { MyActivitiesComponent } from './myactivities/myactivities.component';

// import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService, DragAndDropService, ResizeService, WorkHoursModel} from '@syncfusion/ej2-angular-schedule';
import { NewsComponent } from './news/news.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MyActivitiesComponent } from './myactivities/myactivities.component';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';
// import { SolutionsummaryComponent } from './solutionsummary/solutionsummary.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { SolutionsummaryComponent } from './solutionsummary/solutionsummary.component';
import { SolutionsSummaryComponent } from './solutions-summary/solutions-summary.component';
import { HttpClientModule } from '@angular/common/http';
import { UserLoginComponent } from './user-login/user-login.component';
// import { UserComponent } from './model/user/user.component';
import { FormsModule } from '@angular/forms';
import { MycustomerComponent } from './mycustomer/mycustomer.component';
// import { SolutionsummaryComponent } from './solutionsummary/solutionsummary.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SalesOverviewComponent,
    HarvestiveComponent,
    AboutUsiComponent,
    ChartsComponent,
    ExpertsComponent,
    MyActivitiesComponent,
    MyAppointmentsComponent,
    NewsComponent,
    MainPageComponent,
    // SolutionsummaryComponent,
    SolutionsSummaryComponent,
    UserLoginComponent,
    MycustomerComponent,
    
    // SolutionsummaryComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    ChartModule,
    MatTabsModule,
    ScheduleModule,
     RecurrenceEditorModule,
     MatSlideToggleModule,
     HttpClientModule,
     FormsModule
    
    
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService, DragAndDropService, ResizeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
