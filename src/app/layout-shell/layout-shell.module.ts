import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutShellRouting } from './layout-shell.routing';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { WorkspaceModule } from '../workspace/workspace.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule, MatTreeModule, MatSlideToggleModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, SidenavComponent, LayoutComponent],
  imports: [
    CommonModule,
    LayoutShellRouting,
    MatToolbarModule,
    MatIconModule,
    WorkspaceModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatTreeModule,
    MatSlideToggleModule,
    MatButtonModule
  ]
})
export class LayoutShellModule { }
