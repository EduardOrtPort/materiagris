import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index/index.component';
import { BuyComponent } from './pages/buy/buy.component';
import { SellComponent } from './pages/sell/sell.component';
import { GridComponent } from './pages/listing/grid-view/grid/grid.component';
import { GridSidebarComponent } from './pages/listing/grid-view/grid-sidebar/grid-sidebar.component';
import { GridMapComponent } from './pages/listing/grid-view/grid-map/grid-map.component';
import { ListComponent } from './pages/listing/list-view/list/list.component';
import { ListSidebarComponent } from './pages/listing/list-view/list-sidebar/list-sidebar.component';
import { ListMapComponent } from './pages/listing/list-view/list-map/list-map.component';
import { PropertyDetailComponent } from './pages/listing/property-detail/property-detail/property-detail.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ServicesComponent } from './pages/services/services.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { AuthLoginComponent } from './pages/auth/auth-login/auth-login.component';
import { AuthSignupComponent } from './pages/auth/auth-signup/auth-signup.component';
import { AuthRePasswordComponent } from './pages/auth/auth-re-password/auth-re-password.component';
import { TermsComponent } from './pages/utility/terms/terms.component';
import { TeamComponent } from './pages/utility/team/team.component';
import { BlogsComponent } from './pages/blog/blogs/blogs.component';
import { BlogSidebarComponent } from './pages/blog/blog-sidebar/blog-sidebar.component';
import { BlogDetailComponent } from './pages/blog/blog-detail/blog-detail.component';
import { ComingsoonComponent } from './pages/special/comingsoon/comingsoon.component';
import { MaintenceComponent } from './pages/special/maintence/maintence.component';
import { ErrorComponent } from './pages/special/error/error.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SoftwareFactoryComponent } from './pages/services/software-factory/software-factory.component';
import { SoftwareQualityComponent } from './pages/services/software-quality/software-quality.component';
import { ConsultancyandServiceComponent } from './pages/services/consultancy-services/consultancy-services.component';
import { AppsFactoryComponent } from './pages/services/apps-service/apps-factory.component';
import { DevelopeComponent } from './pages/services/develope/develope.component';
import { TISupportComponent } from './pages/services/ti-support/ti-support.component';

export const routes: Routes = [
    {'path':'', component:IndexComponent},
    {'path':'nosotros', component:AboutusComponent},
    {'path':'servicios', component:ServicesComponent},
    {'path':'nuestro-equipo', component:TeamComponent},
    {'path':'fabrica-de-software', component:SoftwareFactoryComponent},
    {'path':'calidad-de-software', component:SoftwareQualityComponent},
    {'path':'consultoria-y-servicios-profesionales', component:ConsultancyandServiceComponent},
    {'path':'apps', component:AppsFactoryComponent},
    {'path':'develope', component:DevelopeComponent},
    {'path':'soporte-ti', component:TISupportComponent},

    {'path':'buy', component:BuyComponent},
    {'path':'sell', component:SellComponent},
    {'path':'grid', component:GridComponent},
    {'path':'grid-sidebar', component:GridSidebarComponent},
    {'path':'grid-map', component:GridMapComponent},
    {'path':'list', component:ListComponent},
    {'path':'list-sidebar', component:ListSidebarComponent},
    {'path':'list-map', component:ListMapComponent},
    {'path':'property-detail', component:PropertyDetailComponent},
    {'path':'pricing', component:PricingComponent},
    {'path':'faqs', component:FaqsComponent},
    {'path':'auth-login', component:AuthLoginComponent},
    {'path':'auth-signup', component:AuthSignupComponent},
    {'path':'auth-re-password', component:AuthRePasswordComponent},
    {'path':'terms', component:TermsComponent},
    {'path': 'blogs', component:BlogsComponent},
    {'path':'blog-sidebar', component:BlogSidebarComponent},
    {'path':'blog-detail', component:BlogDetailComponent},
    {'path':'comingsoon', component:ComingsoonComponent},
    {'path':'maintenance', component:MaintenceComponent},
    {'path':'404', component:ErrorComponent},
    {'path':'contact', component:ContactComponent}
];
