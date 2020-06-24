import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import {
    CountryEffects,
} from './effects';

const Effects = [
    CountryEffects,
];

@NgModule({
    imports: [
        EffectsModule.forRoot(Effects)
    ],
    exports: [EffectsModule]
})
export class AppEffectsModule { }
