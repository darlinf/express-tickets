import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TicketManagementComponent } from './ticket-management/ticket-management.component';
import { tick } from '@angular/core/testing';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { PayComponent } from './pay/pay.component';
import { PayResurtComponent } from './pay-resurt/pay-resurt.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { BillingComponent } from './billing/billing.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'Iniciar-seccion', component: LoginComponent },
    { path: 'Registrase', component: RegisterComponent },
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'NewAppointmentComponent',
        component:  HomeComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.User] }
    },
    {
        path: 'pagar',
        component:  PayComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.User] }
    },
    {
        path: 'pagado',
        component:  PayResurtComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.User] }
    },
    {
        path: 'editarPerfil',
        component:  UserEditComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.User] }
    },
    {
        path: 'editarTicket/:id',
        component:  EditTicketComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.User] }
    },
    {
        path: 'gestion',
        component:  TicketManagementComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    }, 
    {
        path: 'facturacion',
        component:  BillingComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.User] }
    }, 
    {
        path: 'ReservarTicket',
        canActivate: [AuthGuard],
        data: { roles: [Role.User] },
        component: BookTicketsComponent
    },
    {
        path: 'recuperarContrasena/:token',
        component: RecoveryPasswordComponent
    },
    {
        path: 'recuperarContrasena',
        component: RecoveryPasswordComponent
    },
    {
      path: 'registrarse',
      component: RegisterComponent
    },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
